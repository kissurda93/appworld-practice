@extends('layouts.main')

@section('content')
  <div class="container-sm pt-5">

    @if ($errors->any()) 
      <div class="alert alert-danger" role="alert">
        @foreach ($errors->all() as $error)
          <li>{{ $error }}</li>
        @endforeach
      </div>
    @endif

    @if (isset($okMessage))
      <div class="alert alert-success" role="alert">
        {{ $okMessage }}
      </div>
    @endif

    <form action="/store" method="post" class="pt-5">
      @csrf
      <div class="row pb-4">
        <div class="col-3">
          <div class="input-group">
            <span class="input-group-text">Date</span>
            <input type="date" class="form-control" name="date" value="{{ old('date') }}">
          </div>
        </div>
      </div>
      <div class="row pb-4">
        <div class="col-6">
          <div class="input-group">
            <span class="input-group-text">Numbers</span>
            <input type="number" name="number_1" min="1" max="90" class="form-control" value="{{ old('number_1') }}" placeholder="number 1">
            <input type="number" name="number_2" min="1" max="90" class="form-control" value="{{ old('number_2') }}" placeholder="number 2">
            <input type="number" name="number_3" min="1" max="90" class="form-control" value="{{ old('number_3') }}" placeholder="number 3">
            <input type="number" name="number_4" min="1" max="90" class="form-control" value="{{ old('number_4') }}" placeholder="number 4">
            <input type="number" name="number_5" min="1" max="90" class="form-control" value="{{ old('number_5') }}" placeholder="number 5">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col"><button type="submit" class="btn btn-success">Add Numbers</button></div>
      </div>
    </form>
  </div>
@endsection