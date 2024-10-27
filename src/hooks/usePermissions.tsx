import { useState, useEffect } from 'react';
import {
  getPermissionStatus,
  requestPermissions,
} from 'aws-amplify/push-notifications';

export type PushNotificationPermissionStatus =
  | 'denied'
  | 'granted'
  | 'shouldRequest'
  | 'shouldExplainThenRequest'
  | undefined;

export const usePushNotificationPermissions = () => {
  const [status, setStatus] = useState<PushNotificationPermissionStatus>(undefined);

  const handlePermissions = async () => {
    try {
      const permissionStatus = await getPermissionStatus();

      switch (permissionStatus) {
        case 'granted':
          setStatus('granted');
          break;

        case 'denied':
          setStatus('denied');
          break;

        case 'shouldRequest':
          setStatus('shouldRequest');
          await requestPermissions();
          break;

        case 'shouldExplainThenRequest':
          setStatus('shouldExplainThenRequest');
          await requestPermissions();
          break;

        default:
          setStatus(undefined);
      }
    } catch (error) {
      console.error('Error handling push notification permissions:', error);
      setStatus(undefined);
    }
  };

  useEffect(() => {
    handlePermissions();
  }, []);

  return status;
};
