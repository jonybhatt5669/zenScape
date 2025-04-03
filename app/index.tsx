import { Link, Stack } from 'expo-router';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from '~/src/components/Container';

export default function Home() {
  const moods = ['Happy', 'Sad', 'Calm', 'Energetic'];
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-primary p-4">
        <Text className="mb-4 text-4xl font-bold text-neutral">How is your mood now?</Text>
        {/** Mood selection */}
        <View className="flex-row flex-wrap justify-between gap-4 ">
          <FlatList
            data={moods}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Link
                asChild
                href={{ pathname: '/(music)', params: { mood: item } }}
                key={item}
                className="mx-2.5">
                <Pressable className="size-20 items-center justify-center rounded-full bg-secondary">
                  <Text className="text-lg font-semibold text-neutral">{item}</Text>
                </Pressable>
              </Link>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
