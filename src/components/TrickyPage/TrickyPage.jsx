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
    fetch(`https://react-course-api.azurewebsites.net/lesson/${search}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network faild", { cause: response.status });
      })
      .then((result) => {
        setStatus({ isLoaded: true, data: result });
        console.log(result);
      })
      .catch((error) => {
        setStatus({ isLoaded: true, error: error });
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

      {status.data ? (
        <Lesson items={status.data} />
      ) : !status.isLoaded ? (
        <div>Loading {console.log(status.isLoaded)}</div>
      ) : (
        <ErrorMessage
          errorMessage={status.error.message}
          errorCause={status.error.cause}
        />
      )}
    </>
  );
}
