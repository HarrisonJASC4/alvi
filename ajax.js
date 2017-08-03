var appId = c41192dc
var appKey = b4895b4fe09d7cdd45dd52b8918b64c9
var mcDonaldsURL = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=APPID&appKey=APPKEY" + appId + "&appKeys=" + appKey;

.ajax({
    url: mcDonaldsURL,
    success: function (data) {
        console.log(data);
        var foodItem = data.hit[0];
        var cals =
            foodItem.fields.nf_calories;
        $("body").append("<h2>This " + name + " has " + cals + " calories!!!</h2>");
    }
});