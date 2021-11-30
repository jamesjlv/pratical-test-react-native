import React from "react";
import { FlatList } from "react-native-gesture-handler";

import {
  CategoryWrapper,
  CategoryImage,
  CategoryName,
  Container,
  Header,
  Title,
} from "./styles";

export function Category() {
  const CategoryData = ["a", "b", "c", "c", "e"];

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={CategoryData}
        keyExtractor={(key) => String(Math.random())}
        renderItem={({ item }) => (
          <CategoryWrapper>
            <CategoryImage />
            <CategoryName>Biografia</CategoryName>
          </CategoryWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
