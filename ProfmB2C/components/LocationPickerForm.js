import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const LocationPickerForm = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.frameIconPosition]} />
      <View style={[styles.frameParent, styles.moveTheMapLayout]}>
        <Image
          style={[styles.frameIcon, styles.frameIconPosition]}
          resizeMode="cover"
          source={require("../assets/frame14.png")}
        />
        <Text style={[styles.moveTheMap, styles.moveTheMapLayout]}>
          Move the map or enter your address to set your pickup location
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 61,
    width: 343,
  },
  frameIconPosition: {
    left: 0,
    position: "absolute",
  },
  moveTheMapLayout: {
    height: 37,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    top: 0,
    height: 61,
    width: 343,
  },
  frameIcon: {
    top: 4,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  moveTheMap: {
    left: 24,
    fontSize: FontSize.med_size,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    color: Color.grayBlack,
    textAlign: "left",
    width: 294,
    top: 0,
  },
  frameParent: {
    top: 12,
    left: 12,
    width: 318,
  },
  rectangleParent: {
    top: 150,
    left: 16,
    position: "absolute",
    width: 343,
  },
});

export default LocationPickerForm;
