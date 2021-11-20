import React from "react";
import { Link } from "react-router-dom";


export function SecPage() {
  //   state() {
  //     click: false;
  //     books = [];
  //     toys = [];
  //   }

  // const books = useSelector(Selectors.getBook);

  return (
    <div>
      <div>Вали отсюда. Ты тут не нужен</div>
      <div style={{ width: "100px", height: "100px" }}>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}
