import React, { useState, useEffect } from 'react'
import BookForm from './BookForm'
import BookList from './BookList'
import {Switch, Route} from 'react-router-dom'
function BooksContainer() {

    const[Books,setBooks]=useState([]);
    const [selectedCategory, setSelectedCategory]=useState("")
    const [searchQuery, setSearchQuery]=useState("");
  
    const onAddBook =(newBook)=>{
        setBooks(Books => [...Books,
         newBook])
     
       }
         const onDeleteBook= (deletedBookId)=>{
         setBooks(Books=>Books.filter(Book=>{
           return Book.id !== deletedBookId
         }))
         }


