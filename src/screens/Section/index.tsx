import React from "react";
import { StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BackButton } from "../../components/BackButton";
import { Book } from "../../components/Book";

import { Container, Header, Title, BooksFinded } from "./styles";

export function Section() {
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={() => {}} />
        <Title>Biografia</Title>
      </Header>
      <ScrollView>
        <BooksFinded>
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </BooksFinded>
      </ScrollView>
    </Container>
  );
}
