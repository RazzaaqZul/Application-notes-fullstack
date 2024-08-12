import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface CardsProps {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  handleDelete: (id: string) => void;
}

const CardComponent: React.FC<CardsProps> = ({
  id,
  title,
  body,
  createdAt,
  handleDelete,
}) => {
  return (
    <Card
      display="flex"
      flexDirection="column"
      h="100%"
      maxW="300px"
      className="flex flex-col justify-between hover:scale-105 duration-200"
    >
      <Link href={`/notes/${id}`}>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{body}</Text>
          <Text color="gray.500">{createdAt} WIB</Text>
        </CardBody>
      </Link>
      <CardFooter>
        <Button colorScheme="red" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
