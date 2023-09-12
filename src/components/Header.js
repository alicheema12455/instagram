import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../Theme/colors';
import {fontSizes} from '../utilities/constants';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function ProfileHeader({userName}) {
  return (
    <View style={styles.header_container}>
      <View style={styles.user_name_content}>
        <EvilIcons
          name="lock"
          size={24}
          color={colors.white}
          style={styles.icon_style}
        />
        <Text style={styles.user_name_txt}>{userName}</Text>
        <Entypo
          name="chevron-small-down"
          size={24}
          color={colors.white}
          style={styles.icon_style}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.add_btn_container}>
          <MaterialIcons name="add" size={24} color={colors.white} />
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={{marginHorizontal: 20}}>
            <SimpleLineIcons
              name="menu"
              size={24}
              color={colors.white}
              style={styles.icon_style}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 5,
  },
  user_name_content: {
    flexDirection: 'row',
    marginLeft: 5,
    justifyContent: 'center',
  },
  user_name_txt: {
    color: colors.white,
    fontSize: fontSizes.h2,
    fontWeight: '550',
    marginTop: 5,
  },
  add_btn_container: {
    borderWidth: 1.5,
    justifyContent: 'center',
    borderColor: colors.white,
    borderRadius: 5,
    marginTop: 7.5,
    paddingHorizontal: -3,
  },
  icon_style: {
    marginTop: 7.5,
  },
});
