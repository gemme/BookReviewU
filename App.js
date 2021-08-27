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
  TextInput
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import headerStyle from './HeaderStyle';
import {useState} from 'react';

const books = [
  { title: 'La insoportable levedad del ser', author: 'Milan Kundera' },
  { title: 'Azteca', author: 'Gary Jennings' },
  { title: 'El perfume', author: 'Patrick Suskind' }
];

const App = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={headerStyle.header}>{'Book Review'}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'Search'}
        onChangeText={((text) => {
          setSearchText(text);
        })}
      />
      {
        books
        .filter(book => {
          return (
            book.title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1 ||
            book.author.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1
            )
        })
        .map((book, index) => {
          return (
            <View style={[
                styles.row,
                {
                  backgroundColor: index % 2 ? 'white' : '#F3F3F7'
                }
              ]}>
              <View style={styles.edges}>
                <Text>{index + 1}</Text>
              </View>
              <View style={styles.titleBook}>
                <Text>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
              </View>
              <View style={styles.edges}>
                <Text >{'Info'}</Text>
              </View>
            </View>
          )
        })
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  edges: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleBook: {
    flex: 8,
    flexDirection: 'column'
  },
  author: { color: 'grey' },
  textInput: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5F5'
  }
});

export default App;
