import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import library from '../../assets/data/library.json';

export const FloatingPlayer = () => {
  const mock = library[0];

  return (
    <TouchableHighlight className="absolute bottom-4 left-2.5 right-2.5 z-10  rounded-lg bg-secondary-600/80 px-6 py-3.5">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <Image
            source={{ uri: mock.artwork }}
            style={{ width: 35, height: 35, borderRadius: 50 }}
          />
          <View>
            <Text numberOfLines={1} className="text-lg text-white">
              {mock.title}
            </Text>
            <Text numberOfLines={1} className="text-sm text-neutral-800">
              {mock.artist}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center justify-center gap-2">
          <Ionicons name="heart-outline" size={24} color="white" />
          <Ionicons name="play" size={24} color="white" />
        </View>
      </View>
    </TouchableHighlight>
  );
};
