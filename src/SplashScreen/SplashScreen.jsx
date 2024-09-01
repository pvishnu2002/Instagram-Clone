import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

const { width, height } = Dimensions.get('window');

export default class SplashScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      // Use this.props.navigation to navigate
      // eslint-disable-next-line react/prop-types
      this.props.navigation.navigate("Login");
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.img} />
        <View style={styles.bottomContent}>
          <Text style={styles.fromText}>from</Text>
          <Image source={require('../assets/metaLogo.png')} style={styles.metaImg} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
  },
  img: {
    width: width * 0.6, 
    height: height * 0.6, 
    resizeMode: 'contain',
  },
  metaImg: {
    width: width * 0.3, 
    height: width * 0.1,
    resizeMode: 'contain',
    marginTop: 5,
  },
  bottomContent: {
    position: 'absolute',
    bottom: 20, 
    alignItems: 'center',
  },
  fromText: {
    fontSize: 16, 
    color: '#888', 
    marginBottom: 5,
  },
});
