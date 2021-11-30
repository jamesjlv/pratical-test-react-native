import React from "react";
import { StatusBar } from "react-native";

import { Container, Header, Title } from "./styles";

export function Section() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Title>Biografia</Title>
      </Header>
    </Container>
  );
}
