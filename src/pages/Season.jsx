import { Text, View } from 'react-native';
import AnimeList from '../components/AnimeList';
import { useAnimeSeason } from '../hooks/useFetchAnime';

const Season = () => {
  const { animes, loading } = useAnimeSeason();
  return (
    <View>
      {loading ? <Text>Loading...</Text> : <AnimeList animes={animes} />}
    </View>
  );
};

export default Season;
