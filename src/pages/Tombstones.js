import { Card } from "../components/Tombstones/Card";
import { useEffect, useState } from "react";
import "../assets/styles/Tombstones/Tombstones.css";

export function Tombstones() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/api/tombstones")
      .then((response) => response.json())
      .then((data) =>
        setList(
          data.tombstones.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              id={item.id}
            />
          ))
        )
      );
  });

  return <div className="wrapper">{list}</div>;
}
