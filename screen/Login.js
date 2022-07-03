import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../assets/colors/colors";
import STYLES from "../assets/styles";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("TabNavigator");
      }
    });
  }, []);

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => alert(error.message));
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: "white" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 70 }}>
          <Text
            style={{ fontSize: 27, fontWeight: "bold", color: COLORS.black }}
          >
            Welcome Back!
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              color: COLORS.black,
            }}
          >
            Sign in to continue
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              style={STYLES.input}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={handleSignin} style={STYLES.btnPrimary}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={STYLES.line}></View>
            <Text style={{ marginHorizontal: 5, fontWeight: "bold" }}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          ></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: COLORS.light, fontWeight: "bold" }}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
