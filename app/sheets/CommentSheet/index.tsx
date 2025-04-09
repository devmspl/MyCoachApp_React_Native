import {Text, FlatList, TouchableOpacity, Share, TextInput} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

import {SHEETS} from './../sheets';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native';
import {COLORS} from '../../styles';
import {RegularText, SmallText} from '../../components/MyText';

const data2 = {
  des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore.',
  tags: '#india #comment #foryou #popularpage #art #insta #fyp #instamood #trend #pop #happy #share #new #instalike #youtube #life #f #meme',
};
const data = [
  {
    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore.',
  },
  {
    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore. adipisicing elit. Perspiciatis,',
  },
  {
    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore.',
  },
  {
    des: 'Lorem ipsum dolor sit amet consectetur, et consectetur, adipisicing elit. Perspiciatis,  adipisicing elit. Perspiciatis, labore.',
  },
  {
    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore.',
  },
  {
    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore.',
  },
  {
    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore.',
  },
  {
    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore.',
  },
  {
    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore.',
  },
];

const CommentSheet = (props: any) => {
  const [isFav, setIsFav] = React.useState(false);
  const close = () => {
    SheetManager.hide(SHEETS.CommentSheet);
  };

  return (
    <ActionSheet
      containerStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
      }}
      id={props.sheetId}
      gestureEnabled>
      <View style={{marginBottom: 30}}>
        <View style={{height: '91.5%', marginBottom: 5}}>
          <FlatList
            data={data}
            // ListHeaderComponent={() => {
            //   return <View style={{margin: 10}}></View>;
            // }}
            renderItem={({item}) => {
              return (
                <View style={{margin: 10}}>
                  <View
                    style={{
                      marginRight: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                        gap: 5,
                      }}>
                      <View
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 45,
                          backgroundColor: 'grey',
                        }}></View>
                      <View style={{flex: 1}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            height: 20,
                            borderRadius: 45,
                            // backgroundColor: 'lightgray',
                            flex: 1,
                          }}>
                          <RegularText
                            bold
                            style={{
                              color: COLORS.black,
                              fontSize: 13,
                              marginRight: 5,
                            }}>
                            anny_wilson
                          </RegularText>
                          <RegularText
                            style={{
                              color: COLORS.grey,
                              fontSize: 10,
                              marginTop: 3,
                            }}>
                            6 hours
                          </RegularText>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            // backgroundColor: 'blue',
                          }}>
                          <RegularText
                            style={{
                              fontSize: 13,
                              // marginVertical: 5,
                              color: COLORS.black,
                            }}>
                            {item.des}
                          </RegularText>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10,
                            marginTop: 10,
                          }}>
                          <SmallText>9 likes</SmallText>
                          <SmallText>Reply</SmallText>
                        </View>
                      </View>
                      <AntDesign
                        style={{marginTop: 15}}
                        name={isFav ? 'heart' : 'hearto'}
                        color={isFav ? 'red' : COLORS.grey}
                        size={12}
                        onPress={() => {
                          setIsFav(!isFav);
                        }}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        opacity: 0.6,
                        gap: 10,
                      }}></View>
                  </View>
                </View>
              );
            }}
            // ListFooterComponent={() => {
            //   return (
            //     <View
            //       style={{
            //         flexDirection: 'row',
            //         alignItems: 'center',
            //         marginHorizontal: 20,
            //       }}>
            //       <View
            //         style={{
            //           backgroundColor: 'grey',
            //           width: 40,
            //           height: 40,
            //           borderRadius: 40,
            //         }}></View>
            //       <TextInput
            //         style={{
            //           flex: 1,
            //           marginHorizontal: 10,
            //           borderWidth: 1,
            //           borderColor: 'lightgray',
            //           borderRadius: 30,
            //           height: 45,
            //           paddingLeft: 10,
            //         }}
            //         placeholder="Your comment"
            //       />
            //       <RegularText style={{color: COLORS.primary}} bold>
            //         Post
            //       </RegularText>
            //     </View>
            //   );
            // }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <View
            style={{
              backgroundColor: 'grey',
              width: 40,
              height: 40,
              borderRadius: 40,
            }}></View>
          <TextInput
            style={{
              flex: 1,
              marginHorizontal: 10,
              borderWidth: 1,
              borderColor: 'lightgray',
              borderRadius: 30,
              height: 45,
              paddingLeft: 10,
            }}
            placeholder="Your comment"
          />
          <RegularText style={{color: COLORS.primary}} bold>
            Post
          </RegularText>
        </View>
      </View>
    </ActionSheet>
  );
};

export default CommentSheet;
