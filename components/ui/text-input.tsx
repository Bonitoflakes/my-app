import {
  StyleSheet,
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
} from "react-native";
import { forwardRef } from "react";

const TextInput = forwardRef<React.ElementRef<typeof RNTextInput>, RNTextInputProps>(
  ({ style, ...props }, ref) => {
    return <RNTextInput ref={ref} style={[styles.input, style]} {...props}></RNTextInput>;
  }
);

export default TextInput;

const styles = StyleSheet.create({
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
  },
});
