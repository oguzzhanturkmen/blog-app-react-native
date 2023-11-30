import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle the login logic here
    };

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                
            </View>
            <Text style={styles.title}>Black Pen</Text>
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
                mode="outlined"
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                style={styles.input}
                mode="outlined"
            />
            <Button 
                mode="contained" 
                onPress={handleLogin}
                style={styles.button}
            >
                Login
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.linkText}>Don’t have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        marginBottom: 20,
        fontFamily: 'helvetica',
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
        backgroundColor: 'blue', // Change to your preferred color
    },
    linkText: {
        marginTop: 15,
        color: 'blue', // Change to your preferred color
        textAlign: 'center',
    }
});

export default LoginScreen;
