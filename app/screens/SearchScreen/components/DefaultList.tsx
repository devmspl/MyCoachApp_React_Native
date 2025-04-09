import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import {Image} from 'react-native';
import {feedList} from '../../../utils/dummy';
import {RegularText, SmallText} from '../../../components/MyText';
import {COLORS} from '../../../styles';

const ListHeaderComponent = () => {
  const [tags, setTags] = React.useState([
    'Trending',
    'Discover',
    'Posts',
    'Shorts',
    'Trending',
    'Discover',
    'Posts',
    'Shorts',
    'Trending',
    'Discover',
    'Posts',
    'Shorts',
    'Trending',
    'Discover',
    'Posts',
    'Shorts',
  ]);
  return (
    <FlatList
      horizontal
      contentContainerStyle={{marginVertical: 10}}
      showsHorizontalScrollIndicator={false}
      data={tags}
      renderItem={({item, index}) => {
        const active = index === 0;
        return (
          <View style={{margin: 5}}>
            <RegularText
              style={{
                color: active ? COLORS.white : COLORS.primary,
                backgroundColor: active ? COLORS.primary : COLORS.white,
                padding: 8,
                borderRadius: 20,
                paddingHorizontal: 10,
                borderWidth: 2,
                borderColor: COLORS.primary,
              }}>
              {item}
            </RegularText>
          </View>
        );
      }}
    />
  );
};

const DefaultList = () => {
  return (
    <FlatList
      data={[...feedList, ...feedList, ...feedList, ...feedList]}
      ListHeaderComponent={() => {
        return <ListHeaderComponent />;
      }}
      numColumns={3}
      renderItem={({item}) => {
        return (
          <View
            style={{
              backgroundColor: 'red',
              height: 120,
              margin: 2,
              flex: 1,
            }}>
            <Image
              source={{uri: item.image}}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
              }}
            />
          </View>
        );
      }}
    />
  );
};

export default DefaultList;
