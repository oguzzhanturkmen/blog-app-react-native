import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const PostDetail = ({ route }) => {
    
    const { post } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: post.imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.author}>By {post.author}</Text>
                <Text style={styles.body}>{post.body}</Text>
                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    author: {
        fontSize: 16,
        color: 'grey',
        marginBottom: 20,
    },
    body: {
        fontSize: 16,
        color: 'black',
    },
});

export default PostDetail;
