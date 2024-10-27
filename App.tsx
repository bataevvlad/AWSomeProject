import React from 'react';
import {usePushNotificationPermissions} from './src/hooks/usePermissions.tsx';
import {useToken} from './src/hooks/useToken.tsx';
import Main from './src/Main.tsx';
import {useNotificationListener} from './src/hooks/useNotificationListener.tsx';

const App = () => {
  usePushNotificationPermissions();
  useToken();
  useNotificationListener();

  return <Main />;
};

export default App;
