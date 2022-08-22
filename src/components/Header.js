import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { FiMenu } from "react-icons/fi";
import { AiOutlineStock } from "react-icons/ai";
import Image from 'next/image';

import mypic from "./marca.jpg";


const Header = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onOpen } = useSidebarContext();

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1120}
      maxH="60vh"
      h="20"
      mx="auto"
      px="5"
      py="5"
      align="center"
      boxShadow="0 1px 0 #ccc"
      color="#f8f8f8"
      fontWeight="bold"
    >
      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )}

      {/* <Image src={mypic} width={'25%'} height={'25%'} mr={10} alt='foto' /> */}
      <IconButton
          icon={<Icon as={AiOutlineStock} />}
          variant="unstyled"
          fontSize="30"
          mr="2"
          />

      <Text>Bodie's Shop</Text>
      <Flex ml="auto">
        <HStack>
          <Text>Inventory Control</Text>
          {/* <Avatar size="md" name="marcelo dato" /> */}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
