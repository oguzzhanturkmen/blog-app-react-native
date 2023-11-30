import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handlePasswordReset = () => {
        // Implement password reset logic here
        // Usually involves sending a password reset email
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.instructions}>
                Enter your email address below and we'll send you instructions to reset your password.
            </Text>
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
                mode="outlined"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Button 
                mode="contained" 
                onPress={handlePasswordReset}
                style={styles.button}
            >
                Send Instructions
            </Button>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.linkText}>Back to Login</Text>
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
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        marginBottom: 20,
    },
    instructions: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: 'gray',
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

export default ForgotPassword;
