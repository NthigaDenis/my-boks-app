
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
    return (
        <section className="box">
          <h2 style={{ fontSize: "2rem" }}>Keep Track Of Your Favorite Books</h2>
          <p>
            Organize Your Books Using Their Categories.
          </p>
          <h3 style={{color: "red"}}>Recent Books:</h3>
          {recentBooks.map((Book) => (
            <p key={Book.id}>{Book.title}</p>
            ))}
            <div style={{ margin: "1rem 0" }}>
              <Link style={{color: "red"}} className="button" to="/books">
                Click Me to View Books
              </Link>
            </div>
          </section>
        );
      };
      
      export default Home;