/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const books = [
  {title: 'La insoportable levedad del ser', author: 'Milan Kunder'},
  {title: 'Azteca', author: 'Gary Jennings'},
  {title: 'El perfume', author: 'Patrick Suskind'}
];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <Text style={{
        textAlign: 'center',
        fontSize: 40,
        color: '#f44242',
        padding: 50,
        fontWeight: '300'
      }}>{'Book Review'}</Text>
      {
        books.map((book, index) => {
          return (
            <View style={{
              flexDirection: 'row'
            }}>
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text>{index + 1}</Text>
              </View>
              <View style={{
                flex: 8,
                flexDirection: 'column'
              }}>
                <Text>{book.title}</Text>
                <Text style={{color: 'grey'}}>{book.author}</Text>
              </View>
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{color: 'grey'}}>{'Info'}</Text>
              </View>
            </View>
          )
        })
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
