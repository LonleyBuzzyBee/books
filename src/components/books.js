import React from 'react';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: []
    };
  }
  makeApiCall = () => {
    fetch(`api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            headlines: jsonifiedResponse.results
          });
        })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });
    }
    
    componentDidMount() {
      this.makeApiCall()
    }
    
    render() {
    const { error, isLoaded, books } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Different books available</h1>
          <ul>
            {books.map((book, index) =>
              <li key={index}>
                <h3>{book.title}</h3>
                <p>{book.abstract}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Books;