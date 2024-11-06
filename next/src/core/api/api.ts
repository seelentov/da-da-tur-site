"use server"

import { API_URL } from "./config";
import { objectToQueryString } from "./utils";

export const GET = async <T, U>(url: string, queryParams: T | null = null, options: RequestInit = {}): Promise<BaseResponse<U>> => {

    const path = API_URL + '/api/' + url + "?" + (queryParams ? objectToQueryString(queryParams) : "");

    const res = await fetch(path, {
        cache: 'no-cache', headers: {
            'Content-Type': 'application/json',
            "apiKey": process.env.API_KEY || ''
        }, ...options
    });

    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        return null;
    }
};

export const POST = async <T, U>(url: string, body: T | null = null, options: RequestInit = {}): Promise<BaseResponse<U>> => {

    const res = await fetch(API_URL + '/api/' + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "apiKey": process.env.API_KEY || ''
        },
        body: JSON.stringify(body),
        ...options
    })

    const result = await res.json()

    return result
};
