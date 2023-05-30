import React, { useEffect, useState } from 'react';
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

    return (
        
        <div className='cards'>
            
            {books.map((item)=>(
                <div className="card" key={item.Key}>
                    <h1>{item.Book}</h1>
                    <p>{item.Price}</p>
                    <button>+</button>
                </div>
            ))}

        </div>
    )
};

export default CreateCard;