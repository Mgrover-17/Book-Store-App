import React from "react";
import { Button } from "@mui/material";
import "./Book.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SingleBook = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async() => {
    await axios.delete(`http://localhost:5000/books/${_id}`).then(res=>res.data).then(()=>history("/")).then(()=>history("/books"));
  } 
  return (
    <div className="cardItems">
      <img src={image} alt={name} />
      <article> <b>By {author}</b></article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button className="update-btn" LinkComponent={Link} to={`/books/${_id}`} sx={{mt:"auto"}} >Update</Button>
      <Button onClick={deleteHandler} sx={{mt:"auto"}}>Delete</Button>
    </div>
  );
};

export default SingleBook;
