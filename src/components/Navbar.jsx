import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import web1 from "../assets/web1.webp";
//  import styles from "../styles/Intro.module.css";
import web1 from "../assets/g.webp";
import { useEffect, useRef, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [project, setProject] = useState(false);
  const [contact, setContact] = useState(false);

  const handleScroll = () => {
    let y = window.scrollY;
    if (y >= 0 && y < 500) {
      setHome(true);
      setAbout(false);
      setSkills(false);
      setProject(false);
      setContact(false);
    }
    if (y >= 500 && y < 1000) {
      setHome(false);
      setAbout(true);
      setSkills(false);
      setProject(false);
      setContact(false);
    }
    if (y >= 1000 && y < 1650) {
      setHome(false);
      setAbout(false);
      setSkills(true);
      setProject(false);
      setContact(false);
    }
    if (y >= 1650 && y < 3000) {
      setHome(false);
      setAbout(false);
      setSkills(false);
      setProject(true);
      setContact(false);
    }
    if (y >= 4000) {
      setHome(false);
      setAbout(false);
      setSkills(false);
      setProject(false);
      setContact(true);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <Box position={"sticky"} top={0} left={0} zIndex="23" id="nav-menu">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 6, md: 9 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          alignItems={"center"}
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Image src={web1} w="80px" alt="" />
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          cursor="pointer"
          p={4}
          borderRadius="lg"
          _hover={{
            textDecoration: "none",
            bg: "#DC143C",
            color: "white",
          }}
          onClick={() => {
            window.scrollTo(navItem.scrollObj);
          }}
        >
          <RouterLink to={navItem.to ?? "#"} fontSize={"lg"} fontWeight={500} id={navItem.id} className={`nav-link ${navItem.class} ${navItem.label.toLowerCase()}` }>
            {/* className={`nav-link ${navItem.class}` */}
            {navItem.label}
          </RouterLink>
        </Box>
      ))}
       <Box
        cursor="pointer"
        p={5}
        borderRadius="lg"
        h="30px" 
        w="120px" 
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="16px"
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
        mt="500vh"
        id="resume-button-1 "
        className="nav-link resume"
      >
        <a
          href="https://drive.google.com/file/d/108NVRflFlvukcPmXZHFw0vCKabkFgLnX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          fontSize={"lg"}
          fontWeight={500}
        >
          Resume<i className="fa-solid fa-download"></i>
        </a>
      </Box>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {mobileNAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Box
         cursor="pointer"
         p={4}
         borderRadius="lg"
         h="30px" 
         w="120px" 
         display="flex"
         alignItems="center"
         justifyContent="center"
         fontSize="16px"
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
        id="resume-button-1"
        className="nav-link resume"
      >
        <a
         id="resume-link-1"
          href="https://drive.google.com/file/d/108NVRflFlvukcPmXZHFw0vCKabkFgLnX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          fontSize={"lg"}
          fontWeight={600}
        >
          Resume <i className="fa-solid fa-download"></i>
        </a>
      </Box>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, scrollObj, to,class: sectionClass  }: NavItem) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={RouterLink}
        to={to ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        onClick={() => {
          window.scrollTo(scrollObj);
          onClose();
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          className={`nav-link ${sectionClass} ${label.toLowerCase()}`} 
          // className={`nav-link ${sectionClass}`}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <RouterLink key={child.label} py={2} to={child.to} className={`nav-link ${child.class} ${child.label.toLowerCase()}`}>
                {child.label}
              </RouterLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  to?: string;
  id?: string;
  class?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    to: "/",
    scrollObj: {
      top: 0,
      behavior: "smooth",
    },
    id:"home",
    class: "home",
  },
  {
    label: "About",
    to: "/about",
    scrollObj: {
      top: 510,
      behavior: "smooth",
    },
    id:"about",
    class: "about section",
  },
  {
    label: "Skills",
    to: "/skills",
    scrollObj: {
      top: 1150,
      behavior: "smooth",
    },
    id: "skills",
    class: "skills",
  },
  {
    label: "Projects",
    to: "/projects",
    scrollObj: {
      top: 1780,
      behavior: "smooth",
    },
    id: "projects",
    class: "projects",
  },
  {
    label: "Statistics", // Add this new entry
    to: "/statistics",
    scrollObj: {
      top: 2650, // Adjust this value based on your needs or remove it if you don't want scrolling
      behavior: "smooth",
    },
    // id: "Statistics",
  },
  {
    label: "Contacts",
    to: "/contacts",
    scrollObj: {
      top: 4500,
      behavior: "smooth",
    },
    id: "contact",
    class: "contact",
  },
  
];
const mobileNAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    to: "/",
    scrollObj: {
      top: 0,
      behavior: "smooth",
    },
    id: "home",
    class: "home",
  },
  {
    label: "About",
    to: "/about",
    scrollObj: {
      top: 900,
      behavior: "smooth",
    },
    id: "about", 
    class: "about section",
  },
  {
    label: "Skills",
    to: "/skills",
    scrollObj: {
      top: 2100,
      behavior: "smooth",
    },
    id: "skills",
    class: "skills",
  },
  {
    label: "Projects",
    to: "/projects",
    scrollObj: {
      top: 3000,
      behavior: "smooth",
    },
    id: "projects",
    class: "projects",
  },
  {
    label: "Statistics", // Add this new entry
    to: "/statistics",
    scrollObj: {
      top: 4550, 
      behavior: "smooth",
    },
    // id: "Statistics",
  },
  
  {
    label: "Contacts",
    to: "/contacts",
    scrollObj: {
      top: 7000,
      behavior: "smooth",
    },
    id: "contact",
    class: "contact",
  },
];



// id="resume-button-1" done
// seperate