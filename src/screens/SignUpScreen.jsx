/* eslint-disable no-use-before-define */
import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';

import Appbar from '../components/AppBar';
import Button from '../components/Button';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Appbar />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput value="Email Address" style={styles.input} />
        <TextInput value="Password" style={styles.input} />
        <Button label="mamata" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registerd?</Text>
          <Text style={styles.footerLink}>Sign up here!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
});
