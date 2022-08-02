import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import theme from '../theme';
import StyledText from './StyledText';

const AnimeItem = ({
  mal_id: id,
  images,
  title,
  episodes,
  synopsis,
  year,
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('Detail', {
          id,
          images,
          title,
          episodes,
          synopsis,
          year,
        })
      }
    >
      <View key={id} style={styles.container}>
        <Image style={styles.image} source={{ uri: images.jpg.image_url }} />
        <StyledText style={styles.text}>{title}</StyledText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '40%',
    padding: 0,
    backgroundColor: theme.colors.primary,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 200,
  },
  image: {
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    flex: 1,
    color: theme.colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default AnimeItem;
