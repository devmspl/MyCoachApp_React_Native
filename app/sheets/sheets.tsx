import {registerSheet} from 'react-native-actions-sheet';
import GenderSelectSheet from './GenderSelectSheet';
import CameraAndGalleryOption from './CameraAndGalleryOption';
import AddNewBudgetSheet from './AddNewBudgetSheet';

export const SHEETS = {
  AddNewBudgetSheet: 'AddNewBudgetSheet',
  CameraAndGalleryOption: 'CameraAndGalleryOption',
  GenderSelectSheet: 'GenderSelectSheet',
};

registerSheet(SHEETS.AddNewBudgetSheet, AddNewBudgetSheet);
registerSheet(SHEETS.CameraAndGalleryOption, CameraAndGalleryOption);
registerSheet(SHEETS.GenderSelectSheet, GenderSelectSheet);
