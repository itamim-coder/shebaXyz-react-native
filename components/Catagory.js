import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { BottomSheet } from "react-native-btr";

const Catagory = () => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  return (
    <View style={styles.catagory}>
      <View style={[{ flexDirection: "row" }]}>
        <TouchableOpacity style={styles.icon}>
          <MaterialIcons name="home-repair-service" size={34} color="black" />
          <Text>Home{"\n"}Repair</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <MaterialIcons name="car-repair" size={34} color="black" />
          <Text>Car{"\n"}Repair</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <AntDesign name="car" size={34} color="black" />
          <Text>Car{"\n"}Rent</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <FontAwesome5 name="paint-roller" size={34} color="black" />
          <Text>Home{"\n"}Paint</Text>
        </TouchableOpacity>
      </View>
      <View style={[{ flexDirection: "row" }]}>
        <TouchableOpacity style={styles.icon}>
          <MaterialIcons name="home-repair-service" size={34} color="black" />
          <Text>Home{"\n"}Repair</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <MaterialIcons name="car-repair" size={34} color="black" />
          <Text>Car{"\n"}Repair</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <AntDesign name="car" size={34} color="black" />
          <Text>Car{"\n"}Rent</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <FontAwesome5 name="paint-roller" size={34} color="black" />
          <Text>Home{"\n"}Paint</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.break}>
          ---------------------------------------
        </Text>
      </View>
      <TouchableOpacity
        onPress={toggleBottomNavigationView}
        style={[{ flexDirection: "row" }]}
      >
        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  padding: 20,
                  fontSize: 15,
                }}
              >
                All Categories
              </Text>

              <View style={[{ flexDirection: "row" }]}>
                <TouchableOpacity style={styles.icon}>
                  <MaterialIcons
                    name="home-repair-service"
                    size={34}
                    color="black"
                  />
                  <Text>Home{"\n"}Repair</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                  <MaterialIcons name="car-repair" size={34} color="black" />
                  <Text>Car{"\n"}Repair</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                  <AntDesign name="car" size={34} color="black" />
                  <Text>Car{"\n"}Rent</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                  <FontAwesome5 name="paint-roller" size={34} color="black" />
                  <Text>Home{"\n"}Paint</Text>
                </TouchableOpacity>
              </View>

              <View style={[{ flexDirection: "row" }]}>
                <TouchableOpacity style={styles.icon}>
                  <MaterialIcons
                    name="home-repair-service"
                    size={34}
                    color="black"
                  />
                  <Text>Home{"\n"}Repair</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                  <MaterialIcons name="car-repair" size={34} color="black" />
                  <Text>Car{"\n"}Repair</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                  <AntDesign name="car" size={34} color="black" />
                  <Text>Car{"\n"}Rent</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                  <FontAwesome5 name="paint-roller" size={34} color="black" />
                  <Text>Home{"\n"}Paint</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheet>
        <Text style={styles.catagoryText}>More Categories</Text>
        <AntDesign name="caretdown" size={15} color="#C70039" />
      </TouchableOpacity>
    </View>
  );
};

export default Catagory;

const styles = StyleSheet.create({
  catagory: {
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    margin: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  break: {
    color: "gray",
    marginBottom: 15,
  },
  catagoryText: {
    color: "#C70039",
    paddingBottom: 25,
  },
});
