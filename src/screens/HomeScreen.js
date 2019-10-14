import React from "react";
import { Button, Text, StyleSheet, View } from "react-native";

const HomeScreen = props => (
  <View>
    <Text style={styles.text}>Hwere</Text>
    <Button
      title="Images"
      onPress={() => props.navigation.navigate("Images")}      
    />
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
