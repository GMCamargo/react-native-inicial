import React, {useState} from 'react';
import {Text} from 'react-native';
import Estilo from '../Estilo';
import Filho from './Filho';

export default (props) => {
  const [num, setNum] = useState(0);

  function showValue(num) {
    setNum(num);
  }
  return (
    <>
      <Text style = {Estilo.fonteGrande}>{num}</Text>
      <Filho fun={showValue} min={0} max={100} />
    </>
  );
};
