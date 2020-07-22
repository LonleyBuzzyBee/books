import * as d3 from "d3";
import React, {useEffect,useRef} from 'react';

const Circle = () => {
  const ref = useRef()

  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.append("circle")
      .attr("cx", 150)
      .attr("cy", 70)
      .attr("r", 50)
      .attr("fill", "cornflowerblue")
  }, [])
// cx="20" cy="20" r="20"
  return (
    <svg style={{color: "aliceblue", backgroundColor: "white"}}
      ref={ref} 
    />
  )
}
// style={{
//       border: "2px solid gold"
//     }}
export default Circle;