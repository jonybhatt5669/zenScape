import { useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { SearchBarProps } from 'react-native-screens';

const defaultSearchOptions: SearchBarProps = {
  headerIconColor: '#fff',
  hideWhenScrolling: false,
};

export const useNavigationSearch = ({ options }: { options?: SearchBarProps }) => {
  const [search, setSearch] = useState('');

  const navigate = useNavigation();

  const handleOnChangeText: SearchBarProps['onChangeText'] = ({ nativeEvent: { text } }) => {
    setSearch(text);
  };

  useLayoutEffect(() => {
    navigate.setOptions({
      headerSearchBarOptions: {
        ...defaultSearchOptions,
        ...options,

        onChangeText: handleOnChangeText,
      },
    });
  }, [options, navigate]);
  return search;
};
