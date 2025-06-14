import { Tabs, Stack } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="pointers"
        options={{
          title: 'Pointers',
          headerShown: false,
        }}/>
    </Stack>
  );
}
