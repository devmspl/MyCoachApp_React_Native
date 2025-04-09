export type RootStackParams = {
  Splash: undefined;
  OnBoarding: undefined;
  OnboardingOne: undefined;
  OnboardingTwo: undefined;
  OnboardingThree: undefined;
  OnboardingFour: undefined;
  OnboardingFive: undefined;
  Welcome: undefined;
  Signup: undefined;
  PrivacyPolicy: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  VerifyOtp: undefined;
  SetNewPassword: { token: string };
  DrawerNavigator: undefined;
  Pdf: undefined;
  YourActivity: undefined;
  Setting: undefined;
  CloseFriends: undefined;
  Favorite: undefined;
  Saved: undefined;
  ArchivePosts: undefined;
  FillProfile: undefined;
  PostCreate: undefined;
  PostSubmit: { selectImages: any };
  MainTab: undefined;
  StoryScreen: undefined;
  OthersStory: undefined;
};

// TABS ====>
export type TabNavigatorParams = {
  Home: undefined;
  Content: undefined;
  Create: undefined;
  Savings: undefined;
  Transactions: undefined;
};

export type DashboardStackParams = {
  DashboardScreen: undefined;
  Notification: undefined;
  DevelopmentCourse: undefined;
  SearchResult: undefined;
  Filter: undefined;
  CourseDetail: { courseId: string };
  MobileCourses: undefined;
  WebCourses: undefined;
  OtherCourses: undefined;
  JobsScreen: undefined;
  ContactUs: undefined;
  VideoPlayer: { videoUri: string };
  ConnectionLost: undefined;
  Pdf: undefined;
};

export type ProfileStackStackParams = {
  Profile: { postId: string };
  OthersProfile: undefined;
  EditProfile: undefined;
  Follower: undefined;
  Following: undefined;
  PostView: undefined;
  QrScreen: undefined;
  Setting: undefined;
};

export type HomeStackParams = {
  Home: undefined;
  StoryScreen: undefined;
  Activity: undefined;
  Message: undefined;
  ChatScreen: undefined;
  OtherUserProfile: { otherUserId: string };
};

export type TransactionsStackParams = {
  Transactions: undefined;
};
export type ContentStackParams = {
  Content: undefined;
};
export type CreateStackParams = {
  Create: undefined;
};
export type SavingsStackParams = {
  Savings: undefined;
};
