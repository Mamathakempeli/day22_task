import { data } from "../Utils/constants"
import Card from "./Card"
const Section=()=>{
    return(
        <>
        <section className="pricing py-5 bg-primary">
        <div className="container">
          <div className="row">
            {
              data.map((e, i) => {
                return <Card cardData={e} key={i} />
              })
            }
          </div>
        </div>
      </section>
        </>
    )
}
export default Section 