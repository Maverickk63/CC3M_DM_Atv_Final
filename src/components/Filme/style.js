import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width * 0.9
// variaveis que pegam tamanho da tela (90% neste caso)
const MAX_Height = Dimensions.get('window').height * 0.9

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width: '95%',
        height: '40%',
        backgroundColor: 'purple',
        borderRadius: 10,
        marginBottom: 10
    },
    img: {
        resizeMode:'cover' ,
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    vimg: {
        width: '30%',
        height: '100%',
        padding: 8
    },
    body:{
        padding:8,
        width: '68%'
    },
    sinop:{
        color: '#fff',
        backgroundColor: '#424',
        borderRadius: 10,
        padding: 4,
        marginVertical: 4,
    },
    titulo:{
        fontWeight: 'bold' ,
        fontSize: 32,
        borderRadius: 10,
        backgroundColor: '#424',
        color: '#fff',
        flex: 1,
        textAlign: "center"
    },
})

export default styles