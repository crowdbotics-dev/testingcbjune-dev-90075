import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "red",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  dot: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 10,
    height: 10,
    margin: 5
  }
});
export default Untitled2;