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
const BookRow = ({ book, index }) => {
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
                    source={{uri:`${IMG_URL}${book.image}`}}
                    style={{
                        width: 60,
                        height: 80
                    }}
                />
            </View>
            <View style={styles.titleBook}>
                <Text>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
            </View>
            <View style={styles.edges}>
                <TouchableOpacity
                    onPress={() => {
                        setShowInfo(prevShowInfo => {
                            return !prevShowInfo;
                        });
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
    titleBook: {
      flex: 8,
      flexDirection: 'column'
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