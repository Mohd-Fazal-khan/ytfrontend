import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Header = () => {
  return (
      <LinearGradient
        colors={['#6a11cb', '#2575fc']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerText}>YouTube App</Text>
      </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 120,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom:20,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
