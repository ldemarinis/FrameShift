import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
  Baloo2_800ExtraBold,
} from '@expo-google-fonts/baloo-2';
import {
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans';
import { View, ActivityIndicator } from 'react-native';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  const [onboarded, setOnboarded] = useState(false);

  const [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_500Medium,
    Baloo2_600SemiBold,
    Baloo2_700Bold,
    Baloo2_800ExtraBold,
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFBF5' }}>
        <ActivityIndicator color="#FF4F35" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {!onboarded ? (
        <OnboardingScreen onComplete={() => setOnboarded(true)} />
      ) : (
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}
