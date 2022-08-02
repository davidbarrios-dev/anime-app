import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import StyledText from '../components/StyledText';
import theme from '../theme';

const Detail = ({ navigation, route }) => {
  const defaultText = 'N/A';
  const { id, images, title, episodes, synopsis, year } = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
          <StyledText align="center" style={styles.title} fontWeight='bold'>
            {title}
          </StyledText>
          <Image
            style={styles.image}
            source={{ uri: images.jpg.image_url }}
          ></Image>
          <View style={styles.section}>
            <View>
              <StyledText align="center">Episodes:</StyledText>
              <StyledText align="center" fontWeight="bold">
                {episodes ? episodes : defaultText}
              </StyledText>
            </View>
            <View>
              <StyledText align="center">Year:</StyledText>
              <StyledText align="center" fontWeight="bold">
                {year ? year : defaultText}
              </StyledText>
            </View>
          </View>
          <StyledText style={styles.synopsisTitle}>Synopsis</StyledText>
          <StyledText align="center" style={styles.synopsisText}>
            {synopsis ? synopsis : defaultText}
          </StyledText>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: 500,
    alignSelf: 'center',
    marginBottom: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.heading,
    marginBottom: 10,
  },
  synopsisTitle: {
    marginTop: 10,
    marginLeft: 40,
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subHeading,
  },
  synopsisText:{
    marginHorizontal: 40,
    textAlign: 'justify'
  },
  safeArea: {
    flex: 1,
    marginBottom: 90,
  },
});

export default Detail;
