import React, { useEffect, useState } from "react";

export default function ErrorMessage({ errorMessage, errorCause }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (errorCause === 500) {
      setMessage(
        "Sorry, Something went wrong - but our specialists are working on solving the problem"
      );
    } else if (errorCause === 404) {
      setMessage("Bad request, Not Found");
    } else if (errorMessage === "Failed to fetch") {
      setMessage("Сheck your internet connection");
    } else setMessage("Something went wrong ");
  }, [errorMessage, errorCause]);

  return <div>{message}</div>;
}
