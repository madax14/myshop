import React, { useEffect, useState } from 'react';
import { Link} from "react-router-dom";
import BookDetails from "./BookDetails"
// import Cards from './Cards';
// import test from './test';

// Data

function CreateCard() {

    const [books, setBooks] = useState([]);

    const fetchBooks = async()=> {
        const data = await fetch("http://localhost:3030/api/books")
        const bookData = await data.json();
        setBooks(bookData)
    };
      
    useEffect(()=>{
        fetchBooks()
    }, []);

    // console.log(books);

    const [selectedBook, SetSelectedBook] = useState(null);
    // console.log(selectedBook)

    return (
        
        <div className='cards'>
            
            {books.map((item)=>(
                <div className="card" key={item.Key}>
                    <h1>{item.Book}</h1>
                    <p>{item.Price}</p>
                    <button>+</button>
                    {/* <button className="BookDetails" onClick={()=> SetSelectedBook(item)}>Read</button> */}
                      <Link className="moreInfo" to="/BookDetails">
                        <button className='BookDetails' onClick={()=> SetSelectedBook(item)}>Read</button>
                      </Link>
                </div>
            ))}
            <p>How props</p>
        "https://www.geeksforgeeks.org/how-to-pass-data-from-one-component-to-other-component-in-reactjs/"
        </div>
    )
};

export default CreateCard;