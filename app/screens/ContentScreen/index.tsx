import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableHighlight,
  AppState,
  TouchableWithoutFeedback,
} from 'react-native';
import {Video as VideoComponent, VideoRef} from 'react-native-video';
import {COLORS, DH, DW, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setIsContentScreenFocued} from '../../redux/feature/content/contentSlice';
import {RootState} from '../../redux';

const videos = [
  {
    id: '1',
    avatar:
      'https://s3-alpha-sig.figma.com/img/c147/98cf/5293c57333d6b58c079ca634d833acf3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Sy8EdQ1gWnL2BWHOzRGh8A8tdv7~v9YFJC7fs~XTe7~08zzDk37d0j~y3bTGeOZS3s0M1vESujJPKICrROcuB7qo4XdRuDE5SAgt6NOUD-h5dogRCJ79J67jl9W6jTVEHLhRwux7WFhx9GzKEkogcGO-VvBfLiu6M~0TCk3RLaq6A1b7k4hS1vwUbl5X1ztQcIJ3BapCwcXvBWUX51ubx79188yyxmkcA1v2XAVdhB2~SZEGXXOO5PNORBJI9fi8mk9HhUs1hRf-UevHhvpB0j6X0wzrkzzc0QdbsznHTjpz5q8ZmiE37tN-zETIZVkBiPApG3l8XuZ7mdrInn07DA__',
    userId: '100',
    isVarified: true,
    isFollowed: false,
    hasStatus: true,
    video_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    sound: 'ORIGINAL - Drop that by justine beiber',
    username: '@vikash',
    caption: 'Exploring tech trends 🚀',
    likes: '66k',
    comments: '6.4k',
    share: '16k',
    repeat: '16.5k',
  },
  {
    id: '2',
    avatar:
      'https://s3-alpha-sig.figma.com/img/c147/98cf/5293c57333d6b58c079ca634d833acf3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Sy8EdQ1gWnL2BWHOzRGh8A8tdv7~v9YFJC7fs~XTe7~08zzDk37d0j~y3bTGeOZS3s0M1vESujJPKICrROcuB7qo4XdRuDE5SAgt6NOUD-h5dogRCJ79J67jl9W6jTVEHLhRwux7WFhx9GzKEkogcGO-VvBfLiu6M~0TCk3RLaq6A1b7k4hS1vwUbl5X1ztQcIJ3BapCwcXvBWUX51ubx79188yyxmkcA1v2XAVdhB2~SZEGXXOO5PNORBJI9fi8mk9HhUs1hRf-UevHhvpB0j6X0wzrkzzc0QdbsznHTjpz5q8ZmiE37tN-zETIZVkBiPApG3l8XuZ7mdrInn07DA__',
    userId: '100',
    isVarified: false,
    isFolowed: true,
    hasStatus: false,
    video_url:
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    sound: null,
    username: '@john',
    caption: 'Chillin on a weekend 🏖️',
    likes: '66k',
    comments: '6.4k',
    share: '16k',
    repeat: '16.5k',
  },
  {
    id: '3',
    avatar:
      'https://s3-alpha-sig.figma.com/img/c147/98cf/5293c57333d6b58c079ca634d833acf3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Sy8EdQ1gWnL2BWHOzRGh8A8tdv7~v9YFJC7fs~XTe7~08zzDk37d0j~y3bTGeOZS3s0M1vESujJPKICrROcuB7qo4XdRuDE5SAgt6NOUD-h5dogRCJ79J67jl9W6jTVEHLhRwux7WFhx9GzKEkogcGO-VvBfLiu6M~0TCk3RLaq6A1b7k4hS1vwUbl5X1ztQcIJ3BapCwcXvBWUX51ubx79188yyxmkcA1v2XAVdhB2~SZEGXXOO5PNORBJI9fi8mk9HhUs1hRf-UevHhvpB0j6X0wzrkzzc0QdbsznHTjpz5q8ZmiE37tN-zETIZVkBiPApG3l8XuZ7mdrInn07DA__',
    userId: '100',
    isVarified: true,
    isFolowed: false,
    hasStatus: true,
    video_url: 'https://www.w3schools.com/html/movie.mp4',
    sound: 'ORIGINAL - Drop that by justine beiber',
    username: '@sara',
    caption: 'Dance vibes 💃🔥',
    likes: '66k',
    comments: '6.4k',
    share: '16k',
    repeat: '16.5k',
  },
  {
    id: '4',
    avatar:
      'https://s3-alpha-sig.figma.com/img/c147/98cf/5293c57333d6b58c079ca634d833acf3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Sy8EdQ1gWnL2BWHOzRGh8A8tdv7~v9YFJC7fs~XTe7~08zzDk37d0j~y3bTGeOZS3s0M1vESujJPKICrROcuB7qo4XdRuDE5SAgt6NOUD-h5dogRCJ79J67jl9W6jTVEHLhRwux7WFhx9GzKEkogcGO-VvBfLiu6M~0TCk3RLaq6A1b7k4hS1vwUbl5X1ztQcIJ3BapCwcXvBWUX51ubx79188yyxmkcA1v2XAVdhB2~SZEGXXOO5PNORBJI9fi8mk9HhUs1hRf-UevHhvpB0j6X0wzrkzzc0QdbsznHTjpz5q8ZmiE37tN-zETIZVkBiPApG3l8XuZ7mdrInn07DA__',
    userId: '100',
    isVarified: true,
    isFolowed: false,
    hasStatus: false,
    video_url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    sound: 'ORIGINAL - Drop that by justine beiber',
    username: '@lisa',
    caption: 'Behind the scenes 🎬',
    likes: '66k',
    comments: '6.4k',
    share: '16k',
    repeat: '16.5k',
  },
  {
    id: '5',
    avatar:
      'https://s3-alpha-sig.figma.com/img/c147/98cf/5293c57333d6b58c079ca634d833acf3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Sy8EdQ1gWnL2BWHOzRGh8A8tdv7~v9YFJC7fs~XTe7~08zzDk37d0j~y3bTGeOZS3s0M1vESujJPKICrROcuB7qo4XdRuDE5SAgt6NOUD-h5dogRCJ79J67jl9W6jTVEHLhRwux7WFhx9GzKEkogcGO-VvBfLiu6M~0TCk3RLaq6A1b7k4hS1vwUbl5X1ztQcIJ3BapCwcXvBWUX51ubx79188yyxmkcA1v2XAVdhB2~SZEGXXOO5PNORBJI9fi8mk9HhUs1hRf-UevHhvpB0j6X0wzrkzzc0QdbsznHTjpz5q8ZmiE37tN-zETIZVkBiPApG3l8XuZ7mdrInn07DA__',
    userId: '100',
    isVarified: false,
    isFollowed: true,
    hasStatus: true,
    video_url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    sound: null,
    username: '@mike',
    caption: 'Nature walk 🌿',
    likes: '66k',
    comments: '6.4k',
    share: '16k',
    repeat: '16.5k',
  },
];

const ContentScreen = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const flatListRef = React.useRef<any>(null);
  const videoRef = React.useRef<VideoRef[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const {isContentScreenFocued} = useSelector(
    (state: RootState) => state.content,
  );

  const onVideoEnd = () => {
    if (currentIndex < videos.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
      const currentVideo = videoRef.current[currentIndex];
      currentVideo?.seek(0);
    }
  };

  const handleVideoRef = React.useCallback(
    (e: VideoRef | null, index: any) => {
      videoRef.current[index] = e ?? videoRef.current[index];
    },
    [currentIndex, videoRef],
  );

  const onVideoScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.y / DH);
    setCurrentIndex(index);
    const currentVideo = videoRef.current[index];
    currentVideo?.seek(0);
  };

  React.useEffect(() => {
    const handleAppStateChange = (state: string) => {
      const shouldPouse = state !== 'active' || !isContentScreenFocued;
      if (shouldPouse) {
        videoRef.current[currentIndex]?.pause();
      } else if (state === 'active') {
        videoRef.current[currentIndex]?.resume();
      }
    };

    const AppStateStatus = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      AppStateStatus?.remove();
    };
  }, [currentIndex, videoRef]);

  React.useEffect(() => {
    dispatch(setIsContentScreenFocued(isFocused));
  }, []);

  const renderItem = ({item, index}: any) => {
    console.log(
      'index === currentIndex',
      index === currentIndex,
      index,
      currentIndex,
    );
    // if (index === currentIndex) {
    //   dispatch(setIsContentScreenFocued(false));
    // } else {
    //   dispatch(setIsContentScreenFocued(true));
    // }
    return (
      <View style={styles.videoContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            dispatch(setIsContentScreenFocued(!isContentScreenFocued));
          }}>
          <VideoComponent
            ref={e => handleVideoRef(e, index)}
            source={{uri: item.video_url}}
            resizeMode="cover"
            repeat={false}
            onEnd={onVideoEnd}
            paused={
              currentIndex !== index || !isContentScreenFocued || !isFocused
            }
            style={styles.video}
            muted={false}
            volume={1}
          />
        </TouchableWithoutFeedback>

        <View style={styles.videoDetails}>
          {item.sound && (
            <View style={styles.soundContainer}>
              <Image
                source={require('../../../assets/icon/yellow-music-note.png')}
                style={styles.soundIcon}
              />
              <Text style={styles.soundText}>{item.sound}</Text>
            </View>
          )}
          <Text style={styles.caption}>{item.caption}</Text>
          <View style={styles.userDetails}>
            <TouchableHighlight
              style={[
                styles.avatarContainer,
                item.hasStatus && {
                  borderColor: COLORS.greenTeal,
                  borderWidth: 2,
                },
              ]}>
              <Image
                source={{uri: item.avatar}}
                style={[styles.avatar, item.hasStatus && {padding: 10}]}
              />
            </TouchableHighlight>
            <Text style={styles.username}>{item.username}</Text>
            {item.isVarified && (
              <Image
                source={require('../../../assets/icon/white-verified.png')}
                style={styles.verifiedIcon}
              />
            )}

            {!item.isFollowed && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {}}
                style={styles.followBtn}>
                <MyText
                  size={FONT_SIZE.l}
                  color={'black'}
                  bold={FONT_WEIGHT.bold}>
                  Follow
                </MyText>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../../../assets/icon/white-heart.png')}
              style={styles.icon}
            />
            <Text style={styles.iconText}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../../../assets/icon/white-comment.png')}
              style={styles.icon}
            />
            <Text style={styles.iconText}>{item.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../../../assets/icon/white-send.png')}
              style={styles.icon}
            />
            <Text style={styles.iconText}>{item.share}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../../../assets/icon/white-repeat.png')}
              style={styles.icon}
            />
            <Text style={styles.iconText}>{item.repeat}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../../../assets/icon/white-more-horizontal.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      data={videos}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      bounces={false}
      onScroll={onVideoScroll}
      onMomentumScrollEnd={onVideoScroll}
    />
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    width: DW,
    height: DH * 0.8815,
    backgroundColor: '#000',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  videoDetails: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    gap: 10,
  },
  soundContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  soundIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  soundText: {
    fontSize: 14,
    color: COLORS.white,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  username: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
  },
  verifiedIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  followBtn: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  caption: {
    color: '#fff',
    fontSize: 14,
  },
  actionButtons: {
    position: 'absolute',
    right: 15,
    bottom: 0,
    alignItems: 'center',
  },
  iconButton: {
    marginBottom: 25,
    alignItems: 'center',
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  iconText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 13,
  },
});
export default ContentScreen;
