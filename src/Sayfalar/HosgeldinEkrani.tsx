import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from '../Components/Button'

export default function HosgeldinEkrani({navigation}) {

    function kayit(){
        navigation.navigate("Kayit")
    }

    function girisEkrani(){
        navigation.navigate("Giris")
    }

    function sifreEkrani(){
        navigation.navigate("Sifre")
    }

    return (
        <View style={styles.container}>
        <Text style={styles.header}>Hoşgeldin Kenks</Text>
        <Button metin={"Giriş Yap"} tiklama={girisEkrani}/>
        <Button metin={"Kayıt Ol"} tiklama={kayit}/>
        <TouchableOpacity onPress={sifreEkrani}>
            <Text style={styles.sifremiUnuttum}>Şifremi Unuttum</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        margin:10,
        textAlign: "center"
    },
    sifremiUnuttum: {
        color: "blue",
        textDecorationLine: "underline"
    }
})