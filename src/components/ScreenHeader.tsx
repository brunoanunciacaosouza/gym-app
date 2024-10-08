import { Center, Heading } from "@gluestack-ui/themed";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <Center bg="#202024" pb="$6" pt="$16">
      <Heading color="#E1E1E6" fontSize="$xl" fontFamily="$heading">
        {title}
      </Heading>
    </Center>
  );
}
