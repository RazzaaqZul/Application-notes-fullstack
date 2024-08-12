"use client";
import { ADD_NOTE, DELETE_NOTE } from "@/graphql/mutations";
import { GET_NOTES } from "@/graphql/queries";
import { FormattedDate } from "@/lib/formatedDate";
import { useMutation, useQuery } from "@apollo/client";
import { Note } from "@prisma/client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import Form from "./Form";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardComponent from "./Card";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { data, loading, error } = useQuery(GET_NOTES);
  const [addNote] = useMutation(ADD_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
  });
  const [deleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
  });

  const notes: Note[] = data?.notes || [];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addNote({
        variables: {
          title,
          body,
          createdAt: FormattedDate(),
        },
      });
      setTitle("");
      setBody("");
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  const handleDelete = async (id: string) => {
    deleteNote({ variables: { deleteNoteId: id } });
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  if (error) return <p>Oops! Something went wrong</p>;

  return (
    <>
      <SimpleGrid
        columns={[1, 2, 3]} // Menentukan jumlah kolom berdasarkan lebar layar
        spacing={10}
        minChildWidth="300px" // Lebar minimum untuk setiap card
      >
        {notes.length > 0 ? (
          notes.map((item) => (
            <div key={item.id} className="flex justify-center items-center">
              <CardComponent
                id={`${item.id}`}
                title={item.title}
                body={item.body}
                createdAt={item.createdAt}
                handleDelete={handleDelete}
              />
            </div>
          ))
        ) : (
          <>
            <Center>
              <h1 className="h-[208px] flex justify-center items-center bg-slate-50 shadow-md font-semibold w-[207px] hover:scale-95 duration-150">
                Tidak ada catatan!
              </h1>
            </Center>
          </>
        )}
      </SimpleGrid>
      <Form
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </>
  );
};
export default Notes;
