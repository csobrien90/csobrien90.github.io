import Card from "./Card";
import cardData from "../cardData";

function Slider() {
    return(
        <article id="project-slider">
            {cardData && cardData.map((card) => {
                return <Card title={card.title} description={card.description} />
            })}
        </article>
    )
}

export default Slider;