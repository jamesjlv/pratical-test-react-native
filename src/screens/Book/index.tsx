import React from "react";
import { Alert, Linking, StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Header,
  Actions,
  Content,
  BookInfo,
  BookImage,
  BookDetails,
  Title,
  Author,
  Rate,
  Stars,
  Rating,
  CategoryContainer,
  CategoryName,
  BookAbout,
  About,
  AboutTitle,
  GoReadBook,
  ButtonText,
} from "./styles";
import { useTheme } from "styled-components";
import { useRoute } from "@react-navigation/native";

interface Params {
  title: string;
  author: string;
  bookImageUrl: string;
  description: string;
  link: string;
}
export function Book() {
  const theme = useTheme();
  const routes = useRoute();
  const { title, author, bookImageUrl, description, link } =
    routes.params as Params;

  async function handleBuyBook() {
    try {
      await Linking.openURL(link);
      return;
    } catch (error) {
      Alert.alert(
        "Ops!",
        "Não foi possivel abrir o link para comprar o livro."
      );
      return;
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton />
        <Actions>
          <Feather
            name="heart"
            size={24}
            color={theme.colors.gray_1}
            onPress={() => {}}
          />
          <Feather
            name="share-2"
            size={24}
            color={theme.colors.gray_1}
            style={{ marginLeft: 16 }}
            onPress={() => {}}
          />
        </Actions>
      </Header>

      <Content>
        <BookInfo>
          <BookImage
            source={{
              uri: bookImageUrl,
            }}
          />
          <BookDetails>
            <Title>{title}</Title>
            <Author>{author}</Author>
            <Rate>
              <Stars>
                <Feather name="star" size={10} color={theme.colors.primary} />
                <Feather name="star" size={10} color={theme.colors.primary} />
                <Feather name="star" size={10} color={theme.colors.primary} />
                <Feather name="star" size={10} color={theme.colors.primary} />
                <Feather name="star" size={10} color={theme.colors.gray_1} />
              </Stars>
              <Rating>36 Avaliações</Rating>
            </Rate>
            <CategoryContainer>
              <CategoryName>Não Ficção</CategoryName>
              <CategoryName>Linguagem estrangeira</CategoryName>
            </CategoryContainer>
          </BookDetails>
        </BookInfo>
        <BookAbout>
          <AboutTitle>Sobre este livro</AboutTitle>
          <About>{description}</About>
        </BookAbout>
      </Content>
      <GoReadBook onPress={handleBuyBook}>
        <ButtonText>Ler agora</ButtonText>
      </GoReadBook>
    </Container>
  );
}
