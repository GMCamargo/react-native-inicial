/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import FlexboxV1 from './components/layout/FlexboxV1';
import Mega from './components/mega/Mega';

//import Primeiro from './components/PrimeiroComponente';
//import ComparatorComponent from './components/ComparatorComponent'
//import Contador from './components/Contador';
//import Pai from './components/indireta/Pai';
//import ListaPessoas from './components/lista/ListaPessoas';
//import UsuarioLogado from './components/condicional/UsuarioLogado';
//import DigiteSeuNome from './components/componentecontrolado/DigiteSeuNome'
export default () => (
  <View style={style.App}>
    
    <Mega/>
    {/*
    <FlexboxV1/>
    <DigiteSeuNome/>
    <UsuarioLogado usuario = {{nome: 'Admin', email: 'admin@admin.com'}}/>
    <ListaPessoas/>
    <Pai/>
    <Contador ini = {0}/>
    <Primeiro />
    <ComparatorComponent min = {1} max = {60}/>
    <ComparatorComponent min = {1} max = {60}/>
    <ComparatorComponent min = {1} max = {60}/>
    <ComparatorComponent min = {1} max = {60}/>
    <ComparatorComponent min = {1} max = {60}/>
    <ComparatorComponent min = {1} max = {60}/>
    */}
  </View>
);

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
