<?php

namespace App\Http\Controllers;

use App\Models\Lottery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
    
    public function store(Request $request) {
    
        $validator = Validator::make($request->all(), [
            'number_1' => 'required|numeric|min:1|max:90',
            'number_2' => 'required|numeric|min:1|max:90',
            'number_3' => 'required|numeric|min:1|max:90',
            'number_4' => 'required|numeric|min:1|max:90',
            'number_5' => 'required|numeric|min:1|max:90',
            'date' => 'required|date',
        ]);

        if($validator->fails()) 
            return redirect('/add')->withErrors($validator)->withInput();
        

        $validated = $validator->validated();
        $validated['week'] = (new \DateTime($validated['date']))->format('W');
        $validated['year'] = (new \DateTime($validated['date']))->format('Y');


        Lottery::create($validated);
        $okMessage = 'Numbers saved!';
        return view('addNumbers', compact('okMessage'));
    }

}
