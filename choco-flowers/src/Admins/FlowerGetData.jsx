import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function FlowerGetData({
  title,
  image1,
  id,
  name,
  price,
  rating,
  fdata,
  discription,
}) {
  const deleteHandle = (id) => {
    axios
      .delete(`http://localhost:8010/flowers/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    deleteHandle();
  }, [fdata]);
  let x = Math.floor(Math.random() * 5 + 1);
  return (
    <div>
      <TableContainer>
        <Table
          // marginLeft="330px"
          width="100%"
          variant="striped"
          colorScheme="teal"
        >
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Image-1</Th>
              <Th>Category</Th>
              <Th>Ratng</Th>
              <Th isNumeric>Price</Th>

              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr key={id}>
              <Td> {title.substring(0, 16)}</Td>
              <Td>
                <img width={"105"} src={image1} alt={title} />
              </Td>
              <Td> {name} </Td>
              <Td>⭐ {x} </Td>
              <Td isNumeric>₹ {price} </Td>
              <Td>
                <button onClick={() => deleteHandle(id)}>
                  {" "}
                  <DeleteIcon boxSize={6} />
                </button>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}

// discription: "A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Angiospermae).";
// id: 10;
// image1: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191165xlx.jpg?width=406&height=445quality=60&auto=webp&optimize={medium}";
// image2: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191165xlx.jpg?width=100&height=110&quality=70&auto=webp&optimize={medium}";
// image3: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191165alt_viewc.jpg?width=100&height=110&quality=70&auto=webp&optimize={medium}";
// name: "Flower White Port";
// price: "196";
// rating: "⭐⭐⭐";
// title: "Classic All White Arrangement™ for Sympathy";
