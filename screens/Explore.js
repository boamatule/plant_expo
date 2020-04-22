import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { theme, mocks } from '../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



import { Button, Block, Text, Input } from '../components';


export default class Explore extends React.Component {
  state = { 
    searchString: null,
  }

  renderSearch() {
    const {searchString} = this.state
      return(
        <Block middle flex={0.6}>
          <Input 
            placeholder="Search"
            placeholderTextColor={theme.colors.gray}
            style={styles.searchInput}
            onChangeText={text => this.setState({searchString : text})}
            value={searchString}
            rightStyle={styles.searchRight}
            rightLabel={
              <FontAwesome
              name="search"
              size={theme.sizes.base / 1.6}
              color={theme.colors.gray2}
              style={styles.searchIcon}
            />
          }
        />
      </Block>
    )
  }

  renderExplore() {
    return (
      <Block>
        <Text>Explore Section</Text>
      </Block>
    )
  }

    renderFooter() {
      return(
        <Block style={styles.footer}>
          <Text>Footer section</Text>
        </Block>
    )
  }


  render() {
    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Explore</Text>
          {this.renderSearch()}
        </Block>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
          {this.renderExplore()}
        </ScrollView>

        {this.renderFooter()}
      </Block>
    );
  }  
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2
  },
  searchInput: {
    fontSize: theme.sizes.caption,
    height: theme.sizes.base * 2,
    backgroundColor: 'rgba(142, 142, 147, 0.06)',
    borderColor: 'rgba(142, 142, 147, 0.06)',
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5,
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: 'transparent'
  },
  searchIcon: {
    position: 'absolute',
    right: theme.sizes.base / 1.333,
    top: theme.sizes.base / 1.6,
  },
  explore: {
    marginHorizontal: theme.sizes.padding * 1.25,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.1,
    width,
    paddingBottom: theme.sizes.base * 4,
  }
})