var database = firebase.database().ref();



//Set database object


//button executes this function
function updateDB() {
    var name = $("#name").val();
    var email = $("#email").val();
    var web = $("#web").val();
    // console.log(name + " : " + message);

    //Update database here

    var value = {
        NAME: name,
        EMAIL: email,
        WEB: web
    };

    database.push(value);

}