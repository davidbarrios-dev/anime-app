import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// Pages
import Season from '../pages/Season';
import Search from '../pages/Search';
import Detail from '../pages/Detail';
import { StyleSheet } from 'react-native';
import IconTabBar from './IconTabBar';
import theme from '../theme';

const SearchStackNavitgator = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <SearchStackNavitgator.Navigator initialRouteName="SearchAnime">
      <SearchStackNavitgator.Screen
        name="SearchAnime"
        component={Search}
        options={{
          title: 'Search anime',
          headerTitleAlign: 'center',
        }}
      />
      <SearchStackNavitgator.Screen name="Detail" component={Detail} />
    </SearchStackNavitgator.Navigator>
  );
};
const SeasonStack = () => {
  return (
    <SearchStackNavitgator.Navigator initialRouteName="SeasonAnime">
      <SearchStackNavitgator.Screen
        name="SeasonAnime"
        component={Season}
        options={{
          title: 'Season anime',
          headerTitleAlign: 'center',
        }}
      />
      <SearchStackNavitgator.Screen name="Detail" component={Detail} />
    </SearchStackNavitgator.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Season"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: { ...styles.tabBar, ...styles.shadow },
      }}
    >
      <Tab.Screen
        name="Season"
        component={SeasonStack}
        options={{
          tabBarShowLabel: false,
          title: 'Season Animes',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <IconTabBar iconName="home" text="Season Animes" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarShowLabel: false,
          title: 'Search anime',
          tabBarIcon: ({ color }) => (
            <IconTabBar iconName="search-web" text="Search" color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    elevation: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 70,
  },
  shadow: {
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
