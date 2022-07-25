import { useState, useEffect } from "react";
import { PetCard } from "../../components/pet-card";
import { getSellItems } from "../../services/sell.service";
import { ISell } from "../../types/sell.types";
import { Buffer } from "buffer";

export function TopSelections() {
    const [recommendedItems, setRecommendedItems] = useState<ISell[]>([]);

    useEffect(() => {
        fetchSells();
    }, []);

    async function fetchSells() {
        const response = await getSellItems();
        const recommendedItems: ISell[] = response.data;
        setRecommendedItems(recommendedItems.sort((a, b) => (a.breed < b.breed ? 1 : -1)).slice(0, 10));
    }

    return (
        <div className='top-selections'>
            <div className='top-selections-label'>Top Selections</div>
            <div className='top-selections-list-wrapper'>
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
