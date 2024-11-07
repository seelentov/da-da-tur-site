import parse from "node-html-parser";

export function stripHTML(htmlString: string) {
    const doc = parse(htmlString);
    return doc.text;

}