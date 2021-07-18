import React, { useState } from 'react';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import Gate from "./components/Gate";
import store, { persistor } from "./redux/store";

const cacheImages = images => images.map(image =>{
  if(typeof image === "string"){
    return Image.prefetch(image);
  } else {                          
    return Asset.fromModule(image).downloadAsync();
  }
});

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = () => {
    const images = [
      require("./assets/loginBg.jpg"),
  "https://blog.kakaocdn.net/dn/95jT7/btqQCAwEbDf/m30lmOx9xg7fKaPzQsFfJ1/img.jpg"
];
  const fonts = [Ionicons.font]
  const imagePromises = cacheImages(images);
  const fontPromises = cacheFonts(fonts);
  return Promise.all([...fontPromises, ...imagePromises])
  }
  return isReady ? (
    <Provider store={store}>                    
      <PersistGate persistor={persistor}>       
        <Gate />
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading 
      onError={console.error} 
      onFinish={handleFinish} 
      startAsync={loadAssets} 
    />
  );
}