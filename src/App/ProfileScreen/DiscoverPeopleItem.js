import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../Theme/colors';
import {
  fontSizes,
  heightPercentage,
  widthPercentage,
} from '../../utilities/constants';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
export default function DiscoverPeopleItem({item, index, navigation}) {
  return (
    <View style={styles.ItemContainer}>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={styles.ItemImg}
        />
        <Text style={{color: colors.white}}>{item.user_name}</Text>
      </View>
      <TouchableOpacity style={styles.CrossBtn}>
        <Feather name="x" size={24} color={colors.light_grey} />
      </TouchableOpacity>
      {item.status == true ? (
        <Text
          style={[styles.basic_txt, {textAlign: 'center'}]}
          numberOfLines={2}
          ellipsizeMode="tail">
          Fallowed by test user@1232
        </Text>
      ) : (
        <Text style={[styles.basic_txt, {textAlign: 'center'}]}>
          Suggested for you
        </Text>
      )}
      <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
        <Button
          Title={'follow'}
          BtnStyles={{
            width: widthPercentage(33),
            backgroundColor: colors.light_blue,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ItemContainer: {
    borderWidth: 0.7,
    borderColor: colors.light_grey,
    marginHorizontal: 3,
    width: widthPercentage(44),
    paddingBottom: 60,
  },
  ItemImg: {
    width: 80,
    height: 80,
    borderRadius: 60,
  },
  CrossBtn: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  basic_txt: {
    color: colors.text_label,
    fontSize: fontSizes.h3 - 3,
    fontWeight: '550',
  },
});
