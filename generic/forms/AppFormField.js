import React, {Component} from 'react';
import {} from 'react-native';
import {useFormikContext} from 'formik';

import CustomTextInput from '../CustomTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, ...otherProps}) {
  const {handleChange, errors, touched, setFieldTouched} = useFormikContext();
  return (
    <>
      <CustomTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
