import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  withAuthenticator,
} from '@aws-amplify/ui-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SignOutButton} from './components/SignOutComponent.tsx';

const Main: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SignOutButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    flex: 1,
    padding: 20,
    alignSelf: 'center',
  },
});

export default withAuthenticator(Main);
