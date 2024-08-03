import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

export default function Input({etiket, hint, girdi}) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{etiket}</Text>
        <View style={styles.input_container}>
            <TextInput 
                placeholder={hint}
                onChangeText={girdi}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin:10,
        width:"95%"
    },
    input_container: {
        margin:3,
        marginHorizontal:10,
        paddingHorizontal: 8,
        borderRadius: 5,
        borderWidth: 1,
        height:42,
        borderColor: "#bdbdbd"
    },
    label:{
        fontSize:15,
        marginLeft:10
    }
})