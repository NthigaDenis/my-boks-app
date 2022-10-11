
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [recentBooks, setRecentBooks] = useState([]);
  
    useEffect(() => {
      // fetch the 3 most recently added projects from json-server
      fetch("https://rehtse-library.herokuapp.com/books?_sort=id&_order=desc&_limit=3")
        .then((r) => r.json())
        .then((recentBooks) => {
          setRecentBooks(recentBooks);
        });
    }, []);