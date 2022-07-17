import { ExpandendPetCard } from "../../components/expandend-pet-card";
import { CATS } from "../../constants/cats";

import "./style.css";

export function CatsPage() {
    return (
        <div>
            <div className='cats-list-wrapper'>
                {CATS.map((cat) => {
                    return (
                        <ExpandendPetCard
                            name={cat.breed}
                            imageURL={cat.imageURL}
                            breedHighlight={cat.breedHighlights}
                            origin={cat.origin || ""}
                            lifeExpectancy={cat.lifeExpectancy}
                            breedAppearance={cat.breedAppearance || ""}
                        ></ExpandendPetCard>
                    );
                })}
            </div>
        </div>
    );
}
