"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import dibimbingLogo from "../public/img/dibimbing-logo.png";
import profilePhoto from "../public/img/razzaaq.png";
import Image from "next/image";

interface NavLinkProps {
  link: {
    label: string;
    path: string;
  };
}

const Links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Notes",
    path: "/notes",
  },
];

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={link.path}
    >
      {link.label}
    </Box>
  );
};

export default function NavbarSimple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={20} mb={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                src={dibimbingLogo}
                alt="Logo"
                width={110}
                height={110} // Adjust the size according to your design
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, index) => (
                <NavLink key={index} link={link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Image
                  src={profilePhoto}
                  alt="Logo"
                  width={45}
                  height={45}
                  className="rounded-full" // Adjust the size according to your design
                />
              </MenuButton>
              <MenuList className="px-8">
                <h1 className="font-bold">Muhammad Razzaaq Zulkahfi</h1>
                <p className="font-light text-sm">Teknologi Informasi</p>
                <p className="font-light text-sm">Fakultas Ilmu Komputer</p>
                <p className="font-light text-sm">Universitas Brawijaya</p>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <NavLink key={index} link={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
