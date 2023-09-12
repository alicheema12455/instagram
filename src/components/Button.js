// Import necessary components and libraries from React and React Native
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';

// Import colors from the 'colors' module (assuming it contains color definitions)
import colors from '../Theme/colors';
// Import BallIndicator from the library

// Define a functional component called 'Button' with various props
export default function Button({
  onPress,
  Title,
  BtnStyles,
  BtnTextStyles,
  loading,
}) {
  return (
    // TouchableOpacity component for the button with custom styles
    <TouchableOpacity style={[styles.btn, BtnStyles]} onPress={onPress}>
      {/* Text component to display the button title with custom styles */}
      {loading ? (
        <ActivityIndicator color={colors.white} size={20} /> // Show the loading indicator if loading is true
      ) : (
        <Text style={[styles.btnTxt, BtnTextStyles]}>{Title}</Text>
      )}
    </TouchableOpacity>
  );
}

// StyleSheet to define the styles for the components
const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.secondary, // Set the background color of the button from the 'colors' module
    width: '38%', // Set the width of the button to 70% of its parent container
    elevation: 2, // Add elevation for a visual effect
    paddingVertical: 5, // Add vertical padding inside the button
    borderRadius: 10, // Set the border radius to create rounded corners
    alignSelf: 'center', // Align the button to the center horizontally within its parent container
  },
  btnTxt: {
    color: colors.white, // Set the text color of the button from the 'colors' module
    fontSize: 16, // Set the font size of the button text
    fontWeight: '500', // Set the font weight of the button text to bold
    textAlign: 'center', // Align the button text to the center horizontally
  },
});
