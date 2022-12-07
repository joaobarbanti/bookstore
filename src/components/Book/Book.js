
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Book.css";
const Book = (props) => {
  const navigate = useNavigate()
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await api
      .delete(`/books/${_id}`)
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