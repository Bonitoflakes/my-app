import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const slug = () => {
  const { slug } = useLocalSearchParams();
  console.log(slug)

  return (
    <View>
      <Text>{slug}</Text>
    </View>
  );
};

export default slug;

const styles = StyleSheet.create({});
