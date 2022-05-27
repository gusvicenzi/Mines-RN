import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Field from './Field';

export default props => {
  const rows = props.board.map((row, r) => {
    const columns = props.board.map((field, c) => {
      return <Field {...field} key={c} />;
    });
    return <View key={r}>{columns}</View>;
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EEE',
  },
});
