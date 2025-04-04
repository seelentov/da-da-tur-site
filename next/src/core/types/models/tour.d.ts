interface Tour {
    id: number;
    price: number;
    old_price?: number;
    name: string;
    description?: string;
    image_url?: string;
    slug: string;
    text?: string;
    start_date: string;
    end_date: string;
    position: number;
    last_minute_deal: boolean;
    popular: boolean;
    category_id: number;
    city_id: number;
}

interface TourDetail {
    id: number;
    price: number;
    old_price?: number;
    name: string;
    description?: string;
    image_url?: string;
    slug: string;
    text?: string;
    dates: {
        start_date: string;
        end_date: string;
    }[];
    position: number;
    last_minute_deal: boolean;
    popular: boolean;
    category_id: number;
    city_id: number;
}


