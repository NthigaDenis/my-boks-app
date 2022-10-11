import React,{useState, useEffect} from 'react'
import BookListItem from './BookListItem'
const BookList=({Books,
   onDeleteBook,
   searchQuery, 
  setSearchQuery,
  setSelectedCategory
}) =>{
  const [searchInputText,setSearchInputText]=useState('')

const handleSearch = (e)=>{
   setSearchInputText(e.target.value);
  }
const searchResults=Books.filter(Book => {
  // return true if books should be included and false if not
  return Book.title.toLowerCase().includes(searchQuery.toLowerCase())||
         Book.author.toLowerCase().includes(searchQuery.toLowerCase())||
         Book.category.toLowerCase().includes(searchQuery.toLowerCase())


})
   const renderedBooks=searchResults.map(Book => {
    return <BookListItem
     key={Books.id}
     Book={Book}
     onDeleteBook={onDeleteBook}
     />
   })
   useEffect(()=>{
    const scheduledUpdate=setTimeout(()=>{
   setSearchQuery(searchInputText)
    },300)
    return()=>{clearTimeout(scheduledUpdate)}
   },[setSearchQuery, searchInputText])
  
  return (
    <section>
    <h2>Books</h2>
    <div className='filter'>
<button style={{color: "darkkhaki"}} onClick={()=>setSelectedCategory("")}>All</button>
<button style={{color: "darkkhaki"}} onClick={()=>setSelectedCategory("Non-Fiction")}>Non-Fiction</button>
<button style={{color: "darkkhaki"}} onClick={()=>setSelectedCategory("Comic")}>Comic</button>
<button style={{color: "darkkhaki"}} onClick={()=>setSelectedCategory("Thiller")}>Thriller</button>
<button style={{color: "darkkhaki"}} onClick={()=>setSelectedCategory("Romance")}>Romance</button>
<button style={{color: "darkkhaki"}} onClick={()=>setSelectedCategory("Fiction")}>Fiction</button>
<button style={{color: "darkkhaki"}} onClick={()=>setSelectedCategory("TextBook")}>Textbook</button>
</div>

<input type="text" placeholder="Search..." 
onChange={handleSearch}
 value={searchQuery}/>

<ul className="cards">{renderedBooks}</ul>
    </section>

  )
}

export default BookList;