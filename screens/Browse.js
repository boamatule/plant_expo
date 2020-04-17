import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { theme, mocks } from '../constants';
import { Button, Text, Block } from '../components';

class Browse extends React.Component {  
  render() {
    const { profile } = this.props
    return (
     <Block flex={false} row center space="between" style={styles.header}>
    
        <Text h1 bold>Browse</Text>
        <Button>
          <Image source={profile.avatar} style={styles.avatar} />
        </Button>
     </Block>
    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
    backgroundColor: theme.colors.grey,
  },
});

export default Browse