import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widthPercentage} from '../../utilities/constants';
import colors from '../../Theme/colors';
import Feather from 'react-native-vector-icons/Feather';
export default function TagMediaItem({item, index, navigation}) {
  return (
    <View>
      <Image source={item.image} style={styles.ItemImg} resizeMode="cover" />
      {item.isVideo === true ? (
        <View style={styles.durationContainer}>
          <Feather name="play" size={24} color={colors.white} />
          <Text style={styles.durationTxt}>{item.duration}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  ItemImg: {
    width: widthPercentage(32.5),
    marginHorizontal: 1,
    marginVertical: 1,
    height: 120,
  },
  durationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  durationTxt: {
    color: colors.white,
    fontSize: 12,
    marginTop: 2,
  },
});
