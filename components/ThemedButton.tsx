import {
  TouchableOpacity, type TouchableOpacityProps,
  StyleSheet
} from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from './ThemedText';

export type ThemedButtonProps = TouchableOpacityProps & {
  bgColor?: string;
  txtColor?: string;
  txt?: string;
  onPress?: () => void
};

export function ThemedButton({
  style,
  bgColor,
  txtColor,
  txt,
  onPress,
  ...rest
}: ThemedButtonProps) {


  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.default,
      bgColor && { backgroundColor: bgColor }
      ]}
      {...rest}>
      <ThemedText
        type="subtitle"
        style={[styles.title,
        txtColor && { color: txtColor }
        ]}
      >{txt}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    height: 50,
    backgroundColor: "#004dcf",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "10%",
    borderRadius: 7,
    marginVertical: 12
  },

  title: {
    fontSize: 16,
    color: "#fff"
  },
});
