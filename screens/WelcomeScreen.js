import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import colors from '../config/colors';
import CustomButton from '../generic/CustomButton';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/blood_donation.png')}
          style={styles.logo}
        />
        <Text
          style={[
            styles.text,
            {color: 'red', fontWeight: 'bold', fontSize: 25},
          ]}>
          التبرع بالدم
        </Text>
        <Text style={styles.text}>
          وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          title="تسجيل الدخول"
          color={colors.secondary}
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          title="إنشاء حساب"
          color={colors.primary}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
    marginBottom: 20,
  },
  text: {
    marginTop: 20,
    color: colors.black,
    fontSize: 18,
    paddingVertical: 10,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
export default WelcomeScreen;
