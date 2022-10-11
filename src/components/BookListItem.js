import React from 'react'

function BookListItem({Book, onDeleteBook}) {
  const{id,image, title,summary, author,price ,category}=Book  
   
  
  const handleDeleteClick= ()=>{
    fetch(`https://rehtse-library.herokuapp.com/books/${id}`,{
    method:"DELETE"
   })
   onDeleteBook(id)
  }