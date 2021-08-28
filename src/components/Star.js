import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Star = (props) => {
    const stars = [1,2,3,4,5];
    return (
        <View 
            style={styles.stars}
        >
            {stars.map((star, index) => {
                const color = props.rating >= star ? '#FFD64C' : 'grey';
                return <Icon key={index} name='star' color={color}/>
            })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row',
        paddingVertical: 10
    }
});

export default Star;