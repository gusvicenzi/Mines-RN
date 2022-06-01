import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default props => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: `${props.levelColor}`}]}
      onPress={() => props.onLevelSelected(props.difficultLevel)}>
      <Text style={styles.buttonLabel}>{props.levelText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
});
