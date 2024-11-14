<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class GuardMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $api_key = $request->header("apiKey");

        if (is_null($api_key) || env("API_KEY") !== $api_key) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return $next($request);
    }
}
