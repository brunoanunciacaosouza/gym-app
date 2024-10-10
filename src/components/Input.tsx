import { Input as GlueStackInput, InputField } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
};

export function Input({ isReadOnly = false, ...rest }: Props) {
  return (
    <GlueStackInput
      h="$12"
      borderWidth="$0"
      borderRadius="$md"
      $focus={{
        borderWidth: 1,
        borderColor: "$green500",
      }}
      isReadOnly={isReadOnly}
      opacity={isReadOnly ? 0.5 : 1}
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
  );
}
