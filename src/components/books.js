import * as d3 from "d3";
import Circle from './Circle';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import React, {useEffect,useRef} from 'react';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: []
    };
    this.wrapperRef = React.createRef();
  }


makeApiCall = () => {
  console.log(`${process.env.REACT_APP_API_KEY}`);
  fetch(`https://www.googleapis.com/books/v1/volumes?q=cooking+terms&key=${process.env.REACT_APP_API_KEY}`) 
  
  .then(response => response.json())
  .then(
    (jsonifiedResponse) => {
      console.log(jsonifiedResponse);
      console.log(jsonifiedResponse.items);
      console.log(jsonifiedResponse.items[0],jsonifiedResponse.items[1],jsonifiedResponse.items[2]);
      // console.log(jsonifiedResponse.items[key]);
      this.setState({
        isLoaded: true,
        books: [jsonifiedResponse.items[0].volumeInfo,jsonifiedResponse.items[1].volumeInfo,jsonifiedResponse.items[2].volumeInfo,jsonifiedResponse.items[3].volumeInfo,jsonifiedResponse.items[4].volumeInfo,jsonifiedResponse.items[5].volumeInfo,jsonifiedResponse.items[6].volumeInfo,jsonifiedResponse.items[7].volumeInfo,jsonifiedResponse.items[8].volumeInfo,jsonifiedResponse.items[9].volumeInfo]
        
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
  handleClick() {
    const wrapper = this.wrapperRef.current;
    wrapper.toggle('is-nav-open');
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
          <h1>Different cook books available</h1>
         <div className="nav-bar">
        
            <MenuUnfoldOutlined className="nav"
              onClick={() => this.handleClick()} />
          <div className="myDiv" >
            <ul>
            {books.map((book, index) =>
               <li key={index}>
                <h3>{book.title}</h3>
                <p>{book.authors}</p>
                <p>{book.description}</p>
            
                
                <br/>
                <Circle />
                </li>
                )}
              </ul>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Books;


