import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Alert} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from './src/functions';
import LevelSelection from './src/screens/LevelSelection';

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
      won: false,
      lost: false,
      showLevelSelection: false,
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);
    if (lost) {
      showMines(board);
      Alert.alert('Perdeu', 'Seu jaguara');
    }
    if (won) {
      Alert.alert('Ganhou', 'Parabéns!');
    }
    this.setState({board, lost, won});
  };

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);
    if (won) {
      Alert.alert('Ganhou', 'Parabéns!');
    }
    this.setState({board, won});
  };

  onLevelSelected = level => {
    params.difficultLevel = level;
    this.setState(this.createState());
  };

  levelSelectedText = () => {
    let level = params.difficultLevel;
    if (level === 0.1) {
      return ['Fácil', '#49B65D'];
    } else if (level === 0.15) {
      return ['Médio', '#2765F7'];
    } else if (level === 0.2) {
      return ['Difícil', '#f1c232'];
    } else {
      return ['Extremo', '#f44336'];
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LevelSelection
          isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({showLevelSelection: false})}
        />
        <Header
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({showLevelSelection: true})}
          levelSelected={this.levelSelectedText()}
        />
        {/* <Text style={styles.text}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>
          Tamanho da grade:
          {params.getRowsAmout()}x{params.getColumnsAmout()}
        </Text> */}
        <View style={styles.board}>
          <MineField
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
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
