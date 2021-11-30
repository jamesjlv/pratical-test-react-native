import React from "react";
import { Feather } from "@expo/vector-icons";

import { Container, BookImage, Title, Author, Rate } from "./styles";
import { useTheme } from "styled-components";

export function Book() {
  const theme = useTheme();

  return (
    <Container>
      <BookImage
        source={{
          uri: "https://storage.googleapis.com/du-prd/books/images/9781538719725.jpg",
        }}
      />
      <Title>MERCY</Title>
      <Author>David Baldacci</Author>
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
