import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container } from "./styles";
import { useTheme } from "styled-components";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps) {
  const theme = useTheme();
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Container {...rest} onPress={goBack}>
      <Feather
        name="arrow-left"
        size={24}
        color={color ? color : theme.colors.gray_1}
      />
    </Container>
  );
}
