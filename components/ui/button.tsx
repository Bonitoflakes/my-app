import React from "react";
import { createContext, useContext, ReactNode, forwardRef, ElementRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
  type PressableProps,
  type PressableStateCallbackType,
} from "react-native";
import { type LucideIcon } from "lucide-react-native";

type ButtonContextType = {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean | null;
};

type ButtonProps = PressableProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonTextProps = {
  children: string;
  style?: StyleProp<TextStyle>;
  // pressed?: boolean;
};

type ButtonIconProps = {
  icon: LucideIcon;
  style?: StyleProp<ViewStyle>;
  // pressed?: boolean;
};

const ButtonContext = createContext<ButtonContextType | null>(null);

const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("Button compound components must be used within Button");
  }
  return context;
};

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      disabled = false,
      onPress,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <ButtonContext.Provider value={{ variant, size, disabled }}>
        <Pressable
          onPress={onPress}
          ref={ref}
          role="button"
          disabled={disabled}
          style={(state) => [
            styles.button,
            ButtonVariants[variant].base,
            ButtonSizes[size].button,
            disabled && styles.disabled,
            state.pressed && styles.pressed,
            typeof style === "function" ? style(state) : style,
          ]}
          {...props}
        >
          {children}
        </Pressable>
      </ButtonContext.Provider>
    );
  }
);

const ButtonText = (props: ButtonTextProps) => {
  const { variant, size, disabled } = useButtonContext();
  const { children, style } = props;

  return (
    <Text
      style={[
        styles.text,
        ButtonVariants[variant].text,
        ButtonSizes[size].text,
        disabled && styles.disabledText,
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const ButtonIcon = (props: ButtonIconProps) => {
  const { variant, size } = useButtonContext();
  const { icon: Icon, style } = props;

  return (
    <View style={[{ backgroundColor: "pink" }, style]}>
      <Icon
        size={ButtonSizes[size].icon.width}
        color={ButtonVariants[variant].text.color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  text: {
    fontWeight: "500",
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.7,
  },
  pressed: {},
});

const ButtonVariants: Record<ButtonVariant, ButtonVariantStyles> = {
  primary: {
    base: {
      backgroundColor: "#2563EB",
      borderWidth: 0,
    },
    text: {
      color: "#FFFFFF",
    },
  },
  destructive: {
    base: {
      backgroundColor: "#DC2626",
      borderWidth: 0,
    },
    text: {
      color: "#FFFFFF",
    },
  },
  outline: {
    base: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "#2563EB",
    },
    text: {
      color: "#2563EB",
    },
  },
  ghost: {
    base: {
      backgroundColor: "transparent",
      borderWidth: 0,
    },
    text: {
      color: "#111827",
    },
  },
  link: {
    base: {
      backgroundColor: "transparent",
      borderWidth: 0,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    text: {
      color: "#2563EB",
      textDecorationLine: "underline",
    },
  },
};

const ButtonSizes: Record<ButtonSize, ButtonSizeStyles> = {
  sm: {
    button: {
      paddingHorizontal: 12,
      minHeight: 36,
    },
    text: {
      fontSize: 14,
    },
    icon: {
      width: 16,
      height: 16,
    },
  },
  md: {
    button: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      minHeight: 40,
    },
    text: {
      fontSize: 16,
    },
    icon: {
      width: 20,
      height: 20,
    },
  },
  lg: {
    button: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      minHeight: 44,
    },
    text: {
      fontSize: 18,
    },
    icon: {
      width: 24,
      height: 24,
    },
  },
};

type ButtonVariant = "primary" | "destructive" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

type ButtonVariantStyles = {
  base: ViewStyle;
  text: TextStyle;
};

type ButtonSizeStyles = {
  button: ViewStyle;
  text: TextStyle;
  icon: {
    width: number;
    height: number;
  };
};

export { Button, ButtonText, ButtonIcon };
