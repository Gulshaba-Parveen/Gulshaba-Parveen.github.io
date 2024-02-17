import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import { ProjectData } from "./ProjectData";

const Project = () => {
  return (
    <Box w={{base:"90%",md:"90%",xl:"80%"}} m={"auto"} mb="4rem" mt="5rem">
        <Heading textAlign={"center"}   my="40px">My <Text as="span"  color="#DC143C">Projects</Text> </Heading>
      <SimpleGrid gap="5rem" columns={{ base: "1", md: "2" }}>
        {ProjectData.map((el) => (
          <Card key={el.heading} data={el} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Project;
