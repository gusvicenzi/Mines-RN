import {Dimensions} from 'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, // Proportion of the header
  difficultLevel: 0.1,
  getColumnsAmout() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize);
  },
  getRowsAmout() {
    const totalHeight = Dimensions.get('window').height;
    const boardHeight = (1 - this.headerRatio) * totalHeight;
    return Math.floor(boardHeight / this.blockSize);
  },
};

export default params;
