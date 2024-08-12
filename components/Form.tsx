import React, { FormEvent } from "react";

interface FormProps {
  title: string;
  body: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  handleUpdateNote?: (e: FormEvent<HTMLFormElement>) => void;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

const Form: React.FC<FormProps> = ({
  title,
  body,
  setTitle,
  setBody,
  handleUpdateNote,
  handleSubmit,
  loading,
}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleUpdateNote) {
      handleUpdateNote(e);
    } else if (handleSubmit) {
      handleSubmit(e);
    }
  };

  return (
    <>
      <h1 className="flex justify-center items-center mt-10 font-bold text-2xl">
        {handleSubmit ? "Create a Note" : "Update This Note"}
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4  mb-10">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-sm font-medium">
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit" // Tetap "submit" untuk tombol dalam form
          className="mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 duration-150"
          disabled={loading}
        >
          {handleUpdateNote ? "Update" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Form;
