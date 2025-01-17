import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Camera, Send, Menu } from "lucide-react-native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from "react";

let renderCount = 0;

type Inputs = {
  example: string;
  test2: string;
};

const Index = () => {
  renderCount++;

  const [text, onChangeText] = useState("Useless Text");

  const {
    register,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      example: "This is an example",
    },
  });

  const exampleRegister = register("example");
  console.log(exampleRegister);

  return (
    <View style={styles.container}>
      <Text>This is / page.</Text>
      <Link href="/_sitemap">Sitemap</Link>
      <Text
        style={{
          backgroundColor: "black",
          padding: 20,
          color: "white",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {renderCount}
      </Text>

      <View>
        {/* <Button
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
        </Link> */}

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

      <View>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />

        <Controller
          control={control}
          name="example"
          render={() => {
            return (
              <TextInput
                {...exampleRegister}
                placeholder="useless placeholder"
                style={[styles.input]}
                autoFocus
                keyboardAppearance="dark"
                cursorColor="orange"
                selectionColor="orange"
                selectionHandleColor="pink"
                returnKeyType="search"
                inputMode="email"
              />
            );
          }}
        />

        <Controller
          control={control}
          name="test2"
          render={() => {
            return (
              <TextInput
                {...exampleRegister}
                placeholder="useless placeholder"
                style={[styles.input]}
                autoFocus
                keyboardAppearance="dark"
                cursorColor="orange"
                selectionColor="orange"
                selectionHandleColor="pink"
                returnKeyType="go"
                inputMode="email"
              />
            );
          }}
        />
        <Text>{errors.example?.message}</Text>
      </View>
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
    // backgroundColor: "black",
  },
  pressed: {
    opacity: 0.5,
  },
  override: {
    backgroundColor: "red",
    color: "white",
  },
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    padding: 10,
    borderWidth: 2,
  },
});
