import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const BookRow = ({ book, index }) => {
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
    );
}

const styles = StyleSheet.create({
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
  });

export default BookRow;