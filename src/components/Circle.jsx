import * as d3 from "d3";
import React, {useEffect,useRef} from 'react';



//  <circle cx="150" cy="70" r="50" width="200" height="200" fill="cornflowerblue"><text></text></circle>
const Circle = () => {
  
  const ref = useRef()
  
  useEffect(() => {
    let string = ["kshfkif", "ksfhku"];
    const svgElement = d3.select(ref.current)
    svgElement.append("circle")
      .attr("cx", 150)
      .attr("cy", 70)
      .attr("r", 50)
      .attr("width",200)
      .attr("height", 200)
      .attr("fill", "cornflowerblue")
      .attr("font-family", "sans-serif")
      .attr("font-size", "20px")
     
      
  }, [])
  
  
  return (
    <svg style={{ color: "aliceblue", backgroundColor: "white" }}
    ref={ref}/>
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
    
    // const svgCont = d3.select("body").append()
    //   .attr("width", 200)
    //   .sttr("height", 200)

    // const svgCont = d3.select(ref.current)
    //   svgCont.append("circle")
    //   .attr("width", 200)
    //   .sttr("height", 200)
    
    // let circleData = {"cx":150, "cy":70, "radius":50, "color":"green"};
    
    
    // let circles = svgCont.selectAll("circle")
    // .data(circleData)
    // .enter()
    // .append("circle");
    
    // let circleAtt = circles
    // .attr("cy", function (d) { return d.cy; })
    // .attr("cx", function (d) { return d.cx; })
    // .attr("r", function (d) { return d.radius; })
    // .style("fill", function (d) { return d.color; });
    
    // let text = svgCont.selectAll("text")
    //   .data(circleData)
    //   .enter()
    //   .append("text");
    
    // let textContent = text
    //     .attr("x", function(d) { return d.cx; })
    //     .attr("y", function(d) { return d.cy; })
    //     .text( "this")
    //     .attr("font-family", "sans-serif")
    //     .attr("font-size", "20px")
    //     .attr("fill", "black");