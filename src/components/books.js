import * as d3 from "d3";
import Circle from './Circle';
import React, {useEffect,useRef} from 'react';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: []
    };
  }




// const Circle = () => {
//   const ref = useRef()

//   useEffect(() => {
//     const svgElement = d3.select(ref.this.state)
//     svgElement.append("circle")
//       .attr("cx", 150)
//       .attr("cy", 70)
//       .attr("r",  50)
//   }, [])
  
  
//   return (
//     <svg
//     ref={ref}
//     />
//     )
//   }


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
          {/* <ul> */}
            {books.map((book, index) =>
            
              // <li key={index}>
            <React.Fragment>
              <svg width="500px" height="500px">
                <circle cx="150" cy="70" r="50" width="200" height="200" fill="cornflowerblue"><text></text></circle>
                <text key={index} text-anchor="middle" x="150" y="70" width="100px" height="300px">{book.title}<br/>{book.authors}<br/>{book.description}</text>
                </svg>
                <br/>
              </React.Fragment>
              // </li>
                
                )}
          {/* </ul> */}
        </React.Fragment>
      );
    }
  }
}

export default Books;


// const Circles = () => {
//   const [dataset, setDataset] = useState(
//     generateDataset()
//   )

//   useInterval(() => {
//     const newDataset = generateDataset()
//     setDataset(newDataset)
//   }, 2000)

//   return (
//     <svg viewBox="0 0 100 50">
//       {dataset.map(([x, y], i) => (
//         <circle
//           cx={x}
//           cy={y}
//           r="3"
//         />
//       ))}
//     </svg>
//   )
// }