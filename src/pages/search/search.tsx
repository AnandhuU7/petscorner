import { useEffect, useState } from "react";
import { getSellItems, searchSellItems } from "../../services/sell.service";
import { ISell } from "../../types/sell.types";
import { Buffer } from "buffer";
import { useParams } from "react-router-dom";

import "./style.css";
import { LatestExpandendPetCard } from "../../components/latest-expandend-pet-card";
import { DeleteOutlined } from "@ant-design/icons";

export function SearchPage() {
    const [sellItems, setSellItems] = useState<ISell[]>([]);
    const { searchKey = "" } = useParams();

    useEffect(() => {
        fetchSearchResults();
    }, [searchKey]);

    async function fetchSearchResults() {
        const response = await searchSellItems(searchKey);
        const sellItems: ISell[] = response.data;
        setSellItems(sellItems);
    }

    return (
        <div>
            <div className='latest-list-wrapper'>
                <h2>Search Results for `{searchKey}`</h2>
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
                            delete={false}
                            rate={true}
                            id={sellItem._id}
                            forceUpdateList={fetchSearchResults}
                            rating={sellItem.rating}
                        ></LatestExpandendPetCard>
                    );
                })}
                {sellItems.length <= 0 && <h3>No Results found!</h3>}
            </div>
        </div>
    );
}
