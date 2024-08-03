import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
export default function UyeKaydi() {
    const [user, setUser] = useState("")

    return (
        <View style={styles.container}>
            <Input etiket={"Üye İsim Bilgisi"} hint={"Adınızı giriniz..."} girdi={null}/>
            <Input etiket={"Üye Soyad Bilgisi"} hint={"Soyadınızı giriniz..."} girdi={null}/>
            <Input etiket={"Üye Yaş Bilgisi"} hint={"Yaşınızı giriniz..."} girdi={null}/>
            <Input etiket={"Üye Mail Bilgisi"} hint={"Mail adresinizi giriniz..."} girdi={null}/>
            <Input etiket={"Üye İkamet Bilgisi"} hint={"Adresinizi giriniz..."} girdi={null}/>

            <Button
                metin={"Kaydı Tamamla"}
                tiklama={null}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
})