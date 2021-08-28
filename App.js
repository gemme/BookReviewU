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
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import headerStyle from 'styles/HeaderStyle';
import {useState, useEffect} from 'react';
import Header from 'components/Header';
import BookRow from 'components/BookRow';
import { API_URL } from './src/constants';
import BookImage from 'assets/book.png';
const App = () => {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);

  // componentDidMount
  useEffect(() => {
    fetch(`${API_URL}Books`)
    .then(response => response.json())
    .then(data => {
      setBooks(data);
    })
    .catch(error => { console.log(error); });
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        alignItems: 'center',
        marginTop: 30
      }}>
        <Image
          source={BookImage}
          style={{
            width: 50,
            height: 50
          }}
        />
      </View>
      <Header />
      <TextInput
        style={styles.textInput}
        placeholder={'Search'}
        onChangeText={((text) => {
          setSearchText(text);
        })}
      />
      <FlatList
        data={
          books
          .filter(book => {
            return (
              book.title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1 ||
              book.author.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1
              )
          })
        }
        renderItem={
          ({item, index}) => {
            return <BookRow book={item} index={index}/>
          }
        }
        keyExtractor={(book) => book.title }
        />
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



/* {
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
} */