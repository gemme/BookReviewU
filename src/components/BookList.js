import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import {useState, useEffect} from 'react';
import Header from 'components/Header';
import BookRow from 'components/BookRow';
import { API_URL } from '../constants';
import BookImage from 'assets/book.png';
// { navigation }
// props.navigation
const BookList = ({navigation}) => {
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
                    ({ item, index }) => {
                        return <BookRow book={item} index={index} navigation={navigation}/>
                    }
                }
                keyExtractor={(book) => book.title}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
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

  export default BookList;