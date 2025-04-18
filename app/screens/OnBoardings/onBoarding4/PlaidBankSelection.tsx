import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import MainLayout from '../../../components/MainLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import {MyText} from '../../../components/MyText';

interface Bank {
  id: string;
  name: string;
  website: string;
  logo: any;
}

const BANKS: Bank[] = [
  {
    id: '1',
    name: 'Wells Fargo',
    website: 'www.wellsfargo.com',
    logo: 'https://s3-alpha-sig.figma.com/img/15cb/9b98/2cf3ca6c2a9b71b9147798897c6cd384?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ri3ckT-f60STJzwxpkmoDErxRje3spYBzAbBoprTGBTglhFUgsF2GGb4orFMMwUqLQ5G0d3JLUltbTsrSfnv6HnTOnI~4oSCxRcBCPlgrFqWr4yu7BodDBOr584CNIkgJ5Wi~dpFKUXNN9oDPXzruBoghfQDDLEnHaTAZlVggSCf3z2hbVGYZJGWz~0V9pQHs9L1qtDDruoY8l6FO6G3au0qlLczwc0K-VlTsuJjjw~AyYX0kUWB5NWKTZFwTnfPgo0z7hyj2ATWk8IjwGlFz7j4HONv-QfMKEnNRRnl7kDpjDvI2i6PywMIZugt7XtOBqydfGY1VpUo~Tl--fV1Dw__',
  },
  {
    id: '2',
    name: 'Huntington Bank',
    website: 'www.huntington.com',
    logo: 'https://s3-alpha-sig.figma.com/img/75f6/b62d/26e4f38a47fd29fcb7c4595d521af62e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e5Rho9aZvDu-kpBykn8H8G3lfd1RlErFOXW5zSJWtD8b6tzn1sB5tuhawWkHh-K4I8LUphja5oz-JHzvu-XyW~nvXafQQYEzKYQZTRxmLCH-XwlsziJCNsA3k1bfV9njStVTmYOlKYcjedJL09OF2PkkCDDPzC2ywK19XmvT5PwuZSje9ATphwbZGlwaDVgdzLVy7eF3YX4rFcFG9Egl9juGGi6GpDxxuF0Kx7cJOw7fB4tggZt9MUczjkrOaPVzLaNzB2Poocd~~1XOE1aOJpgau~s70-CUwRUhQYs9LUCmwl8M7Hj418QUG-8-rqAXzGT-XJdacbSc-6kbZ1qyiQ__',
  },
  {
    id: '3',
    name: 'Ally',
    website: 'www.ally.com',
    logo: 'https://s3-alpha-sig.figma.com/img/3eee/b1e8/d8d4eede06770ccd9b567185485e3f4c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BDKgf7XB7mlSS523-0cV6KcMqel6Zl4P9zmA15LG1SxHSE5iksJDc~R-ZPgaudbQww6R4rkZpm0UTnnDLVQoTB9XRz1B2tNB~d9EeNpcq99KqIGUXG7Oks9x2MSdhbdCw2iwl1dFGO9H0fXRp3rGIiiyKEy6EgvZTp9Rl~mY4i8KA8cnDvhRrCnAg6zrOD1-5E15HLG7jxVVNjRzLuW-tlGQFMN2opDw4kI93-VlyU73pIzBDbfqy~ZZK-BiCCPPlAe-i0jIMWYQ-lef-rRUe2rDcnIb-VsxRfUAIhDkFtv~tvjbe0Pehnzm7zpvoKRKOg0epvjv22mZQetD1LdLGg__',
  },
  {
    id: '4',
    name: 'American Express',
    website: 'www.amex.com',
    logo: 'https://s3-alpha-sig.figma.com/img/d519/fd7c/f8daa2a6fa69439ca4774a20c4037512?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T5wsYpJg~MzqJqJJbRd0A2SVlqNA7aueZZ5T9PKEEjh-1gXFt9iPHWv~xTN~RLsvwLiPzG-kEPvIq3zz5o~mcoWk5xjmAd-Hcn37DY-vYU0oK5WGwvwX~aaxUZ0rtHXcPhf2lGLTSF300LlXPf~xLEejCIKQPAF5a0gWJm8LyEwnccvusB28cjvKVgHYITYcJwxYQu13mxEk4o5KYezh53Su0JBy8V0bjtVV8wR-JgSJRLIwXVn5KFU3kKYsszmHZzJ3W5SuWD2Tnl4~Bx7gRCvJaCOojIfu4xpUGRuj3UMPTpYm9vtCxwYvXdIwtIAdtPvgtm~~y-6xHWmWJI71MQ__',
  },
  {
    id: '5',
    name: 'USAA',
    website: 'www.usaa.com',
    logo: 'https://s3-alpha-sig.figma.com/img/bcbc/32d8/d4cbd87e999a0d3bf2513d310d167ba0?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B1StsVqv8SW54wA3k1GDpIu7sYOY7d1RrszYBAOm9z3BfhDBdZ1ocZS1-GiT~atHXqp3BRf4FEAA3t10qHxWPOxMXc0eT-3q00lzwgojxM4JfXduO4T4DdoBBbpuCTXgWo0rHTVmlMyn3bkR4i30852d4cK9IwYgmMENhxNRlNdRh0qH75S~wH8uanhTmYelG~8lgYGKUMG4YWz5Z6UR5~-tTZ0nxC5RDV0k1cymjuImiZQES4s3Azd04YHI4768Io-hf1Lczqa-HyCes8s122Riss~fUPxKGR0egBdcIIFVtWijAWTkSzAfTw~UcJcuFL6ILVvBwcXpxG1D4scQ2w__',
  },
  {
    id: '6',
    name: 'Fidelity',
    website: 'https://www.fidelity.com/',
    logo: 'https://s3-alpha-sig.figma.com/img/c824/33aa/296780db1270cc012a1c81b088e6ddf8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YvUDQodXlKxvQN-Iwa5Em~MiSp5416Q9X7Xjjj8H-KfgxIqvHw1ay3vIzgka4nTcX8a26xJyUzWDh3A~JHj738jmsMHR~ULM-L~av4N1CNMxnxj9~qC4uSgFZPtNUhFCX3npsizfNRCzK7cEJTfx7xSJHBOfFyojXMxyEGftVBJ48SuKFNFpPyhISixKcHFA~FvPA~53dhvUVdpFn4oAq4~-X6bKAVieXesRrwCQU4ywEPpGcSD5oYnr6Rjn0YHopxlQA2exOQhcq4H96ab4JXmMu2ZrMEV-dX~T-UNltJJJxWUXD~lP6o4rL4skEjcHg30CI~dsPXJY3msv-jAdCw__',
  },
  {
    id: '7',
    name: 'Discover',
    website: 'https://www.discover.com/',
    logo: 'https://s3-alpha-sig.figma.com/img/137d/cc02/9bbff9c005303f484081dd38d86274ae?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nVpE2r0K99VGEl0PNlCBwFY-Adnbl7Omq~63mUg8zChuouph23fr~y3L7lEWmZDFTGspsHNZInx33E2Srxs1lsK8sW00yfjqsyLdRu3PFmD1g6c7AydM8P8aRHfBNV~eaFq3yzjgkrdI8Ly3EKSNXOZ3iNQfquIuJ9uQz4TBoUuW2dF72gQ1urTDBfsWL4XqMyXsDLI2kWaA7-Ws1tDDl-WMVomXr1A8R1P1b3oX85gH6u8rEr335bGzWgWiHMATJF9c~letUgvYCd3Bs15dGmMBxdFtmuCRdGIJt~aV4cUfroZ4W0NZJw2qd7YEmMrASdE6SUSvfb~GhZEwvcDGeQ__',
  },
];

const PlaidBankSelectionScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredBanks, setFilteredBanks] = React.useState<Bank[]>(BANKS);

  const handleSearch = React.useCallback((text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredBanks(BANKS);
    } else {
      const filtered = BANKS.filter(bank =>
        bank.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredBanks(filtered);
    }
  }, []);

  const renderBankItem = ({item}: {item: Bank}) => (
    <TouchableOpacity
      style={styles.bankItem}
      onPress={() => {
        navigation.navigate('OnboardingFive');
      }}>
      <Image source={{uri: item.logo}} style={styles.bankLogo} />
      <View style={styles.bankInfo}>
        <MyText style={styles.bankName}>{item.name}</MyText>
        <MyText style={styles.bankWebsite}>{item.website}</MyText>
      </View>
    </TouchableOpacity>
  );

  return (
    <MainLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={24}
            color="black"
          />
          <View style={styles.slideView}>
            <View
              style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
            <View
              style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
            <View
              style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
            <View
              style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
          </View>
          <AntDesign name="arrowleft" size={1} color="white" />
        </View>

        <View style={styles.titleContainer}>
          <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE['1.5xl']}>
            Provide Your Bank Details
          </MyText>
          <MyText style={styles.subtitle} size={FONT_SIZE.sm} color={'#71717A'}>
            Providing your bank account helps you to link and manage your
            finances better.
          </MyText>
        </View>

        <View style={styles.contentSection}>
          <View style={styles.plaidContainer}>
            <TouchableOpacity style={styles.backButtonPlaid}>
              <AntDesign
                onPress={() => {}}
                name="arrowleft"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <View style={styles.plaidLogoContainer}>
              <Image
                source={require('../../../../assets/images/plaid-logo.png')}
                style={styles.plaidLogoImage}
              />
            </View>
            <TouchableOpacity style={styles.closeButton}>
              <AntDesign
                onPress={() => {}}
                name="close"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.bankSelectionContainer}>
            <MyText style={styles.bankSelectionTitle}>Select your bank</MyText>
            <View style={styles.searchContainer}>
              <AntDesign
                onPress={() => {}}
                name="search1"
                size={24}
                color="#71717A"
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search here..."
                value={searchQuery}
                onChangeText={handleSearch}
                placeholderTextColor="#71717A"
              />
            </View>

            <FlatList
              data={filteredBanks}
              renderItem={renderBankItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              style={styles.bankList}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidView: {
    flex: 1,
  },
  slideView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginVertical: 20,
  },
  btn: {
    borderRadius: 10,
    width: 40,
    height: 8,
    backgroundColor: COLORS.grey,
  },
  titleContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
    marginTop: 30,
  },
  subtitle: {
    lineHeight: 22,
    marginTop: 10,
  },
  contentSection: {
    backgroundColor: 'white',
    flex: 1,
  },
  plaidContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 12,
  },
  backButtonPlaid: {
    padding: 8,
  },
  plaidLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plaidLogoImage: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bankSelectionContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  bankSelectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#0000001A',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  searchInput: {
    height: 48,
    fontSize: 16,
  },
  bankList: {
    flex: 1,
  },
  bankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  bankLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bankInfo: {
    flex: 1,
  },
  bankName: {
    fontSize: 16,
    fontWeight: '500',
  },
  bankWebsite: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default PlaidBankSelectionScreen;
