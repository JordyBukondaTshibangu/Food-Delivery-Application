import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

type MapProps = {
  initialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  restaurantName: string;
};

export default function Map({ initialRegion, restaurantName }: MapProps) {
  return (
    <MapView style={styles.map} initialRegion={initialRegion} mapType="standard">
      <Marker
        coordinate={initialRegion}
        title={restaurantName}
        description="Your best choice"
        pinColor="#ee9654"
        draggable
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
