import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {moderateScale} from './src/utils/helper';
import {Home} from './src/screens';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: moderateScale(10),
  },
});

export default App;
