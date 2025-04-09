import {View, Modal, TouchableWithoutFeedback} from 'react-native';
import React, {useRef} from 'react';
import {Dimensions} from 'react-native';
import ActionMenu from '../components/ActionMenu';
import {Animated} from 'react-native';

const {height, width} = Dimensions.get('window');
type Props = {
  onClose: () => void;
};
const ActionModal = ({onClose}: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Modal visible transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View
          style={{
            width,
            height,
            backgroundColor: 'rgba(0,0,0,0.4)',
            alignItems: 'center',
          }}>
          <ActionMenu onClose={onClose} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ActionModal;
