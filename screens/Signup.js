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
     <Block middle>
       <Text>Sign Up</Text>
     </Block>
    
   );
 }
 }
const styles = StyleSheet.create({
});