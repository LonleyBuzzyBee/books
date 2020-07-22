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

 Svg = () => {
  return (
    <svg style={{
      border: "2px solid gold"
    }} />
  )
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
          <ul>
            {books.map((book, index) =>
              // <svg/>
//               <text x="20" y="20"
//          font-family="sans-serif"
//         font-size="20px"
//         text-anchor="middle"
//          fill="red">Hello!</text>
              <li key={index}>
                <text>{book.title}</text>
                <br/>
                <text text-anchor="middle">{book.authors}</text>
                <br/>
                <text>{book.description}</text>
                
              <svg>
                <Circle/>
              </svg>
              </li>
                
                )}
          </ul>
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