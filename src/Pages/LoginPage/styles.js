import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#cfc',
    },
    imgLogo:{
        height: '150px',
        width: '150px'
    },
    input:{
        border: '2px solid black',
        margin: '2px',
        padding: '5px',
        width: '70%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    button:{
        border: '2px solid black',
        padding: '5px',
        width: '70%',
        textAlign: "center",
        backgroundColor: '#aaf',
        borderRadius: 5,
    },
    ViewLinks:{
        marginTop: 10,
        flexDirection: "row",
        width: '70%',
        justifyContent: "space-between"
    }
})

export default styles