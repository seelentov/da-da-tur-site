interface Tour {
    id: number;
    price: number;
    old_price?: number;
    name: string;
    description?: string;
    image_url?: string;
    slug: string;
    text?: string;
    start_date: Date;
    end_date: Date;
    position: number;
    last_minute_deal: boolean;
    category_id: number;
    city_id: number;
}