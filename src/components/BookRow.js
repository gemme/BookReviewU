import React from 'react';
import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { IMG_URL } from '../constants';
import Star from 'components/Star';
import { useLinkProps } from '@react-navigation/native';
const BookRow = ({ book, index, navigation }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <View style={[
            styles.row,
            {
                backgroundColor: index % 2 ? 'white' : '#F3F3F7'
            }
        ]}>
            <View style={styles.edges}>
                <Image
                    source={{ uri: `${IMG_URL}${book.image}` }}
                    style={{
                        width: 60,
                        height: 80
                    }}
                />
            </View>
            <View
                style={styles.bookContainer}
            >
                <View style={styles.titleBook}>
                    <Text>{book.title}</Text>
                    <Text style={styles.author}>{book.author}</Text>
                </View>
                <Star rating={3} />
            </View>
            <View style={styles.edges}>
                <TouchableOpacity
                    onPress={() => {
                        /*
                        setShowInfo(prevShowInfo => {
                            return !prevShowInfo;
                        });
                        */
                        navigation.navigate('Info', {book});
                        /*
                        navigation.navigate('Info', {
                            book: {
                                title: book.title,
                                author: book.author,
                            }
                        });
                        */
                    }}
                    styles={styles.button}
                >
                    <Text>{'Info'}</Text>
                </TouchableOpacity>
            </View>
            {
                showInfo && (
                    <View>
                        <Text>{'Book Info'}</Text>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    edges: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 50,
    },
    bookContainer: {
        flex: 8,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    titleBook: {
        fontSize: 200
    },
    author: { color: 'grey' },
    button: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 2
    }
});

export default BookRow;