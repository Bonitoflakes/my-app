import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Camera, Send, Menu } from "lucide-react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>This is / page.</Text>
      <Link href="/_sitemap">Sitemap</Link>

      <Button onPress={() => console.log("Login with Email")}>
        <ButtonIcon icon={Camera} />
        <ButtonText>Login with Email</ButtonText>
      </Button>

      <Button variant="destructive" onPress={() => console.log("Delete Account")}>
        <ButtonText>Delete Account</ButtonText>
        <ButtonIcon icon={Send} />
      </Button>

      <Button variant="outline">
        <ButtonText>Continue with Github</ButtonText>
      </Button>

      <Button variant="outline">
        <ButtonIcon icon={Menu} />
      </Button>

      <Button size="sm">
        <ButtonText>Small Button</ButtonText>
      </Button>

      <Link href="/signin" asChild>
        <Button variant="link">
          <ButtonText>Sign In</ButtonText>
        </Button>
      </Link>
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
  },
});
