import React, { useState, useEffect } from 'react'
import BookForm from './BookForm';
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



    useEffect(()=>{
    
        let url;
        if (selectedCategory && searchQuery){
          url=`https://rehtse-library.herokuapp.com/books?category=${selectedCategory}&q=${encodeURI(searchQuery)}`
        }else if(searchQuery){
          url=`https://rehtse-library.herokuapp.com/books?q=${encodeURI(searchQuery)}`
        }else if(selectedCategory){
        url=`https://rehtse-library.herokuapp.com/books?category=${selectedCategory}`
        } else {
          url="https://rehtse-library.herokuapp.com/books"
        }
        console.log(url)
        fetch(url)
        .then((res)=>res.json())
        .then((Books)=>setBooks(Books))
      },[selectedCategory,searchQuery])

  return (
    <>
    <Switch>
       <Route  path ='/books'>
       <BookForm
        onAddBook={onAddBook}
        />
        <BookList 
        Books={Books}
        onDeleteBook={onDeleteBook}
        setSelectedCategory={setSelectedCategory}
         searchQuery={searchQuery}
         setSearchQuery={setSearchQuery}
        />
        </Route>

       {/* <Route path='books/new'>
       <BookForm
        onAddBook={onAddBook}
        />
       </Route> */}
              
     
    </Switch>
    </>
  )
}

export default BooksContainer;