import { useEffect, useState } from "react";
import { ExpandendPetCard } from "../../components/expandend-pet-card";
import { BIRDS } from "../../constants/birds";
import { getSellItems } from "../../services/sell.service";
import { ISell } from "../../types/sell.types";
import { Buffer } from "buffer";

import "./style.css";

export function LatestPage() {
    const [sellItems, setSellItems] = useState<ISell[]>([]);

    useEffect(() => {
        fetchSells();
    }, []);

    async function fetchSells() {
        const response = await getSellItems();
        const sellItems: ISell[] = response.data;
        setSellItems(sellItems);
    }

    return (
        <div>
            <div className='birds-list-wrapper'>
                {sellItems.map((sellItem) => {
                    return (
                        <ExpandendPetCard
                            name={sellItem.breed}
                            imageURL={`data:${sellItem.image.contentType};base64, ${Buffer.from(
                                sellItem.image.data
                            ).toString("base64")}`}
                            breedHighlight={sellItem.description}
                            origin={""}
                            lifeExpectancy={{ from: 1, to: 1 }}
                            breedAppearance={sellItem.description || ""}
                        ></ExpandendPetCard>
                    );
                })}
            </div>
        </div>
    );
}
