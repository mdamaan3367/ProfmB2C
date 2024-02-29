import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const LocationSection = () => {
  return (
    <View style={styles.locationParent}>
      <Text style={styles.location}>Location</Text>
      <View style={styles.groupParent}>
        <View style={styles.groupPosition}>
          <View style={styles.groupPosition}>
            <View style={[styles.groupChild, styles.groupPosition]} />
          </View>
        </View>
        <View style={[styles.frameParent, styles.groupFlexBox]}>
          <View style={[styles.groupGroup, styles.groupFlexBox]}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group13.png")}
            />
            <Text style={styles.alRawdahDistrictJeddah}>
              Al Rawdah district-Jeddah
            </Text>
          </View>
          <Image
            style={styles.svgexport1821}
            resizeMode="cover"
            source={require("../assets/svgexport18-2-2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
    height: 40,
    width: 343,
    position: "absolute",
  },
  groupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontWeight: "600",
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    width: 125,
    height: 16,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
  },
  groupIcon: {
    width: 10,
    height: 15,
  },
  alRawdahDistrictJeddah: {
    fontSize: FontSize.med_size,
    fontWeight: "300",
    color: Color.black,
    textAlign: "center",
    marginLeft: 8,
    fontFamily: FontFamily.dGBaysan,
  },
  groupGroup: {
    width: 232,
  },
  svgexport1821: {
    width: 18,
    height: 18,
    overflow: "hidden",
    marginLeft: 68,
  },
  frameParent: {
    top: 11,
    left: 12,
    width: 318,
    justifyContent: "center",
    position: "absolute",
  },
  groupParent: {
    marginTop: 16,
    height: 40,
    width: 343,
  },
  locationParent: {
    top: 449,
    left: 16,
    position: "absolute",
  },
});

export default LocationSection;
