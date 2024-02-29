import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Image, Pressable, Modal } from "react-native";
import RegularCleaning9 from "./RegularCleaning";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ViewDetails7 = ({ onClose }) => {
  const [groupContainer8Visible, setGroupContainer8Visible] = useState(false);
  const [frameContainer38Visible, setFrameContainer38Visible] = useState(false);
  const navigation = useNavigation();

  const openGroupContainer8 = useCallback(() => {
    setGroupContainer8Visible(true);
  }, []);

  const closeGroupContainer8 = useCallback(() => {
    setGroupContainer8Visible(false);
  }, []);

  const openFrameContainer38 = useCallback(() => {
    setFrameContainer38Visible(true);
  }, []);

  const closeFrameContainer38 = useCallback(() => {
    setFrameContainer38Visible(false);
  }, []);

  return (
    <>
      <View style={styles.viewDetails}>
        <View style={styles.viewDetailsChild} />
        <View style={[styles.lineParent, styles.navParentPosition]}>
          <View style={styles.frameChild} />
          <View style={[styles.frameParent, styles.navParentPosition]}>
            <View style={styles.equipmentUsedParent}>
              <Text style={[styles.equipmentUsed, styles.textFlexBox]}>
                Equipment used
              </Text>
              <Text
                style={[
                  styles.cleaningWithSpecializedContainer,
                  styles.textFlexBox,
                ]}
              >
                <Text style={styles.cleaningWithSpecializedContainer1}>
                  <Text style={styles.cleaning}>cleaning</Text> with specialized
                  hands
                </Text>
              </Text>
            </View>
            <View style={styles.frameGroup}>
              <View style={styles.groupParent}>
                <View style={styles.groupChildLayout}>
                  <Image
                    style={[styles.groupChild, styles.groupPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-182.png")}
                  />
                  <Image
                    style={[
                      styles.girlCleaningHouseWithVacuuIcon,
                      styles.iconPosition,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/girlcleaninghousewithvacuumcleaner-1.png")}
                  />
                </View>
                <View style={[styles.rectangleParent, styles.groupItemLayout]}>
                  <View style={[styles.groupItem, styles.groupItemLayout]} />
                  <View
                    style={[styles.vacuumCleanerParent, styles.bookNowPosition]}
                  >
                    <Text style={styles.vacuumCleaner}>Vacuum cleaner</Text>
                    <Text
                      style={styles.itCleansCarpets}
                    >{`It cleans carpets, upholstery, appliances, and furniture

`}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.groupContainer}>
                <View style={styles.groupChildLayout}>
                  <Image
                    style={[styles.groupChild, styles.groupPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-182.png")}
                  />
                  <Image
                    style={styles.image5Icon}
                    resizeMode="cover"
                    source={require("../assets/image-5.png")}
                  />
                </View>
                <View style={[styles.rectangleParent, styles.groupItemLayout]}>
                  <View style={[styles.groupItem, styles.groupItemLayout]} />
                  <View
                    style={[
                      styles.broomAndDustpanParent,
                      styles.parentPosition,
                    ]}
                  >
                    <Text
                      style={[
                        styles.broomAndDustpan,
                        styles.broomAndDustpanLayout,
                      ]}
                    >
                      Broom and dustpan
                    </Text>
                    <Text style={[styles.usedToClean, styles.sar2Typo]}>
                      Used to clean floors and carpets
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.groupContainer}>
                <View style={styles.groupChildLayout}>
                  <Image
                    style={[styles.groupChild, styles.groupPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-182.png")}
                  />
                  <Image
                    style={[styles.image6Icon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/image-6.png")}
                  />
                </View>
                <View style={[styles.rectangleParent, styles.groupItemLayout]}>
                  <View style={[styles.groupItem, styles.groupItemLayout]} />
                  <View
                    style={[
                      styles.broomAndDustpanParent,
                      styles.parentPosition,
                    ]}
                  >
                    <Text style={styles.vacuumCleaner}>Mop</Text>
                    <Text style={styles.usedToRemove}>
                      Used to remove dirt, dust and debris
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.groupContainer}>
                <View style={styles.groupChildLayout}>
                  <Image
                    style={[styles.groupChild, styles.groupPosition]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-182.png")}
                  />
                  <Image
                    style={[styles.image7Icon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/image-7.png")}
                  />
                </View>
                <View style={[styles.rectangleParent, styles.groupItemLayout]}>
                  <View style={[styles.groupItem, styles.groupItemLayout]} />
                  <View
                    style={[styles.vacuumCleanerParent, styles.bookNowPosition]}
                  >
                    <Text
                      style={[
                        styles.floorCleaningCloths,
                        styles.broomAndDustpanLayout,
                      ]}
                    >
                      Floor Cleaning Cloths
                    </Text>
                    <Text style={styles.itCleansCarpets}>
                      Used to clean hard surfaces such as wood, tile and vinyl
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.navParentPosition]}>
            <View style={styles.equipmentUsedParent}>
              <View style={styles.groupParent}>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector5.png")}
                />
                <Text style={[styles.text, styles.textFlexBox]}>4.9</Text>
              </View>
              <Text style={[styles.review, styles.reviewLayout]}>
                (80 Review)
              </Text>
            </View>
            <Text style={[styles.comments, styles.reviewLayout]}>Comments</Text>
            <View style={styles.frameGroup}>
              <View style={styles.ratingsFlexBox}>
                <View style={styles.groupParent}>
                  <Text style={[styles.score1, styles.scoreFlexBox]}>5</Text>
                </View>
                <View style={styles.starGroup}>
                  <Image
                    style={styles.starIconLayout}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                </View>
                <View style={styles.ratingBar}>
                  <View style={[styles.snakebar, styles.snakebarBg]} />
                </View>
                <Text style={[styles.score2, styles.scoreFlexBox]}>(5)</Text>
                <Image
                  style={[styles.starIcon5, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
              </View>
              <View style={[styles.ratings1, styles.ratingsFlexBox]}>
                <View style={styles.groupParent}>
                  <Text style={[styles.score1, styles.scoreFlexBox]}>4</Text>
                </View>
                <View style={styles.starGroup}>
                  <Image
                    style={styles.starIconLayout}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                </View>
                <View style={styles.ratingBar}>
                  <View style={styles.ratingBar2}>
                    <View
                      style={[styles.snakebar1, styles.snakebarPosition1]}
                    />
                  </View>
                  <View style={[styles.snakebar2, styles.snakebarPosition]} />
                </View>
                <Text style={[styles.score2, styles.scoreFlexBox]}>(5)</Text>
                <Image
                  style={[styles.starIcon5, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
              </View>
              <View style={[styles.ratings1, styles.ratingsFlexBox]}>
                <View style={styles.groupParent}>
                  <Text style={[styles.score1, styles.scoreFlexBox]}>3</Text>
                </View>
                <View style={styles.starGroup}>
                  <Image
                    style={styles.starIconLayout}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                </View>
                <View style={styles.ratingBar}>
                  <View style={styles.ratingBar2}>
                    <View
                      style={[styles.snakebar1, styles.snakebarPosition1]}
                    />
                  </View>
                  <View style={[styles.snakebar4, styles.snakebarPosition]} />
                </View>
                <Text style={[styles.score2, styles.scoreFlexBox]}>(5)</Text>
                <Image
                  style={[styles.starIcon5, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
              </View>
              <View style={[styles.ratings1, styles.ratingsFlexBox]}>
                <View style={styles.groupParent}>
                  <Text style={[styles.score1, styles.scoreFlexBox]}>2</Text>
                </View>
                <View style={styles.starGroup}>
                  <Image
                    style={styles.starIconLayout}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                </View>
                <View style={styles.ratingBar}>
                  <View style={styles.ratingBar2}>
                    <View
                      style={[styles.snakebar1, styles.snakebarPosition1]}
                    />
                  </View>
                  <View style={[styles.snakebar6, styles.snakebarPosition]} />
                </View>
                <Text style={[styles.score2, styles.scoreFlexBox]}>(5)</Text>
                <Image
                  style={[styles.starIcon5, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
              </View>
              <View style={[styles.ratings1, styles.ratingsFlexBox]}>
                <View style={styles.groupParent}>
                  <Text style={[styles.score1, styles.scoreFlexBox]}>1</Text>
                </View>
                <View style={styles.starGroup}>
                  <Image
                    style={styles.starIconLayout}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                  <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/star.png")}
                  />
                </View>
                <View style={styles.ratingBar}>
                  <View style={styles.ratingBar2}>
                    <View
                      style={[styles.snakebar1, styles.snakebarPosition1]}
                    />
                  </View>
                  <View style={[styles.snakebar8, styles.snakebarPosition]} />
                </View>
                <Text style={[styles.score2, styles.scoreFlexBox]}>(5)</Text>
                <Image
                  style={[styles.starIcon5, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
              </View>
            </View>
            <View style={[styles.frameItem, styles.framePosition]} />
            <View style={[styles.frameInner, styles.framePosition]} />
            <View style={[styles.row, styles.rowPosition]}>
              <View style={styles.divblock}>
                <View style={styles.div}>
                  <Image
                    style={styles.logoIcon}
                    resizeMode="cover"
                    source={require("../assets/logo.png")}
                  />
                  <View style={styles.text1}>
                    <Text style={[styles.courtneyHenry, styles.minsAgoTypo]}>
                      Courtney Henry
                    </Text>
                    <View style={styles.row1}>
                      <View style={styles.groupParent}>
                        <Image
                          style={styles.vectorIcon}
                          resizeMode="cover"
                          source={require("../assets/vector5.png")}
                        />
                        <Text style={[styles.text2, styles.textFlexBox]}>
                          4.9
                        </Text>
                      </View>
                      <Text style={[styles.minsAgo, styles.minsAgoTypo]}>
                        2 mins ago
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.iAmVery}>
                I am very happy with this cleaning service app. I used their
                services to clean my house and I was not disappointed. The staff
                was very clean and respectful.
              </Text>
            </View>
            <View style={[styles.row2, styles.rowPosition]}>
              <View style={styles.divblock}>
                <View style={styles.div}>
                  <Image
                    style={styles.logoIcon}
                    resizeMode="cover"
                    source={require("../assets/logo1.png")}
                  />
                  <View style={styles.text3}>
                    <Text style={[styles.courtneyHenry, styles.minsAgoTypo]}>
                      Courtney Henry
                    </Text>
                    <View style={styles.row1}>
                      <View style={styles.groupParent}>
                        <Image
                          style={styles.vectorIcon}
                          resizeMode="cover"
                          source={require("../assets/vector5.png")}
                        />
                        <Text style={[styles.text2, styles.textFlexBox]}>
                          4.9
                        </Text>
                      </View>
                      <Text style={[styles.minsAgo, styles.minsAgoTypo]}>
                        2 mins ago
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.iAmVery}>
                I have used this janitorial service app several times and am
                always very happy with the results. Staff are always on time and
                helpful
              </Text>
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.equipmentUsedParent}>
              <View>
                <View style={styles.parentFlexBox}>
                  <Text
                    style={[styles.oneYearSubscription, styles.textFlexBox]}
                  >
                    One-year subscription
                  </Text>
                  <View style={styles.groupParent}>
                    <Image
                      style={styles.vectorIcon}
                      resizeMode="cover"
                      source={require("../assets/vector5.png")}
                    />
                    <Text style={[styles.review1, styles.reviewLayout]}>
                      4.9 (80 Review)
                    </Text>
                  </View>
                </View>
                <View style={styles.frameParent4}>
                  <View style={styles.groupParent}>
                    <Image
                      style={styles.vectorIcon}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={styles.domesticWorker}>
                      <Text style={styles.textTypo}>1</Text>
                      <Text style={styles.domesticWorker1}>
                        {" "}
                        domestic worker
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.groupParent}>
                      <Image
                        style={styles.vectorIcon}
                        resizeMode="cover"
                        source={require("../assets/calendar.png")}
                      />
                      <Text style={styles.visits}>
                        <Text style={styles.cleaning}>
                          <Text style={styles.textTypo}>4</Text>
                        </Text>
                        <Text style={styles.domesticWorker1}>
                          <Text style={styles.cleaning}>{` `}</Text>
                          <Text style={styles.visits2}>visits</Text>
                          <Text style={styles.cleaning}>{` `}</Text>
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.clockParent}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/clock2.png")}
                  />
                  <Text style={styles.hoursPerVisitContainer}>
                    <Text style={[styles.text10, styles.textTypo]}>{`4 `}</Text>
                    <Text style={styles.hoursPerVisit}>hours per visit</Text>
                  </Text>
                </View>
              </View>
              <View style={[styles.frameParent5, styles.parentFlexBox]}>
                <View style={styles.groupParent}>
                  <Text style={[styles.sar, styles.sarTypo]}>
                    <Text style={styles.cleaning}>{`490 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={[styles.sar2, styles.sar2Typo]}>
                    <Text style={styles.cleaning}>{`600 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                </View>
                <Pressable
                  style={styles.groupLayout}
                  onPress={openGroupContainer8}
                >
                  <View style={[styles.groupChild4, styles.groupLayout]} />
                  <Text style={[styles.bookNow, styles.bookNowTypo]}>
                    Book Now
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.groupChild5Position}>
            <View style={[styles.groupChild5, styles.groupChild5Position]} />
            <View style={[styles.arrow21Parent, styles.parentPosition]}>
              <Pressable
                style={styles.arrow21}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/arrow-2-11.png")}
                />
              </Pressable>
              <Text style={[styles.viewDetails1, styles.bookNowTypo]}>
                View details
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.navBarParent, styles.navParentPosition]}>
          <View style={[styles.navBar, styles.navFlexBox]}>
            <Pressable
              style={[styles.navBarInner, styles.navFlexBox]}
              onPress={() => navigation.navigate("Home1")}
            >
              <View style={styles.parentSpaceBlock}>
                <Image
                  style={styles.arrow21}
                  resizeMode="cover"
                  source={require("../assets/home24.png")}
                />
                <Text style={[styles.home, styles.sar2Typo]}>Home</Text>
              </View>
            </Pressable>
            <View style={[styles.navBarChild, styles.navBarChildLayout]}>
              <View style={styles.clockGroup}>
                <Image
                  style={styles.arrow21}
                  resizeMode="cover"
                  source={require("../assets/clock3.png")}
                />
                <Text style={[styles.history, styles.textTypo]}>History</Text>
              </View>
            </View>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={() => navigation.navigate("Bookings2")}
            >
              <View style={styles.calendarTickParent}>
                <Image
                  style={styles.arrow21}
                  resizeMode="cover"
                  source={require("../assets/calendartick3.png")}
                />
                <Text style={[styles.bookings, styles.sar2Typo]}>bookings</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={openFrameContainer38}
            >
              <View style={styles.clockGroup}>
                <Image
                  style={styles.arrow21}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearuser.png")}
                />
                <Text style={[styles.bookings, styles.sar2Typo]}>account</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.navBarChildLayout}
              onPress={() => navigation.navigate("Menu2")}
            >
              <View
                style={[styles.textalignLeftParent, styles.parentSpaceBlock]}
              >
                <Image
                  style={styles.arrow21}
                  resizeMode="cover"
                  source={require("../assets/textalignleft.png")}
                />
                <Text style={[styles.home, styles.sar2Typo]}>Menu</Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.webViewbottom, styles.navParentPosition]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupContainer8Visible}>
        <View style={styles.groupContainer8Overlay}>
          <Pressable
            style={styles.groupContainer8Bg}
            onPress={closeGroupContainer8}
          />
          <RegularCleaning9 onClose={closeGroupContainer8} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer38Visible}>
        <View style={styles.frameContainer38Overlay}>
          <Pressable
            style={styles.frameContainer38Bg}
            onPress={closeFrameContainer38}
          />
          <RegularCleaning9 onClose={closeFrameContainer38} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  navParentPosition: {
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    width: 375,
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  groupPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 50,
    top: 9,
    position: "absolute",
  },
  groupItemLayout: {
    width: 267,
    height: 68,
  },
  bookNowPosition: {
    top: 8,
    position: "absolute",
  },
  parentPosition: {
    top: 16,
    position: "absolute",
  },
  broomAndDustpanLayout: {
    width: 127,
    color: Color.praimary1,
    lineHeight: 16,
    fontWeight: "300",
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  sar2Typo: {
    color: Color.gray,
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  reviewLayout: {
    width: 71,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  scoreFlexBox: {
    letterSpacing: 0,
    textAlign: "left",
  },
  starIconLayout: {
    width: 16,
    height: 16,
  },
  snakebarBg: {
    backgroundColor: Color.praimary1,
    position: "absolute",
  },
  ratingsFlexBox: {
    width: 251,
    flexDirection: "row",
    alignItems: "center",
  },
  snakebarPosition1: {
    borderRadius: Border.br_11xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  snakebarPosition: {
    borderBottomLeftRadius: Border.br_11xs,
    borderTopLeftRadius: Border.br_11xs,
    backgroundColor: Color.praimary1,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  framePosition: {
    marginLeft: -187.7,
    height: 1,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  rowPosition: {
    justifyContent: "flex-end",
    width: 343,
    left: 16,
    position: "absolute",
  },
  minsAgoTypo: {
    letterSpacing: -0.1,
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: 343,
  },
  sarTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  groupLayout: {
    width: 88,
    height: 32,
  },
  bookNowTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild5Position: {
    height: 59,
    top: 0,
    left: 0,
    position: "absolute",
    width: 375,
  },
  navFlexBox: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  navBarChildLayout: {
    width: 94,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  viewDetailsChild: {
    top: 47,
    backgroundColor: Color.gray,
    height: 719,
    width: 343,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    left: 16,
    position: "absolute",
  },
  frameChild: {
    height: 1,
    width: 376,
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    left: 0,
    top: 59,
    position: "absolute",
  },
  equipmentUsed: {
    width: 149,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
  },
  cleaning: {
    textTransform: "capitalize",
  },
  cleaningWithSpecializedContainer1: {
    width: "100%",
  },
  cleaningWithSpecializedContainer: {
    width: 223,
    marginTop: 4,
    color: Color.grayBlack,
    fontWeight: "300",
    lineHeight: 30,
    fontSize: FontSize.med_size,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  equipmentUsedParent: {
    top: 24,
    left: 16,
    position: "absolute",
  },
  groupChild: {
    height: 68,
    width: 68,
  },
  girlCleaningHouseWithVacuuIcon: {
    width: 35,
    left: 16,
  },
  groupChildLayout: {
    height: 68,
    width: 68,
  },
  groupItem: {
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_8xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  vacuumCleaner: {
    width: 109,
    color: Color.praimary1,
    lineHeight: 16,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  itCleansCarpets: {
    height: 32,
    width: 258,
    color: Color.gray,
    lineHeight: 18,
    marginTop: 4,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  vacuumCleanerParent: {
    left: 8,
  },
  rectangleParent: {
    marginLeft: 8,
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image5Icon: {
    top: 20,
    left: 9,
    width: 50,
    height: 28,
    position: "absolute",
  },
  broomAndDustpan: {
    fontSize: FontSize.size_sm,
  },
  usedToClean: {
    width: 174,
    lineHeight: 16,
    marginTop: 4,
    fontWeight: "300",
    height: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  broomAndDustpanParent: {
    left: 8,
  },
  groupContainer: {
    marginTop: 24,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  image6Icon: {
    left: 15,
    width: 38,
  },
  usedToRemove: {
    width: 258,
    color: Color.gray,
    lineHeight: 16,
    marginTop: 4,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  image7Icon: {
    left: 24,
    width: 19,
  },
  floorCleaningCloths: {
    fontSize: FontSize.med_size,
  },
  frameGroup: {
    top: 84,
    left: 16,
    position: "absolute",
  },
  frameParent: {
    top: 259,
    height: 452,
    backgroundColor: Color.whait,
    left: "50%",
    overflow: "hidden",
  },
  vectorIcon: {
    width: 14,
    height: 14,
  },
  text: {
    marginLeft: 4,
    width: 24,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  review: {
    marginTop: 4,
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  comments: {
    top: 265,
    color: Color.praimary1,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: 16,
    position: "absolute",
  },
  score1: {
    lineHeight: 17,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  starIcon1: {
    marginLeft: 4,
  },
  starGroup: {
    display: "none",
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  snakebar: {
    borderRadius: Border.br_11xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  ratingBar: {
    height: 8,
    flex: 1,
    marginLeft: 8,
  },
  score2: {
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
    color: Color.lightTextDisabled,
    display: "none",
    marginLeft: 8,
    fontSize: FontSize.size_sm,
  },
  starIcon5: {
    marginLeft: 8,
  },
  snakebar1: {
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  ratingBar2: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  snakebar2: {
    width: "80%",
    right: "20%",
  },
  ratings1: {
    marginTop: 12,
  },
  snakebar4: {
    width: "60%",
    right: "40%",
  },
  snakebar6: {
    width: "40%",
    right: "60%",
  },
  snakebar8: {
    width: "20%",
    right: "80%",
  },
  frameItem: {
    top: 241,
  },
  frameInner: {
    top: 427,
  },
  logoIcon: {
    height: 38,
    width: 38,
  },
  courtneyHenry: {
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  text2: {
    marginLeft: 4,
    width: 24,
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  minsAgo: {
    textAlign: "right",
    marginLeft: 4,
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  row1: {
    alignSelf: "stretch",
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
  },
  text1: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 8,
  },
  div: {
    flex: 1,
    flexDirection: "row",
  },
  divblock: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  iAmVery: {
    letterSpacing: 0.4,
    width: 309,
    marginTop: 12,
    lineHeight: 18,
    color: Color.grayBlack,
    fontWeight: "300",
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  row: {
    top: 299,
  },
  text3: {
    flex: 1,
    marginLeft: 8,
  },
  row2: {
    top: 451,
  },
  frameContainer: {
    top: 719,
    height: 587,
    backgroundColor: Color.whait,
    left: "50%",
    overflow: "hidden",
  },
  oneYearSubscription: {
    width: 161,
    height: 24,
    alignItems: "center",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  review1: {
    fontSize: FontSize.size_3xs,
    marginLeft: 4,
    color: Color.grayBlack,
    fontWeight: "300",
  },
  domesticWorker1: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  domesticWorker: {
    lineHeight: 16,
    marginLeft: 8,
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
    textAlign: "left",
  },
  visits2: {
    textTransform: "lowercase",
  },
  visits: {
    width: 40,
    lineHeight: 16,
    marginLeft: 8,
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
    height: 16,
    textAlign: "left",
  },
  frameWrapper1: {
    marginTop: 8,
    flexDirection: "row",
  },
  frameParent4: {
    marginTop: 8,
  },
  text10: {
    textTransform: "capitalize",
  },
  hoursPerVisit: {
    textTransform: "lowercase",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  hoursPerVisitContainer: {
    width: 97,
    lineHeight: 16,
    marginLeft: 8,
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
    height: 16,
    textAlign: "left",
  },
  clockParent: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  sar: {
    color: Color.red,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  sar2: {
    textDecoration: "line-through",
    marginLeft: 8,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  groupContainer8Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer8Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupChild4: {
    marginTop: -16,
    marginLeft: -44,
    top: "50%",
    backgroundColor: Color.praimary1,
    position: "absolute",
    borderRadius: Border.br_8xs,
    left: "50%",
  },
  bookNow: {
    left: 17,
    color: Color.colorWhitesmoke_100,
    width: 55,
    justifyContent: "center",
    top: 8,
    position: "absolute",
    fontSize: FontSize.med_size,
    height: 16,
    alignItems: "center",
    display: "flex",
  },
  frameParent5: {
    marginTop: 16,
  },
  frameWrapper: {
    height: 192,
    backgroundColor: Color.whait,
    top: 59,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
    overflow: "hidden",
    width: 375,
  },
  groupChild5: {
    backgroundColor: Color.whait,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  arrow21: {
    height: 24,
    width: 24,
  },
  viewDetails1: {
    marginLeft: 102,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.praimary1,
    lineHeight: 30,
    textTransform: "capitalize",
  },
  arrow21Parent: {
    flexDirection: "row",
    alignItems: "center",
    left: 16,
  },
  lineParent: {
    bottom: 90,
    backgroundColor: Color.colorGray_100,
    height: 664,
    left: "50%",
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
  },
  home: {
    lineHeight: 16,
    marginTop: 4,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  navBarInner: {
    width: 93,
  },
  history: {
    color: Color.gray,
    fontSize: FontSize.med_size,
    textAlign: "left",
    lineHeight: 16,
    marginTop: 4,
  },
  clockGroup: {
    justifyContent: "center",
    alignItems: "center",
  },
  navBarChild: {
    display: "none",
  },
  bookings: {
    lineHeight: 16,
    marginTop: 4,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer38Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer38Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  textalignLeftParent: {
    height: 53,
  },
  navBar: {
    bottom: 34,
    flexDirection: "row",
    backgroundColor: Color.whait,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
    width: 375,
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    paddingVertical: Padding.p_5xs,
    height: 34,
    paddingHorizontal: 0,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  webViewbottom: {
    top: 56,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    backgroundColor: Color.whait,
    left: "50%",
  },
  navBarParent: {
    bottom: 0,
    height: 90,
    left: "50%",
  },
  viewDetails: {
    backgroundColor: Color.colorBlack,
    height: 812,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: 375,
  },
});

export default ViewDetails7;
