import {Platform} from 'react-native';

export const defaultHitSlop = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
};

export const IS_IOS = (Platform.OS = 'ios');
export const IS_ANDROID = (Platform.OS = 'android');
