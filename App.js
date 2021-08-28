/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import BookInfo from 'components/BookInfo';
import BookList from 'components/BookList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
 return(
   <NavigationContainer>
     <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        title: 'Book Info',
        headerStyle:{
          backgroundColor: 'black',
          color: 'white'
        },
        headerTintColor: 'white',
        headerTitleColor: {
          color: 'white'
        },
        headerShown: true
      }}
     >
       <Stack.Screen name='Home' component={BookList}/>
       <Stack.Screen name='Info' component={BookInfo}/>
     </Stack.Navigator>
   </NavigationContainer>
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