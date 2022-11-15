<form>
    <div class="modal-body">
        <div class="mb-3">
            <label for="fullname" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="fullname" name="fullname" required>
                <div id="nameHelp" class="form-text text-danger pt-2"></div>
        <div>
        <div class="mb-3 mt-3">
            <label for="classN" class="form-label">Class</label>
            <input type="text" class="form-control" id="classN" name="classN" required>
                <div id="classHelp" class="form-text text-danger pt-2"></div>
        <div>
        <div class="mb-3 mt-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" required>
                <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3 mt-3">
            <label for="select" class="form-label">Club</label>
            <select class="form-select" id="select" aria-label="Default select example" name="cards" required>
                <option value="0" selected>Open this select menu</option>
                <option value="1">Art</option>
                <option value="2">Robotique</option>
                <option value="3">Sport</option>
                <option value="4">Social</option>
                <option value="5">Sport</option>
                <option value="6">Environnement</option>
            </select>
                <div id="clubHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
            <label for="cne" class="form-label">C N E</label>
            <input type="text" class="form-control" id="cne" name="cne" required>
                <div id="cneHelp" class="form-text"></div>
        <div>
    
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Register</button>
        </div>
    </div>
</form>