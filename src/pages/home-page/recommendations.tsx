import { useState, useEffect } from "react";
import { PetCard } from "../../components/pet-card";
import { getSellItems } from "../../services/sell.service";
import { ISell } from "../../types/sell.types";
import { getAverageRating } from "../../utils/rating.utils";
import { Buffer } from "buffer";

export function Recommendations() {
    const [recommendedItems, setRecommendedItems] = useState<ISell[]>([]);

    useEffect(() => {
        fetchSells();
    }, []);

    async function fetchSells() {
        const response = await getSellItems();
        const recommendedItems: ISell[] = response.data;
        setRecommendedItems(
            recommendedItems
                .sort((a, b) => (getAverageRating(a.rating) < getAverageRating(b.rating) ? 1 : -1))
                .slice(0, 10)
        );
    }

    return (
        <div className='recommendations'>
            <div className='recommendations-label'>Recommendations</div>
            <div className='recommendations-list-wrapper'>
                {recommendedItems.map((item) => {
                    return (
                        <PetCard
                            imageURL={`data:${item.image.contentType};base64, ${Buffer.from(item.image.data).toString(
                                "base64"
                            )}`}
                            description={item.description}
                            name={item.breed}
                        ></PetCard>
                    );
                })}
            </div>
        </div>
    );
}
