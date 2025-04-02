import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

import { Container } from '~/src/components/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Container>
        <Text className="text-4xl font-semibold">Let the music {'\n'}handle your mood</Text>
        <View>
          <Text className="text-lg">How is your mood now</Text>
        </View>
      </Container>
    </>
  );
}
