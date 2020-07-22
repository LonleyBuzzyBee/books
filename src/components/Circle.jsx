import * as d3 from "d3";
import React, {useEffect,useRef} from 'react';

// let svgContainer = d3.select("body").append("svg")
//       .attr("width",200)
//       .attr("height", 200);
  
 //Add the SVG Text Element to the svgContainer
// let text = svgContainer.selectAll("text")
//         .data(circleData)
//         .enter()
//         .append("text");
        
// var circles = svgContainer.selectAll("circle")
//                            .data(circleData)
//                            .enter()
//                            .append("circle");

const Circle = () => {
  const ref = useRef()

  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.append("circle")
      .attr("cx", 150)
      .attr("cy", 70)
      .attr("r", 50)
      .attr("width",200)
      .attr("height", 200)
      .attr("fill", "cornflowerblue")
      .append("text")
    
      // const g = d3.select(ref.svgElement)
      // g.selectAll("text")
      //   .append("text")
  }, [])

  
  return (
    <svg style={{ color: "aliceblue", backgroundColor: "white" }}
      ref={ref} 
    />
  )
}
// var side = 2 * radius * Math.cos(Math.PI / 4),
//     dx = radius - side / 2;

// var g = svg.append('g')
//     .attr('transform', 'translate(' + [dx, dx] + ')');

// g.append("foreignObject")
//     .attr("width", side)
//     .attr("height", side)
//     .append("xhtml:body")
//     .html("Lorem ipsum dolor sit amet, ...");
// style={{
//       border: "2px solid gold"
//     }}
export default Circle;