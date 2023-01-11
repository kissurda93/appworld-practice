<?php

namespace App\Http\Controllers;

use App\Models\Lottery;
use Illuminate\Http\Request;

class TxtProcessor extends Controller
{
    public function processTxtFile() {
        set_time_limit(0);

        function dateTransform($data) {
            $data = str_replace('.', '-', trim($data, '.'));
            if (preg_match('\d{4}-\d{2}-\d{2}', $data)) {
                return $data;
            }
            else {
                return "";
            }
        }

        $data = file_get_contents(__DIR__ . '/../../../lotteryData.txt');
        $rows = explode("\n", $data);

        foreach($rows as $row) {
            $fields = explode("\t", $row);

            $year = $fields[0];
            $week = $fields[1];
            $date = $fields[2];
            $nr1 = $fields[11];
            $nr2 = $fields[12];
            $nr3 = $fields[13];
            $nr4 = $fields[14];
            $nr5 = $fields[15];
            
            Lottery::create([
                'year' => $year,
                'week' => $week,
                'date' => $date ? $date : null,
                'number_1' => $nr1,
                'number_2' => $nr2,
                'number_3' => $nr3,
                'number_4' => $nr4,
                'number_5' => $nr5,
            ]);
        }
        
        return redirect('/')->with('message', 'Database updated!');
    }
}
