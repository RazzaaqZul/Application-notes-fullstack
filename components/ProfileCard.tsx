import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import profilePhoto from "../public/img/razzaaq.png";
import Link from "next/link";
const ProfileCard = () => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      boxShadow="lg"
      maxW="900px"
      className="hover:scale-105 duration-[400ms] hover:shadow-blue-300"
    >
      <Image
        src={profilePhoto}
        alt="Logo"
        layout="responsive"
        width={255} // Original width of the image
        height={255} // Original height of the image
        className="rounded-sm" // Optional: use Chakra UI's styling instead
      />

      <Stack>
        <CardBody>
          <Heading size="md">Muhammad Razzaaq Zulkahfi</Heading>
          <Text py="2" className="text-justify font-light">
            Halo! Perkenalkan saya Razzaaq seorang mahasiswa Teknologi
            Informasi, Fakultas Ilmu Komputer, Universitas Brawijaya. Pada
            project kali ini, saya membuat Application-Notes untuk memenuhi
            Study Case yang diberikan oleh Pihak Diblimbing. Tech Stack yang
            digunakan adalah:
          </Text>
          <p className="font-semibold">
            NextJs, Typescript, Chakra-Ui, Postgresql, Graphql, Prisma.
          </p>
        </CardBody>

        <CardFooter>
          <Link href={`/notes`}>
            <Button variant="solid" colorScheme="blue">
              Go To Notes!
            </Button>
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProfileCard;
