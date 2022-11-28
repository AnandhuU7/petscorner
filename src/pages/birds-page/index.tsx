import { ExpandendPetCard } from "../../components/expandend-pet-card";
import { BIRDS } from "../../constants/birds";

import "./style.css";

export function BirdsPage() {
    return (
        <div>
            <div className='birds-list-wrapper'>
                {BIRDS.map((bird) => {
                    return (
                        <ExpandendPetCard
                            name={bird.breed}
                            imageURL={bird.imageURL}
                            breedHighlight={bird.breedHighlights}
                            origin={bird.origin || ""}
                            lifeExpectancy={bird.lifeExpectancy}
                            breedAppearance={bird.breedAppearance || ""}
                        ></ExpandendPetCard>
                    );
                })}
            </div>
        </div>
    );
}
