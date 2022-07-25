import { useEffect, useState } from "react";
import { ExpandendPetCard } from "../../components/expandend-pet-card";
import { getSellItems } from "../../services/sell.service";
import { ISell } from "../../types/sell.types";
import { Buffer } from "buffer";

import "./style.css";
import { LatestExpandendPetCard } from "../../components/latest-expandend-pet-card";

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
                        <LatestExpandendPetCard
                            name={sellItem.breed}
                            imageURL={`data:${sellItem.image.contentType};base64, ${Buffer.from(
                                sellItem.image.data
                            ).toString("base64")}`}
                            type={sellItem.type}
                            description={sellItem.description}
                            date={sellItem.date}
                            contactus={sellItem.contactus}
                            
                        ></LatestExpandendPetCard>
                    );
                })}
            </div>
        </div>
    );
}
