export function parseImageLink(url: string) {
    return url.includes("storage") ? url : "/storage/" + url
}