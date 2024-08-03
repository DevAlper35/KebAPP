import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Components/Button'

export default function HosgeldinEkrani({navigation}) {

    function kayit(){
        navigation.navigate("Kayit")
    }

    return (
        <View style={styles.container}>
        <Text style={styles.header}>Hosgeldin Kenks</Text>
        <Button metin={"Üye Kaydı Oluştur"} tiklama={kayit}/>
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
    }
})