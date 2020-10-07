import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen.js";
import ProfileScreen from "./src/screens/ProfileScreen.js";
import FacultyListScreen from "./src/screens/FacultyListScreen.js";
import SemestersScreen from "./src/screens/SemestersScreen.js";
import CourseListScreen1 from "./src/screens/CourseListScreen1.js";
import CourseListScreen2 from "./src/screens/CourseListScreen2.js";
import CourseListScreen3 from "./src/screens/CourseListScreen3.js";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Profile" component={ProfileScreen} />
        <stack.Screen name="Faculty List" component={FacultyListScreen} />
        <stack.Screen name="Semesters" component={SemestersScreen} />
        <stack.Screen name="Course List1" component={CourseListScreen1} />
        <stack.Screen name="Course List2" component={CourseListScreen2} />
        <stack.Screen name="Course List3" component={CourseListScreen3} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
