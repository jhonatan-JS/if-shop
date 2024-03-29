import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" legacyBehavior>
      <a>
        <Flex align="center" justify="center">
          <Text
            fontSize={["2xl", "3xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            as="span"
            ml="1"
            color="#fff"
          >
            IF
            <Text as="span" ml="1" color="gray.300">
              Shop
            </Text>
          </Text>
        </Flex>
      </a>
    </Link>
  );
}
