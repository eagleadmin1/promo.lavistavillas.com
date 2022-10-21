$(document).ready(function () {
    $("#cf").on('submit', function (){
        $.ajax({
        url: 'https://dwh.villacarte.com/api/lead/create',
        type: 'post',
        dataType: 'html',
        data: {
            "name": "Test LaVista",
            "email": "test@test.com",
            "phone": "+66696858854",
            "language": "RU",
            "comment": "комментарий",
            "utmSource": "google",
            "utmCampaign": "my_google_campaign",
            "utmContent": "awsome_content",
            "utmMedium": "cpc",
            "utmTerm": "term",
            "sourcePage": "promo.lavistavillas.com/ru",
            "sourceForm": "Header form"
        },
        success: function(data){
            $('#msg').html(data);
        }
        });
    });
});