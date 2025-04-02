/* eslint-disable prettier/prettier */
import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const staticTracks = [
  {
    id: '1',
    title: 'PROTECTION CHARM',
    artist: 'MIGUEL ANGELES',
    image:
      'https://images.unsplash.com/photo-1575285113814-f770cb8c796e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhcnRpc3R8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '2',
    title: 'KEEP UP // FROSTB...',
    artist: 'ODETARI',
    image:
      'https://images.unsplash.com/photo-1592685530128-2f32bf8fe0fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  { id: '3', title: 'void', artist: 'ISQ', image: 'https://via.placeholder.com/50' },
  {
    id: '4',
    title: "SHE'LL KILL YOU",
    artist: "L'ORCHESTRE CINEMATIQUE",
    image: 'https://via.placeholder.com/50',
  },
  {
    id: '5',
    title: 'Up In The What?',
    artist: 'FTR Melo',
    image: 'https://via.placeholder.com/50',
  },
  {
    id: '6',
    title: 'Me and the Devil',
    artist: 'Rythmrebel',
    image: 'https://via.placeholder.com/50',
  },
  { id: '7', title: 'Aleph', artist: 'Gesaffelstein', image: 'https://via.placeholder.com/50' },
  { id: '8', title: 'Tyler', artist: 'angfun', image: 'https://via.placeholder.com/50' },
  { id: '9', title: 'Electro World', artist: 'Perfume', image: 'https://via.placeholder.com/50' },
];

interface Track {
  id: string;
  title: string;
  artist: string;
  image: string;
}
export default function MusicScreen() {
  const { mood } = useLocalSearchParams();
  const renderTrack = ({ item }: { item: Track }) => (
    <View className="flex-row items-center rounded bg-secondary px-4 py-2">
      {/* Album Art */}
      <Image source={{ uri: item.image }} className="mr-4 h-12 w-12 rounded" />
      {/* Track Info */}
      <View className="flex-1">
        <Text className="text-base font-semibold text-white">{item.title}</Text>
        <Text className="text-sm text-gray-400">{item.artist}</Text>
      </View>
      {/* Play Button */}
      <Pressable className="size-14 items-center justify-center rounded-full bg-neutral ">
        <Text className="text-center text-2xl text-[#191919]">▶</Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#6d6d6d',
          },
          headerTintColor: '#fff',
          title: 'Playlists',
        }}
      />
      <View className="border-b border-gray-700 p-4">
        <Text className="text-3xl font-semibold text-neutral">Music for {mood}</Text>
      </View>
      <FlatList
        data={staticTracks}
        style={{
          gap: 4,
          marginHorizontal: 10,
        }}
        renderItem={renderTrack}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingVertical: 10,
          gap: 6,
          borderRadius: 10,
        }}
      />
    </SafeAreaView>
  );
}
