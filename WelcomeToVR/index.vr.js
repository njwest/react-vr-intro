import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import Greeting from './vr/components/Greeting';
import Blink from './vr/components/Blink';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <View
          style={{transform: [{translate: [0, 0, -3]}]}}>
          <Greeting name='Nick'/>
          <Blink text='Hi Bella!'/>
        </View>
      </View>
    );
  }
};


AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
