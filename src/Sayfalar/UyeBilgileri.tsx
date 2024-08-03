import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Components/Button'

export default function UyeBilgileri({navigation,route}) {

    const {user} = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kayıt İşlemi Tamamlandı</Text>
            <Text style={styles.label}>Üyenin Adı: {user.userName}</Text>
            <Text style={styles.label}>Üyenin Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}>Üyenin Yaşı: {user.userAge}</Text>
            <Text style={styles.label}>Üyenin E-posta: {user.userMail}</Text>
            <Text style={styles.label}>Üyenin Adresi: {user.userAddress}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:20
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 38,
        margin:50,
        color:"black"
    },
    label: {
        fontWeight: "bold",
        fontSize: 18,
        margin:5,
        color:"black"
    }
})