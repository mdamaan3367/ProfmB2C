import React, { useState, useCallback } from "react";
import { View, Image, StyleSheet, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ViewDetails3 from "./ViewDetails3";
import WebViewBottom from "./WebViewBottom";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const RegularCleaning = ({ onClose }) => {
  const [viewDetailsTextVisible, setViewDetailsTextVisible] = useState(false);
  const [viewDetailsText1Visible, setViewDetailsText1Visible] = useState(false);
  const [viewDetailsText2Visible, setViewDetailsText2Visible] = useState(false);
  const [viewDetailsText3Visible, setViewDetailsText3Visible] = useState(false);
  const [viewDetailsText4Visible, setViewDetailsText4Visible] = useState(false);
  const [frameContainer71Visible, setFrameContainer71Visible] = useState(false);
  const navigation = useNavigation();

  const openViewDetailsText = useCallback(() => {
    setViewDetailsTextVisible(true);
  }, []);

  const closeViewDetailsText = useCallback(() => {
    setViewDetailsTextVisible(false);
  }, []);

  const openViewDetailsText1 = useCallback(() => {
    setViewDetailsText1Visible(true);
  }, []);

  const closeViewDetailsText1 = useCallback(() => {
    setViewDetailsText1Visible(false);
  }, []);

  const openViewDetailsText2 = useCallback(() => {
    setViewDetailsText2Visible(true);
  }, []);

  const closeViewDetailsText2 = useCallback(() => {
    setViewDetailsText2Visible(false);
  }, []);

  const openViewDetailsText3 = useCallback(() => {
    setViewDetailsText3Visible(true);
  }, []);

  const closeViewDetailsText3 = useCallback(() => {
    setViewDetailsText3Visible(false);
  }, []);

  const openViewDetailsText4 = useCallback(() => {
    setViewDetailsText4Visible(true);
  }, []);

  const closeViewDetailsText4 = useCallback(() => {
    setViewDetailsText4Visible(false);
  }, []);

  const openFrameContainer71 = useCallback(() => {
    setFrameContainer71Visible(true);
  }, []);

  const closeFrameContainer71 = useCallback(() => {
    setFrameContainer71Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.regularCleaning, styles.icon1Layout]}>
        <Image
          style={[styles.regularCleaningChild, styles.cleaningPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-4327.png")}
        />
        <View style={[styles.iphoneXOrNewer, styles.groupChildPosition]}>
          <Image
            style={styles.notchIcon}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={styles.batteryIcon}
              resizeMode="cover"
              source={require("../assets/battery1.png")}
            />
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi2.png")}
            />
            <Image
              style={styles.mobileSignalIcon}
              resizeMode="cover"
              source={require("../assets/mobile-signal1.png")}
            />
            <Image
              style={styles.recordingIndicatorIcon}
              resizeMode="cover"
              source={require("../assets/recording-indicator.png")}
            />
          </View>
          <Image
            style={styles.leftSideIcon}
            resizeMode="cover"
            source={require("../assets/left-side2.png")}
          />
        </View>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/group-238737.png")}
          />
        </Pressable>
        <Image
          style={[styles.regularCleaningItem, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/group-238738.png")}
        />
        <View
          style={[
            styles.ourExpertCleaningTeamBringParent,
            styles.cleaningPosition,
          ]}
        >
          <Text style={[styles.ourExpertCleaningContainer, styles.reviewTypo]}>
            <Text
              style={styles.ourExpertCleaning}
            >{`Our expert cleaning team brings skill proficiency and extensive experience to exceed your specific cleaning needs
`}</Text>
            <Text style={styles.blankLine}> </Text>
          </Text>
          <Text style={[styles.regularCleaning1, styles.detailsFlexBox]}>
            Regular cleaning
          </Text>
          <Pressable
            style={[styles.frameParent, styles.loginPosition]}
            onPress={() => navigation.navigate("ServiceDetails")}
          >
            <View style={styles.frameGroup}>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame18.png")}
              />
              <Text style={[styles.serviceDetails, styles.visitsTypo]}>
                Service details
              </Text>
            </View>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/group6.png")}
            />
          </Pressable>
        </View>
        <View style={styles.regularCleaningInner} />
        <View style={[styles.frameContainer, styles.cleaningPosition]}>
          <View style={styles.frameWrapperLayout}>
            <View style={styles.frameView}>
              <View>
                <View style={styles.oneMonthSubscriptionParent}>
                  <Text
                    style={[styles.oneMonthSubscription, styles.monthsTypo]}
                  >
                    One month subscription
                  </Text>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/vector5.png")}
                    />
                    <Text style={[styles.review, styles.detailsFlexBox]}>
                      4.9 (80 Review)
                    </Text>
                  </View>
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={[styles.domesticWorker, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>1</Text>
                      <Text style={styles.domesticWorker1}>
                        {" "}
                        domestic worker
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.frameGroup}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/calendar.png")}
                      />
                      <Text style={styles.visitsLayout}>
                        <Text style={styles.text1}>
                          <Text style={styles.textTypo}>4</Text>
                        </Text>
                        <Text style={styles.domesticWorker1}>
                          <Text style={styles.text1}>{` `}</Text>
                          <Text style={styles.visits2}>visits</Text>
                          <Text style={styles.text1}>{` `}</Text>
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.clockParent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/clock2.png")}
                  />
                  <Text
                    style={[styles.hoursPerVisitContainer, styles.visitsTypo]}
                  >
                    <Text style={[styles.text5, styles.textTypo]}>{`4 `}</Text>
                    <Text style={styles.hoursPerVisit}>hours per visit</Text>
                  </Text>
                </View>
                <Pressable
                  style={styles.viewDetails}
                  onPress={openViewDetailsText}
                >
                  <Text style={[styles.viewDetails1, styles.detailsFlexBox]}>
                    View details
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
                <View style={styles.frameGroup}>
                  <Text style={styles.sar}>
                    <Text style={styles.text1}>{`390 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={styles.sar2}>
                    <Text style={styles.text1}>{`500 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                </View>
                <View style={styles.groupChildLayout}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Text style={[styles.bookNow, styles.loginFlexBox]}>
                    Book Now
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper2, styles.frameWrapperLayout]}>
            <View style={styles.frameView}>
              <View>
                <View style={styles.oneMonthSubscriptionParent}>
                  <Text
                    style={[styles.oneMonthSubscription, styles.monthsTypo]}
                  >
                    One month subscription
                  </Text>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/vector5.png")}
                    />
                    <Text style={[styles.review, styles.detailsFlexBox]}>
                      4.9 (80 Review)
                    </Text>
                  </View>
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={[styles.domesticWorker, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>2</Text>
                      <Text style={styles.domesticWorker1}>
                        {" "}
                        domestic worker
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.frameGroup}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/calendar.png")}
                      />
                      <Text style={[styles.visits3, styles.visitsLayout]}>
                        <Text style={styles.textTypo}>4</Text>
                        <Text style={styles.domesticWorker1}>{` visits `}</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.clockParent}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/clock2.png")}
                    />
                    <Text
                      style={[styles.hoursPerVisitContainer, styles.visitsTypo]}
                    >
                      <Text
                        style={[styles.text5, styles.textTypo]}
                      >{`4 `}</Text>
                      <Text style={styles.hoursPerVisit}>hours per visit</Text>
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={styles.viewDetails}
                  onPress={openViewDetailsText1}
                >
                  <Text style={[styles.viewDetails1, styles.detailsFlexBox]}>
                    View details
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
                <View style={styles.frameGroup}>
                  <Text style={styles.sar}>
                    <Text style={styles.text1}>{`730 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={styles.sar2}>
                    <Text style={styles.text1}>{`800 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                </View>
                <View style={styles.groupChildLayout}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Text style={[styles.bookNow, styles.loginFlexBox]}>
                    Book Now
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper2, styles.frameWrapperLayout]}>
            <View style={styles.frameView}>
              <View>
                <View style={styles.oneMonthSubscriptionParent}>
                  <Text style={[styles.monthsSubscription, styles.monthsTypo]}>
                    3 months subscription
                  </Text>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/vector5.png")}
                    />
                    <Text style={[styles.review, styles.detailsFlexBox]}>
                      4.4 (60 Review)
                    </Text>
                  </View>
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={[styles.domesticWorkers, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>1</Text>
                      <Text style={styles.domesticWorker1}>
                        {" "}
                        domestic workers
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.frameGroup}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/calendar.png")}
                      />
                      <Text style={[styles.visits5, styles.visitsTypo]}>
                        <Text style={styles.textTypo}>12</Text>
                        <Text style={styles.domesticWorker1}>{` visits `}</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.clockParent}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/clock2.png")}
                    />
                    <Text
                      style={[styles.hoursPerVisitContainer, styles.visitsTypo]}
                    >
                      <Text
                        style={[styles.text5, styles.textTypo]}
                      >{`4 `}</Text>
                      <Text style={styles.hoursPerVisit}>hours per visit</Text>
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={styles.viewDetails}
                  onPress={openViewDetailsText2}
                >
                  <Text style={[styles.viewDetails1, styles.detailsFlexBox]}>
                    View details
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
                <View style={styles.frameGroup}>
                  <Text style={styles.sar}>
                    <Text style={styles.text1}>{`1019 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={styles.sar2}>
                    <Text style={styles.text1}>{`1300 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                </View>
                <View style={styles.groupChildLayout}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Text style={[styles.bookNow, styles.loginFlexBox]}>
                    Book Now
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper2, styles.frameWrapperLayout]}>
            <View style={styles.frameView}>
              <View>
                <View style={styles.oneMonthSubscriptionParent}>
                  <Text style={[styles.monthsSubscription, styles.monthsTypo]}>
                    6 months subscription
                  </Text>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/vector5.png")}
                    />
                    <Text style={[styles.review, styles.detailsFlexBox]}>
                      3.8 (90 Review)
                    </Text>
                  </View>
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={[styles.domesticWorkers, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>1</Text>
                      <Text style={styles.domesticWorker1}>
                        {" "}
                        domestic workers
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.frameGroup}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/calendar.png")}
                      />
                      <Text style={[styles.visits7, styles.visitsTypo]}>
                        <Text style={styles.textTypo}>24</Text>
                        <Text style={styles.domesticWorker1}>{` visits `}</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.clockParent}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/clock2.png")}
                    />
                    <Text
                      style={[styles.hoursPerVisitContainer, styles.visitsTypo]}
                    >
                      <Text
                        style={[styles.text5, styles.textTypo]}
                      >{`4 `}</Text>
                      <Text style={styles.hoursPerVisit}>hours per visit</Text>
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={styles.viewDetails}
                  onPress={openViewDetailsText3}
                >
                  <Text style={[styles.viewDetails1, styles.detailsFlexBox]}>
                    View details
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.frameParent15, styles.frameParentFlexBox]}>
                <View style={styles.frameGroup}>
                  <Text style={styles.sar}>
                    <Text style={styles.text1}>{`1980 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={styles.sar2}>
                    <Text style={styles.text1}>{`2040 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                </View>
                <View style={styles.groupChildLayout}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Text style={[styles.bookNow, styles.loginFlexBox]}>
                    Book Now
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper2, styles.frameWrapperLayout]}>
            <View style={styles.frameView}>
              <View>
                <View style={styles.oneMonthSubscriptionParent}>
                  <Text style={[styles.monthsSubscription2, styles.monthsTypo]}>
                    12 months subscription
                  </Text>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/vector5.png")}
                    />
                    <Text style={[styles.review, styles.detailsFlexBox]}>
                      3.8 (90 Review)
                    </Text>
                  </View>
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameGroup}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/user2.png")}
                    />
                    <Text style={[styles.domesticWorkers, styles.visitsTypo]}>
                      <Text style={styles.textTypo}>1</Text>
                      <Text style={styles.domesticWorker1}>
                        {" "}
                        domestic workers
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View style={styles.frameGroup}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/calendar.png")}
                      />
                      <Text style={[styles.visits9, styles.visitsTypo]}>
                        <Text style={styles.textTypo}>48</Text>
                        <Text style={styles.domesticWorker1}>{` visits `}</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.clockParent}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/clock2.png")}
                    />
                    <Text
                      style={[styles.hoursPerVisitContainer, styles.visitsTypo]}
                    >
                      <Text
                        style={[styles.text5, styles.textTypo]}
                      >{`4 `}</Text>
                      <Text style={styles.hoursPerVisit}>hours per visit</Text>
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={styles.viewDetails}
                  onPress={openViewDetailsText4}
                >
                  <Text style={[styles.viewDetails1, styles.detailsFlexBox]}>
                    View details
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.frameParent15, styles.frameParentFlexBox]}>
                <View style={styles.frameGroup}>
                  <Text style={styles.sar}>
                    <Text style={styles.text1}>{`3700 SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                  <Text style={styles.sar2}>
                    <Text style={styles.text1}>{`3960SAR `}</Text>
                    <Text style={styles.visits2}>{` `}</Text>
                  </Text>
                </View>
                <View style={styles.groupChildLayout}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Text style={[styles.bookNow, styles.loginFlexBox]}>
                    Book Now
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.profmLogo1111, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/profm-logo1-1-1-16.png")}
        />
        <View style={[styles.navBar, styles.navFlexBox]}>
          <Pressable
            style={[styles.navBarInner, styles.navFlexBox]}
            onPress={() => navigation.navigate("Home1")}
          >
            <View style={styles.parentSpaceBlock}>
              <Image
                style={styles.home2Icon}
                resizeMode="cover"
                source={require("../assets/home23.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
          </Pressable>
          <View style={[styles.navBarChild, styles.navBarChildLayout]}>
            <View style={styles.loginFlexBox}>
              <Image
                style={styles.home2Icon}
                resizeMode="cover"
                source={require("../assets/clock3.png")}
              />
              <Text style={[styles.history, styles.homeTypo]}>History</Text>
            </View>
          </View>
          <Pressable
            style={styles.navBarChildLayout}
            onPress={() => navigation.navigate("Bookings2")}
          >
            <View style={styles.calendarTickParent}>
              <Image
                style={styles.home2Icon}
                resizeMode="cover"
                source={require("../assets/calendartick4.png")}
              />
              <Text style={[styles.bookings, styles.homeTypo]}>bookings</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.navBarChildLayout}
            onPress={openFrameContainer71}
          >
            <View style={styles.loginFlexBox}>
              <Image
                style={styles.home2Icon}
                resizeMode="cover"
                source={require("../assets/vuesaxlinearuser.png")}
              />
              <Text style={[styles.bookings, styles.homeTypo]}>account</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.navBarChildLayout}
            onPress={() => navigation.navigate("Menu2")}
          >
            <View style={[styles.textalignLeftParent, styles.parentSpaceBlock]}>
              <Image
                style={styles.home2Icon}
                resizeMode="cover"
                source={require("../assets/textalignleft.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Menu</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.regularCleaningChild1, styles.navPosition]} />
        <View style={[styles.loginWithFaceId, styles.loginFlexBox]} />
        <View style={[styles.navBar1, styles.navPosition]}>
          <WebViewBottom
            webViewBottomPosition="absolute"
            webViewBottomBackgroundColor="#ccc"
            webViewBottomMarginLeft={-187.5}
            webViewBottomTop={0}
            webViewBottomLeft="50%"
            webViewBottomBorderBottomRightRadius={5}
            webViewBottomBorderBottomLeftRadius={5}
            webViewBottomWidth={375}
            webViewBottomHeight={34}
            webViewBottomBottom="unset"
            homeIndicatorBackgroundColor="#1d2939"
          />
        </View>
        <View style={[styles.loginWithFaceId1, styles.loginFlexBox]}>
          <View style={styles.faceId}>
            <Pressable
              style={styles.vector}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={[styles.icon1, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/vector6.png")}
              />
            </Pressable>
            <View
              style={[
                styles.httpslottiefilescomanimatParent,
                styles.groupChildPosition,
              ]}
            >
              <Image
                style={styles.httpslottiefilescomanimatIcon}
                resizeMode="cover"
                source={require("../assets/httpslottiefilescomanimationsusermanagementhcmy5yld1i.png")}
              />
              <Text style={[styles.youMustLog, styles.loginFlexBox]}>
                You must log in before you can complete this step.
              </Text>
            </View>
            <Pressable
              style={[styles.buttonSmall, styles.buttonLayout]}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={[styles.decline, styles.acceptTypo]}>Sign up</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonSmall1, styles.buttonLayout]}
              onPress={() => navigation.navigate("LogIn")}
            >
              <Text style={[styles.accept, styles.acceptTypo]}>log in</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={viewDetailsTextVisible}>
        <View style={styles.viewDetailsTextOverlay}>
          <Pressable
            style={styles.viewDetailsTextBg}
            onPress={closeViewDetailsText}
          />
          <ViewDetails3 onClose={closeViewDetailsText} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={viewDetailsText1Visible}>
        <View style={styles.viewDetailsText1Overlay}>
          <Pressable
            style={styles.viewDetailsText1Bg}
            onPress={closeViewDetailsText1}
          />
          <ViewDetails3 onClose={closeViewDetailsText1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={viewDetailsText2Visible}>
        <View style={styles.viewDetailsText2Overlay}>
          <Pressable
            style={styles.viewDetailsText2Bg}
            onPress={closeViewDetailsText2}
          />
          <ViewDetails3 onClose={closeViewDetailsText2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={viewDetailsText3Visible}>
        <View style={styles.viewDetailsText3Overlay}>
          <Pressable
            style={styles.viewDetailsText3Bg}
            onPress={closeViewDetailsText3}
          />
          <ViewDetails3 onClose={closeViewDetailsText3} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={viewDetailsText4Visible}>
        <View style={styles.viewDetailsText4Overlay}>
          <Pressable
            style={styles.viewDetailsText4Bg}
            onPress={closeViewDetailsText4}
          />
          <ViewDetails3 onClose={closeViewDetailsText4} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer71Visible}>
        <View style={styles.frameContainer71Overlay}>
          <Pressable
            style={styles.frameContainer71Bg}
            onPress={closeFrameContainer71}
          />
          <RegularCleaning onClose={closeFrameContainer71} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  icon1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  cleaningPosition: {
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    left: "50%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 26,
    width: 26,
    top: 43,
    position: "absolute",
  },
  reviewTypo: {
    textAlign: "left",
    fontWeight: "300",
  },
  detailsFlexBox: {
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  loginPosition: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 14,
    width: 14,
  },
  visitsTypo: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
  },
  monthsTypo: {
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  textTypo: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
  },
  frameParentFlexBox: {
    marginTop: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  groupChildLayout: {
    width: 88,
    height: 32,
  },
  loginFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameWrapperLayout: {
    height: 216,
    backgroundColor: Color.whait,
    overflow: "hidden",
    width: 375,
  },
  visitsLayout: {
    width: 40,
    marginLeft: 8,
    height: 16,
    lineHeight: 16,
    textAlign: "left",
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
  },
  navFlexBox: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 4,
    color: Color.a6A6A6,
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.med_size,
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
  navPosition: {
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    width: 375,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  buttonLayout: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_81xl,
    height: 40,
    width: 144,
    borderRadius: Border.br_3xs,
    top: 244,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  acceptTypo: {
    width: 122,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "700",
    height: 24,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  regularCleaningChild: {
    height: 208,
    top: 0,
    width: 375,
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 42,
    overflow: "hidden",
    top: 0,
  },
  wrapper: {
    left: 16,
  },
  regularCleaningItem: {
    left: 333,
  },
  ourExpertCleaning: {
    lineHeight: 16,
  },
  blankLine: {
    lineHeight: 15,
  },
  ourExpertCleaningContainer: {
    top: 56,
    width: 344,
    height: 32,
    color: Color.grayBlack,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.med_size,
    left: 16,
    position: "absolute",
  },
  regularCleaning1: {
    width: 128,
    height: 24,
    alignItems: "center",
    color: Color.black,
    display: "flex",
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    top: 24,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  frameIcon: {
    overflow: "hidden",
  },
  serviceDetails: {
    height: 16,
    width: 120,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  frameGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  vectorIcon: {
    width: 7,
    height: 12,
    marginLeft: 170,
  },
  frameParent: {
    top: 112,
    backgroundColor: "rgba(166, 166, 166, 0.1)",
    padding: Padding.p_xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  ourExpertCleaningTeamBringParent: {
    top: 208,
    height: 176,
    backgroundColor: Color.whait,
    overflow: "hidden",
    width: 375,
  },
  regularCleaningInner: {
    top: 1569,
    left: 22,
    width: 338,
    height: 37,
    overflow: "hidden",
    position: "absolute",
  },
  oneMonthSubscription: {
    width: 161,
    height: 24,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  review: {
    fontSize: FontSize.size_3xs,
    width: 71,
    marginLeft: 4,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    fontWeight: "300",
    color: Color.grayBlack,
  },
  oneMonthSubscriptionParent: {
    justifyContent: "space-between",
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  domesticWorker1: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  domesticWorker: {
    lineHeight: 16,
  },
  text1: {
    textTransform: "capitalize",
  },
  visits2: {
    textTransform: "lowercase",
  },
  frameWrapper1: {
    marginTop: 8,
    flexDirection: "row",
  },
  frameParent2: {
    marginTop: 8,
  },
  text5: {
    textTransform: "capitalize",
  },
  hoursPerVisit: {
    textTransform: "lowercase",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  hoursPerVisitContainer: {
    width: 97,
    height: 16,
    lineHeight: 16,
  },
  clockParent: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  viewDetailsTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  viewDetailsTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  viewDetails1: {
    width: 72,
    color: Color.praimary,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  viewDetails: {
    marginTop: 8,
  },
  sar: {
    color: Color.red,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  sar2: {
    textDecoration: "line-through",
    color: Color.a6A6A6,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.med_size,
  },
  groupChild: {
    marginTop: -16,
    marginLeft: -44,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.praimary,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  bookNow: {
    top: 8,
    left: 17,
    color: Color.colorWhitesmoke_100,
    width: 55,
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    fontSize: FontSize.med_size,
    position: "absolute",
  },
  frameParent3: {
    width: 343,
  },
  frameView: {
    top: 24,
    left: 16,
    position: "absolute",
  },
  visits3: {
    textTransform: "capitalize",
  },
  viewDetailsText1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  viewDetailsText1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameWrapper2: {
    marginTop: 8,
  },
  monthsSubscription: {
    width: 145,
    height: 24,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  domesticWorkers: {
    width: 246,
    height: 16,
    lineHeight: 16,
  },
  visits5: {
    width: 43,
    height: 16,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  viewDetailsText2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  viewDetailsText2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  visits7: {
    width: 47,
    height: 16,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  viewDetailsText3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  viewDetailsText3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent15: {
    width: 352,
  },
  monthsSubscription2: {
    width: 147,
    height: 24,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  visits9: {
    width: 48,
    height: 16,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  viewDetailsText4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  viewDetailsText4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameContainer: {
    top: 392,
    height: 420,
  },
  profmLogo1111: {
    marginLeft: -99.5,
    top: 65,
    width: 200,
    height: 73,
  },
  home2Icon: {
    height: 24,
    width: 24,
  },
  home: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  navBarInner: {
    width: 93,
  },
  history: {
    fontFamily: FontFamily.med,
    fontWeight: "500",
  },
  navBarChild: {
    display: "none",
  },
  bookings: {
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  calendarTickParent: {
    alignItems: "center",
  },
  frameContainer71Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer71Bg: {
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
    top: 722,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    width: 375,
    flexDirection: "row",
    backgroundColor: Color.whait,
  },
  regularCleaningChild1: {
    marginTop: -406,
    backgroundColor: Color.colorGray_300,
    top: "50%",
    height: 812,
  },
  loginWithFaceId: {
    marginTop: -139,
    height: 278,
    top: "50%",
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  navBar1: {
    top: 778,
    height: 34,
  },
  icon1: {
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "88.34%",
    top: "6.01%",
    right: "5.83%",
    bottom: "87.66%",
    width: "5.83%",
    height: "6.33%",
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    height: 120,
    width: 120,
  },
  youMustLog: {
    lineHeight: 21,
    width: 310,
    marginTop: 24,
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    color: Color.black,
    height: 32,
  },
  httpslottiefilescomanimatParent: {
    height: "55.76%",
    marginLeft: -155.5,
    top: "10.13%",
    bottom: "34.11%",
    width: 311,
    alignItems: "center",
  },
  decline: {
    color: Color.praimary,
  },
  buttonSmall: {
    borderStyle: "solid",
    borderColor: Color.praimary,
    borderWidth: 2,
    left: 16,
  },
  accept: {
    color: Color.whait,
  },
  buttonSmall1: {
    left: 183,
    backgroundColor: Color.praimary,
  },
  faceId: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 316,
    width: 343,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    overflow: "hidden",
  },
  loginWithFaceId1: {
    marginTop: -158,
    height: 316,
    top: "50%",
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  regularCleaning: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
  },
});

export default RegularCleaning;
