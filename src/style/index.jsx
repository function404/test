import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Header
    Header:{
        width: '100%',  
        height: 60,
        backgroundColor: '#e90313',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleHeader:{
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto, sans-serif',
        color: '#fff',
    },
    title:{
        width: '95%',
        marginTop: 10,
        fontSize: 22,
        fontWeight: '400',
        fontFamily: 'Roboto, sans-serif',
    },
    contentBtn:{
        width: '95%',
        justifyContent: 'center',
    },
    btnPosts:{
        position: 'left',
        width: '95%',
        margin: 10,
        backgroundColor: "#e90313",
        borderColor: "#000",
        borderRadius: 5,
    },
    
    // Container Posts
    container:{
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
    },

    containerPosts:{
        width: '95%',
        padding: 10,
        margin: 10,
        borderRadius: 12,
        backgroundColor: '#e9e9e9',
    },
    photoProfile:{
        width: 70,
        height: 70,
    },
    contentPosts:{
        marginTop: 15,
        flexDirection: 'row',
    },
    flexPosts:{
        flex: 1,
    },
    textsPosts:{
        width: '100%',
        paddingLeft: 5,
        marginLeft: 10,
    },
    userPosts:{
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Roboto, sans-serif',
        color: '#00a202',
        textTransform: 'uppercase',
    },
    titlePosts:{
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Roboto, sans-serif',
    },
    descPosts:{
        width: '100%',
        fontSize: 14,
        fontWeight: 'normal',
        fontFamily: 'Roboto, sans-serif',
        textAlign: 'justify',
        textTransform: '',
    },

    // Delete Button Post
    contentBtn:{
        width: '100%',
        justifyContent: 'right',
    },
    btnDeletePost:{
        width: '30%',
        lineHeight: 9,
        fontSize: 10,
        marginTop: 20,
        backgroundColor: "#e9e9e9",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e9031e',
    },

    // Container Comments
    containerComment:{
        width: '95%',
        marginTop: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#a1a1a1',
    },
    titleComment:{
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Roboto, sans-serif',
        color: '#000',
        textTransform: 'capitalize',
    },
    btnComent:{
        width: '100%',
        justifyContent: 'center',
        backgroundColor: "#e90313",
        borderColor: "#a1a1a1",
        borderRadius: 5,
    },
    contentComment:{
        marginBottom: 10, 
        padding: 10,
        // borderBottomWidth: 1,
        borderTopWidth: 2,
        borderRadius: 5, 
        borderColor: '#a1a1a1' 
    },
    userComment:{
        marginBottom: 10,
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Roboto, sans-serif',
        color: '#00a202',
        textTransform: 'uppercase',
    },
    commentTitles:{
        marginBottom: 5,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Roboto, sans-serif',
        color: '#414141',
    },

    // Footer 
    Footer:{
        width: '100%',
        height: 60,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleFooter:{
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Roboto, sans-serif',
        color: '#e90313',
    },
    linkFooter:{
        textDecorationLine: 'underline',
    }
    }
);

export default styles;