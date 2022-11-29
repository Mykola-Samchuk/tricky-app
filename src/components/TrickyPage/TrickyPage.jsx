import React, { useState } from "react";
import "./tricky-page.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Lesson from "../Lesson/Lesson";
import Search from "../Search/Search";

export default function TrickyPage() {
  const [SEARCH_KEYWORD, setSEARCH_KEYWORD] = useState("");
  const [status, setStatus] = useState({
    isLoaded: false,
    error: null,
    data: [],
  });

  const handlerBlur = (search) => {
    setStatus({ isLoaded: true });
    fetch(`https://react-course-api.azurewebsites.net/lesson/${search}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network faild", { cause: response.status });
      })
      .then((result) => {
        setStatus({ isLoaded: false, data: result });
      })
      .catch((error) => {
        setStatus({ isLoaded: false, error: error });
      });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  const handlerChange = (e) => {
    setSEARCH_KEYWORD(e.target.value);
  };
  return (
    <>
      <h1>TrickyPage</h1>
      <Search
        onSubmit={handlerSubmit}
        onChange={handlerChange}
        onBlur={handlerBlur}
        search={SEARCH_KEYWORD}
      />

      {status.isLoaded ? (
        <div>Loading...</div>
      ) : status.data ? (
        <Lesson items={status.data} />
      ) : (
        <ErrorMessage errorMessage={status.error.message} errorCause={status.error.cause} />
      )}
    </>
  );
}
