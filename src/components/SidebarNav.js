import React from "react";
import { Box, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNav = () => {
  const { asPath } = useRouter();

  return (
    <Stack spacing="6">
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="gray.300">
          REGISTER
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/" ? "gray.200" : ""}
          >
            <Link href="/">
              <Text fontSize="md" fontWeight="medium" color="gray.400">
                PRODUCTS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="gray.300">
          INVENTORY
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/balance" ? "gray.600" : ""}
          >
            <Link href="/balance">
              <Text fontSize="md" fontWeight="medium" color="gray.400">
                BALANCE
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockEntries" ? "gray.600" : ""}
          >
            <Link href="/stockEntries">
              <Text fontSize="md" fontWeight="medium" color="gray.400">
                ENTRIES
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockOutputs" ? "gray.600" : ""}
          >
            <Link href="/stockOutputs">
              <Text fontSize="md" fontWeight="medium" color="gray.500">
              OUTPUTS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SidebarNav;
