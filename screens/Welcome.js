import React, {Component }from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions  } from 'react-native';
import { Button, Block, Text } from '../components';
import { theme } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';

class Welcome extends Component {
   static navigationOptions = {
    header : null
  }
  
  state = {

  }

    // const { width, height } = Dimensions.get('window'); 

    renderIllustrations() {
      const { illustrations } = this.props
        return(
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            data={illustrations}
            extraDate={this.state}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item }) => (
              <Image
                source={item.source}
                resizeMode="contain"
            />
        )}
      />
    )
  }
  
  renderSteps() {
    return(
      <Block>
        <Text>* * *</Text>
      </Block>
    )
  }
  
  render() {
    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text h1 center bold>
            Your Home.
            <Text h1 primary> Greener.</Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            Enjoy the experience.
          </Text>
        </Block>
      

        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button onPress={() => this.props.navigation.navigate('Login')}>
            <Text center semibold white>Login</Text>
          </Button>
          <Button shadow onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text center semibold>Signup</Text>
          </Button>
          <Button onPress={() => {}}>
            <Text center caption gray>Terms of service</Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require('../assets/images/illustration_1.png') },
    { id: 2, source: require('../assets/images/illustration_2.png') },
    { id: 3, source: require('../assets/images/illustration_3.png') },
  ],
};
export default Welcome;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });