import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { theme, mocks } from '../constants';

import { Button, Block, Text} from '../components';
export default class Browse extends React.Component {
  render(){
    return (
      <Block>
        <Text>Settings</Text>
      </Block>
    );
  }   

}
Browse.defaultProps = {
    profile : mocks.profile,
}

const styles = StyleSheet.create({

});