import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../Estilo'

export default ({ num }) => {
    return (
        <View style={style.Container}>

            <Text style={[style.Num, Estilo.fonteGrande]}>
                {num}
            </Text>

        </View>
    )
}

const style = StyleSheet.create({

    Container: {
        backgroundColor: '#000',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
        justifyContent:'center',
        alignItems: 'center',
    },
    Num: {
        color: '#FFF',
    }

})