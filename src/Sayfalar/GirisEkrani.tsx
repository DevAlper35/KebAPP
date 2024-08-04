import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
export default function GirisEkrani({navigation}) {
  function sifreEkrani(){
    navigation.navigate("Sifre")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Üye Girişi</Text>
      <View style={styles.inner_container}>
        <Input etiket="E-Mail" hint="E-Mail Adresinizi Giriniz..." girdi={null}/>
        <Input etiket="Şifre" hint="Şifrenizi Giriniz..." girdi={null}/>
      </View>
      <Button metin="Giriş Yap" tiklama={null}/>
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
    alignItems: "center",
    backgroundColor: "cornsilk"
  },
  title:{
    fontSize: 40,
    color: "black"
  },
  inner_container: {
    width:"80%",
    margin:20,
    
  },
  sifremiUnuttum: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize:12,
    margin:5
  }
})