import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const Oreo = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Scooter')}>
            <Image 
                style={styles.image}
                source={require('../assets/oreo.jpg')}
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

export default Oreo
