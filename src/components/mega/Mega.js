import React, { Component } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import Estilo from '../Estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends Component {
  state = {
    qtdNum: this.props.qtdNum,
    nums: []
  };
  /*
  constructor(props){
    super(props)
    this.alterarQtdNum = this.alterarQtdNum.bind(this)
  }*/
  /*
  alterarQtdNum(qtd) {
    this.setState({ qtdNum: qtd })
  }*/

  geraNumerosNaoRepetidos = nums => {
    const novo = parseInt(Math.random() * 60) + 1
    return nums.includes(novo) ? this.geraNumerosNaoRepetidos(nums) : novo
  }

  geraNum = () => {
    const { qtdNum } = this.state
    const nums = []
    for (let i = 0; i < qtdNum; i++) {
      const n = this.geraNumerosNaoRepetidos(nums)
      nums.push(n)
    }
    nums.sort((a, b) => a - b)
    this.setState({ nums })
  }

  exibirMegaNum() {
    const nums = this.state.nums
    return nums.map(num => {
      return <MegaNumero num={num} />
    })
  }
  render() {
    return (
      <>
        <Text style={Estilo.fonteGrande}>
          Gerador de MegaSena
        </Text>

        <TextInput
          keyboardType={'numeric'}
          style={{ borderBottomWidth: 1 }}
          placeholder="Quantidade de números"
          value={this.state.qtdNum}
          onChangeText={qtd => this.setState({ qtdNum: qtd })}
        />

        <Button title="Execute" onPress={this.geraNum} />
        <View style = {{flexDirection:"row"}}>
          {this.exibirMegaNum()}
        </View>
      </>
    );
  }
}
