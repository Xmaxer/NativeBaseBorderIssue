import { Icon, IconButton } from 'native-base';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FormField, { ILoginFieldProps } from "./FormField";


type SecureLoginFieldProps = ILoginFieldProps;

const SecureFormField: React.FC<SecureLoginFieldProps> = (props) => {
  const [visible, setVisible] = useState(false);

  const onToggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <FormField
      type={visible ? 'text' : 'password'}
      InputRightElement={
        <IconButton
          onPress={onToggleVisibility}
          icon={
            <Icon
              as={MaterialIcons}
              name={visible ? 'visibility' : 'visibility-off'}
              color={visible ? 'primary.50' : 'primary.400'}
              size={6}
              marginRight={2}
            />
          }
        />
      }
      {...props}
    />
  );
};

export default SecureFormField;
