import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SectionCard1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.numberOfWorkersParent}>
          <Text style={[styles.numberOfWorkers, styles.textTypo]}>
            Number of Workers
          </Text>
          <View style={[styles.addCircleParent, styles.textFlexBox]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/addcircle.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>1</Text>
            <Image
              style={[styles.minusCirlceIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/minuscirlce.png")}
            />
          </View>
        </View>
      </View>
      <Text
        style={[styles.additionalWorkersBeyond, styles.workersTypo]}
      >{`Additional workers beyond the agreed-upon number may increase the service price

`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  workersTypo: {
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
    position: "absolute",
    height: 53,
    width: 343,
  },
  numberOfWorkers: {
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  text: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsSemiBold,
    display: "flex",
    width: 16,
    height: 16,
    marginLeft: 8,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
  },
  minusCirlceIcon: {
    marginLeft: 8,
  },
  addCircleParent: {
    marginLeft: 134,
    flexDirection: "row",
    justifyContent: "center",
  },
  numberOfWorkersParent: {
    top: 16,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    height: 53,
    width: 343,
  },
  additionalWorkersBeyond: {
    lineHeight: 18,
    fontWeight: "300",
    color: Color.a6A6A6,
    textAlign: "left",
    height: 34,
    marginTop: 8,
    width: 343,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
  },
  groupParent: {
    marginTop: 24,
  },
});

export default SectionCard1;
