import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Card = ({ data }) => {
  const { image, heading, text1, text3, git, live,classes } = data || {};
  if (!classes) {
    console.error("Classes are not defined in the data:", data);
    return null; // Handle the case where classes are not defined
  }

  return (
    <VStack
    
      _hover={{ bg: "#137BB5", color: "white" }}
      w="100%"
      // className=" project-card  animate__animated animate__zoomIn"
      className={`${classes.projectCard} animate__animated animate__zoomIn`}
      align="flex-start"
      boxShadow={"2xl"}
      spacing="4"
      p="5%"
      borderRadius={"20px"}
    >
      <Box
        alignSelf={"center"}
        borderRadius={"20px"}
        w="100%"
        height={{ base: "15rem", sm: "20rem", md: "15rem", lg: "20rem" }}
        overflow="hidden"
      >
        <Image
          w="100%"
          h={"100%"}
          loading="lazy"
          transition="all 3s linear"
          _hover={{ transform: "scale(1.2)" }}
          src={image}
          alt=""
        ></Image>
      </Box>
      <Heading
        size={{ base: "md", md: "md" }}
        alignSelf="center"
        noOfLines={"1"}
        // -----------
        className={classes.title}
      >
        {" "}
        {heading}
      </Heading>
      <Box minH={"4.5rem"}>
        <Text fontSize={{ base: "16px" }} className={classes.description}> {text1} </Text>
      </Box>
      {/* <Box>
        <Text color={"gray.400"}>{text2} </Text>
      </Box> */}
      <Box minH={"6.5rem"}>
        <Text className={classes.techStack}>
          <Text as="span" color={"#dc143c"} fontWeight={"bold"}>
            Tech Stacks:
          </Text>{" "}
          {text3}{" "}
        </Text>
      </Box>
      <Flex alignSelf="center" gap="70px">
        <Button
          _hover={{ bg: "#DC143C", color: "white" }}
          bg="blue"
          color={"white"}
          onClick={() => window.open(git)}
          className={classes.githubLink}
        >
          {" "}
          <FaGithub />
          Code
        </Button>
        <Button
          _hover={{ bg: "#DC143C", color: "white" }}
          bg="blue"
          color={"white"}
          onClick={() => window.open(live)}
          className={classes.deployedLink} 
        >
          {" "}
          <BiLinkExternal />
          Live
        </Button>
      </Flex>
    </VStack>
  );
};

export default Card;
