import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View>
        <TouchableOpacity onPress={this.props.navigation.navigate('Screen5')}>
            <Text>5th STD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.navigation.navigate('Screen6')}>
            <Text>6th STD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.navigation.navigate('Screen7')}>
            <Text>7th STD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.navigation.navigate('Screen8')}>
            <Text>8th STD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.navigation.navigate('Screen9')}>
            <Text>9th STD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.navigation.navigate('Screen10')}>
            <Text>10th STD</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
