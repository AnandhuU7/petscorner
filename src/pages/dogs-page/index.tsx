import { ExpandendPetCard } from "../../components/expandend-pet-card";
import { DOGS } from "../../constants/dogs";

import "./style.css";

export function DogsPage() {
    return (
        <div>
            <div className='dogs-list-wrapper'>
                {DOGS.map((dog) => {
                    return (
                        <ExpandendPetCard
                            name={dog.breed}
                            imageURL={dog.imageURL}
                            breedHighlight={dog.breedHighlights}
                            origin={dog.origin || ""}
                            lifeExpectancy={dog.lifeExpectancy}
                            breedAppearance={dog.breedAppearance || ""}
                        ></ExpandendPetCard>
                    );
                })}
            </div>
        </div>
    );
}
