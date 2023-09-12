// Import the 'View' component from React Native
import {View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

export const navigationRef = React.createRef();
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
// Import 'Dimensions' from React Native to get screen dimensions
import {Dimensions} from 'react-native';
import {DiscoverPeople1, DiscoverPeople2, VideoImg1, VideoImg2} from './images';

// Get the screen width and height using 'Dimensions' module
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Function to calculate the width based on a percentage of the screen width
export const widthPercentage = percentage => (screenWidth * percentage) / 100;

// Function to calculate the height based on a percentage of the screen height
export const heightPercentage = percentage => (screenHeight * percentage) / 100;

// Object to define various font sizes
export const fontSizes = {
  h1: 24, // Font size for heading 1
  h2: 20, // Font size for heading 2
  h3: 15, // Font size for heading 3
  h4: 12, // Font size for heading 4
  h5: 10, // Font size for heading 5
};

export const DiscoverPeopleList = [
  {
    id: '1',
    image: DiscoverPeople1,
    user_name: 'Test user 2',
    status: false,
  },
  {
    id: '2',
    image: DiscoverPeople2,
    user_name: 'Test user 3',
    status: true,
  },
  {
    id: '3',
    image: DiscoverPeople2,
    user_name: 'Test user 3',
    status: false,
  },
];
export const UploadImages = [
  {
    id: '1',
    image: DiscoverPeople1,
    isVideo: false,
  },
  {
    id: '2',
    image: DiscoverPeople2,
    isVideo: false,
  },
  {
    id: '3',
    image: VideoImg1,
    isVideo: true,
  },
  {
    id: '4',
    image: DiscoverPeople2,
    isVideo: false,
  },
  {
    id: '5',
    image: VideoImg2,
    isVideo: true,
  },
  {
    id: '6',
    image: DiscoverPeople2,
    isVideo: false,
  },
  {
    id: '7',
    image: DiscoverPeople2,
    isVideo: false,
  },

  {
    id: '8',
    image: VideoImg1,
    isVideo: true,
  },
  {
    id: '9',
    image: DiscoverPeople2,
    isVideo: false,
  },
  {
    id: '34',
    image: DiscoverPeople2,
    isVideo: false,
  },

  {
    id: '3435',
    image: DiscoverPeople2,
    isVideo: false,
  },
  {
    id: '6434',
    image: VideoImg2,
    isVideo: true,
  },
  {
    id: '325566',
    image: VideoImg1,
    isVideo: true,
  },
  {
    id: '423423',
    image: DiscoverPeople2,
    isVideo: false,
  },
];

export const UploadVideo = [
  {
    id: '1',
    image: VideoImg1,
    duration: 10,
  },
  {
    id: '2',
    image: VideoImg2,
    duration: 20,
  },
  {
    id: '3',
    image: VideoImg1,
    duration: 45,
  },
  {
    id: '4',
    image: VideoImg2,
    duration: 40,
  },
  {
    id: '5',
    image: VideoImg1,
    duration: 5,
  },
];
