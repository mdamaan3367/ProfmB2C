import React, { useState } from 'react';
import { View, Button, Alert, Text, Image, StyleSheet } from 'react-native';

const FloatingNotification = ({ title, body, logo }) => {
  // Alert does not support custom styling, so we will not use logo here
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
};

const MainComponent = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);
    Alert.alert(
      "Notification Title",
      "This is a notification body.",
      [{ text: "OK", onPress: () => setShowNotification(false) }]
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Notification" onPress={handleShowNotification} />
      {showNotification && (
        <FloatingNotification />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 50,
  },
  innerContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    color: '#fff',
    fontSize: 14,
  },
});

export default MainComponent;
