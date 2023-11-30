import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = ({ navigation }) => {
    
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        profileImageUrl: "https://source.unsplash.com/featured/?nature ", 
        bio: 'Enthusiastic writer and reader. Passionate about technology and innovation.',
    };

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: user.profileImageUrl }} 
                style={styles.profileImage}
            />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.bio}>{user.bio}</Text>

            <TouchableOpacity 
                style={styles.editButton}
                onPress={() => {/* Navigate to Edit Profile Screen */}}
            >
                <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: 'grey',
        marginBottom: 20,
    },
    bio: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    editButton: {
        backgroundColor: 'black', 
        padding: 10,
        borderRadius: 5,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Profile;
