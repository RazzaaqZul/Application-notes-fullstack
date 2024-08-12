"use client";
import Form from "@/components/Form";
import { UPDATE_NOTE } from "@/graphql/mutations";
import { GET_NOTE } from "@/graphql/queries";
import { FormattedDate } from "@/lib/formatedDate";
import { useMutation, useQuery } from "@apollo/client";
import React, { FormEvent, useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params: { id } }: Props) => {
  const { data, loading, error } = useQuery(GET_NOTE, {
    variables: { noteId: id },
  });

  const note = data?.note;
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  useEffect(() => {
    if (note) {
      setTitle(note.title || "");
      setBody(note.body || "");
    }
  }, [note]);

  const [updateNote] = useMutation(UPDATE_NOTE, {
    refetchQueries: [{ query: GET_NOTE, variables: { noteId: id } }],
  });

  const handleUpdateNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !body) {
      alert("Please fill in all fields");
      return;
    }
    updateNote({
      variables: {
        id,
        title,
        body,
        createdAt: FormattedDate(),
      },
    });
    setTitle("");
    setBody("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4 mx-20 flex flex-col gap-10">
      {note ? (
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold">{note.title}</h1>
          <p className="text-gray-700">{note.body}</p>
          <p className="text-sm text-gray-500">{note.createdAt}</p>
        </div>
      ) : (
        <p>Note not found</p>
      )}
      <div
        className="bg-gray-100 shadow-lg
      rounded-xl py-1 px-10"
      >
        <Form
          title={title}
          body={body}
          setTitle={setTitle}
          setBody={setBody}
          handleUpdateNote={handleUpdateNote}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Page;
