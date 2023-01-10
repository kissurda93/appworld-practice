<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lottery Project</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">LotteryProject</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link {{ request()->routeIs('index') ? 'active' : '' }}" href={{ route('index') }}>Statistics</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{ request()->routeIs('add') ? 'active' : '' }}" href={{ route('add') }}>AddNumbers</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main>
      @yield('content')
    </main>

     <script src="/js/app.js"></script>
</body>
</html>