<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use App\Rules\LotteryDateOverlap;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class StoreLotteryNumberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        return [
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
            'date' => [
                'required',
                'date',
                new LotteryDateOverlap(),
            ],
        ];
    }
}
