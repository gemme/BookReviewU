import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import Star from 'components/Star';
import { IMG_URL } from '../constants';

const BookInfo = ({ route }) => {
    const {
        title, author, image, rating
    } = route.params.book;
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.header}
            >
                 <Image
                    source={{ uri: `${IMG_URL}${image}` }}
                    style={{
                        width: 60,
                        height: 80
                    }}
                />
                <View styles={styles.titleBook}>
                    <Text>{title}</Text>
                    <Text style={styles.author}>{author}</Text>
                    <Star rating={rating}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 30
    },
    edges: {
        padding: 10
    },
    title: {
        fontSize: 16,
    },
    author: {
        fontSize: 10,
        color: 'grey'
    }
});

export default BookInfo;