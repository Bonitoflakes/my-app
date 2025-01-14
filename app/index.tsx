import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Button from "@/components/ui/button";
import { Camera, Send, Menu } from "lucide-react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>This is / page.</Text>
      <Link href="/_sitemap">Sitemap</Link>

      <Button onPress={() => console.log("Login with Email")}>
        <Button.Icon icon={Camera} />
        <Button.Text>Login with Email</Button.Text>
      </Button>

      <Button variant="destructive" onPress={() => console.log("Delete Account")}>
        <Button.Text>Delete Account</Button.Text>
        <Button.Icon icon={Send} />
      </Button>

      <Button variant="outline">
        <Button.Icon icon={Menu} />
        <Button.Text>Continue with Github</Button.Text>
      </Button>

      <Button variant="outline">
        <Button.Icon icon={Menu} />
      </Button>

      <Button size="sm">
        <Button.Text>Small Button</Button.Text>
      </Button>

      <Link href="/signin">
        <Button variant="link">
          <Button.Text>Sign In</Button.Text>
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
