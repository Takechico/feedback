import React from "react";
import {API_URL} from "../config/config.ts";

export class FetchInstance {
    basePath: string | undefined;

    constructor(path: string) {
        this.basePath = path;
    }

    get<T>(url: string, query = {}): Promise<T> {
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        return fetch(this.formatUrlWithQuery(url, query), {
            mode: 'cors',
            headers,
        }).then((data) => data.json());
    }

    post<T>(url: string, payload_data = {}, query = {}): Promise<T> {
        return new Promise<T>((r) => {
            fetch(this.formatUrlWithQuery(url, query), {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                redirect: 'follow',
                body: JSON.stringify(payload_data),
            })
                .then((data) => data.json())
                .then((data) => r(data));
        });
    }

    /**
     * Helper function, if we will pass property as array,
     * we should add [] before
     * @param url
     * @param query
     * @private
     */
    private formatUrlWithQuery(url: string, query: any): string {
        const queryString = Object.keys(query)
            .map((key) => {
                const value = query[key];
                if (Array.isArray(value)) {
                    return value
                        .map((v) => `${encodeURIComponent(key)}[]=${encodeURIComponent(v)}`)
                        .join('&');
                }
                return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            })
            .join('&');

        const formattedQuery = queryString ? `?${queryString}` : '';
        return `${this.basePath}${url}${formattedQuery}`;
    }
}


const fetchInstance = new FetchInstance(API_URL || 'http://localhost');
export const Fetch = React.createContext(fetchInstance);

export default fetchInstance;