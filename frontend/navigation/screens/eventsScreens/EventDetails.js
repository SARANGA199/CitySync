import { NativeBaseProvider, Box, Flex, Button, Icon } from "native-base";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import Constants from "../../../constants/Constants";

export default function EventDetails({ route, navigation }) {
  const [event, setEvent] = React.useState({});

  React.useEffect(() => {
    setEvent(route.params.item);
  }, [event]);

  const handleJoin = () => {
    //update event participants
    axios
      .put(`${Constants.URL}/api/events/participants/${event._id}`)
      .then((response) => {
        Alert.alert("Success", "You have successfully joined the event");
        navigation.navigate("UpcomingEvent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <NativeBaseProvider style={styles.container}>
      <Box
        p="2"
        alignSelf={{ base: "center", md: "flex-start" }}
        mt="20%"
        rounded="xl"
        style={styles.header}
        _text={{
          fontSize: "32",
          fontWeight: "medium",
          color: "black",
          alignSelf: "center",
          letterSpacing: "lg",
          fontFamily: "Roboto",
        }}
        shadow={3}
      >
        {event.title}
      </Box>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={event.image ? { uri: event.image } : null}
        />
        <Flex direction="row">
          {/* group icon with text */}
          <Flex direction="row" alignItems="center" mr="2" ml={5}>
            <Icon as={<MaterialIcons name="group" />} size="xl" color="black" />
            <Text style={styles.iGroup}>{event.participants} Joined</Text>
          </Flex>

          <Button
            style={styles.button2}
            size="sm"
            onPress={handleJoin}
            backgroundColor={"rgba(26, 182, 92, 1)"}
          >
            <Flex direction="row" alignItems="center" mr="2" m={1}>
              <Text style={styles.text1}>Join</Text>
              <Icon
                as={<MaterialIcons name="group" />}
                size="lg"
                color="white"
                ms="2"
              />
            </Flex>
          </Button>
        </Flex>

        <Text style={styles.sub1}>
          <Text style={styles.date}>Date : </Text> {event.date}
        </Text>

        <Text style={styles.sub}>
          <Text style={styles.date}>Location :</Text> {event.location}
        </Text>

        <Text style={styles.sub}>
          <Text style={styles.date}>Status :</Text> {event.status}
        </Text>
        <Text style={styles.sub3}>{event.description}</Text>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "rgba(230, 255, 214, 1)",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    height: 60,
  },
  card: {
    marginTop: 20,
    width: "94%",
    marginBottom: 10,
    marginLeft: "3%",
    marginRight: "3%",
    height: "auto",
    paddingBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 30,
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
    width: "100%",
    height: 250,
    resizeMode: "cover",
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
    marginLeft: 10,
  },
  date: {
    color: "rgba(26, 182, 92, 1)",
  },
  sub: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
    width: "100%",
  },
  sub1: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
  },
  sub3: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 15,
    width: "90%",
  },
  button1: {
    marginTop: 20,
    width: "24%",
    marginLeft: -10,
    marginRight: 10,
    margin: 10,
    borderRadius: 10,
    height: 50,
  },
  button2: {
    marginTop: 20,
    borderColor: "rgba(26, 182, 92, 1)",
    borderWidth: 2,
    width: "24%",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    marginLeft: "auto",
  },
  button3: {
    marginTop: 20,
    borderColor: "rgba(26, 182, 92, 1)",
    borderWidth: 2,
    width: "24%",
    borderRadius: 10,
    margin: 10,
  },
  text1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginEnd: 5,
  },
  text2: {
    color: "rgba(26, 182, 92, 1)",
    fontSize: 16,
    fontWeight: "bold",
  },
  iGroup: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(26, 182, 92, 1)",
    marginLeft: 10,
  },
});
