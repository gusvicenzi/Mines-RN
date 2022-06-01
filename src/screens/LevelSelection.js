import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import Level from '../components/Level';

export default props => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione a dificuldade</Text>
          <Level
            levelColor="#49B65D"
            levelText="Fácil"
            onLevelSelected={props.onLevelSelected}
            difficultLevel={0.1}
          />
          <Level
            levelColor="#2765F7"
            onLevelSelected={props.onLevelSelected}
            difficultLevel={0.15}
            levelText="Médio"
          />
          <Level
            levelColor="#f1c232"
            onLevelSelected={props.onLevelSelected}
            difficultLevel={0.2}
            levelText="Difícil"
          />
          {/* <Level levelColor="#F26337" levelText="Extremo" /> */}
          <Level
            levelColor="#f44336"
            onLevelSelected={props.onLevelSelected}
            difficultLevel={0.3}
            levelText="Extremo"
          />
          {/* <TouchableOpacity
            style={[styles.button, styles.bgEasy]}
            onPress={() => props.onLevelSelected(0.1)}>
            <Text style={styles.buttonLabel}>Fácil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgMedium]}
            onPress={() => props.onLevelSelected(0.2)}>
            <Text style={styles.buttonLabel}>Médio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgHard]}
            onPress={() => props.onLevelSelected(0.3)}>
            <Text style={styles.buttonLabel}>Difícil</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#49B65D',
  },
  bgMedium: {
    backgroundColor: '#2765F7',
  },
  bgHard: {
    backgroundColor: '#F26337',
  },
});
