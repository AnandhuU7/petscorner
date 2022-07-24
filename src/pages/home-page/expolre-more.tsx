import { PetCard } from "../../components/pet-card";
import { BIRDS } from "../../constants/birds";
import { CATS } from "../../constants/cats";
import { DOGS } from "../../constants/dogs";
import { RABBITS } from "../../constants/rabbits";

export function ExploreMore() {
    const recommendedItems = [...DOGS, ...CATS, ...BIRDS, ...RABBITS]
        .sort((a, b) => (a.breed < b.breed ? 1 : -1))
        .slice(0, 10);

    return (
        <div className='explore-more'>
            <div className='explore-more-label'>Explore more</div>
            <div className='explore-more-list-wrapper'>
                {recommendedItems.map((item) => {
                    return (
                        <PetCard imageURL={item.imageURL} description={item.breedHighlights} name={item.breed}></PetCard>
                    );
                })}
            </div>
        </div>
    );
}
