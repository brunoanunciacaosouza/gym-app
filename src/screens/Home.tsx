import { VStack } from "@gluestack-ui/themed";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />

      <Group name="Costas" isActive={false} />
    </VStack>
  );
}
