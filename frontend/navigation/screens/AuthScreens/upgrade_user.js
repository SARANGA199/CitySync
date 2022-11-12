import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Constants from "../../../constants/Constants";
import axios from "axios";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  FlatList,
  Box,
  Divider,
  Heading,
  ScrollView,
  Card,
  Flex,
  Stack,
  Container,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function UpgradeUser({ navigation }) {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* icons for menu in the top left corner */}

        <View style={styles.menu}>
          <Flex direction="row" alignItems="center">
            <IconButton
              style={styles.menuIcon}
              icon={
                <Icon
                  color={"black"}
                  as={Ionicons}
                  name="notifications-outline"
                  size={8}
                />
              }
              onPress={() => navigation.navigate("Home")}
            />

            <TouchableOpacity style={styles.menuButton}>
              <Ionicons name="menu" size={40} color="black" />
            </TouchableOpacity>
          </Flex>
        </View>

        <ScrollView>
          <Flex direction="row" style={styles.container}>
          <View style={styles.card2}>
            <Image
              style={styles.image3}
              source={require("../../../assets/images/up-com-member.png")}
            />
            <Flex direction="row" style={styles.cardContent}>
              <Text style={styles.text2}>Upgrade to community member</Text>
              <Button
                style={styles.button2}
                size="sm"
                onPress={() => navigation.navigate("PreviousEvents")}
                backgroundColor={"rgba(26, 182, 92, 1)"}
              >
                <Text style={styles.textBtn1}>
                  <Ionicons name="ios-arrow-forward" size={26} color="white" />
                </Text>
              </Button>
            </Flex>
          </View>
            </Flex>
            <Flex direction="row" style={styles.container}>
            <View style={styles.card2}>
            <Image
              style={styles.image4}
              source={require("../../../assets/images/up-event-organizer.png")}
            />
            <Flex direction="row" style={styles.cardContent}>
              <Text style={styles.text2}>View all pending event requests</Text>
              <Button
                style={styles.button2}
                size="sm"
                onPress={() => navigation.navigate("PreviousEvents")}
                backgroundColor={"rgba(26, 182, 92, 1)"}
              >
                <Text style={styles.textBtn1}>
                  <Ionicons name="ios-arrow-forward" size={26} color="white" />
                </Text>
              </Button>
            </Flex>
          </View>
          </Flex>
          <Flex direction="row" style={styles.container}>
            <View style={styles.card2}>
            <Image
              style={styles.image2}
              source={require("../../../assets/images/manageUsers.png")}
            />
            <Flex direction="row" style={styles.cardContent}>
              <Text style={styles.text2}>Manage Event Requests</Text>
              <Button
                style={styles.button2}
                size="sm"
                onPress={() => navigation.navigate("PreviousEvents")}
                backgroundColor={"rgba(26, 182, 92, 1)"}
              >
                <Text style={styles.textBtn1}>
                  <Ionicons name="ios-arrow-forward" size={26} color="white" />
                </Text>
              </Button>
            </Flex>
          </View>
          </Flex>
        </ScrollView>

      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "static",
    top: 50,
    left: -180,
    zIndex: 1,
  },
  menuIcon: {
    position: "static",
    top: 0,
    left: 360,
    zIndex: 1,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  header: {
    width: "90%",
    alignSelf: "center",
    height: 60,

    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 5,
  },
  card: {
    width: "46%",
    marginTop: 35,
    marginLeft: "1%",
    marginRight: "2%",
    height: 200,
    paddingBottom: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 24.43,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "95%",
    alignSelf: "center",
    height: 160,
    marginTop: -30,
    marginBottom: 10,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  image2: {
    width: "200%",
    marginTop: 40,
    marginBottom: -75,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  image3: {
    width: "200%",
    marginTop: 35,
    marginBottom: -70,
    marginLeft: 100,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  image4: {
    width: "100%",
    marginTop: 35,
    marginBottom: -70,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
    marginLeft: 10,
  },

  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    width: "60%",
    marginTop: 10,
    marginLeft: 10,
  },

  card2: {
    width: "82%",
    marginBottom: 15,
    marginTop: 40,
    marginLeft: "8%",
    marginRight: "8%",
    height: "auto",
    paddingBottom: 15,

    backgroundColor: "#fff",
    borderRadius: 24.43,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  text2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginTop: -150,
    marginLeft: 10,
  },
  button1: {
    width: "25%",
    marginLeft: "3%",
    marginTop: 10,
    margin: 10,
    borderRadius: 40,
    height: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  button2: {
    width: "18%",
    marginLeft: "40%",
    marginTop: 20,

    borderRadius: 40,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textBtn1: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -3,
  },
  imageHead: {
    width: "96%",
    height: 100,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 0,
  },
  headerText1: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black",
    marginTop: 0,
  },
  name: {
    color: "rgba(26, 182, 92, 1)",
  },
});