

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.navBar}>
       <Image source={require('./components/images/youtube-logo-png-photo-0.png')} style={{width: 98, height: 22}}/>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  }
});
