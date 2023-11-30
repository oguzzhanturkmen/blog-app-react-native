import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';



const CreatePost = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState(null);

    const handlePostCreation = () => {
        if (!title.trim() || !body.trim()) {
            Alert.alert('Error', 'Title and body are required.');
            return;
        }

        // Implement the logic to create a new post with image
        // Send the data to your backend
    };

    const selectImage = () => {
        const options = {
            noData: true,
            mediaType: 'photo',
        };

        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                setImage(response);
            }
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Enter post title"
            />
            <Text style={styles.label}>Body</Text>
            <TextInput
                style={styles.richEditor}
                onChange={setBody}
                placeholder="Enter post content"
            />
            <Button 
                icon="camera"
                mode="outlined"
                onPress={selectImage}
                style={styles.button}
            >
                {image ? 'Change Image' : 'Add Image'}
            </Button>
            <Button 
                mode="contained" 
                onPress={handlePostCreation}
                style={styles.button}
            >
                Create Post
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 10,
    },
    textArea: {
        height: 150,
        textAlignVertical: 'top',
    },
    button: {
        marginTop: 10,
        backgroundColor: 'blue', // Change to your preferred color
    },
    richEditor: {
        height: 500,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        marginBottom: 15,
        padding: 10,
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
    },
});

export default CreatePost;
