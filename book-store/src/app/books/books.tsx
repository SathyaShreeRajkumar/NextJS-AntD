"use client";

import { useState } from "react";
import { BookType } from "@/types/books";
import { Card, Input } from "antd";
import Meta from "antd/es/card/Meta";
import { BOOK_CONST } from "@/constants/appConstants";

export type BookProps = {
  books: BookType[];
};

const Books = ({ books }: BookProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">{BOOK_CONST.HEADER_LABEL}</h1>
        <div className="mb-4 flex justify-center">
          <Input.Search
            placeholder={BOOK_CONST.SEARCH_LABEL}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            enterButton
            className="w-80"
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {filteredBooks.map((book) => (
            <Card
              key={book.id}
              hoverable
              className="w-96"
              cover={
                <img
                  src={book.image}
                  style={{ objectFit: "cover", height: "300px" }}
                />
              }
            >
              <Meta
                title={<span className="font-bold">{book.title}</span>}
                description={
                  <>
                    <p className="font-bold">{BOOK_CONST.AUTHOR_LABEL} {book.author}</p>
                    <p className="font-bold">{BOOK_CONST.GENRE_LABEL} {book.genre}</p>
                    <p className="font-bold">{BOOK_CONST.PRICE_LABEL} ${book.price}</p>
                    <p className="font-bold">{BOOK_CONST.RATING_LABEL} {book.rating}</p>
                    <p className="font-bold">{BOOK_CONST.DESCRIPTION_LABEL} {book.description}</p>
                  </>
                }
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
