import React, { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

import { FaLongArrowAltUp } from "react-icons/fa";

import Header from "./Header";
import Footer from "./Footer";

import styles from "../style/index";

function RenderPosts() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [expandedComments, setExpandedComments] = useState([]);

    const flatListRef = useRef(null);

    // Função para obter posts da API
    const apiPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
    }

    // Função para obter comentários da API
    const apiComments = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        setComments(data);
    }

    // Função para obter usuários da API
    const apiUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    }

    // Retorna o nome de usuário correspondente ao ID
    const getUsers = (id) => {
        const user = users.find(user => user.id === id);
        return (user ? user.username : '');
    }

    // Retorna os comentários associados a um post, com opção de expandido ou apenas o primeiro comentário
    const getPostComments = (postId) => {
        const allComments = comments.filter(comment => comment.postId === postId);
        return expandedComments.includes(postId) ? allComments : allComments.slice(0, 1);
    }

    // Post que quando for criado, será adicionado no final da lista de todos os posts
    const handleAddPost = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 47,
            title: "Título do post",
            body: "Descrição do post",
            userId: 1,
        }),
        });
        const data = await response.json();
        setPosts([...posts, data]);
    }

     // Deleta um post da lista
    const handleDeletePost = async (postId) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
        });
        setPosts(posts.filter(post => post.id !== postId));
    }

    // Comentário que quando for criado, será adicionado no final da lista de todos os comentários
    const handleAddComment = async (postId) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            postId,
            name: "Hudson Pichau",
            email: "Hudson@gmail.com",
            body: "loren ipsun dolor sit amet.",
        }),
        });
        const data = await response.json();
        setComments([...comments, data]);
        setNewComment("");
    }
    
    // Alterna entre expandido e contraído o conjunto de comentários associados a um post
    const toggleComments = (postId) => {
        setExpandedComments((prevExpandedComments) => {
            if (prevExpandedComments.includes(postId)) {
                return prevExpandedComments.filter(id => id !== postId);
            } else {
                return [...prevExpandedComments, postId];
            }
        });
    }
    
    // Executa as funções apiPosts(), apiComments(), e apiUsers() uma vez quando o componente é montado
    useEffect(() => {
        apiPosts();
        apiComments();
        apiUsers();
    }, []);
    
    const scrollToTop = () => {
        flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
    
    // Renderiza o restante do componente
    return (
        <View style={styles.container}>
            <FlatList
            ref={flatListRef}
                data={posts}
                keyExtractor={item => item.id.toString()}
                // Container Header
                ListHeaderComponent={() => (
                    <View style={styles.container}>
                        <Header />
                        <View style={styles.contentTitle}>
                            <Text style={styles.title}>Posts</Text>
                        </View>
                        <View style={styles.contentBtn}> 
                            <Button style={styles.btnPosts} labelStyle={{ color: "#fff" }} title="Add Post" onPress={handleAddPost}>
                                Criar posts
                            </Button>
                        </View>
                    </View>
                )}

                renderItem={({ item }) => (
                // Container Posts
                    <View style={styles.containerPosts}>
                        <View style={styles.contentPosts}>
                                <Image style={styles.photoProfile} source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png'}}/>
                            <View style={styles.flexPosts}>
                                <View style={styles.textsPosts}>
                                    <Text style={styles.userPosts}>{getUsers(item.userId)}</Text>
                                    <Text style={styles.titlePosts}>{item.title}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Content Posts */}
                        <View style={styles.contentPosts}>
                            <Text style={styles.descPosts}>{item.body}</Text>
                        </View>
                        <Button style={styles.btnDeletePost} labelStyle={{ color: '#e9031e' }} onPress={() => handleDeletePost(item.id)}>
                            Excluir post
                        </Button>

                        {/* Conatainer Comments */}
                        <View style={styles.containerComment}> 
                            <Text style={styles.titleComment}>Comentários:</Text>
                            <View style={{ marginTop: 5}}>
                                {getPostComments(item.id).map((comment, commentIndex) => (
                                    // Content Comments
                                    <View style={styles.contentComment} key={commentIndex}>
                                        <Text style={styles.userComment}>
                                            {/* Autor:  */}
                                                {comment.email}
                                            </Text>
                                        <Text style={styles.commentTitles}>
                                            {/* Título:  */}
                                                {comment.name}
                                        </Text>
                                        <Text>
                                            {/* Descrição: */}
                                                {comment.body}
                                            </Text>
                                    </View>
                                ))}
                            </View>
                            {/* Button para adicionar comentários  */}
                            <Button style={styles.btnComent} labelStyle={{ color: "#fff" }} onPress={() => handleAddComment(item.id)}>
                                Adicionar comentário
                            </Button>
                        </View>
                        <Button
                            labelStyle={{ color: "#000" }}
                            onPress={() => toggleComments(item.id)}
                        >
                            {expandedComments.includes(item.id) ? "Mostrar Menos" : "Mostrar Mais"}
                        </Button>
                    </View>
                )}
                // Footer
                ListFooterComponent={() => (
                    <Footer />
                )}
            />
            {/* Botão para voltar ao topo */}
            <TouchableOpacity onPress={scrollToTop} style={styles.scrollToTopButton}>
                <Text style={styles.scrollToTopButtonText}><FaLongArrowAltUp /></Text>
            </TouchableOpacity>
        </View>
    );
}

export default RenderPosts;
