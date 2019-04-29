

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import VideoItem from './components/VideoItem';
import data from './data.json';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.navBar}>
          <Image source={require('./components/images/youtube-logo-png-photo-0.png')} style={{width: 98, height: 22}}/>
            <View style={styles.rightNav}>
              <TouchableOpacity>
                <Image  source={require('./components/images/icons/search.png')}  style={{
    width: 25,
    height: 25,
    resizeMode: 'contain',
  }}/>
              </TouchableOpacity>
              
              <TouchableOpacity>
              <Image  source={require('./components/images/icons/profileicon.png')}  style={{
    width: 25,
    height: 25,
    marginLeft:10,
    resizeMode: 'contain',           
  }}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
          <FlatList
          data={data.items}
          renderItem={(video)=><VideoItem video={video.item} />}
          keyExtractor={(item)=>item.id}
          ItemSeparatorComponent={()=><View style={{height:0.5, backgroundColor:'#E5E5E5'}}/>}

           />
            </View>
          <View style={styles.tabBar}>
              <TouchableOpacity style={styles.tabItem} >
              <Image  source={require('./components/images/icons/home.png')}  style={{ width: 25, height: 25, resizeMode: 'contain', }}/>
              <Text style={styles.tabTitle} > Home </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabItem} >
              <Image  source={require('./components/images/icons/fire.png')}  style={{ width: 25, height: 25, resizeMode: 'contain', }}/>
              <Text style={styles.tabTitle} > Trending </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabItem} >
              <Image  source={require('./components/images/icons/subscribe.png')}  style={{ width: 25, height: 25, resizeMode: 'contain', }}/>
              <Text style={styles.tabTitle} > Subscribe </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabItem} >
              <Image  source={require('./components/images/icons/library.png')}  style={{ width: 25, height: 25, resizeMode: 'contain', }}/>
              <Text style={styles.tabTitle} > Library </Text>
              </TouchableOpacity>
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
  body: {
    flex: 1
  },
  tabBar: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4,
  },
});


