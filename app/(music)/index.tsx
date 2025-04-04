import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import library from '../../assets/data/library.json';

import { unknownAlbumImageUri } from '~/src/constants/images';
import { useNavigationSearch } from '~/src/hooks/useNavigationSearch';
import { IMusicTrack } from '~/src/interfaces/MusicTrackInterface';
import { trackTitleFilter } from '~/src/utils/filterTracks';

export default function MusicScreen() {
  const { mood } = useLocalSearchParams();
  const search = useNavigationSearch({
    options: {
      placeholder: 'Search for tracks',
      hideWhenScrolling: false,
      textColor: '#fff',
    },
  });
  const filterList = useMemo(() => {
    if (!search) return library;
    return library.filter(trackTitleFilter(search));
  }, [search]);
  const renderTrack = ({ item }: { item: IMusicTrack }) => (
    <View className="flex-row items-center rounded bg-secondary-900 px-4 py-2">
      {/* Album Art */}
      <Image
        source={{ uri: item.artwork ? item.artwork : unknownAlbumImageUri }}
        className="mr-4 h-12 w-12 rounded"
      />
      {/* Track Info */}
      <View className="flex-1">
        <Text numberOfLines={1} className="text-base font-semibold text-white">
          {item.title}
        </Text>
        <Text className="text-sm text-gray-400">{item.artist}</Text>
      </View>
      {/* Play Button */}
      <Link
        href={{
          pathname: '/(music)/music-player',
          params: {
            title: item.title,
            artist: item.artist,
            image: item.artwork ? item.artwork : unknownAlbumImageUri,
          },
        }}
        asChild>
        <Pressable className="size-12 items-center justify-center rounded-full bg-primary-50 ">
          <AntDesign name="caretright" size={16} color="white" />
        </Pressable>
      </Link>
    </View>
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerLargeStyle: {
            backgroundColor: '#1f1f20',
          },
          headerLargeTitle: true,
          headerTintColor: '#fff',
          title: ` ${mood} Playlists `,
          headerTransparent: true,
          headerBlurEffect: 'dark',
          headerShadowVisible: false,
        }}
      />
      <SafeAreaView className="flex-1 bg-primary-400 ">
        {/* <View className="border-b border-gray-700 p-4">
        <Text className="text-3xl font-semibold text-neutral-100">Music for {mood}</Text>
      </View> */}

        <FlatList
          data={filterList}
          style={{
            gap: 4,
            marginHorizontal: 10,
          }}
          renderItem={renderTrack}
          keyExtractor={(item) => item.url}
          contentContainerStyle={{
            paddingTop: 50,
            paddingBottom: 100,
            gap: 6,
            borderRadius: 10,
          }}
        />
      </SafeAreaView>
    </>
  );
}
