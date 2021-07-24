import * as React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Audio } from 'expo-av';

export default class App extends React.Component {
  async playMusic(url) {
    try {
      await Audio.setIsEnabledAsync(true);
      var playbackObject = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );
    } catch (error) {
      console.log();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>The School Garage Band</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity 
            onPress={() => {
              var url = 'https://www.fesliyanstudios.com/play-mp3/6752';
              this.playMusic(url);
            }}>
              <Image style={{ alignSelf: 'center' }} source={require('./assets/bg.png')} />
              <Text style={{ alignSelf: 'center',fontSize: 15, fontWeight: 'bold'  }}>Add Background Music</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
            <TouchableOpacity
              
              onPress={() => {
                var url = 'https://www.fesliyanstudios.com/play-mp3/6712';
                this.playMusic(url);
              }}>
              <Image source={require('./assets/cymbal2.png')} />
            </TouchableOpacity>
            <TouchableOpacity 
              style = {{marginTop:-25}}
              onPress={() => {
                var url = 'https://www.fesliyanstudios.com/play-mp3/6676';
                this.playMusic(url);
              }}>
              <Image
                style={{ width: 150, height: 150 }}
                source={require('./assets/cymbal2.png')}
              />
            </TouchableOpacity>
          </View>
          <View  style={styles.container4}>
            <TouchableOpacity
              onPress={() => {
                var url = 'https://www.fesliyanstudios.com/play-mp3/6762';
                this.playMusic(url);
              }}>
              <Image
                style={styles.image1}
                source={require('./assets/drum4.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                var url = 'https://www.fesliyanstudios.com/play-mp3/6692';
                this.playMusic(url);
              }}>
              <Image
                style={styles.image1}
                source={require('./assets/drum4.png')}
              />
            </TouchableOpacity>
          </View>
          <View  style={styles.container5}>
            <TouchableOpacity
              onPress={() => {
                var url = 'https://www.fesliyanstudios.com/play-mp3/6658';
                this.playMusic(url);
              }}>
              <Image source={require('./assets/drum4.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                var url = 'https://www.fesliyanstudios.com/play-mp3/6773';
                this.playMusic(url);
              }}>
              <Image
                style={styles.image1}
                source={require('./assets/drum4.png')}
              />
            </TouchableOpacity>
          </View>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    marginTop: 30, flex:1
  },
  container1:{
    backgroundColor: 'lightblue',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent:'center', 
    flex:0.1, 
  },
  container2: {
    flex: 0.22,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop:10
  },
  container3: {
    display:"flex",
    flex: 0.21,
    flexDirection: "row",
    justifyContent: 'space-around',
    width: '100%',
    marginTop:10
  },
  container4: {
    display:"flex",
    flex: 0.21,
    flexDirection: "row",
    justifyContent: 'space-around',
    width: '100%',
    marginTop:10
  },
  container5: {
    display:"flex",
    flex: 0.21,
    flexDirection: "row",
    justifyContent: 'space-around',
    width: '100%',
    marginTop:10
  }
});
