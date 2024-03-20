import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const targetPercentage = 50; // Set your desired percentage here

  useEffect(() => {
    let interval;

    if (progress < targetPercentage) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          return newProgress > targetPercentage ? targetPercentage : newProgress;
        });
      }, 50); // Adjust the interval duration as needed
    }

    return () => clearInterval(interval);
  }, [progress, targetPercentage]);

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]}>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProgressBar;