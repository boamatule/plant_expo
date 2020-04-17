import React from 'react';
import { Alert, ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Block, Input, Text } from '../components';
import { theme } from '../constants';


export default class Welcome extends React.Component {
 static navigationOptions = {
   header : null
 }

 state = {
   email: null,
   username: null,
   password: null,
   error: [],
   loading: false,
 }
 render(){
   return (
    <KeyboardAvoidingView style={styles.signup} behavior="padding">
       <Block padding={[0, theme.sizes.base * 2]} >
        <Text h1 bold>Sign Up</Text>
        <Block middle>
        <Input 
          email
          label="Email"
          style={[styles.input]}
          defaultValue={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <Input
          label="Username"
          style={[styles.input]}
          defaultValue={this.state.username}
          onChangeText={text => this.setState({ username: text })}
        />
        <Input
          secure
          label="Password"
          style={[styles.input]}
          defaultValue={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        </Block>
     </Block>
    </KeyboardAvoidingView>
    
   );
 }
 }
const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  }
});