function getStudent() {
    let roll = $("#rollno").val();

    if (roll === "") return;

    try {
        let getReq = createGETRequest(connToken, dbName, relName, roll);
        jQuery.ajaxSetup({async: false});
        let result = executeCommand(getReq);
        jQuery.ajaxSetup({async: true});

        if (result.status === 400) {
            $("#save, #reset").prop("disabled", false);
            $("#name, #class, #bdate, #address, #edate").prop("disabled", false);
            $("#name").focus();
        } else {
            let data = JSON.parse(result.data).record;

            $("#name").val(data.name);
            $("#class").val(data.class);
            $("#bdate").val(data.bdate);
            $("#address").val(data.address);
            $("#edate").val(data.edate);

            $("#rollno").prop("disabled", true);

            $("#update, #reset").prop("disabled", false);
            $("#name, #class, #bdate, #address, #edate").prop("disabled", false);
        }
    } catch (e) {
        console.error(e);
        alert("Error connecting to database");
    }
}