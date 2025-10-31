import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import fsd from "../assets/logo.webp";
const About = () => {
  return (
    <Box minH={"fit-content"} mb="8rem" mt="0rem">
      <Heading textAlign={"center"} my="4rem"> About <Text as={"span"} color="#DC143C">me</Text> </Heading>
      <Flex
        w="80%"
        m="auto"
        gap="3rem"
        alignItems={"flex-start"}
        justifyContent={"space-around"}
        direction={{ base: "column", md: "row" }}
      >
        <Box>
          <Image
            // w={{ base: "80vw", md: "500px" }}
            // h={{ base: "300px", md: "300px" }}
            // borderRadius={"30px"}
            className="home-img"
            w={{ base: "300px", md: "300px" }}
            h={{ base: "300px", md: "300px" }}
            borderRadius={"50%"}
            src={fsd}
          //  style={{ marginleft: "1000px" }}
          ></Image>
        </Box>
        <Box w={{ base: "80vw", md: "500px" }} textAlign="justify" >
          <VStack spacing={"1rem"}>
            {/* -------------------------------------------id="user-detail-intro"---ill add next*/}
            <Text fontWeight={"400"} fontSize={{ base: "25px", md: "20px", lg: "23px" }}>
              {/* A passionate full-stack web developer, who believes in quality
              coding and optimising solutions by writing clean and elegant code. */}
              {/* A passionate Full Stack Developer seeking an opportunity to gain relevant experience in the software development industry with the skills learned 👩‍💻. */}
              I’m a passionate Full Stack Developer skilled in React, Node.js, and Express, with a focus on building clean, scalable, and responsive web applications. I love turning ideas into seamless digital experiences through efficient code and thoughtful design 👩‍💻.            </Text>
            <Text fontWeight={"400"} fontSize={{ base: "25px", md: "20px", lg: "23px" }}>
              {/* Proven ability to collaborate  effectively with cross-functional teams, ensuring seamless integration between frontend and backend components. Strong problem-solving skills  and a proactive attitude to ensure high-quality code and optimal software development . */}
              Curious and creative by nature, I’m always eager to learn new technologies and take on challenges that help me grow as a developer.            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;

