import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './styles';
export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaview}> 
        <Text>HomeScreen</Text>
      </SafeAreaView>
    )
  }
}

export default HomeScreen