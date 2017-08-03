

function get() {

    $.ajax({
        url: 'https://randomuser.me/api/',
        url: 'https://randomuser.me/api/?format=csv',
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    });
}