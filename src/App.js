import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { select } from 'd3';

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef(); // reference obj
  // console.log(svgRef);

  // access svg dom element
  useEffect(() => {
    // console.log(svgRef);
    const svg = select(svgRef.current); // pass svg dom element to d3
    svg
      // d3 methods
      .selectAll('circle')
      .data(data) // pass array
      // console.log(svg.selectAll('circle').data(data));
      .join('circle')
      .attr('r', (value) => value)
      .attr('cx', (value) => value * 2)
      .attr('cy', (value) => value * 2)
      .attr('stroke', 'red');
  }, [data]);
  return (
    <>
      {/* pass ref to dom element */}
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button>
    </>
  );
}

export default App;
