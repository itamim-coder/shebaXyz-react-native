import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import { getAuth, signOut } from "firebase/auth";

import { useNavigation } from "@react-navigation/native";
import STYLES from "../assets/styles";
import COLORS from "../assets/colors/colors";

const Profile = ({ navigation }) => {
  // const navigation = useNavigation();

  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // navigation.replace("Login");
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
    >
      <ScrollView style={{ marginTop: 100 }}>
        <Text>Profile </Text>

        <TouchableOpacity onPress={handleLogout} style={STYLES.btnPrimary}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
