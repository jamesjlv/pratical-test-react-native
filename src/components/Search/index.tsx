import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container, InputText, SearchData } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

interface SearchProps extends TextInputProps {}

export function Search({ ...rest }: TextInputProps) {
  const theme = useTheme();
  return (
    <Container>
      <InputText {...rest} />
      <SearchData>
        <Feather name="search" size={24} color={theme.colors.gray_3} />
      </SearchData>
    </Container>
  );
}
