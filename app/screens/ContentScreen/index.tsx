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
  Animated,
  Platform,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {Video as VideoComponent, VideoRef} from 'react-native-video';
import {COLORS, DH, DW, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setIsContentScreenFocued} from '../../redux/feature/content/contentSlice';
import {RootState} from '../../redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CameraOptions, launchCamera} from 'react-native-image-picker';
import {requestCameraPermission} from '../../utils/permission';
import Octicons from 'react-native-vector-icons/Octicons';

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
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const flatListRef = React.useRef<any>(null);
  const videoRef = React.useRef<VideoRef[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);
  const [videoOnLoad, setVideoOnLoad] = React.useState<{[key: string]: any}>(
    {},
  );

  const animatedButton = React.useRef(new Animated.Value(0)).current;

  const {isContentScreenFocued} = useSelector(
    (state: RootState) => state.content,
  );

  const onVideoEnd = (id: string) => {
    if (id) {
      setVideoOnLoad(prev => ({...prev, [id]: false}))
    }
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

  const buttonStyle = {
    opacity: animatedButton.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        scale: animatedButton.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.3],
        }),
      },
    ],
  };

  const onCameraClick = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    const options: CameraOptions = {
      mediaType: 'video',
      videoQuality: 'high',
      durationLimit: 30,
      saveToPhotos: true,
    };

    launchCamera(options, res => {
      if (res.assets && res.assets.length > 0) {
        const asset = res.assets[0];
        console.log('vdo file info:', asset);
      }
    });
  };

  React.useEffect(() => {
    dispatch(setIsContentScreenFocued(isFocused));
  }, []);

  React.useEffect(() => {
    Animated.timing(animatedButton, {
      toValue: !isContentScreenFocued ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isContentScreenFocued]);

  React.useEffect(() => {
    const handleAppStateChange = (state: string) => {
      console.log('videoRef.current', videoRef.current);
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

  const renderItem = ({item, index}: any) => {
    return (
      <View style={styles.videoContainer}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <VideoComponent
            ref={e => handleVideoRef(e, index)}
            source={{uri: item.video_url}}
            resizeMode="cover"
            repeat={false}
            onEnd={() => onVideoEnd(item.id)}
            paused={
              currentIndex !== index || !isContentScreenFocued || !isFocused
            }
            style={styles.video}
            muted={false}
            volume={1}
            onBuffer={({ isBuffering }) =>
              setVideoOnLoad(prev => ({...prev, [item.id]: isBuffering}))
            } 
          />
        </TouchableWithoutFeedback>

        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../../assets/icon/white-back.png')}
              style={styles.headerIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <MyText
            bold={FONT_WEIGHT.bold}
            size={FONT_SIZE.xl}
            color={COLORS.white}>
            Montage
          </MyText>

          <TouchableOpacity onPress={onCameraClick}>
            <Image
              source={require('../../../assets/icon/white-camera.png')}
              style={styles.headerIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {videoOnLoad[item.id] && (
          <ActivityIndicator
            size="large"
            color={COLORS.white}
            style={styles.loader}
          />
        )}

        <TouchableOpacity
          style={styles.playButton}
          onPress={() => {
            dispatch(setIsContentScreenFocued(!isContentScreenFocued));
          }}>
          <Animated.View style={buttonStyle}>
            <Text>
              {isContentScreenFocued ? (
                <AntDesign name="pausecircle" size={60} color="white" />
              ) : (
                <AntDesign name="play" size={60} color="white" />
              )}
            </Text>
          </Animated.View>
        </TouchableOpacity>

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
              <Image source={{uri: item.avatar}} style={[styles.avatar]} />
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
          <Pressable
            style={styles.iconButton}
            onPress={() => setIsLiked(!isLiked)}>
            <Octicons
              name={isLiked ? 'heart-fill' : 'heart'}
              size={28}
              color={isLiked ? 'red' : 'white'}
            />
            <Text style={styles.iconText}>{item.likes}</Text>
          </Pressable>
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
    height: Platform.OS === 'ios' ? DH : DH * 0.8829,
    backgroundColor: '#000',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 3,
    width: DW,
    top: Platform.OS === 'ios' ? 70 : 50,
    paddingHorizontal: 10,
  },
  headerIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginRight: 20,
  },
  loader: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    position: 'absolute',
    zIndex: 2,
    width: DW,
    height: DH * 0.8,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },
  videoDetails: {
    position: 'absolute',
    zIndex: 3,
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
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderWidth: 5,
    borderColor: 'transparent',
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
    zIndex: 3,
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
