import React from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { theme, mocks } from '../constants';
import { Button, Text, Block, Card, Badge } from '../components';
// import { styles } from '../components/Divider';
;

class Product extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>  
        <Block style={styles.product}>
          <Text h2 bold>{product.name}</Text>
          <Text gray light height={22}>{product.description}</Text>
        </Block>
      </ScrollView>
    )
  }
}

Product.defaultProps = {
  product: mocks.products[0],
}

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding,
  }
})
export default Product