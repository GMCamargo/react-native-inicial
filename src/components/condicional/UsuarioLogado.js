import React from 'react';
import {Text} from 'react-native';
import Estilo from '../Estilo';
import If from './If';
import ListaPessoas from '../lista/ListaPessoas';

export default props => {
  const usuario = props.usuario || {};

  return (
    <>
      <If check={usuario && usuario.nome && usuario.email}>
        <Text style = {Estilo.fonteGrande}>UsuarioLogado</Text>
        <Text style = {Estilo.fonteGrande}>
            {usuario.nome} - {usuario.email}
        </Text>
        <ListaPessoas/>
      </If>
    </>
  )
}
