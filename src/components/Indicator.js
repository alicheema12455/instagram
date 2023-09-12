import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../Theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentage} from '../utilities/constants';

const CustomIndicator = ({activeIndex, onChange}) => {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
      <TouchableOpacity
        onPress={() => onChange(0)}
        style={{width: widthPercentage(33)}}>
        <MaterialIcons
          name="grid-on"
          size={24}
          color={colors.white}
          style={{alignSelf: 'center'}}
        />
        <View
          style={[
            styles.Indicator,
            {
              backgroundColor:
                activeIndex === 0 ? colors.white : colors.light_grey,
            },
          ]}></View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onChange(1)}
        style={{width: widthPercentage(33)}}>
        <Entypo
          name="video-camera"
          size={24}
          color={colors.white}
          style={{alignSelf: 'center'}}
        />
        <View
          style={[
            styles.Indicator,
            {
              backgroundColor:
                activeIndex === 1 ? colors.white : colors.light_grey,
            },
          ]}></View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onChange(2)}
        style={{width: widthPercentage(33)}}>
        <FontAwesome
          name="photo"
          size={24}
          color={colors.white}
          style={{alignSelf: 'center'}}
        />
        <View
          style={[
            styles.Indicator,
            {
              backgroundColor:
                activeIndex === 2 ? colors.white : colors.light_grey,
            },
          ]}></View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomIndicator;
const styles = StyleSheet.create({
  Indicator: {
    height: 1,
    marginTop: 12,
  },
});
