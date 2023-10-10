import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Button from './Button';
import ImageViewer from './ImageView';
const PlaceholderImage = require('./assets/demo.png');


export default function AppDemo() {
  return (
    <View style={styles.container }>
       <View style={styles.imageContainer}>
       <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme={'primary'} label="CHOOSE A PHOTO" />
        <Button label="USE THIS PHOTO" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed812b',
    alignItems: 'center',

  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
