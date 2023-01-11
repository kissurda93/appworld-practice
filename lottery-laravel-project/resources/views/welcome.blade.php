@extends('layouts.main')

@section('content')
    <section class="container-sm">
        @if (session('message'))
            <div class="alert alert-success mt-5" role="alert">
                {{ session('message') }}
            </div>
        @endif
        <section class="row pt-5">
            <h1 class="col-8 text-end">The most frequently drawn numbers of the</h1>
            <img src={{ asset('assets/otos.png') }} class="col-2" alt="Lottery brand logo" height="60" >
        </section>
        <section class="pt-5">
            @if (isset($countedResult))
                @foreach ($countedResult as $number => $times)
                    <div class="display-6 text-center pb-2">
                        <span class="badge bg-success rounded-circle">{{ $number }}</span> -> <span>{{ $times }}</span>
                    </div>
                @endforeach
            @endif
        </section>
    </section>
@endsection
