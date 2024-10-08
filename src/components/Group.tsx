import { ComponentProps } from "react";
import { Button, Text } from "@gluestack-ui/themed";

type Props = ComponentProps<typeof Button> & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Button
      minWidth="$24"
      h="$10"
      bg="#202024"
      rounded="$md"
      justifyContent="center"
      alignItems="center"
      borderColor="$green500"
      borderWidth={isActive ? 1 : 0}
      sx={{
        ":active": {
          borderWidth: 1,
        },
      }}
      {...rest}
    >
      <Text
        color={isActive ? "$green500" : "#C4C4CC"}
        textTransform="uppercase"
        fontSize="$xs"
        fontFamily="$heading"
      >
        {name}
      </Text>
    </Button>
  );
}
