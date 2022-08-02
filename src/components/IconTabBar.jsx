import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const IconTabBar = ({ iconName, text,color, ...props }) => {
  return (
    <View style={styles.iconText}>
      <MaterialCommunityIcons name={iconName} size={24} color={color} />
      <Text style={{color}}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconText: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default IconTabBar;