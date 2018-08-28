import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Fido from './components/Fido'
import Oreo from './components/Oreo'
import Scooter from './components/Scooter'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Fullstack Puppies!</Text>
      <Button title='View Puppies!' onPress={() => navigation.navigate('Fido')} />
    </View>
  )
}

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home Page'
    }
  },
  Fido: {
    screen: Fido,
    navigationOptions: {
      headerTitle: 'Fido'
    }
  },
  Oreo: {
    screen: Oreo,
    navigationOptions: {
      headerTitle: 'Oreo'
    }
  },
  Scooter: {
    screen: Scooter,
    navigationOptions: {
      headerTitle: 'Scooter'
    }
  },
})

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
