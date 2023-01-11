<?php

namespace App\Http\Controllers;

use App\Models\Lottery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

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
        Validator::extend('customValidation', function($attribute, $value) {
            $year = (new \DateTime($value))->format('Y');
            $week = (new \DateTime($value))->format('W');
            $result = Lottery::where('week', $week)->where('year', $year)->count() > 0;

            if ($result) {
                return false;
            }

            return true;
        }, 'There are already numbers drawn for this week');

    
        $validator = Validator::make($request->all(), [
            'number_1' => 'required|numeric|min:1|max:90',
            'number_2' => "required|numeric|".Rule::in(array_filter(range(1,90), function($item) {
                return $item != request()->input('number_1');
            })),
            'number_3' => "required|numeric|".Rule::in(array_filter(range(1,90), function($item)use($request) {
                return !in_Array($item, $request->only(['number_1', 'number_2']));
            })),
            'number_4' => 'required|numeric|'.Rule::in(array_filter(range(1,90), function($item)use($request) {
                return !in_Array($item, $request->only(['number_1', 'number_2', 'number_3']));
            })),
            'number_5' => 'required|numeric|'.Rule::in(array_filter(range(1,90), function($item)use($request) {
                return !in_Array($item, $request->only(['number_1', 'number_2', 'number_3', 'number_4']));
            })),
            'date' => "required|date|customValidation"
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
