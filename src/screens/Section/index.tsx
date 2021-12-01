import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BackButton } from "../../components/BackButton";
import { Book } from "../../components/Book";
import { api } from "../../services/api";

import { Container, Header, Title, BooksFinded } from "./styles";

interface CategorySelected {
  list_name_encoded: string;
  category: string;
}

export function Section() {
  const routes = useRoute();
  const { list_name_encoded, category } = routes.params as CategorySelected;
  const [books, setBooks] = useState({} as BookCategorySelected);

  useEffect(() => {
    async function fetchBooks() {
      const response = await api.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/${list_name_encoded}.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR`
      );
      setBooks(response.data);
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
        <BackButton onPress={() => {}} />
        <Title>{category}</Title>
      </Header>
      <ScrollView>
        <BooksFinded>
          {books?.results?.books?.map((item) => (
            <Book
              title={item.title}
              author={item.author}
              bookImageUrl={item.book_image}
              description={item.description}
            />
          ))}
        </BooksFinded>
      </ScrollView>
    </Container>
  );
}
