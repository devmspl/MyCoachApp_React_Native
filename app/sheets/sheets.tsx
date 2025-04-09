import {registerSheet} from 'react-native-actions-sheet';
import ProfileOptionSheet from './ProfileOptionSheet';
import ShortOptionSheet from './ShortOptionSheet';
import CommentSheet from './CommentSheet';
import GenderSelectSheet from './GenderSelectSheet';
import CameraAndGalleryOption from './CameraAndGalleryOption';
import OthersProfileOptionSheet from './OthersProfileOptionsSheet';
import OthersStoryOptionSheet from './OthersStoryOptionSheet';
import StoryOptionsSheet from './StoryOptionsSheet';
import StoryShareSheet from './StoryShareSheet';
import PostOptionSheet from './PostOptionSheet';

export const SHEETS = {
  ProfileOptionSheet: 'ProfileOptionSheet',
  CameraAndGalleryOption: 'CameraAndGalleryOption',
  ShortOptionSheet: 'ShortOptionSheet',
  CommentSheet: 'CommentSheet',
  GenderSelectSheet: 'GenderSelectSheet',
  OthersProfileOptionSheet: 'OthersProfileOptionSheet',
  OthersStoryOptionSheet: 'OthersStoryOptionSheet',
  StoryOptionsSheet: 'StoryOptionsSheet',
  StoryShareSheet: 'StoryShareSheet',
  PostOptionSheet: 'PostOptionSheet',
};

registerSheet(SHEETS.ProfileOptionSheet, ProfileOptionSheet);
registerSheet(SHEETS.CameraAndGalleryOption, CameraAndGalleryOption);
registerSheet(SHEETS.CommentSheet, CommentSheet);
registerSheet(SHEETS.ShortOptionSheet, ShortOptionSheet);
registerSheet(SHEETS.GenderSelectSheet, GenderSelectSheet);
registerSheet(SHEETS.OthersProfileOptionSheet, OthersProfileOptionSheet);
registerSheet(SHEETS.OthersStoryOptionSheet, OthersStoryOptionSheet);
registerSheet(SHEETS.StoryOptionsSheet, StoryOptionsSheet);
registerSheet(SHEETS.StoryShareSheet, StoryShareSheet);
registerSheet(SHEETS.PostOptionSheet, PostOptionSheet);
