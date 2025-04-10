This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.







// REACT NATIVE ENVIORNMENT SETUP STEP BY STEP

1. Install Homebrew (Package Manager)
Homebrew is a popular package manager for macOS, which will help in installing other dependencies.
* Open the Terminal app on your Mac.
* Install Homebrew by pasting the following command and hitting Enter:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


* After installation, make sure Homebrew is correctly installed by typing:
* brew --version
* If you see the version number, you're good to go. 


2. Install Node.js and npm
React Native relies on Node.js, so you need to install it along with npm (Node Package Manager).
* Run the following command to install Node.js using Homebrew:
 brew install node

   Once the installation is complete, verify by checking the installed versions:
node --version
npm --version




3. Install Watchman
Watchman is a tool developed by Facebook to watch changes in the filesystem. It's required for React Native development.
* Install Watchman with Homebrew:
brew install watchman




4. Install Xcode Command Line Tools
React Native requires some tools that come with Xcode, which includes compilers and other development tools.
* Install the command line tools by running:

xcode-select --install

* Once installed, make sure everything is set up properly by running:
* xcode-select -p


5. Install Xcode
Xcode is needed for building iOS apps.
* Go to the Mac App Store and search for Xcode.
* Download and install Xcode (it may take a while depending on your internet connection).
* Once installed, open Xcode and accept the license agreement.
* Open Xcode and go to Preferences → Locations, and ensure the Command Line Tools are set to the latest version of Xcode.



6. Install CocoaPods
CocoaPods is a dependency manager for iOS projects. React Native uses it for managing iOS project dependencies.
* Install CocoaPods using the following command:
sudo gem install cocoapods


* After installation, verify it by checking the version:
pod --version



7. Install React Native CLI
React Native provides two options for development: Expo and the React Native CLI. Here, we’ll set up the React Native CLI.
* Install React Native CLI globally using npm:
npm install -g react-native-cli


8. Set Up Android Development Environment (Optional)
If you need to develop for Android as well, you’ll need to install Android Studio and set up the Android development environment.
* Download Android Studio from the official website.
* During installation, make sure to select the Android SDK and Android Virtual Device options.
* Once installed, open Android Studio and configure the SDK by going to Preferences → Appearance & Behavior → System Settings → Android SDK.


After setting up Android Studio, you’ll need to add the Android SDK path to your /.bash_profile (or /.zshrc if you're using Zsh).
* Add the following lines at the end of the file:
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools


* Reload the terminal configuration:
source ~/.bash_profile



9. Clone the GitHub Repository
You should now have the development environment ready to go. Next, clone the project repository from GitHub (if the client has shared it).
* In the terminal, navigate to the folder where you want the project to be cloned:
cd path/to/your/directory


* Clone the repo:
git clone <repository-url>



10. Install Project Dependencies
After cloning the repository, navigate to the project folder:
cd <project-folder>

* Install the required project dependencies:
npm install or yarn install


11. Running the App on iOS
Once everything is set up, you can run the app on an iOS simulator or a physical device.
* To run on the iOS simulator:
npx react-native run-ios


12. Running the App on Android (Optional)
If you want to run the app on an Android device or emulator:
* First, make sure the Android emulator is running or a device is connected.
* Run the following command:
npx react-native run-android


This should help you set up your local development environment on their Mac for React Native development.

