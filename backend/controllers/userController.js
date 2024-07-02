const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 25,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 30,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    age: 28,
  },
  {
    id: 4,
    name: "David Wright",
    email: "david@example.com",
    age: 22,
  },
  {
    id: 5,
    name: "Eve Davis",
    email: "eve@example.com",
    age: 35,
  },
  {
    id: 6,
    name: "Frank Harris",
    email: "frank@example.com",
    age: 27,
  },
  {
    id: 7,
    name: "Grace Lee",
    email: "grace@example.com",
    age: 24,
  },
  {
    id: 8,
    name: "Henry Clark",
    email: "henry@example.com",
    age: 29,
  },
  {
    id: 9,
    name: "Isabel Turner",
    email: "isabel@example.com",
    age: 26,
  },
  {
    id: 10,
    name: "Jack Wilson",
    email: "jack@example.com",
    age: 31,
  },
];

export const getAllUsers = async (req, res) => {
  res.status(200).send(users);
};
