import { IRating } from "../types/sell.types";

export function getAverageRating(rating: IRating): number {
    if (!rating) return 0;
    const totalRating = rating.five * 5 + rating.four * 4 + rating.three * 3 + rating.two * 2 + rating.one * 1;
    const totalCount = rating.five + rating.four + rating.three + rating.two + rating.one;
    return totalRating / totalCount;
}
