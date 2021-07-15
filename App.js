import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import { Text, Image } from 'react-native';

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
  const loadAssets = async () => {
    const images = [
      require("./assets/loginBg.jpg"),
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Febenezersuites.com%2Fhome%2Fairbnb-logo%2F&psig=AOvVaw1nvmxtozHJBe-U0j7iYZey&ust=1626415945104000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCND24de15PECFQAAAAAdAAAAABAI"
];
  const fonts = [Ionicons.font]
  const imagePromises = cacheImages(images);
  const fontPromises = cacheFonts(fonts);
  return Promise.all([...fontPromises, ...imagePromises])
  }
  return isReady ? (<Text>I'm ready</Text>) : (
  <AppLoading 
  onError={console.error} 
  onFinish={handleFinish} 
  startAsync={loadAssets} />
  );
}