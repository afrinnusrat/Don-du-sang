import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {StyleSheet, SafeAreaView, View} from 'react-native';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: getStatusBarHeight(),
    flex: 1,
  },
});

export default Screen;
