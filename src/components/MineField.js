import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Field from './Field';

export default props => {
  const rows = props.board.map((row, r) => {
    const fields = row.map((field, c) => {
      return <Field {...field} key={c} />;
    });
    return (
      <View key={r} style={styles.rows}>
        {fields}
      </View>
    );
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
  rows: {
    flexDirection: 'row',
  },
});
