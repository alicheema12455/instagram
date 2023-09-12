import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Theme/colors';
import DashboardScreen from '../App/DashboardScreen';
import UploadMedia from '../App/UploadMedia';
import ReelsScreen from '../App/ReelsScreen';
import ProfileScreen from '../App/ProfileScreen';
import SearchFeedScreen from '../App/SearchFeedScreen';
import {ProfileImg} from '../utilities/images';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: [
          {
            height: 70,
            backgroundColor: colors.primary,
          },
        ],
      }}>
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.black,
          tabBarLabelStyle: {
            marginBottom: 20,
            fontSize: 12,
            fontWeight: '500',
          },
          tabBarIcon: ({focused, size, color}) => {
            return !focused ? (
              <MaterialCommunityIcons
                name="home-variant"
                size={24}
                color={colors.white}
                style={{
                  alignSelf: 'center',
                }}
              />
            ) : (
              <MaterialCommunityIcons
                name="home-variant-outline"
                size={24}
                color={colors.white}
                style={{
                  alignSelf: 'center',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchFeedScreen"
        component={SearchFeedScreen}
        options={{
          tabBarLabel: 'Search Feed',
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.black,
          tabBarLabelStyle: {
            marginBottom: 20,
            fontSize: 12,
            fontWeight: '500',
          },
          tabBarIcon: ({focused, size, color}) => {
            return !focused ? (
              <Feather
                name="search"
                size={24}
                color={colors.white}
                style={{
                  alignSelf: 'center',
                }}
              />
            ) : (
              <FontAwesome
                name="search"
                size={24}
                color={colors.white}
                style={{
                  alignSelf: 'center',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="UploadMedia"
        component={UploadMedia}
        options={{
          tabBarLabel: 'Upload Media',
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.black,
          tabBarLabelStyle: {
            marginBottom: 20,
            fontSize: 12,
            fontWeight: '500',
          },
          tabBarIcon: ({focused, size, color}) => (
            <Feather
              name="plus-square"
              size={24}
              color={focused ? colors.white : colors.white}
              style={{
                alignSelf: 'center',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ReelsScreen"
        component={ReelsScreen}
        options={{
          tabBarLabel: 'Reels',
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.black,
          tabBarLabelStyle: {
            marginBottom: 20,
            fontSize: 12,
            fontWeight: '500',
          },
          tabBarIcon: ({focused, size, color}) => (
            <Feather
              name="play"
              size={24}
              color={focused ? colors.white : colors.white}
              style={{
                alignSelf: 'center',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.black,
          tabBarLabelStyle: {
            marginBottom: 20,
            fontSize: 12,
            fontWeight: '500',
          },
          tabBarIcon: ({focused, size, color}) => (
            <Image
              source={ProfileImg}
              style={[
                styles.profile_img,
                {
                  borderWidth: focused ? 2 : 0,
                  borderColor: focused ? colors.white : '',
                },
              ]}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  profile_img: {
    width: 33,
    height: 33,
    borderRadius: 60,
  },
});
