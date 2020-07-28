import React from 'react';
import {Text} from 'react-native';
import Estilo from './Estilo';

export default ({min , max} ) => {
    //const {min, max} = props
    const delta = max - min + 1
    const ramdom = parseInt(Math.random()*delta + min)
return <Text style = {Estilo.fonteGrande}>O valor aleatório é {ramdom}</Text>;

};
