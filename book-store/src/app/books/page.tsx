import { BookType } from "@/types/books";
import React from "react";
import Books from "./books";

async function getBooks(): Promise<BookType[]> {
  const res = await fetch(
    "https://run.mocky.io/v3/67b4ef6b-5225-4127-8bd8-ddd37db665c8",
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data;
}

export default async function BookPage() {
  const data = await getBooks();

  return (
   <Books books={data}/>
  );
}
