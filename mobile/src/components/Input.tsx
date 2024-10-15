import { ComponentProps } from "react";

import {
  Input as GlueStackInput,
  InputField,
  FormControl,
  FormControlErrorText,
  FormControlError,
} from "@gluestack-ui/themed";

type Props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
  errorMessage?: string | null;
  isInvalid?: boolean;
};

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  ...rest
}: Props) {
  const inValid = !!errorMessage || isInvalid;
  return (
    <FormControl isInvalid={inValid} w="$full" mb="$2">
      <GlueStackInput
        isInvalid={isInvalid}
        h="$12"
        borderWidth="$0"
        borderRadius="$md"
        $focus={{
          borderWidth: 1,
          borderColor: inValid ? "$red500" : "$green500",
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
        $invalid={{
          borderWidth: 1,
          borderColor: "$red500",
        }}
      >
        <InputField
          bg="#121214"
          px="$4"
          color="$white"
          fontFamily="$body"
          placeholderTextColor="#7C7C8A"
          {...rest}
        />
      </GlueStackInput>

      <FormControlError>
        <FormControlErrorText color="$red500">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}