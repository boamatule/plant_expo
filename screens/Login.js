import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ActivityIndicator,  Keyboard } from 'react-native';
import { Button, Block, Text, Input } from '../components';
import { theme } from '../constants';

class Login extends React.Component {

  // static navigationOptions = {
  //   headerStyle: {
  //     height: theme.sizes.base * 4,
  //     backgroundColor: theme.colors.white, // or 'white
  //     borderBottomColor: "transparent",
  //     elevation: 0, // for android only
  //   },
  //   headerBackImage: <Image source={require('../assets/icons/back.png')} />,
  //   headerBackTitle: null,
  //   headerLeftContainerStyle: {
  //     alignItems: 'center',
  //     marginLeft: theme.sizes.base,    //for iOS multiply the value by 2
  //     paddingRight: theme.sizes.base,
  //   },
  //   headerRightContainerStyle: {
  //     alignItems: 'center',
  //     paddingRight: theme.sizes.base,
  //   },
  // };


  state = {
    email: VALID_EMAIL = "kriss@kriss.com",
    password: VALID_PASSWORD = "12345",
    errors: [],
    loading: false,
  }

  // const VALID_EMAIL = "kriss@kriss.com",
  // const VALID_PASSWORD = "12345",


  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    setTimeout(() => { 

      if (email !== VALID_EMAIL) {
        errors.push('email');
      }
      if (password !== VALID_PASSWORD) {
        errors.push('password');
      }
  
      this.setState({ errors, loading: false });
      if (!errors.length) {
        navigation.navigate("Browse");
      }
    }, 2000);
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

   return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>Login</Text>
          <Block middle>
            <Input 
              label="Email"
              errors={hasErrors('email')}
              style = {[styles.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email : text })}
            />
            <Input 
              secure
              label="Password"
              errors={hasErrors('password')}
              style = {[styles.input, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password : text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>

             {loading ?
             <ActivityIndicator size="small" color="white" /> :
               <Text bold white center>Login</Text>
              }
            </Button>

            <Button onPress={() => navigation.navigate('Forgot')}>
              <Text gray caption center style={{ textDecorationLine: 'underline' }}>
                Forgot your password?
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    )
  }
 }

export default Login;

const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },

});