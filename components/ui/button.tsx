import React, { createContext, useContext, ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
} from "react-native";
import { type LucideIcon } from "lucide-react-native";

type ButtonVariant = "primary" | "destructive" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonVariantStyles {
  base: ViewStyle;
  text: TextStyle;
}

interface ButtonSizeStyles {
  button: ViewStyle;
  text: TextStyle;
  icon: {
    width: number;
    height: number;
  };
}

interface ButtonContextType {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
}

const ButtonContext = createContext<ButtonContextType | null>(null);

const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("Button compound components must be used within Button");
  }
  return context;
};

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

interface ButtonTextProps {
  children: string;
  style?: StyleProp<TextStyle>;
}

interface ButtonIconProps {
  icon: LucideIcon;
  style?: StyleProp<ViewStyle>;
}

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

const ButtonText = ({ children, style }: ButtonTextProps) => {
  const { variant, size, disabled } = useButtonContext();

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

const ButtonIcon = ({ icon: Icon, style }: ButtonIconProps) => {
  const { variant, size } = useButtonContext();
  const iconSize = ButtonSizes[size].icon.width;

  return (
    <View style={[style]}>
      <Icon size={iconSize} color={ButtonVariants[variant].text.color} />
    </View>
  );
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onPress,
  style,
}: ButtonProps) => {
  return (
    <ButtonContext.Provider value={{ variant, size, disabled }}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button,
          ButtonVariants[variant].base,
          ButtonSizes[size].button,
          disabled && styles.disabled,
          style,
        ]}
      >
        <View style={styles.contentContainer}>{children}</View>
      </TouchableOpacity>
    </ButtonContext.Provider>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
});

// Attach compound components
Button.Text = ButtonText;
Button.Icon = ButtonIcon;

const ForwardrefButton = React.forwardRef<typeof Pressable, ButtonProps>((props, ref) => (
  <Button {...props} ref={ref} />
));

export default Button;
