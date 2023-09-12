import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import ProfileHeader from '../../components/Header';
import {ProfileImg} from '../../utilities/images';
import colors from '../../Theme/colors';
import Button from '../../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  DiscoverPeopleList,
  UploadImages,
  UploadVideo,
  widthPercentage,
} from '../../utilities/constants';
import DiscoverPeopleItem from './DiscoverPeopleItem';
import CustomIndicator from '../../components/Indicator';
import MediaImagesItem from './MediaImagesItem';
import MediaVideoItem from './MediaVideoItem';
import TagMediaItem from './TagMediaItem';

export default function ProfileScreen({navigation}) {
  const [activeIndicator, setActiveIndicator] = React.useState(0);

  const RenderDiscoverPeople = (item, index) => {
    return (
      <DiscoverPeopleItem item={item} index={index} navigation={navigation} />
    );
  };
  const RenderMediaImages = (item, index) => {
    return (
      <MediaImagesItem item={item} index={index} navigation={navigation} />
    );
  };
  const RenderMediaVideo = (item, index) => {
    return <MediaVideoItem item={item} index={index} navigation={navigation} />;
  };
  const RenderTagMedia = (item, index) => {
    return <TagMediaItem item={item} index={index} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileHeader userName={'_Test_.user123'} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginTop: 20}}>
            <View style={{alignItems: 'center', marginLeft: 15}}>
              <Image
                source={ProfileImg}
                resizeMode="contain"
                style={styles.profile_img}
              />
              <Text style={styles.basic_txt}>_Test_.user123</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: widthPercentage(60),
              justifyContent: 'space-between',
            }}>
            <View style={{justifyContent: 'center'}}>
              <View style={styles.following_section}>
                <Text style={styles.numberTxt}>17</Text>
                <Text style={styles.basic_txt}>Posts</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <View style={styles.following_section}>
                <Text style={styles.numberTxt}>42</Text>
                <Text style={styles.basic_txt}>Followers</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                marginRight: 20,
              }}>
              <View style={styles.following_section}>
                <Text style={styles.numberTxt}>145</Text>
                <Text style={styles.basic_txt}>following</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={styles.number_txt_background}>@96,458,432</Text>
          <View></View>
        </View>
        <Text style={[styles.basic_txt, {marginHorizontal: 15, marginTop: 3}]}>
          Kill them with success and bury them with smile
        </Text>
        <View style={styles.buttonContainer}>
          <Button Title={'Edit profile'} />
          <Button Title={'Share profile'} BtnStyles={{marginLeft: 10}} />
          <TouchableOpacity style={styles.add_user_btn}>
            <Ionicons name="person-add" size={22} color={colors.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.list_header_container}>
          <Text style={styles.basic_txt}>Discover people</Text>
          <TouchableOpacity>
            <Text style={{color: colors.light_blue}}>See all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={DiscoverPeopleList}
          horizontal
          contentContainerStyle={{
            marginTop: 10,
            marginHorizontal: 10,
          }}
          renderItem={({item, index}) => RenderDiscoverPeople(item, index)}
          keyExtractor={item => item.id}
        />
        <CustomIndicator
          activeIndex={activeIndicator}
          onChange={setActiveIndicator}
        />
        {activeIndicator === 0 ? (
          <FlatList
            data={UploadImages}
            horizontal={false}
            contentContainerStyle={{
              marginTop: 2,
              alignSelf: 'center',
            }}
            numColumns={3}
            renderItem={({item, index}) => RenderMediaImages(item, index)}
            keyExtractor={item => item.id}
          />
        ) : activeIndicator === 1 ? (
          <FlatList
            data={UploadVideo}
            horizontal={false}
            contentContainerStyle={{
              marginTop: 2,
              alignSelf: 'center',
            }}
            numColumns={3}
            renderItem={({item, index}) => RenderMediaVideo(item, index)}
            keyExtractor={item => item.id}
          />
        ) : activeIndicator === 2 ? (
          <FlatList
            data={UploadImages}
            horizontal={false}
            contentContainerStyle={{
              marginTop: 2,
              alignSelf: 'center',
            }}
            numColumns={3}
            renderItem={({item, index}) => RenderTagMedia(item, index)}
            keyExtractor={item => item.id}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
