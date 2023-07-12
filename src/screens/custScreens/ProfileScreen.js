import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { colors } from "../../global/styles";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { auth, firestore } from "../../../firebase";

export default function ProfileScreen(){

  const navigation = useNavigation();
  const displayName = auth.currentUser.name;
  const email = auth.currentUser.email;
  const photo = auth.currentUser.image;

  const [userData, setUserData] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const getUser = async () => {
    const userRef = firestore.collection("users").doc(auth.currentUser.uid);
    const doc = await userRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      setUserData(doc.data());
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("SigninScreen");
      })
      .catch((error) => alert(error.message));
  };

    return(
        
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.grey1 }}>
              <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
              >
                <View>
                  <View style={styles.userInfoSection}>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 25,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Avatar.Image source={{ uri: photo }} size={90} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                      <Title
                        style={[
                          styles.title,
                          {
                            marginTop: 15,
                            marginBottom: 5,
                            color: colors.buttons,
                          },
                        ]}
                      >
                        {userData.name}
                      </Title>
                    </View>
                  </View>
                </View>
        
                <View style={styles.userInfoSection}>
                  <View style={styles.row}>
                    <View style={styles.textBox}>
                      <Icon name="email" color={colors.buttons} size={20} />
                      <Text style={{ color: "#777777", marginLeft: 20 }}>{email}</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.textBox}>
                      <Icon name="phone" color={colors.buttons} size={20} />
                      <Text style={{ color: "#777777", marginLeft: 20 }}>
                        {userData.phone ? userData.phone : "Phone number not set"}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.textBox}>
                      <Icon name="human-male-female" color={colors.buttons} size={20} />
                      <Text style={{ color: "#777777", marginLeft: 20 }}>
                        {userData.gender ? userData.gender : "Gender not set"}
                      </Text>
                    </View>
                  </View>
                </View>
        
                <View style={styles.menuWrapper}>
                  <View
                    style={{
                      borderBottomColor: "#e6e4e3",
                      borderBottomWidth: 1,
                    }}
                  />
                  <TouchableRipple
                    style={{ borderBottomColor: "#e6e4e3", borderBottomWidth: 1 }}
                    // onPress={() => navigation.navigate("UserChangePassword")}
                  >
                    <View style={styles.menuItem}>
                      <Icon name="form-textbox-password" color={colors.buttons} size={25} />
                      <Text style={styles.menuItemText}>Change Password</Text>
                      <Icon2
                        name="keyboard-arrow-right"
                        color="grey"
                        size={25}
                        style={{ paddingLeft: 150 }}
                      />
                    </View>
                  </TouchableRipple>
                  <TouchableRipple
                    style={{ borderBottomColor: "#e6e4e3", borderBottomWidth: 1 }}
                    onPress={handleSignOut}
                  >
                    <View style={styles.menuItem}>
                      <Icon name="logout" color={colors.buttons} size={23} />
                      <Text style={styles.menuItemText}>Log out</Text>
                      <Icon2
                        name="keyboard-arrow-right"
                        color="grey"
                        size={25}
                        style={{ paddingLeft: 224 }}
                      />
                    </View>
                  </TouchableRipple>
                </View>
              </ScrollView>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 35,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: "500",
    },
    row: {
      flexDirection: "row",
      marginBottom: 13,
    },
    menuWrapper: {
      marginTop: 0,
    },
    menuItem: {
      flexDirection: "row",
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: "#777777",
      marginLeft: 20,
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 26,
    },
    textBox: {
      height: 40,
      alignItems: "center",
      paddingLeft: 20,
      flex: 1,
      backgroundColor: colors.grey2,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      flexDirection: "row",
    },
  });