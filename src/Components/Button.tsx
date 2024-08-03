import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Button({metin,tiklama}) {
  return (
    <TouchableOpacity style={styles.container} onPress={tiklama}>
        <Text style={styles.metin}>{metin}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "indigo",
        borderRadius: 5,
        padding: 10,
        margin: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    metin: {
        color : "white",
        fontWeight : "bold"
    }
})