import React, {useState} from 'react';
import {Text, Button} from 'react-native';

export default (props) => {
  const ramdom = parseInt(Math.random() * (props.max - props.min) + props.min);

  return (
    <Button
      title="Execute"
      onPress={function () {
        props.fun(ramdom);
      }}
    />
  );
};
