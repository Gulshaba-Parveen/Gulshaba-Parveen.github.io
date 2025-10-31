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
  {
    icon: "/images/express-js.png",
    description: "Express JS",
  },
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
  // {
  //   icon: "images/redux.png",
  //   description: "Redux",
  // },
  {
    icon: "images/visual-studio.png",
    description: "VS code",
  },
];
const Skills = () => {
  return (
    <Box w="80%" m="auto" minHeight={"fit-content"} >
      <Heading textAlign={"center"} >My <Text color="#DC143C" as="span" > Technical </Text> Skills</Heading>

      <SimpleGrid as="flex" placeItems={"center"} justifyContent={"center"} columns={{ base: "2", md: "3", lg: "4" }} className="skill-parent-box  animate__animated animate__zoomIn">
        {skillsets.map((el) => (
          <Box key={el.description} className="skills-card" >
            <Image src={el.icon} alt="" width="50px" className="skills-card-img" />
            <Text className="skills-card-name">{el.description} </Text>
          </Box>
        ))}
      </SimpleGrid>

    </Box>
  );
};

export default Skills;



// import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
// import React from "react";
// import "../styles/skills.css";

// const skillsets = [
//   {
//     icon: "images/html5.png",
//     description: "HTML",
//     classes: {
//       skillCard: "skills-card",
//       skillCardImg: "skills-card-img",
//       skillCardName: "skills-card-name",
//     },
//   },
//   {
//     icon: "/images/css3.png",
//     description: "CSS",
//     classes: {
//       skillCard: "skills-card",
//       skillCardImg: "skills-card-img",
//       skillCardName: "skills-card-name",
//     },
//   },
//   {
//     icon: "images/javascript.png",
//     description: "JavaScript",
//     classes: {
//       skillCard: "skills-card",
//       skillCardImg: "skills-card-img",
//       skillCardName: "skills-card-name",
//     },
//   },
//   {
//     icon: "/images/react-js.png",
//     description: "ReactJS",
//     classes: {
//       skillCard: "skills-card",
//       skillCardImg: "skills-card-img",
//       skillCardName: "skills-card-name",
//     },
//   },
//   {
//     icon: "/images/bootstrap.png",
//     description: "BootStrap",
//     classes: {
//       skillCard: "skills-card",
//       skillCardImg: "skills-card-img",
//       skillCardName: "skills-card-name",
//     },
//   },
//   {
//     icon: "/images/chakra-ui.png",
//     description: "Chakra-UI",
//     classes: {
//       skillCard: "skills-card",
//       skillCardImg: "skills-card-img",
//       skillCardName: "skills-card-name",
//     },
//   },
//   {
//     icon: "images/node-js.png",
//     description: "Node.js",
//     classes: {
//       skillCard: "skills-card",
//       skillCardImg: "skills-card-img",
//       skillCardName: "skills-card-name",
//     },
//   },
//   {
//     icon: "/images/mongodb.png",
//     description: "MongoDB",
//     classes: {
//       skillCard: "skills-card",
//       skillCardImg: "skills-card-img",
//       skillCardName: "skills-card-name",
//     },
//   },
//   {
//     icon: "images/git.png",
//     description: "GIT",
//     classes: {
//       skillCard: "skills-card",
//       skillCardImg: "skills-card-img",
//       skillCardName: "skills-card-name",
//     },
//   },
//   {
//     icon: "images/npm.png",
//     description: "NPM",
//     classes: {
//       skillCard: "skills-card",
//       skillCardImg: "skills-card-img",
//       skillCardName: "skills-card-name",
//     },
//   },
//   {
//     icon: "images/visual-studio.png",
//     description: "VS code",
//     classes: {
//       skillCard: "skills-card",
//       skillCardImg: "skills-card-img",
//       skillCardName: "skills-card-name",
//     },
//   },
// ];

// const Skills = () => {
//   return (
//     <Box
//       w="100%"
//       m="auto"
//       minHeight={"fit-content"}
//       textAlign="center"
//       padding="5%"
//     >
//       <Heading
//         textAlign="center"
//         color="#137BB5"
//         marginBottom="4"
//         fontSize={{ base: "xl", md: "2xl" }}
//       >
//         My <Text color="#DC143C" as="span"> Technical </Text> Skills
//       </Heading>

//       <SimpleGrid
//         columns={{ base: 2, md: 3, lg: 4 }}
//         spacing="4"
//         className="animate__animated animate__zoomIn"
//       >
//         {skillsets.map((el) => (
//           <Box
//             key={el.description}
//             className={el.classes ? el.classes.skillCard : "skills-card"}
//             boxShadow="md"
//             borderRadius="lg"
//             overflow="hidden"
//           >
//             <Image
//               src={el.icon}
//               alt=""
//               width="50px"
//               className={el.classes ? el.classes.skillCardImg : "skills-card-img"}
//             />
//             <Text
//               padding="3"
//               fontSize="sm"
//               fontWeight="bold"
//               className={el.classes ? el.classes.skillCardName : "skills-card-name"}
//             >
//               {el.description}
//             </Text>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default Skills;