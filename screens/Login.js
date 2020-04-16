import React from 'react';
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
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
    email: '',
    password: '',
  }

  // const VALID_EMAIL = "kriss@kriss.com",
  // const VALID_PASSWORD = "12345",

  render(){
   return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>Login</Text>
          <Block middle>
            <Input 
              label="Email"
              style = {styles.input}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({email : text})}
            />
            <Input 
              // secure
              label="Password"
              style = {styles.input}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({password : text})}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              <Text bold white center>Login</Text>
            </Button>

            <Button onPress={() => {}}>
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

});