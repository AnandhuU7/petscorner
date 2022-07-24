import { PetCard } from "../../components/pet-card";
import { BIRDS } from "../../constants/birds";
import { CATS } from "../../constants/cats";
import { DOGS } from "../../constants/dogs";
import { RABBITS } from "../../constants/rabbits";

export function Recommendations() {
    const recommendedItems = [...DOGS, ...CATS, ...BIRDS, ...RABBITS]
        .sort((a, b) => (a.rating < b.rating ? 1 : -1))
        .slice(0, 10);
        
    return (
        <div className='recommendations'>
            <div className='recommendations-label'>Recommendations</div>
            <div className='recommendations-list-wrapper'>
                {recommendedItems.map((item) => {
                    return (
                        <PetCard imageURL={item.imageURL} description={item.breedHighlights} name={item.breed}></PetCard>
                    );
                })}
            </div>
        </div>
    );
}
    