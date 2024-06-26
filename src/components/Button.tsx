import styled from 'styled-components/native';
import { PRIMARY_GREEN } from '../resources/constants/colors';
import { BaseText } from './Text';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  width?: string;
  flexGrow?: number;
  flexShrink?: number;
  flex?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

const Button = styled.TouchableOpacity<ButtonProps>`
  width: ${({ width }) => width ?? '100%'};
  padding-top: ${({ paddingTop }) => paddingTop ?? 10}px;
  padding-right: ${({ paddingRight }) => paddingRight ?? 10}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom ?? 10}px;
  padding-left: ${({ paddingLeft }) => paddingLeft ?? 10}px;
  margin: ${({ marginTop }) => marginTop ?? 0}px;
  margin-right: ${({ marginRight }) => marginRight ?? 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
  margin-left: ${({ marginLeft }) => marginLeft ?? 0}px;
  border-radius: 50px;
  ${({ flexShrink }) => (flexShrink ? `flex-shrink:${flexShrink};` : '')}
  ${({ flexGrow }) => (flexGrow ? `flex-grow:${flexGrow};` : '')}
  ${({ flex }) => (flex ? `flex:${flex};` : '')}
  background-color: ${({ disabled, backgroundColor }) => (disabled ? '#cccccc' : backgroundColor ?? PRIMARY_GREEN)};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const ButtonText = styled(BaseText)<{
  disabled?: boolean;
  color?: string;
}>`
  text-align: center;
  color: ${({ disabled, color }) => (disabled ? '#666666' : color ?? '#fbfbfd')};
`;

export const CancelButton = styled(Button)`
  background-color: '#fbfbfd';
  color: ${PRIMARY_GREEN};
  border: 2px solid ${PRIMARY_GREEN};
`;

export const IconButton = styled(Button)`
  border: none;
  outline: none;
  padding: 5px;
  background-color: ${PRIMARY_GREEN};
  border-radius: 12px;
  display: flex;
  gap: 20px;
  margin: 0;
  cursor: pointer;
  align-items: center;
  img {
    height: 14px;
    width: auto;
  }
  p {
    margin: 0;
    font-size: 14px;
    color: #fbfbfd;
  }
`;

export default Button;
