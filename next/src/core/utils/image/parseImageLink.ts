export function parseImageLink(url: string) {
    return url.startsWith("/storage/") ? url : "/storage/" + url
}