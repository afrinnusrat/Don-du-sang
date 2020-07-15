/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    import { 

class LoginForm extends Component {
	render() {
		return (
			<View>
				<Field
					name="login"
					label="Identifiant"
					textContentType="username"
					autoCorrect={false}
					autoCapitalize="none"
					component={TextInput}
					icon="person"
				/>
				<Field
					name="password"
					label="Mot de passe"
					textContentType="password"
					secureTextEntry={true}
					autoCorrect={false}
					autoCapitalize="none"
					component={TextInput}
					icon="key"
				/>
				<Button full warning rounded onPress={this.props.handleSubmit}>
					<Text>Log in</Text>
				</Button>
			</View>
		);
	}
}

export default reduxForm({
	form: "login",
})(LoginForm);
          
