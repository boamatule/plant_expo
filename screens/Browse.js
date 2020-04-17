import React from 'react';
import { StyleSheet } from 'react-native';
import { theme } from '../constants';
import { Button, Text, Block } from '../components';

class Browse extends React.Component {
  render() {
    return (
     <Block flex={false} row center space="between" style={styles.header}>
      <Block middle>
        <Text h1 bold>Browse</Text>
        <Button>
          
        </Button>
      </Block>
     </Block>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
});

export default Browse