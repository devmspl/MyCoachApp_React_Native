import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {COLORS} from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, setFilters } from '../redux/feature/home/filterSlice';
import { RootState } from '../redux';
import { SheetManager } from 'react-native-actions-sheet';
import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const categories = ['Food', 'Clothes', 'Electricity', 'Bills', 'Vacation', 'Phones'];
const periods = ['Custom', 'This week', 'Last week', 'Current month'];

const CashFlowActionSheet = React.forwardRef<ActionSheetRef, { onClose?: () => void }>((props, ref) => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.homeFilter);

  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const startDate = filters.startDate ? new Date(filters.startDate) : new Date();
  const endDate = filters.endDate ? new Date(filters.endDate) : new Date();

  const handleCategorySelect = (category: string) => {
    dispatch(setFilters({
      selectedCategory: filters.selectedCategory === category ? null : category,
    }));
  };

  const handlePeriodSelect = (period: string) => {
    dispatch(setFilters({ selectedPeriod: period }));
  };

  const handleApply = () => {
    SheetManager.hide('CashFlowActionSheet');
    props.onClose?.();
  };

  const handleClearAll = () => {
    dispatch(clearFilters());
    props.onClose?.();
  };

  const handleClose = () => {
    SheetManager.hide('CashFlowActionSheet');
    props.onClose?.();
  };

  return (
    <ActionSheet ref={ref} gestureEnabled>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Filters</Text>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Category</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.chipScrollContainer}>
              {categories.map(category => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.chip,
                    filters.selectedCategory === category &&
                      styles.chipSelected,
                  ]}
                  onPress={() => handleCategorySelect(category)}>
                  <Text
                    style={[
                      styles.chipText,
                      filters.selectedCategory === category &&
                        styles.chipTextSelected,
                    ]}>
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Period</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.chipScrollContainer}>
              {periods.map(period => (
                <TouchableOpacity
                  key={period}
                  style={[
                    styles.chip,
                    filters.selectedPeriod === period &&
                      styles.chipSelectedPeriod,
                  ]}
                  onPress={() => handlePeriodSelect(period)}>
                  <Text
                    style={[
                      styles.chipText,
                      filters.selectedPeriod === period &&
                        styles.chipTextSelectedPeriod,
                    ]}>
                    {period}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {filters.selectedPeriod === 'Custom' && (
            <View style={styles.section}>
              <Text style={styles.dateLabel}>Start date</Text>
              <TouchableOpacity
                style={styles.dateInputWrapper}
                onPress={() => setOpenStart(true)}
              >
                <Text style={styles.dateInputText}>
                  {filters.startDate ? filters.startDate : 'Select start date'}
                </Text>
                <MaterialIcons name="calendar-today" size={22} color="#888" />
              </TouchableOpacity>
              <DatePicker
                modal
                open={openStart}
                date={startDate}
                mode="date"
                onConfirm={date => {
                  setOpenStart(false);
                  dispatch(setFilters({ startDate: date.toISOString().slice(0, 10) }));
                }}
                onCancel={() => setOpenStart(false)}
              />

              {/* End Date */}
              <Text style={styles.dateLabel}>End date</Text>
              <TouchableOpacity
                style={styles.dateInputWrapper}
                onPress={() => setOpenEnd(true)}
              >
                <Text style={styles.dateInputText}>
                  {filters.endDate ? filters.endDate : 'Select end date'}
                </Text>
                <MaterialIcons name="calendar-today" size={22} color="#888" />
              </TouchableOpacity>
              <DatePicker
                modal
                open={openEnd}
                date={endDate}
                mode="date"
                onConfirm={date => {
                  setOpenEnd(false);
                  dispatch(setFilters({ endDate: date.toISOString().slice(0, 10) }));
                }}
                onCancel={() => setOpenEnd(false)}
              />
            </View>
          )}
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton} onPress={handleClearAll}>
            <Text style={styles.clearButtonText}>Clear all</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 34,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  closeButton: {
    padding: 4,
  },
  closeText: {
    fontSize: 20,
    color: '#666',
  },
  content: {
    paddingHorizontal: 24,
    maxHeight: 400,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  chipScrollContainer: {
    paddingRight: 24,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 8,
  },
  chipSelected: {
    backgroundColor: COLORS.yellow,
  },
  chipSelectedPeriod: {
    backgroundColor: COLORS.yellow,
  },
  chipText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  chipTextSelected: {
    color: '#000000',
  },
  chipTextSelectedPeriod: {
    color: '#000000',
  },
  dateInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fafafa',
  },
  dateInputText: {
    flex: 1,
    color: '#333',
    fontSize: 16,
  },
  dateLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
    marginTop: 8,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 12,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  clearButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
  },
  clearButtonText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CashFlowActionSheet;

