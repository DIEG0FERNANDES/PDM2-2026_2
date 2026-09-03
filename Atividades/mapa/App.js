import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const [region, setRegion] = useState({
    latitude: -14.2350, // Brasil
    longitude: -51.9253,
    latitudeDelta: 30,
    longitudeDelta: 30,
  });

  const locations = {
    brasil: { latitude: -14.2350, longitude: -51.9253 },
    eua: { latitude: 37.0902, longitude: -95.7129 },
    japao: { latitude: 36.2048, longitude: 138.2529 },
  };

  const goToLocation = (loc) => {
    setRegion({
      latitude: loc.latitude,
      longitude: loc.longitude,
      latitudeDelta: 30,
      longitudeDelta: 30,
    });
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>
      <View style={styles.buttons}>
        <Button title="Brasil" onPress={() => goToLocation(locations.brasil)} />
        <Button title="EUA" onPress={() => goToLocation(locations.eua)} />
        <Button title="Japão" onPress={() => goToLocation(locations.japao)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
