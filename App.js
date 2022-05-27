import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Iniciando o Mines!</Text>
      <Text style={styles.instructions}>
        Tamanho da grade:
        {params.getRowsAmout()}x{params.getColumnsAmout()}
      </Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={6} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
      <Field flagged />
      <Field flagged opened />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
