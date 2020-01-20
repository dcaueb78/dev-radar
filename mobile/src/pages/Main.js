import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

export default function Main() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }

    loadInitialPosition();
  }, [])

  return <MapView style={styles.map} />;
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
