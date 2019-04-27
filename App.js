

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// this is a package from react-native-vector-icons on github
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.navBar}>
          <Image source={require('./components/images/youtube-logo-png-photo-0.png')} style={{width: 98, height: 22}}/>
            <View style={styles.rightNav}>
              <TouchableOpacity>
                <Icon style={styles.navItem} name="search" size={25}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon  style={styles.navItem} name="account-circle" size={25}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            </View>
          <View style={styles.tabBar}>
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
    justifyContent: 'space-between',
  },
  rightNav: {
    flexDirection: 'row',
  },
  navItem: {
    marginLeft: 25,

  },
  tabBar: {
    backgroundColor: 'red',
    height: 60,
    
  },
  body: {
    flex: 1
  }
});
