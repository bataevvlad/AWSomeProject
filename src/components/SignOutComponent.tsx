import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import {
  useAuthenticator,
} from '@aws-amplify/ui-react-native';

const userSelector = (context: {user: any}) => [context.user];

export const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        Hello, {user.username}! Click here to sign out!
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: {
    color: 'white',
    padding: 16,
    fontSize: 18,
  },
});
