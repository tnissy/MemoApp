/* eslint-disable no-use-before-define */
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2020/1/2</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト
          しょたいやｆｄ
          React NativeとExpoを
          使ったモバイルアプリ開発のオールインワン講座。UIデザイン・開発
          ・リリースまで、アプリ開発の全行程を一気に身につけましょう！＜R
          eact Hooks 対応 / Git も学べる＞
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }}>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467fd3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 14,
  },
});
