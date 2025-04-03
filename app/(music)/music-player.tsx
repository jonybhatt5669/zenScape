/* eslint-disable prettier/prettier */
import { Audio } from 'expo-av';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
export default function MusicPlayer() {
  const { title, artist, image } = useLocalSearchParams();

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  // Load and play the audio
  async function loadAndPlayAudio() {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: '' }, { shouldPlay: false });

      setSound(sound);

      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        setDuration(status.durationMillis || 1800000);
      }

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setPosition(status.positionMillis || 0);
          setIsPlaying(status.isPlaying);
        }
      });
    } catch (error) {
      console.error('Error loading audio:', error);
    }
  }
  // Play or pause the audio
  async function playPauseAudio() {
    if (!sound) return;
    if (!isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  }

  // useEffect(() => {
  //   loadAndPlayAudio();
  //   return () => {
  //     if (sound) {
  //       sound.unloadAsync();
  //     }
  //   };
  // }, []);

  // Format time (e.g., 1:56)
  const formatTime = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Calculate progress percentage for the bar
  const progress = duration ? (position / duration) * 100 : 0;

  return (
    <View className="flex-1 items-center justify-center bg-primary p-4">
      {/** Album Art */}
      <View className="mb-6 h-64 w-64 rounded-lg">
        <Image
          source={{ uri: typeof image === 'string' ? image : 'https://via.placeholder.com/256' }}
          className="h-full w-full rounded-lg"
        />
      </View>
      {/** Song Info */}
      <View>
        <Text className="text-2xl font-bold">{title}</Text>
        <Text className="text-2xl font-medium">{artist}</Text>
      </View>
      {/** Progress Bar */}
      <View className="mb-6 w-full px-4">
        <View className="mb-2 flex-row justify-between">
          <Text className="text-sm text-neutral">{formatTime(position)}</Text>
          <Text className="text-sm text-neutral">{formatTime(duration)}</Text>
        </View>
        <View className="h-1 w-full rounded-full">
          <View className="h-1 rounded-full bg-neutral" style={{ width: `${progress}%` }} />
        </View>
      </View>
      {/* Playback Controls */}
      <View className="w-2/3 flex-row items-center justify-between">
        <TouchableOpacity>
          <Text className="text-white">Icon</Text>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-ful bg-red-500 p-4" onPress={playPauseAudio}>
          <Text className="text-3xl text-white">{isPlaying ? '⏸' : '▶'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
