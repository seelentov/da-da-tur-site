import { NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-url', req.url);

    if (!req.url.includes("chelyabinsk"))
        return NextResponse.redirect(req.url + "?city=chelyabinsk")


    return NextResponse.next({
        request: {
            headers: requestHeaders,
        }
    });

};

export default middleware;

