export function clearObj(obj: { [key: string]: any }) {
    const res: { [key: string]: any } = {}

    Object.entries(obj).forEach(([key, value]) => {
        if (value !== "" && value !== null && value !== undefined) {
            res[key] = value
        }
    })

    return res;
}