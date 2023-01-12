<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLotteryNumberRequest;
use App\Models\Lottery;


class LotteryController extends Controller
{
    public function getSortedLotteryNumbers() {
        $result = [];
        for ($i=1; $i <= 5; $i++) { 
            $result = array_merge($result, Lottery::select("number_$i")->get()->pluck("number_$i")->toArray());
        }

        $countedResult = array_count_values($result);
        arsort($countedResult);

        return view('welcome', compact("countedResult"));
    }
    
    public function store(StoreLotteryNumberRequest $request) {
        $request = $request->validated();
        $request['week'] = (new \DateTime($request['date']))->format('W');
        $request['year'] = (new \DateTime($request['date']))->format('Y');

        Lottery::create($request);
        $okMessage = 'Numbers saved!';
        return view('addNumbers', compact('okMessage'));
    }
}
