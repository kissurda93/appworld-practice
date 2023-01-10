<?php

use App\Http\Controllers\LotteryController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/index', [LotteryController::class, 'getSortedLotteryNumbers'])->name('index');

Route::get('/add', function() {
  return view('addNumbers');
})->name('add');

Route::post('/store', [LotteryController::class, 'store']);





// -----------------------------------------------------------------------------------------------------------
// Metod for processing "lotteryData.txt" and uploading data to database
// -----------------------------------------------------------------------------------------------------------
//     set_time_limit(0);

//     function dateTransform($data) {
//         $data = str_replace('.', '-', trim($data, '.'));
//         if (preg_match('\d{4}-\d{2}-\d{2}', $data)) {
//             return $data;
//         }
//         else {
//             return "";
//         }
//     }

//     $data = file_get_contents(__DIR__ . '/../lotteryData.txt');
//     $rows = explode("\n", $data);

//     foreach($rows as $row) {
//         $fields = explode("\t", $row);

//         $year = $fields[0];
//         $week = $fields[1];
//         $date = $fields[2];
//         $nr1 = $fields[11];
//         $nr2 = $fields[12];
//         $nr3 = $fields[13];
//         $nr4 = $fields[14];
//         $nr5 = $fields[15];
        
//         Lottery::create([
//             'year' => $year,
//             'week' => $week,
//             'date' => $date ? $date : null,
//             'nr1' => $nr1,
//             'nr2' => $nr2,
//             'nr3' => $nr3,
//             'nr4' => $nr4,
//             'nr5' => $nr5,
//         ]);
//     };

