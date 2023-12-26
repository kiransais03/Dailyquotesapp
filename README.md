# Daily Quotes App(iOS) :

##### Technologies Used : React Native,Expo

#### Dev Tools : VS Code,Github,Snack(Expo)

#### iOS App Development Approach :

--This app is developed on React Native Framework using Expo.

--Initialize the project by installing "eas cli" and create react native app.

--Then the template of the React Native is similar to React App,all the state management methods like Hooks are all same.

--In React Native there are predifined components are available like Buttons,Actions etc basing on Android or iOS default standards.

--I have created two components namely Logo and Quote as the name sugests one for displaying Logo image and anther for displaying Quote data along with author name.

--Then a Button is added to facilitate the user to manually refresh the Quote.

--Generally the process is when we open the app first it will check for the date stored in AsyncStorage if present and compare it with the current date,if they are different it means
  the day is changed and the Quote Of the Day will be refreshed automatically.

--Along with it the background hue will also be changed randomly.User can press on Refresh Daily Quote button to get the new  quote.

--I used  Snack(Expo) online editor and then imported to VS Code for export the code to Local Build for iOS.


### API End Points For Getting Quotes : "https://zenquotes.io/api/random"
   
    -- Each time of call it will give a new quote.

### Steps Required To Initialize And Run Application :

#### Project Intilizing :
-- "npx create-expo-app --template"    - To create new app

-- "npm start"   - To start the app

-- "npx expo start"   -- Another command to start the app

#### Project Builds

-- "npm install -g eas-cli"  --For installing eas Command Line Interface

-- "npx expo install expo-dev-client"   --For installing expo dev client

-- "eas login"       --Create an expo account by opening "www.expo.dev" website and using those credentials login in the terminal of VS Code to connect the repo.

-- "eas build:configure "  --To configure the build and select iOS when it prompts.

-- "eas build -p ios --profile preview"  --Preview keyword in this cmd means to build Local Installable App for iOS.If you need production build you need to have Appstore Developer 
                                            Membership credentials.

  After the build is complete.Go to www.expo.dev website.In projects your new build will be present,by clicking on it we can download the App.
  
### Snack Online Editor Link :  https://snack.expo.dev/@kiransais03/daily-quotes-app

### Attaching Drive Link For iOS App Download :  https://drive.google.com/drive/folders/1lE8VlojJIQNvMlfGM04yTGpnrzpWZtlU

