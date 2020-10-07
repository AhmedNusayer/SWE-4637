import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const SemestersScreen = (props) => {
  return (
    <View style={styles.buttonView}>
      <Button
        title="1st Semester"
        onPress={function () {
          props.navigation.navigate("Course List1");
        }}
      />
      <Button
        title="2nd Semester"
        onPress={function () {
          props.navigation.navigate("Course List2");
        }}
      />
      <Button
        title="3rd Semester"
        onPress={function () {
          props.navigation.navigate("Course List3");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: "98%",
    padding: 30,
  },
});

export default SemestersScreen;
