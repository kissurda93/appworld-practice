<?php

namespace Database\Seeders;

use App\Models\Lottery;
use Illuminate\Database\Seeder;

class LotteryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        set_time_limit(0);

        $data = file_get_contents(__DIR__ . '/../../lotteryData.txt');
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
    }
}
