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
    <View>
      <Image source={require("./../../assets/iut.png")} />
      <Text style={styles.textStyle}>Department of CSE</Text>
      <Text style={styles.textStyle}>Programme SWE</Text>
      <Button title="My Profile" />
      <Button title="Semester Wise Course List" />
      <Button title="List of Faculty Members" />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
});

export default HomeScreen;
