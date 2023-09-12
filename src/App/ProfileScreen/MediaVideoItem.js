import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widthPercentage} from '../../utilities/constants';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../Theme/colors';
export default function MediaVideoItem({item, index, navigation}) {
  return (
    <View>
      <Image source={item.image} style={styles.ItemImg} resizeMode="cover" />
      <View style={styles.durationContainer}>
        <Feather name="play" size={24} color={colors.white} />
        <Text style={styles.durationTxt}>{item.duration}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ItemImg: {
    width: widthPercentage(32.5),
    marginHorizontal: 1,
    marginVertical: 1,
    height: 220,
  },
  durationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  durationTxt: {
    color: colors.white,
    fontSize: 12,
    marginTop: 2,
  },
});
