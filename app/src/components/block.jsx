import '../css/index.css'
import Data from '../data/data.json'
function Block()
{
  return(
      <>
      {
        Data.map(props => 
          <div className="main">
            <div className="container">
              <div className='wraper'>
                <h1>{props.title}</h1>
                <p>{props.about}</p>
                <div className="sub">
                  <sub>{props.year}</sub>
                  <sub>{props.price}$</sub>
                </div>
              </div>
            </div>
          </div>
        )
      }
      </>
  )
}

export default Block