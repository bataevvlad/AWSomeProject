import { useEffect, useState } from 'react';
import {
  onTokenReceived,
  OnTokenReceivedInput,
  OnTokenReceivedOutput,
} from 'aws-amplify/push-notifications';

export const useToken = () => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const myTokenReceivedHandler: OnTokenReceivedInput = (receivedToken) => {
      setToken(receivedToken);
      console.log('Push Notification Token:', receivedToken);
    };

    const listener: OnTokenReceivedOutput = onTokenReceived(myTokenReceivedHandler);

    return () => {
      listener.remove();
    };
  }, []);

  return token;
};
