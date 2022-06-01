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
            levelText="Médio"
            onLevelSelected={props.onLevelSelected}
            difficultLevel={0.15}
          />
          <Level
            levelColor="#f1c232"
            levelText="Difícil"
            onLevelSelected={props.onLevelSelected}
            difficultLevel={0.2}
          />
          <Level
            levelColor="#f44336"
            levelText="Extremo"
            onLevelSelected={props.onLevelSelected}
            difficultLevel={0.3}
          />
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
});
