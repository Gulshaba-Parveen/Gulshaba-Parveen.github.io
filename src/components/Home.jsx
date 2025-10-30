// import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
// import React from "react";

// import styles from "../styles/Intro.module.css";
// // import "animate.css";
// import backg from "../assets/backg.webp"
// const Home = () => {
//   const backgroundImageUrl = `url(${backg})`; 

//   return (
//     <Box minH="500px" mt="0rem" id="home" style={{ backgroundImage: backgroundImageUrl, backgroundSize: "cover", backgroundPosition: "center" }}>
//       <Flex
//         w="80%"
//         m="auto"
//         alignItems={"center"}
//         justifyContent={"space-between"}
//         direction={{ base: "column-reverse", md: "row" }}
//       >
//         <VStack align={"flex-start"} spacing={{ base: "1rem", md: "1rem" }} id="user-details">
//           <Text id="user-detail-name" fontSize="30px" fontWeight={"bold"} mt="5rem">
//             Hello, my name is
//           </Text>
//           <Heading fontSize="50px">Gulshaba Parveen</Heading>
//           {/* ---------------------------------- */}
//           <Text  fontSize="30px" fontWeight={"bold"} >
//             I'm a {"  "}
//             <Text as={"span"} className={styles.Intro_desc}>
//               <span  className={styles.Intro_myName}>Full Stack Web WebDeveloper</span>
//             </Text>
//           </Text>
//         {/* <Box   id="resume-button-2">
//           <button 
//           id="resume-link-2"
//             className={styles.Intro_Resume}
//             onClick={() =>
//               window.open(
//                 "https://drive.google.com/file/d/1xeRM6EZn4RdcZPImoG5TXeggDWJZRuv_/view?usp=sharing"
//               )
//             }
//           >
//             Resume<i className="fa-solid fa-download"></i>
//           </button>
//           </Box> */}
//            <Box
//          cursor="pointer"
//          p={4}
//          borderRadius="lg"
//          h="50px" 
//          w="120px" 
//          display="flex"
//          alignItems="center"
//          justifyContent="center"
//          fontSize="17px"
//          fontWeight={600}
//          color="white"
//          bg="#DC143C"
//          border="2px solid transparent"
         
//          _hover={{
//            textDecoration: "none",
//            border: "2px solid #DC143C", 
//            bg: "white",
//            color: "#DC143C", 
//         }}
//         id="resume-button-2"
//       >
//         <a
//         id="resume-link-2"
//           href="https://drive.google.com/file/d/108NVRflFlvukcPmXZHFw0vCKabkFgLnX/view?usp=sharing"
//           target="_blank"
//           rel="noopener noreferrer"
//           fontSize={"lg"}
//           fontWeight={600}
//         >
//           Resume <i className="fa-solid fa-download"></i>
//         </a>
//       </Box>
//           <div className={styles.Intro_socialLinks}>
//             <a
//               href="https://www.linkedin.com/in/gulshaba-parveen/"
//               target={"blank"}
//             >
//               <i className="fa-brands fa-linkedin-in"></i>
//             </a>
//             <a href="https://github.com/Gulshaba-Parveen" target={"blank"}>
//               <i className="fa-brands fa-github"></i>
//             </a>
//             <a href="mailto:gulshabaparveen1@gmail.com" target={"blank"}>
//               <i class="fa-solid fa-m"></i>
//             </a>
//           </div>
//         </VStack>
//         <Box mb={{ base: "2rem", md: "none" }}>
//           {/* <Image
//             w={{ base: "300px", md: "210px" }}
//             borderRadius={"50%"}
//             src={photo}
//           ></Image> */}
//           {/* 
//           <Box className="element" textAlign={"center"}>
//           </Box> */}
//         </Box>
//       </Flex>
//     </Box>
//   );
// };



// export default Home;


// id="user-detail-intro"



import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

import styles from "../styles/Intro.module.css";
// import "animate.css";
import backg from "../assets/backg.webp"
const Home = () => {
  const backgroundImageUrl = `url(${backg})`; 

  return (
    <Box minH="500px" mt="0rem" id="home" style={{ backgroundImage: backgroundImageUrl, backgroundSize: "cover", backgroundPosition: "center" }}>
      <Flex
        w="80%"
        m="auto"
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack align={"flex-start"} spacing={{ base: "1rem", md: "1rem" }} id="user-details">
          <Text id="user-detail-name" fontSize="30px" fontWeight={"bold"} mt="5rem">
            Hello, my name is
          </Text>
          <Heading fontSize="50px">Gulshaba Parveen</Heading>
          {/* ---------------------------------- */}
          <div id="user-detail-intro">
  <Text fontSize="30px" fontWeight={"bold"}>
    I'm a {"  "}
    <Text as={"span"} className={styles.Intro_desc}>
      <span className={styles.Intro_myName}>Full Stack Web Developer</span>
    </Text>
  </Text>
</div>

           <Box
         cursor="pointer"
         p={4}
         borderRadius="lg"
         h="50px" 
         w="120px" 
         display="flex"
         alignItems="center"
         justifyContent="center"
         fontSize="17px"
         fontWeight={600}
         color="white"
         bg="#DC143C"
         border="2px solid transparent"
         
         _hover={{
           textDecoration: "none",
           border: "2px solid #DC143C", 
           bg: "white",
           color: "#DC143C", 
        }}
        id="resume-button-2"
      >
        <a
        id="resume-link-2"
          href="https://drive.google.com/file/d/108NVRflFlvukcPmXZHFw0vCKabkFgLnX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          fontSize={"lg"}
          fontWeight={600}
        >
          Resume <i className="fa-solid fa-download"></i>
        </a>
      </Box>
          <div className={styles.Intro_socialLinks}>
            <a
              href="https://www.linkedin.com/in/gulshaba-parveen/"
              target={"blank"}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Gulshaba-Parveen" target={"blank"}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:gulshabaparveen1@gmail.com" target={"blank"}>
              <i class="fa-solid fa-m"></i>
            </a>
          </div>
        </VStack>
        <Box mb={{ base: "2rem", md: "none" }}>
        </Box>
      </Flex>
    </Box>
  );
};



export default Home;