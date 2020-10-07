import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const FacultyListScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>1. Dr. Fazlul Hasan Siddiqui</Text>
      <Text style={styles.textStyle}>2. Ashraful Alam</Text>
      <Text style={styles.textStyle}>3. Mohayeminul Islam</Text>
      <Text style={styles.textStyle}>4. Sabbir Ahmed</Text>
      <Text style={styles.textStyle}>5. Tasnim Ahmed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "green",
    padding: 10,
  },
});

export default FacultyListScreen;
