import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native';

const Feed= ({ navigation }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from your backend or API
        // For demonstration, using static data
        const fetchedPosts = [
            // Example posts
            {
                id: '1',
                title: 'First Post',
                excerpt: 'This is the first post excerpt...',
                author: 'John Doe',
                imageUrl: 'https://source.unsplash.com/featured/?nature',
            },
            {
                id: '1',
                title: 'First Post',
                excerpt: 'This is the first post excerpt...',
                author: 'John Doe',
                imageUrl: 'https://source.unsplash.com/featured/?nature',
            },
            {
                id: '1',
                title: 'First Post',
                excerpt: 'This is the first post excerpt...',
                author: 'John Doe',
                imageUrl: 'https://source.unsplash.com/featured/?nature',
            },
            {
                id: '1',
                title: 'First Post',
                excerpt: 'This is the first post excerpt...',
                author: 'John Doe',
                imageUrl: 'https://source.unsplash.com/featured/?nature',
            },
            {
                id: '1',
                title: 'First Post',
                excerpt: 'This is the first post excerpt...',
                author: 'John Doe',
                imageUrl: 'https://source.unsplash.com/featured/?nature',
            },
            {
                id: '1',
                title: 'First Post',
                excerpt: 'This is the first post excerpt...',
                author: 'John Doe',
                imageUrl: 'https://source.unsplash.com/featured/?nature',
            },
            // Add more posts
        ];
        setPosts(fetchedPosts);
    }, []);

    const renderPost = ({ item }) => {
        return (
            <TouchableOpacity 
                style={styles.postContainer}
                onPress={() => {/* Navigate to post detail */}}
            >
                <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
                <View style={styles.postContent}>
                    <Text style={styles.postTitle}>{item.title}</Text>
                    <Text style={styles.postExcerpt}>{item.excerpt}</Text>
                    <Text style={styles.postAuthor}>By {item.author}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={renderPost}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    postContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        padding: 10,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 5,
    },
    postContent: {
        marginTop: 5,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    postExcerpt: {
        fontSize: 14,
        color: 'gray',
    },
    postAuthor: {
        fontSize: 12,
        color: 'blue',
        marginTop: 5,
    },
});

export default Feed;
