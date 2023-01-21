import '../css/index.css'
import Data from '../data/data.json'
function Block(){



  return(
    <div className="container">
      <h1> {title} </h1>
      <p>{about}</p>
      <sub>{year}</sub>   
      <sub>{price}</sub>   
    </div>
  )
}
export default Block