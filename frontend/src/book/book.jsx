import React from 'react';
import axios from 'axios';

export default props => {
    const [books, updateBooks] = React.useState('');

    React.useEffect(() => {
        axios.post("http://localhost:5000/api/books/list")
            .then((response) => {
                updateBooks(response.data) // response.data.title
            })

    }, [updateBooks, books])

    // for (let i = 0; i < books.length; i++) {
    //      const object = books[i];
    //     for (let property in object) {
    //         console.log(object.title + ',' + object.author)
    //     }
    // }


    return (
        <div>

            <pre>
                {JSON.stringify(books, ['title'], 2)}
            </pre>


        </div>
    )

}

