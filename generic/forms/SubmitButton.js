import React from 'react';
import {} from 'react-native';
import {useFormikContext} from 'formik';

import CustomButton from '../CustomButton';

function SubmitButton({title, color}) {
  const {handleSubmit} = useFormikContext();
  return <CustomButton title={title} onPress={handleSubmit} color={color} />;
}

export default SubmitButton;
