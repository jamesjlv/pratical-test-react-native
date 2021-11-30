import React from "react";
import { StatusBar } from "react-native";
import Animated from "react-native-reanimated";
import { BooksSlider } from "../../components/BooksSlider";
import { Category } from "../../components/Category";
import { Search } from "../../components/Search";

import {
  Container,
  Header,
  Title,
  Avatar,
  ImageProfile,
  FormSeach,
} from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Title>BookShelf</Title>
        <Avatar>
          <ImageProfile
            source={{
              uri: "https://avatars.githubusercontent.com/u/63821594?v=4",
            }}
          />
        </Avatar>
      </Header>
      <FormSeach>
        <Search placeholder="Qual livro você gostaria de ler hoje?" />
      </FormSeach>
      <Animated.ScrollView
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false}
      >
        <BooksSlider title="Para você" />
        <Category />
        <BooksSlider title="Os mais lidos da semana" />
      </Animated.ScrollView>
      {/* Colocar o botão navigation */}
    </Container>
  );
}
