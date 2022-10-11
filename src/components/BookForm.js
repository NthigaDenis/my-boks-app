import React,{useState} from 'react'

const initialState ={

  title:"",
  author:"",
  summary:"",
  price:"",
  image:"",
  category:""
  }

function BookForm({onAddBook}) {
 const [formData, setFormData]=useState(initialState);

const handleOnChange =(e) => {
const { name,value}=e.target;
setFormData(formData=>{
  return {
...formData, 
[name]:value

  }
  
})

}
const handleSubmit=(e)=>{
  e.preventDefault();
fetch("https://rehtse-library.herokuapp.com/books",{
  method:'POST',
  headers:{
    'content-Type':'application/json'
  },
  body:JSON.stringify(formData)
})
.then((response)=>response.json())
.then((newBook)=>{console.log(newBook)
  onAddBook(newBook);
});
  setFormData(initialState)
}


  return (
    <div>
      <form  className='form' autoComplete='off'
      onSubmit={handleSubmit} >
      <h3>Add New Book</h3>
      <label htmlFor="tilte">Title</label>
       <input 
       type="text"
        id="title" 
        name="title"
        onChange={handleOnChange}
        value={formData.title}
        />

      <label htmlFor="author">Author</label>
       <input 
       type="text" 
       id="author" 
       name="author"
       onChange={handleOnChange}
       value={formData.author}
       />
       

      <label htmlFor="summary">Summary</label>
       <textarea 
       id="summary" 
       name="summary"
       onChange={handleOnChange}
       value={formData.summary}
       ></textarea>
      

       <label htmlFor="category">Category</label>
       <select 
       name="category" 
       id="category"
       onChange={handleOnChange}
       value={formData.category}
       >

       <option>Select category</option>
       <option value="Non Fiction">Non Fiction</option>
       <option value="Comic">Comic</option>
       <option value="Thiller">Thriller</option>
       <option value="Romance">Romance</option>
       <option value="Fiction">Fiction</option>
       <option value="TextBook">TextBook</option>
       </select>


       <lable htmlFor='image'>Image</lable>
        <input 
        type="text" 
        id="image" 
        name="image"
        onChange={handleOnChange}
        value={formData.image}
        />

        <label htmlFor="price">Price</label>
       <input 
       type="text" 
       id="price" 
       name="price"
       onChange={handleOnChange}
       value={formData.price}
       
       />
       
        <button style={{color: "darkkhaki"}} type="submit" >Add Book</button>
      </form>
        
    </div>
  )
}

export default BookForm