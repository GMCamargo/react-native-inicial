import React from 'react';
import {Text, FlatList} from 'react-native';
import Estilo from '../Estilo';
import Pessoas from './Pessoas';

const pessoasRender = ({item}) =>{
return <Text>[{item.id}] Sr(a) {item.nome} {item.sNome} foi selecionado</Text>
}

export default (props) => {
  return (
    <>
      <Text style={Estilo.fonteGrande}>Lista de Pessoas</Text>
      <FlatList
        data={Pessoas}
        keyExtractor={(i) => `${i.id}`}
        renderItem={pessoasRender}
      />
    </>
  )
}
