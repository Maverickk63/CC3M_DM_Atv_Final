import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function RecoverPage(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/filme.png')} style={styles.imgLogo}/>
            <TextInput placeholder="email:" style={styles.input}/>
            <TouchableOpacity style={styles.button}>
                <Text>
                    Recuperar
                </Text>
            </TouchableOpacity>
            <View style={styles.ViewLinks}>
                <Link to={{screen:"RegisterPage"}}>Registre-se</Link>
            </View>
        </View>
    )
}