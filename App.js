import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { fetchWeather } from "./weatherAPI";

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    this.getLocation();
    fetchWeather(30, 32);
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      posData => console.log(posData),
      error => alert(error),
      { timeout: 10000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Icon name="ios-sunny" size={80} color="white" />
          <Text style={styles.temp}>24°</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>
            Build a <Text style={{ color: "red" }}>Fucking</Text> Weather App
          </Text>
          <Text style={styles.subtitle}>Let's Make It Rain</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD017"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  temp: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 45,
    color: "white"
  },
  body: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    margin: 10
  },
  title: {
    fontFamily: "HelveticaNeue-Bold",
    fontSize: 78,
    color: "white",
    marginBottom: 5
  },
  subtitle: {
    fontFamily: "HelveticaNeue-Medium",
    fontSize: 16,
    color: "white"
  }
});
