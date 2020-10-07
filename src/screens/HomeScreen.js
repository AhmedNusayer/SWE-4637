import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

const HomeScreen = (props) => {
  //console.log(props);
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={require("./../../assets/iut.png")} />
      <Text style={styles.textStyle}>Department of CSE</Text>
      <Text style={styles.textStyle}>Programme SWE</Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Profile");
          console.log("My Profile button clicked");
        }}
        style={styles.appButtonContainer}
      >
        <Text>My Profile</Text>
      </TouchableOpacity>
      <Button
        title="Semester Wise Course List"
        onPress={function () {
          props.navigation.navigate("Semesters");
        }}
      />
      <Button
        title="List of Faculty Members"
        onPress={function () {
          props.navigation.navigate("Faculty List");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "blue",
    padding: 10,
  },
  appButtonContainer: {
    elevation: 20,
    backgroundColor: (122, 122, 50),
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});

export default HomeScreen;
