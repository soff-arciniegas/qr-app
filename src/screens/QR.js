import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function QRScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/QR.jpeg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Escanea tu QR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#000000',
  },
});