import { createServer } from "miragejs";

function makeServer() {
  const server = createServer();
  server.get("/api/tombstones", {
    tombstones: [
      {
        id: 1,
        img: "1.png",
        title: "Tombstone",
        price: "8000Р",
      },
      {
        id: 2,
        img: "2.png",
        title: "Tombstone",
        price: "8000Р",
      },
      {
        id: 3,
        img: "3.png",
        title: "Tombstone",
        price: "8000Р",
      },
      {
        id: 4,
        img: "4.png",
        title: "Tombstone",
        price: "8000Р",
      },
      {
        id: 5,
        img: "5.png",
        title: "Tombstone",
        price: "8000Р",
      },
      {
        id: 6,
        img: "6.jpg",
        title: "Tombstone",
        price: "8000Р",
      },
      {
        id: 7,
        img: "7.jpg",
        title: "Tombstone",
        price: "8000Р",
      },
    ],
  });
  server.post("/api/order", () => "nothing");
}

export default makeServer;
