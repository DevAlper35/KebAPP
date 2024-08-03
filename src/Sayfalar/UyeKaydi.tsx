import { StyleSheet, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
export default function UyeKaydi({navigation}) {
    const [userName, setUserName] = useState("")
    const [userSurname, setUserSurname] = useState("")
    const [userAge, setUserAge] = useState("")
    const [userMail, setUserMail] = useState("")
    const [userAddress, setUserAddress] = useState("")

    function handleSubmit(){
        if(!userName || !userSurname || !userAge || !userMail || !userAddress){
            Alert.alert("KetApp", "Bilgilerin tümünü doldurunuz")
        }
        else{
            const user ={
                userName,
                userSurname,
                userAge,
                userMail,
                userAddress
            }
            navigation.navigate("Bilgiler", {user})
        }
        
    }
    return (
        <View style={styles.container}>
            <Input etiket={"Üye İsim Bilgisi"} hint={"Adınızı giriniz..."} girdi={setUserName}/>
            <Input etiket={"Üye Soyad Bilgisi"} hint={"Soyadınızı giriniz..."} girdi={setUserSurname}/>
            <Input etiket={"Üye Yaş Bilgisi"} hint={"Yaşınızı giriniz..."} girdi={setUserAge}/>
            <Input etiket={"Üye Mail Bilgisi"} hint={"Mail adresinizi giriniz..."} girdi={setUserMail}/>
            <Input etiket={"Üye İkamet Bilgisi"} hint={"Adresinizi giriniz..."} girdi={setUserAddress}/>

            <Button
                metin={"Kaydı Tamamla"}
                tiklama={handleSubmit}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
})