export const objectToQueryString = (obj: { [key: string]: any }) => {
    const parts = [];
    for (const key in obj) {
        const value = obj[key];
        if (Array.isArray(value)) {
            value.forEach(el => {
                parts.push(`${key}[]=${encodeURIComponent(el)}`);
            });
        } else if (typeof value === 'boolean') {
            parts.push(`${key}=${value}`);
        } else {
            parts.push(`${key}=${encodeURIComponent(value)}`);
        }
    }
    return parts.join('&');
}