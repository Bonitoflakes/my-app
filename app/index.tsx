import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Camera, Send, Menu } from "lucide-react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>This is / page.</Text>
      <Link href="/_sitemap">Sitemap</Link>

      <Button
        onPress={() => console.log("Login with Email")}
        style={{ borderColor: "red", borderWidth: 2, borderRadius: 25 }}
      >
        <ButtonIcon icon={Camera} />
        <ButtonText>Login with Email</ButtonText>
      </Button>

      <Button variant="destructive" onPress={() => console.log("Delete Account")}>
        <ButtonText>Delete Account</ButtonText>
        <ButtonIcon icon={Send} />
      </Button>

      <Button
        variant="outline"
        style={({ pressed }) => [pressed && styles.pressed, styles.override]}
      >
        <ButtonText>Continue with Github</ButtonText>
      </Button>

      <Button variant="outline">
        {({ pressed }) => {
          return (
            <ButtonIcon
              icon={Menu}
              style={[
                {
                  backgroundColor: pressed ? "orange" : "black",
                },
              ]}
            />
          );
        }}
      </Button>

      <Button
        size="sm"
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "lightgray" : "white",
            padding: 10,
            borderRadius: 5,
          },
        ]}
      >
        {({ pressed }) => {
          return (
            <ButtonText
              style={[
                {
                  color: pressed ? "orange" : "purple",
                },
              ]}
            >
              Small Button
            </ButtonText>
          );
        }}
      </Button>

      <Link href="/signin" asChild>
        <Button variant="link">
          <ButtonText>Sign In</ButtonText>
        </Button>
      </Link>

      {/* <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "pink" : "white",
            padding: 10,
            borderRadius: 5,
          },
        ]}
      >
        {({ pressed }) => (
          <View>
            <Text style={{ color: pressed ? "blue" : "black" }}>hello world</Text>
          </View>
        )}
      </Pressable> */}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: "black",
  },
  pressed: {
    opacity: 0.5,
  },
  override: {
    backgroundColor: "red",
    color: "white",
  },
});
