import { Input as GlueStackInput, InputField } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField>;

export function Input({ ...rest }: Props) {
  return (
    <GlueStackInput
      bg="#121214"
      h="$12"
      px="$4"
      borderWidth="$0"
      borderRadius="$md"
    >
      <InputField
        color="$white"
        fontFamily="$body"
        placeholderTextColor="#7C7C8A"
        {...rest}
      />
    </GlueStackInput>
  );
}
