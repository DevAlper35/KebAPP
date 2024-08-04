import { StyleSheet, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'

export default function SifreEkrani({navigation}) {
  const [mail, setMail] = useState("")
  const [eskiSifre, setEskiSifre] = useState("")
  function mailGonder(){
    if (mail && eskiSifre){
      Alert.alert("Başarılı","Sistem tarafından oluşturulan yeni şifre " +  mail + " adresinize gönderildi")
      navigation.navigate("Giris")
    }
    else{
      Alert.alert("Bi sorunumuz var","Boş alanı doldurunuz...")
    }
    
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Input etiket={"Kayıtlı E-Mail"} hint={"Kayıtlı E-Mail Adresinizi Giriniz..."} girdi={setMail}/>
        <Input etiket={"Eski Şifre"} hint={"Hatırladığınız Eski Şifrelerden Birini Giriniz..."} girdi={setEskiSifre}/>
      </View>
      <Button metin={"Gönder"} tiklama={mailGonder}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "cornsilk"
  },
  inner_container: {
    paddingVertical: 50,
    width: "80%",
  }
})