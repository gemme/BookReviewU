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
  {title: '', author: ''},
  {title: '', author: ''},
  {title: '', author: ''}
];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={{
        textAlign: 'center',
        fontSize: 40,
        color: '#f44242',
        padding: 50,
        fontWeight: '300'
      }}>{'Book Review'}</Text>
      <Text>{'La insoportoble levedad del ser'}</Text>
      <Text style={{color: 'grey'}}>{'Milan Kundera'}</Text>
      <Text >{'El perfume'}</Text>
      <Text style={{color: 'grey'}}>{'Patrick Suskind'}</Text>
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
