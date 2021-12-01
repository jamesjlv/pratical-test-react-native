import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { BookCategory } from "../../dtos/BookCategory";
import { api } from "../../services/api";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import {
  CategoryWrapper,
  CategoryImage,
  CategoryName,
  Container,
  Header,
  Title,
} from "./styles";

interface CategorySelected {
  list_name_encoded: string;
  display_name: string;
}

export function Category() {
  const [category, setCategory] = useState<BookCategory>({} as BookCategory);
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  function handleCategorySelected(item: CategorySelected) {
    navigate("Section", {
      category: item.display_name,
      list_name_encoded: item.list_name_encoded,
    });
  }

  useEffect(() => {
    async function fetchData() {
      const data = await api.get(
        "/svc/books/v3/lists/names.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR"
      );
      setCategory(data.data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      {!category?.results ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={category.results}
          keyExtractor={(key) => key.display_name}
          renderItem={({ item }) => (
            <CategoryWrapper onPress={() => handleCategorySelected(item)}>
              <CategoryImage />
              <CategoryName>{item.display_name}</CategoryName>
            </CategoryWrapper>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
