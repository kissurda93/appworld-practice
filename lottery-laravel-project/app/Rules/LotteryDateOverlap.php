<?php

namespace App\Rules;

use App\Models\Lottery;
use Illuminate\Contracts\Validation\Rule;

class LotteryDateOverlap implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $year = (new \DateTime($value))->format('Y');
        $week = (new \DateTime($value))->format('W');
        return Lottery::where('week', $week)->where('year', $year)->count() == 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'There are already numbers drawn for this week';
    }
}
