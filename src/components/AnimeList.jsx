import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import AnimeItem from './AnimeItem';
import StyledText from './StyledText';

const AnimeList = ({ animes }) => {
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={animes}
          renderItem={({ item: anime }) => <AnimeItem {...anime} />}
          numColumns={2}
          ListEmptyComponent={()=>(<StyledText>No hay resultados</StyledText>)}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
  },
});

export default AnimeList;
