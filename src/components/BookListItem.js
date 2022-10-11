import React from 'react'

function BookListItem({Book, onDeleteBook}) {
  const{id,image, title,summary, author,price ,category}=Book  
   
  
  const handleDeleteClick= ()=>{
    fetch(`https://rehtse-library.herokuapp.com/books/${id}`,{
    method:"DELETE"
   })
   onDeleteBook(id)
  }
  return (
    <li>
        <a href="/Books/1">
            <figure className='image'>
                <img src ={image}
                alt="Vrienden voor het leven"/>
     
            </figure>
            </a>
      <section className="details">
     <h3 >{title}</h3>
     <p>
     {summary} 
     </p>
     <p >Author: {author}</p>
     <p>Price {price}</p>
     
      </section>
      <footer className='extra'>
        <button style={{color: "darkkhaki"}} >
           {category}
        </button>
        <button style={{color: "darkkhaki"}} onClick={handleDeleteClick}>
           Delete
           
          </button>
      </footer>

    </li>
  )
}

export default BookListItem;