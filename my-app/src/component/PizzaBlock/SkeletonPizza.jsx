import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={3}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#ffffff"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="25" y="273" rx="3" ry="3" width="238" height="28" /> 
    <circle cx="136" cy="134" r="130" /> 
    <rect x="27" y="320" rx="14" ry="14" width="236" height="69" /> 
    <rect x="32" y="415" rx="13" ry="13" width="78" height="38" /> 
    <rect x="131" y="413" rx="21" ry="21" width="129" height="39" />
  </ContentLoader>
)

export default MyLoader