import { useEffect, useState } from "react";
import { getSellItems } from "../../services/sell.service";
import { ISell } from "../../types/sell.types";
import { Buffer } from "buffer";

import "./style.css";
import { LatestExpandendPetCard } from "../../components/latest-expandend-pet-card";

export function AdminPage() {
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
            <div className='latest-list-wrapper'>
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
                            delete={true}
                            rate={false}
                            id={sellItem._id}
                            forceUpdateList={fetchSells}
                            rating={sellItem.rating}
                        ></LatestExpandendPetCard>
                        
                    );
                })}
                
            </div> 
        </div>
    );
}
