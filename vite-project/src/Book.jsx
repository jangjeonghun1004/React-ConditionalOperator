function Book() {
    const books = [
        {id: 1, title: "book1", published: true, publisher: "james1"},
        {id: 2, title: "book2", published: false, publisher: "james2"},
        {id: 3, title: "book3", published: true, publisher: "james3"}
    ];

    const published = books.filter(book => book.published);

    return (
        <>
            {published.length > 0 && <h2>Published Books</h2>}
            {
                published.length > 0 ? 
                published.map((book, index) => 
                    <article key={book.id}>
                        <strong>{book.title}</strong>
                        <em>- {book.publisher}</em>
                    </article>
                ) : <p>No published book found.</p>
            }
        </>
    )
}

export default Book