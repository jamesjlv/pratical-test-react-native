import React, { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import Animated from "react-native-reanimated";
import { BooksSlider } from "../../components/BooksSlider";
import { Category } from "../../components/Category";
import { Search } from "../../components/Search";
import { BookCategory } from "../../dtos/BookCategory";
import { BookData } from "../../dtos/BookData";
import { api } from "../../services/api";

import {
  Container,
  Header,
  Title,
  Avatar,
  ImageProfile,
  FormSeach,
} from "./styles";

export function Home() {
  const [booksData, setBooksData] = useState<BookData>({} as BookData);

  useEffect(() => {
    async function fetchBooks() {
      const response = await api.get(
        "/svc/books/v3/lists/overview.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR"
      );
      setBooksData(response.data);
    }
    fetchBooks();
  }, []);

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
      {!booksData ? (
        <ActivityIndicator />
      ) : (
        <Animated.ScrollView
          contentContainerStyle={{ paddingHorizontal: 16 }}
          showsHorizontalScrollIndicator={false}
        >
          <BooksSlider title="Para você" lists={booksData?.results?.lists[0]} />

          <Category />
          <BooksSlider
            title="Os mais lidos da semana"
            lists={booksData?.results?.lists[7]}
          />
        </Animated.ScrollView>
      )}
      {/* Colocar o botão navigation */}
    </Container>
  );
}
