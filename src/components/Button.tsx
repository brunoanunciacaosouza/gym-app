import { ComponentProps } from "react";
import {
  Button as GlueStackButton,
  Text,
  ButtonSpinner,
} from "@gluestack-ui/themed";

type Props = ComponentProps<typeof GlueStackButton> & {
  title: string;
  variante?: "solid" | "outline";
  isLoading?: boolean;
};

export function Button({
  title,
  variant = "solid",
  isLoading = false,
  ...rest
}: Props) {
  return (
    <GlueStackButton
      w="$full"
      h="$16"
      bg={variant === "outline" ? "transparent" : "$green700"}
      borderWidth={variant === "outline" ? "$1" : "$0"}
      borderColor="$green500"
      rounded="$sm"
      $active-bg={variant === "outline" ? "#29292E" : "$green500"}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text
          color={variant === "outline" ? "$green500" : "$white"}
          fontFamily="$heading"
          fontSize="$sm"
        >
          {title}
        </Text>
      )}
    </GlueStackButton>
  );
}
