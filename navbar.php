<nav class="navbar navbar-expand-lg bg-dark bg-gradient" style="--bs-bg-opacity: 0.7">
    <div class="container">
    <a class="navbar-logo" href="#"><img width="60px" src="images/logo.png" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div class="navbar-nav ">
        <a class="nav-link active text-white" aria-current="page" href="#home">Home</a>
        <a class="nav-link text-white" href="#">Clubs</a>
        <a class="nav-link text-white" href="#">Contact</a>
        <!-- Button trigger modal -->
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Join Club</button>
    </div>
    </div>
    </div>













    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Join Club</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <?php include 'register-club.php'; ?>


    </div>
    </div>
</div>
</nav>