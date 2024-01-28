export const AxisLeft = ({
  yScale,
  innerWidth,
  tickOffset = 3,
}) => {
  // This is how you might want to delegate
  // the axis rendering to D3.
  // const gRef = useRef();
  // useEffect(() => {
  //   d3.select(gRef.current);
  //   // Render the axis
  // },[yScale]);

  return yScale.ticks().map((tickValue) => (
    <g
      className="tick"
      transform={`translate(0,${yScale(
        tickValue
      )})`}
    >
      <line x2={innerWidth} />
      <text
        key={tickValue}
        style={{ textAnchor: 'end' }}
        x={-tickOffset}
        dy=".32em"
      >
        {tickValue}
      </text>
    </g>
  ));
};
