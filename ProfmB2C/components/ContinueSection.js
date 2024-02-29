import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WebViewBottom from "./WebViewBottom";
import Property1Default from "./Property1Default";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const ContinueSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupShadowBox]} />
      <WebViewBottom
        webViewBottomPosition="absolute"
        webViewBottomBackgroundColor="unset"
        webViewBottomMarginLeft={-187.5}
        webViewBottomTop={235}
        webViewBottomLeft="50%"
        webViewBottomBorderBottomRightRadius={16}
        webViewBottomBorderBottomLeftRadius={16}
        webViewBottomWidth={375}
        webViewBottomHeight={34}
        webViewBottomBottom="unset"
        homeIndicatorBackgroundColor="#1d2939"
      />
      <View
        style={[styles.locationDetailsWrapper, styles.homeIndicatorPosition]}
      >
        <Text style={styles.locationDetails}>Location Details</Text>
      </View>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
      <View style={styles.groupItem} />
      <View style={styles.groupParent}>
        <View style={styles.currentAddressWrapper}>
          <Text style={[styles.currentAddress, styles.currentAddressTypo]}>
            Current address
          </Text>
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.groupInnerPosition}>
            <View style={[styles.groupInner, styles.groupInnerPosition]} />
          </View>
          <Pressable
            style={styles.frameParent}
            onPress={() => navigation.navigate("PinYourLocation1")}
          >
            <View style={styles.groupGroup}>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group9.png")}
              />
              <Text
                style={[
                  styles.alRawdahDistrictJeddah,
                  styles.currentAddressTypo,
                ]}
              >
                Al Rawdah district-Jeddah
              </Text>
            </View>
            <Image
              style={styles.groupIcon1}
              resizeMode="cover"
              source={require("../assets/group10.png")}
            />
          </Pressable>
        </View>
      </View>
      <Property1Default
        logIn="Continue"
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={-171.5}
        property1DefaultTop={187}
        property1DefaultLeft="50%"
        property1DefaultWidth={343}
        property1DefaultHeight={48}
        property1DefaultRight="unset"
        property1DefaultBottom="unset"
        logInLetterSpacing={0.6}
        logInLineHeight={44}
        logInTextTransform="capitalize"
        logInWidth="58.31%"
        logInLeft="20.7%"
        onButtonBigPress={() => navigation.navigate("YourAddressLocation2")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  homeIndicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  currentAddressTypo: {
    fontSize: FontSize.med_size,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  groupInnerPosition: {
    left: 0,
    height: 40,
    width: 342,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 374,
    top: 0,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 270,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  locationDetails: {
    marginLeft: -51.5,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    color: Color.colorBlack,
    fontWeight: "600",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  locationDetailsWrapper: {
    marginLeft: -50.5,
    top: 33,
    width: 103,
    height: 17,
  },
  homeIndicator: {
    marginLeft: -24.5,
    bottom: 257,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.a6A6A6,
    width: 51,
    height: 5,
  },
  groupItem: {
    top: 67,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderTopWidth: 0.3,
    height: 0,
    width: 342,
    left: 17,
    position: "absolute",
  },
  currentAddress: {
    marginLeft: -44.5,
    color: Color.colorBlack,
    fontWeight: "600",
    fontSize: FontSize.med_size,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  currentAddressWrapper: {
    width: 89,
    height: 14,
  },
  groupInner: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_200,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  groupIcon: {
    width: 10,
    height: 15,
  },
  alRawdahDistrictJeddah: {
    fontWeight: "300",
    color: Color.grayBlack,
    marginLeft: 8,
  },
  groupGroup: {
    width: 211,
    alignItems: "center",
    flexDirection: "row",
  },
  groupIcon1: {
    width: 16,
    height: 16,
    marginLeft: 83,
  },
  frameParent: {
    top: 12,
    left: 16,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupContainer: {
    marginTop: 10,
    height: 40,
    width: 342,
  },
  groupParent: {
    top: 91,
    left: 17,
    position: "absolute",
  },
  rectangleParent: {
    top: 542,
    width: 375,
    height: 270,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
});

export default ContinueSection;
