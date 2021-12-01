import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(BorderlessButton)`
  margin-right: 12px;
  margin-bottom: 24px;
  width: 104px;
`;

export const BookImage = styled.Image`
  width: 104px;
  height: 160px;
  margin-bottom: 4px;
  border-radius: 4px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  line-height: 16px;
`;

export const Author = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_2};
  line-height: 16px;
  margin-top: 2px;
`;
export const Rate = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;
