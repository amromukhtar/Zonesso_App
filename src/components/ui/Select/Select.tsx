import React from 'react';
import {Picker} from '@react-native-picker/picker';
import { Box } from '../Box';
import { InputRestyleProps, SelectProps } from './Select.type';
import {
  backgroundColor,
  border,
  color,
  createRestyleComponent,
  layout,
  opacity,
  spacing,
  typography,
  visible,
} from '@shopify/restyle';
import { Theme, fontSize, useAppTheme } from '@/theme';
import { Icon } from '../Icon';

const InnerSelect = createRestyleComponent<
  InputRestyleProps & React.ComponentProps<typeof Picker>,
  Theme
>(
  [
    spacing,
    color,
    backgroundColor,
    layout,
    visible,
    opacity,
    border,
    typography,
  ],
  Picker,
);

export const TextField: React.FC<SelectProps> = ({
  leftIcon,
  leftIconSize = fontSize.l,
  hasMargin,
  inputProps: {  ...restInputProps },
  ...rest
}) => {
  const { colors } = useAppTheme();

  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      borderRadius="l"
      backgroundColor="card"
      // borderWidth={borderWidth}
      borderColor="border"
      height={55}
      {...rest}
      margin={hasMargin ? 's' : undefined}>
      {leftIcon ? (
        <Box paddingLeft="m" paddingRight={ 's'}>
          <Icon name={leftIcon} size={leftIconSize} color={colors.text} />
        </Box>
      ) : null}
      <InnerSelect
        color="text"
        fontSize={fontSize.m}
        flex={1}
        padding="m"
        paddingHorizontal="m"
        paddingLeft={leftIcon ? 's' : undefined}
        borderRadius="l"
        backgroundColor="transparent"
        height="100%"
        {...restInputProps}
      />
    </Box>
  );
};
