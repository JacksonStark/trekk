import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default function LandingPage({transition, localStyles}) {

  return (
    <View style={localStyles.outer} >
      <View style={localStyles.inner} >

        <Text style={localStyles.titleText}>
          Tap here to start your Trekk
        </Text>

        <TouchableHighlight style={localStyles.buttons}
          onPress={() => transition("LOGIN")}
          underlayColor={'#68a0ff'} >

          <Text style={localStyles.buttonText}>AR</Text>
        </TouchableHighlight>

      </View>
    </View>
  );
}