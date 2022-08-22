import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { RiDeleteBin6Line } from "react-icons/ri";

const Produtos = () => {
  const [name, setName] = useState("");
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const db_products = localStorage.getItem("db_products")
      ? JSON.parse(localStorage.getItem("db_products"))
      : [];

    setListProducts(db_products);
  }, []);

  const handleNewProduct = () => {
    if (!name) return;
    if (verifyProductName()) {
      alert("Product already registered!");
      return;
    }

    const id = Math.random().toString(36).substring(2);

    if (listProducts && listProducts.length) {
      localStorage.setItem(
        "db_products",
        JSON.stringify([...listProducts, { id, name }])
      );

      setListProducts([...listProducts, { id, name }]);
    } else {
      localStorage.setItem("db_products", JSON.stringify([{ id, name }]));

      setListProducts([{ id, name }]);
    }

    setName("");
  };

  const verifyProductName = () => {
    return !!listProducts.find((prod) => prod.name === name);
  };

  const removeProduct = (id) => {
    const db_stock_outputs = localStorage.getItem("db_stock_outputs")
      ? JSON.parse(localStorage.getItem("db_stock_outputs"))
      : [];

    const db_stock_entries = localStorage.getItem("db_stock_entries")
      ? JSON.parse(localStorage.getItem("db_stock_entries"))
      : [];

    const hasOutputs = db_stock_outputs.filter(
      (item) => item.product_id === id
    ).length;
    const hasEntries = db_stock_entries.filter(
      (item) => item.product_id === id
    ).length;

    if (hasEntries || hasOutputs) {
      alert(
        "☹ This product has movements! \nFirst delete the entries and outputs!"
      );
      return;
    }

    const newArray = listProducts.filter((prod) => prod.id !== id);

    localStorage.setItem("db_products", JSON.stringify(newArray));

    setListProducts(newArray);
  };

  return (
    <Flex h="100vh" flexDirection="column" overflowY="hidden">
      <Header />

      <Flex w="100%" my="6" maxW={1020} mx="auto" px="6" h="100vh">
        <Sidebar />

        <Box w="100%">
          <SimpleGrid minChildWidth={240} h="fit-content" spacing="6">
            <Input
            color="gray.200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product name"
            />
            <Button w="40" onClick={handleNewProduct}>
              REGISTER
            </Button>
          </SimpleGrid>

          <Box overflowY="auto" height="65vh">
            <Table mt="6">
              <Thead>
                <Tr>
                  <Th fontWeight="bold" fontSize="14px" color="gray.200">
                    Name
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {listProducts.map((item, i) => (
                  <Tr key={i}>
                    <Td color="gray.200">{item.name}</Td>
                    <Td textAlign="end">
                      <Button
                        p="0"
                        h="auto"
                        backgroundColor="transparent"
                        _hover={{ bg: "transparent" }}
                        // _after={{ bg: "transparent" }}
                        // _before={{ bg: "transparent" }}
                        _focus={{ bg: "transparent" }}
                        fontSize={18}
                        color="red.500"
                        fontWeight="bold"
                        onClick={() => removeProduct(item.id)}
                      >
                        <RiDeleteBin6Line />
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Produtos;
