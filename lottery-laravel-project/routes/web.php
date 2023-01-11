<?php

use App\Http\Controllers\LotteryController;
use App\Http\Controllers\TxtProcessor;
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

Route::get('/', [LotteryController::class, 'getSortedLotteryNumbers'])->name('index');

Route::get('/add', function() {
  return view('addNumbers');
})->name('add');

Route::post('/store', [LotteryController::class, 'store'])->name('store');


/*
|-----------------------------------------------------------------------
|
| "process" route execute the "lotteryData.txt" processing:
|
*/

Route::get('/process', [TxtProcessor::class, 'processTxtFile'])->name('process');