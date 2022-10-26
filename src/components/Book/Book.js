
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
import BookDetails from "./BookDetails";
const Book = (props) => {
  const navigate = useNavigate()
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3000/books/${_id}`)
      .then((res) => res.data)
      .then(() => navigate("/"))
      .then(() => navigate("/books"));
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button className="update" LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deleteHandler} className="delete" color="error"  sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;