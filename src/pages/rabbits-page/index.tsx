import { ExpandendPetCard } from "../../components/expandend-pet-card";
import { RABBITS } from "../../constants/rabbits";


import "./style.css";

export function RabbitsPage() {
    return (
        <div>
            <div className='rabbits-list-wrapper'>
                {RABBITS.map((rabbit) => {
                    return (
                        <ExpandendPetCard
                            name={rabbit.breed}
                            imageURL={rabbit.imageURL}
                            breedHighlight={rabbit.breedHighlights}
                            origin={rabbit.origin || ""}
                            lifeExpectancy={rabbit.lifeExpectancy}
                            breedAppearance={rabbit.breedAppearance || ""}
                        ></ExpandendPetCard>
                    );
                })}
            </div>
        </div>
    );
}
