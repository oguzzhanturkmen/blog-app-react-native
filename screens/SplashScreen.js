import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login'); 
        }, 3000); 
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/splash-icon.png')} 
                style={styles.logo}
            />
            <Text style={styles.title}>Black Pen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', 
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    }
});

export default SplashScreen;
