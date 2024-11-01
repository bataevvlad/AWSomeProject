import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import { initializePushNotifications } from 'aws-amplify/push-notifications';

Amplify.configure(amplifyconfig);
initializePushNotifications();

AppRegistry.registerComponent(appName, () => App);
