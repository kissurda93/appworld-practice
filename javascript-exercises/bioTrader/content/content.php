<?php
    session_start();

    ini_set("display_errors", 1);
    error_reporting(E_ALL);
?>


<div id="home" class="container mt-5">
    <div class="row justify-content-center text-center">
        <h1 class="col-md-8 p-5 fs-1 fw-semibold bg-success bg-opacity-50">Üdvözli a <span class="fw-bolder">BIO</span> Trader!</h1>
    </div>

    <div class="row gap-4 mt-5 fs-5">
        <p class="col-md-8">Vállalkozásunk Bio zöldségek termesztésével es kereskedésével foglalkozik.</p>
        <p class="col-md-8">Hogy mitől is Bio a Bio? </p>
        <p class="col-md-8">A biogazdálkodás olyan gazdálkodási forma, mely szerves trágyázáson, biológiai növényvédelmen és természetes biológiai ciklusokon alapul, a szintetikus műtrágya és (szintetikus) növényvédő szerek mellőzésével, például baktériumalapú biotrágyák használatával.</p>
    </div>
</div>


<div id="about" class="container mt-5 fs-5">
    <div class="row gap-2">
        <h2 class="col-md-8 pt-3 ps-4 fs-1">Bértermelés</h2>
        <p class="col-md-8">Szertné hogy meglévő vagy új vállakozása bio zöldségekkel kereskedjen?</p>
        <p class="col-md-8">Megértjük ha önnek nincsenek meg a szükséges eszközei és helyszíne a termeléshez.</p>
        <p class="col-md-8">Mi pont ebben tudunk segíteni! Kitermeljük önnek, majd ön tovább árusítja!</p>
    </div>

    <div class="row gap-2 pt-4">
        <h2 class="col-md-8 ps-4 fs-1">Szaktanácsadás</h2>
        <p class="col-md-8">Húgy érzi van affinitása a termlés folyamatához, akkor állunk szolgálatára szakmai tanácsokkal!</p>
        <p class="col-md-8">Felszerelések és veteményesek beszerzésében is készséggel segítünk.</p>
    </div>

    <div class="row gap-2 pt-4">
        <h2 class="col-md-8 ps-4 fs-1">Értékesítés</h2>
        <p class="col-md-8">Adja le rendelését a Rendelés menüpont alatt, és 5 napon belül mi kiszaállítjuk önnek!</p>
    </div>

</div>


<div id="order" class="container mt-5 fs-5">
    <?php
        if(isset($_SESSION["errors"])){
            print '<div class="col-md-10 mx-auto mt-3 alert alert-danger" role="alert">';
            foreach($_SESSION["errors"] as $error){
                print "$error<br>";
            }
            print '</div>';
            unset($_SESSION["errors"]);
        }

        if(isset($_SESSION["succes"])){
            print '<div class="col-md-10 mx-auto mt-3 alert alert-success" role="alert">'.$_SESSION["succes"].'</div>';
            unset($_SESSION["succes"]);
            unset($_SESSION["data"]);
        }
    ?>

    <form action="process/process.php" method="post" class="row g-2 justify-content-center">
        <div class="col-md-5">
            <label for="name" class="form-label">Név</label>
            <input type="text" name="name" class="form-control" id="name" value="<?php
            print $_SESSION["data"]["name"] ?? '';
            ?>">
        </div>
        <div class="col-md-5">
            <label for="email" class="form-label">Email</label>
            <input type="email" name="email" class="form-control" id="email" value="<?php
            print $_SESSION["data"]["email"] ?? '';
            ?>">
        </div>
        <div class="col-md-5">
            <label for="address" class="form-label">Cím</label>
            <input type="text" name="address" class="form-control" id="address" placeholder="Róna utca 78" value="<?php
            print $_SESSION["data"]["address"] ?? '';
            ?>">
        </div>
        <div class="col-md-5">
            <label for="inputCity" class="form-label">Város</label>
            <input type="text" name="city" class="form-control align-self-start" id="inputCity"value="<?php
            print $_SESSION["data"]["city"] ?? '';
            ?>">
        </div>
        <div class="col-md-3">
            <label for="inputZip" class="form-label">Irányítószám</label>
            <input type="number" name="zip" class="form-control" id="inputZip" value="<?php
            print $_SESSION["data"]["zip"] ?? '';
            ?>">
        </div>
        <div class="col-md-3">
            <label for="tel" class="form-label">Telefonszám</label>
            <input type="number" name="phone" class="form-control" id="tel" placeholder="067012345678" value="<?php
            print $_SESSION["data"]["phone"] ?? '';
            ?>">
        </div>
        <div class="col-md-10">
            <label for="orderInput" class="form-label">Rendelés</label>
            <textarea class="form-control" name="order" rows="7" id="orderInput" placeholder="Mit rendel?"></textarea>
        </div>
        <div class="col-md-10 mt-3 mb-3">
            <button type="submit" class="btn btn-success">Megrendelés</button>
        </div>

    </form>
</div>


<div id="entries" class="container mt-5 fs-5">
    <?php
        if(isset($_SESSION["errorBejegyzes"])){
            print '<div class="col-md-10 mx-auto mt-3 alert alert-danger" role="alert">';
            foreach($_SESSION["errorBejegyzes"] as $error){
                print "$error<br>";
            }
            print '</div>';
            unset($_SESSION["errorBejegyzes"]);
        }

        if(isset($_SESSION["successBejegyzes"])){
            print '<div class="col-md-10 mx-auto mt-3 alert alert-success" role="alert">'.$_SESSION["successBejegyzes"].'</div>';
            unset($_SESSION["successBejegyzes"]);
        }
    ?>

    <div class="row gap-2">
        <h2 class="col-md-8 pt-3 ps-4 fs-1">Látogatók bejegyzései:</h2>
        <?php
            if(file_exists('../process/bejegyzesek.txt')){
                $bejegyzesekFile = file_get_contents('../process/bejegyzesek.txt');
                print '<div class="card">';
                print '<div class="card-body">';
                print $bejegyzesekFile;
                print '</div>';
                print '</div>';
            }
        ?>
    </div>

        <!-- Button trigger modal -->
    <button type="button" class="btn btn-success mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Új bejegyzés
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Új bejegyzés</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <form action="process/process.php" method="get">
                        <div class="mb-3">
                            <label for="nameBejegyzes" class="form-label">Név</label>
                            <input type="text" name="nameBejegyzes" class="form-control" id="nameBejegyzes">
                        </div>
                        <div class="mb-3">
                            <label for="emailBejegyzes" class="form-label">Email</label>
                            <input type="email" name="emailBejegyzes" class="form-control" id="emailBejegyzes">
                        </div>
                        <div class="mb-3">
                            <label for="bejegyzes" class="form-label">Bejegyzés</label>
                            <textarea name="bejegyzes" id="bejegyzes" cols="30" rows="7" class="form-control"></textarea>
                        </div>

                        <div class="d-flex justify-content-between">
                            <button type="submit" class="btn btn-success">Bejegyzés mentése</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezárás</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>