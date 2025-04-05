import { Stack } from 'expo-router';
import { View } from 'react-native';

import { FloatingPlayer } from '~/src/components/FloatingPlayer';
export default function Layout() {
  return (
    <View className="flex-1 bg-primary-400">
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="music-player"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <FloatingPlayer />
    </View>
  );
}
