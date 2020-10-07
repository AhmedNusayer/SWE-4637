import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={require("./../../assets/profile.jpg")} />
      <Text style={styles.textStyle}>Name : Ahmed Nusayer Ashik</Text>
      <Text style={styles.textStyle}>Student ID : 170042086</Text>
      <Text style={styles.textStyle}>Room No : Non Residential</Text>
      <Text style={styles.textStyle}>Email : nusayerashik@iut-dhaka.edu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "green",
    padding: 10,
    textAlign: "left",
  },
});

export default ProfileScreen;
