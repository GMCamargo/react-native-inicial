import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default (props) =>{
    return (
         <View style={style.FlexV1}>
             <Quadrado color = '#F00'/>
             <Quadrado color = '#0F0'/>
             <Quadrado color = '#00F'/>
             <Quadrado color = '#FF0'/>
             <Quadrado color = '#0FF'/>
             <Quadrado color = '#F0F'/>
         </View>
    )
    
}
const style = StyleSheet.create({
    FlexV1:{
        backgroundColor:'#000',
        flexGrow: 1,
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        width:'90%'
        
    }
})