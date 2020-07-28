import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from './Estilo';

export default (props) => {
  const [num, setNum] = useState(props.ini);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={Estilo.fonteGrande}>Contador mto pica</Text>
        <Text style = {Estilo.fonteGrande}> {num}</Text>
      <Button style = {Estilo.botao} title=" + " onPress={inc}/>
      <Button style = {Estilo.botao} title=" - " onPress={dec}/>
    </>
  );
};
