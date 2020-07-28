import React from 'react'
import { View} from 'react-native'

export default (props) =>{
    return (
         <View style = {{
             height: 50,
             width: 50,
             backgroundColor: props.color
         }}/>
    )
}