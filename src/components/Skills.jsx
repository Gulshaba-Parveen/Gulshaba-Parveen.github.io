import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/skills.css";
const skillsets = [
  {
    icon: "images/html5.png",
    description: "HTML",
  },
  {
    icon: "/images/css3.png",
    description: "CSS",
  },
  {
    icon: "images/javascript.png",
    description: "JavaScript",
  },

  {
    icon: "/images/react-js.png",
    description: "ReactJS",
  },
  {
    icon: "/images/bootstrap.png",
    description: "BootStrap",
  },
  {
    icon: "/images/chakra-ui.png",
    description: "Chakra-UI",
  },
  {
    icon: "images/node-js.png",
    description: "Node.js",
  },
  // {
  //   icon: "/images/express-js.png",
  //   description: "Express JS",
  // },
  {
    icon: "/images/mongodb.png",
    description: "MongoDB",
  },
  {
    icon: "images/git.png",
    description: "GIT",
  },
  {
    icon: "images/npm.png",
    description: "NPM",
  },
  {
    icon: "images/visual-studio.png",
    description: "VS code",
  },
];
const Skills = () => {
  return (
    <Box w="80%"  m="auto"  minHeight={"fit-content"}>
      <Heading textAlign={"center"} >My <Text color="#DC143C" as="span" > Technical </Text> Skills</Heading>
    
        <SimpleGrid as="flex" placeItems={"center"}  justifyContent={"center"} columns={{base: "2", md: "3", lg: "4"}} className="skill-parent-box animate__animated animate__zoomIn">
          {skillsets.map((el) => (
            <Box key={el.description} className="skill-card">
              <Image src={el.icon} alt="" width="50px" className="skills-card-img"/>
              <Text className="skills-card-name">{el.description} </Text>
            </Box>
          ))}
        </SimpleGrid>

    </Box>
  );
};

export default Skills;
