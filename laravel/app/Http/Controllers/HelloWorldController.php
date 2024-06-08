<?php

namespace App\Http\Controllers;

class HelloWorldController extends Controller
{
    public function helloWorld()
    {
        return response()->json(['message' => 'hello world']);
    }
}
