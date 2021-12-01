import { RectButton } from "react-native-gesture-handler";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight()}px;
  padding: 0 16px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 16px;
  flex: 1;
`;

export const BookInfo = styled.View`
  flex-direction: row;
`;

export const BookImage = styled.Image`
  width: 164px;
  height: 253px;
  border-radius: 4px;
`;

export const BookDetails = styled.View`
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_1};
`;

export const Author = styled.Text`
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray_2};
  margin-bottom: 16px;
`;

export const Rate = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Stars = styled.View`
  flex-direction: row;
  margin-right: 8px;
`;

export const Rating = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray_2};
`;

export const CategoryContainer = styled.View`
  margin-top: 16px;
`;

export const CategoryName = styled.Text`
  width: 100%;
  padding: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_4};
  border-radius: 4px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.gray_2};
`;

export const BookAbout = styled.ScrollView``;

export const AboutTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.black};

  margin-top: 32px;
  margin-bottom: 16px;
`;
export const About = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${RFValue(22)}px;
`;

export const GoReadBook = styled(RectButton)`
  margin: 0 16px;
  margin-bottom: ${getBottomSpace() + 16}px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 40px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.black};
  line-height: ${RFValue(16)}px;
  color: white;
`;
