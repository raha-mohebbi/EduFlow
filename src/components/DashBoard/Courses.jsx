import docker from "../../assets/docker.png"
import react from "../../assets/react.png"
import node from "../../assets/node.png"
const courses = [
  {
    id: 1,
    image: react,
    title: "React.js Complete Course",
    instructor: "John Doe",
    description: "Learn React from beginner to advanced with real projects.",
    price: 59.99,
    rating: 5,
    category: "Front-End",
    students: 1250,
    isInCart: false,
  },

  {
    id: 2,
    image: node,
    title: "Node.js API Development",
    instructor: "Jane Smith",
    description: "Build powerful REST APIs using Node.js and Express.",
    price: 49.99,
    rating: 4,
    category: "Back-End",
    students: 980,
    isInCart: false,
  },

  {
    id: 3,
    image: docker,
    title: "Docker & Kubernetes",
    instructor: "Alex Johnson",
    description: "Deploy and manage applications with Docker & Kubernetes.",
    price: 69.99,
    rating: 2,
    category: "DevOps",
    students: 860,
    isInCart: false,
  },
];
export default courses;