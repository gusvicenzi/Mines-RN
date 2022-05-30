import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import {createMinedBoard} from './src/functions';

export default class App extends Component {
  // export default App = () => {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const rows = params.getRowsAmout();
    const cols = params.getColumnsAmout();
    return Math.ceil(params.difficultLevel * rows * cols);
  };

  createState = () => {
    const rows = params.getRowsAmout();
    const cols = params.getColumnsAmout();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>
          Tamanho da grade:
          {params.getRowsAmout()}x{params.getColumnsAmout()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
