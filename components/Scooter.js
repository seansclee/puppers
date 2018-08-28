import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const Scooter = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Home')}>
            <Image
                style={styles.image}
                source={require('../assets/scooter.jpg')}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    }
});

export default Scooter
