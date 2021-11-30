import React from "react";
import { FlatList } from "react-native";
import { Book } from "../Book";

import { Container, Header, Title } from "./styles";

interface BooksSliderProps {
  title: string;
}

export function BooksSlider({ title }: BooksSliderProps) {
  const book = [1, 2, 3, 4, 5];
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <FlatList
        data={book}
        keyExtractor={(key) => String(key)}
        renderItem={({ item }) => <Book />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
