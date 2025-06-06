import {registerSheet} from 'react-native-actions-sheet';
import GenderSelectSheet from './GenderSelectSheet';
import CameraAndGalleryOption from './CameraAndGalleryOption';
import AddNewBudgetSheet from './AddNewBudgetSheet';
import FilterSheet from './FilterSheet';

export const SHEETS = {
  AddNewBudgetSheet: 'AddNewBudgetSheet',
  CameraAndGalleryOption: 'CameraAndGalleryOption',
  GenderSelectSheet: 'GenderSelectSheet',
  FilterSheet: 'FilterSheet',
};

registerSheet(SHEETS.AddNewBudgetSheet, AddNewBudgetSheet);
registerSheet(SHEETS.CameraAndGalleryOption, CameraAndGalleryOption);
registerSheet(SHEETS.GenderSelectSheet, GenderSelectSheet);
registerSheet(SHEETS.FilterSheet, FilterSheet);
