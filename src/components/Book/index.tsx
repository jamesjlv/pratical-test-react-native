import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { Container, BookImage, Title, Author, Rate } from "./styles";
import { useTheme } from "styled-components";

interface BookProps {
  title: string;
  author: string;
  bookImageUrl: string;
  description: string;
  link: string;
}

export function Book({
  title,
  author,
  bookImageUrl,
  description,
  link,
}: BookProps) {
  const theme = useTheme();
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  function handleSeeBook() {
    navigate("Book", {
      title,
      author,
      bookImageUrl,
      description: description,
      link,
    });
  }

  return (
    <Container onPress={handleSeeBook}>
      <BookImage
        source={{
          uri: bookImageUrl,
        }}
      />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Rate>
        <Feather name="star" size={10} color={theme.colors.primary} />
        <Feather name="star" size={10} color={theme.colors.primary} />
        <Feather name="star" size={10} color={theme.colors.primary} />
        <Feather name="star" size={10} color={theme.colors.primary} />
        <Feather name="star" size={10} color={theme.colors.gray_1} />
      </Rate>
    </Container>
  );
}
