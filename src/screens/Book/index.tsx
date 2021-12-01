import React from "react";
import { StatusBar, Text } from "react-native";
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

export function Book() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={() => {}} />
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
          />
        </Actions>
      </Header>

      <Content>
        <BookInfo>
          <BookImage
            source={{
              uri: "https://storage.googleapis.com/du-prd/books/images/9781538719725.jpg",
            }}
          />
          <BookDetails>
            <Title>MERCY</Title>
            <Author>David Baldacci</Author>
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
          <About>
            Linguagem estrangeiraLinguagem estrangeiraLinguagem
            estrangeiraLinguagem estrangeiraLinguagem estrangeiraLinguagem
            estrangeiraLinguagem estrangeiraLinguagem estrangeiraLinguagem
            estrangeiraLinguagem estrangeiraLinguagem estrangeiraLinguagem
            estrangeiraLinguagem estrangeiraLinguagem estrangeiraLinguagem
            estrangeiraLinguagem estrangeiraLinguagem estrangeira Linguagem
            estrangeiraLinguagem estrangeiraLinguagem estrangeiraLinguagem
            estrangeiraLinguagem estrangeiraLinguagem estrangeiraLinguagem
            estrangeiraLinguagem estrangeiraLinguagem estrangeiraLinguagem
            estrangeiraLinguagem estrangeiraLinguagem estrangeiraLinguagem
            estrangeiraLinguagem estrangeiraLinguagem estrangeiraLinguagem
            estrangeiraLinguagem estrangeira
          </About>
        </BookAbout>
      </Content>
      <GoReadBook>
        <ButtonText>Ler agora</ButtonText>
      </GoReadBook>
    </Container>
  );
}
