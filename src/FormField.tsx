import { IInputProps, Input, Text, VStack } from "native-base";
import React from "react";

export interface ILoginFieldProps extends IInputProps {
  error?: string;
}

const FormField: React.FC<ILoginFieldProps> = props => {
  const {error, ...rest} = props;

  return (
    <VStack>
      <Input
        placeholderTextColor={'primary.400'}
        color={'white'}
        borderColor={'primary.200'}
        _focus={{
          borderColor: 'secondary.200',
          _invalid: {borderColor: 'error.400'},
        }}
        _invalid={{
          _focus: {
            borderColor: 'error.400',
          },
          borderColor: 'error.400',
          color: 'error.400',
        }}
        selectionColor={'secondary.200'}
        isInvalid={!!error}
        fontSize={14}
        {...rest}
      />
      <Text color={'error.400'} italic={true}>
        {error || ''}
      </Text>
    </VStack>
  );
};

export default FormField;
