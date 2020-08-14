import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon name={icon} size={20} color={colors.medium} style={styles.icon} />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
  },
  input: {
    width: '100%',
    fontSize: 18,
    textAlign: 'left',

    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    width: '100%',
  },
});

export default AppTextInput;
