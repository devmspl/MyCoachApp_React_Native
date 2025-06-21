import {registerSheet} from 'react-native-actions-sheet';
import GenderSelectSheet from './GenderSelectSheet';
import CameraAndGalleryOption from './CameraAndGalleryOption';
import AddNewBudgetSheet from './AddNewBudgetSheet';
import FilterSheet from './FilterSheet';
import CashFlowActionSheet from './CashflowActionSheet';

export const SHEETS = {
  AddNewBudgetSheet: 'AddNewBudgetSheet',
  CameraAndGalleryOption: 'CameraAndGalleryOption',
  GenderSelectSheet: 'GenderSelectSheet',
  FilterSheet: 'FilterSheet',
  CashFlowActionSheet: 'CashFlowActionSheet',
};

registerSheet(SHEETS.AddNewBudgetSheet, AddNewBudgetSheet);
registerSheet(SHEETS.CameraAndGalleryOption, CameraAndGalleryOption);
registerSheet(SHEETS.GenderSelectSheet, GenderSelectSheet);
registerSheet(SHEETS.FilterSheet, FilterSheet);
registerSheet(SHEETS.CashFlowActionSheet, CashFlowActionSheet);

