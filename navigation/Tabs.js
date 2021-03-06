import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movie from "../screens/Movie";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tv"
      screenOptions={{
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Movie" component={Movie} />
      <Tab.Screen
        name="Tv"
        component={Tv}
        options={{
          headerTitleStyle: { color: "gold" },
          headerLeft: () => (
            <View>
              <Text>hi my name is </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
