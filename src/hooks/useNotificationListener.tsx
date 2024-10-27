import { useEffect } from 'react';
import {
  onNotificationReceivedInForeground,
  onNotificationReceivedInBackground,
  onNotificationOpened,
  getLaunchNotification,
} from 'aws-amplify/push-notifications';
import {Alert} from 'react-native';

export const useNotificationListener = () => {
  useEffect(() => {
    const foregroundNotificationHandler = (notification: any) => {
      console.log('Notification received in foreground:', notification);
      Alert.alert('Foreground Message', JSON.stringify(notification));
    };

    onNotificationReceivedInForeground(foregroundNotificationHandler);

    const backgroundNotificationHandler = async (notification: any) => {
      console.log('Notification received in background:', notification);
    };

    onNotificationReceivedInBackground(backgroundNotificationHandler);

    const notificationOpenedHandler = (notification: any) => {
      console.log('Notification opened:', notification);
    };

    onNotificationOpened(notificationOpenedHandler);

    const checkLaunchNotification = async () => {
      const launchNotification = await getLaunchNotification();
      if (launchNotification) {
        console.log('App launched from terminated state by notification:', launchNotification);
      }
    };

    checkLaunchNotification();

  }, []);
};
