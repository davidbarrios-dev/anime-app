import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import theme from '../theme';
import { useState } from 'react';
import { useAnimeSearch } from '../hooks/useFetchAnime';
import AnimeList from '../components/AnimeList';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const { animes, loading } = useAnimeSearch(searchInput);

  const searchAnime = () => {
    console.log(search);
    setSearchInput(search);
    console.log('no me llaman');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={{ ...styles.input, ...styles.shadow }}
        onChangeText={setSearch}
        value={search}
        onSubmitEditing={searchAnime}
      />
      {loading ? <Text>Loading...</Text> : <AnimeList animes={animes} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 110,
  },
  input: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 10,
    padding: 10,
    backgroundColor: theme.colors.white,
  },
  shadow: {
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 10,
  },
});

export default Search;
