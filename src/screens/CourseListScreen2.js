import React from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";

const CourseListScreen2 = () => {
  const course = [
    { name: "1. HUM 4247", key: "1" },
    { name: "2. HUM 4249", key: "2" },
    { name: "3. Math 4241", key: "3" },
    { name: "4. CSE 4203", key: "4" },
    { name: "5. CSE 4205", key: "5" },
    { name: "6. SWE 4201", key: "6" },
  ];

  return (
    <View>
      <Text style={styles.textStyle1}>Second Semester</Text>
      <FlatList
        data={course}
        renderItem={function ({ item }) {
          return <Text style={styles.textStyle2}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 25,
    color: "green",
    alignItems: "center",
    paddingLeft: "25%",
    paddingTop: "10%",
    paddingBottom: "10%",
  },
  textStyle2: {
    fontSize: 20,
    color: "blue",
    alignItems: "center",
    paddingLeft: 20,
    paddingTop: 20,
  },
});

export default CourseListScreen2;
