import {StyleSheet} from 'react-native';
import colors from '../../Theme/colors';
import {fontSizes} from '../../utilities/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  profile_img: {
    width: 80,
    height: 80,
    borderRadius: 60,
  },
  basic_txt: {
    color: colors.white,
    fontSize: fontSizes.h3 - 1,
    fontWeight: '500',
  },
  numberTxt: {
    color: colors.white,
    fontSize: fontSizes.h3 + 2,
    fontWeight: 'bold',
  },
  following_section: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  number_txt_background: {
    color: colors.white,
    fontSize: fontSizes.h3,
    fontWeight: '500',
    paddingHorizontal: 7.5,
    paddingVertical: 1,
    marginHorizontal: 15,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  add_user_btn: {
    backgroundColor: colors.secondary, // Set the background color of the button from the 'colors' module
    paddingHorizontal: 5,
    marginLeft: 10,
    elevation: 2, // Add elevation for a visual effect
    paddingVertical: 4, // Add vertical padding inside the button
    borderRadius: 7.5, // Set the border radius to create rounded corners
    alignSelf: 'center', // Align the button to the center horizontally within its parent container
  },
  list_header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
