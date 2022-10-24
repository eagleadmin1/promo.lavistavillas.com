$(document).ready(function () {
    $("#cf-top").validate({
        errorPlacement: function() {},
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
            },
            email: {
                required: true,
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                url: 'https://dwh.villacarte.com/api/lead/create',
                data: JSON.stringify(
                    {
                        name: "Test LaVista",
                        email: "test@test.com",
                        phone: "+66696858854",
                        language: "RU",
                        comment: "комментарий",
                        utmSource: "google",
                        utmCampaign: "my_google_campaign",
                        utmContent: "awsome_content",
                        utmMedium: "cpc",
                        utmTerm: "term",
                        sourcePage: "promo.lavistavillas.com/ru",
                        sourceForm: "Header form"
                    }
                ),
                success() {
                    alert("Success");
                    $("#cf-top .cf-step-1").hide();
                    $("#cf-top .cf-step-2").show();
                },
                error() {
                    alert("Error");
                }
                // success:function(json){
                //     alert("Success");
                //     $("#cf-top .cf-step-1").hide();
                //     $("#cf-top .cf-step-2").show();
                // },
                // error: function (error) {
                //     alert("Error");
                //     // console.log(error.response);
                //     // var link = document.createElement('a');
                //     // link.href = 'https://layangreenpark.com/agreement_sample_en.pdf';
                //     // link.download = 'agreement_sample_en.pdf' 
                //     // link.click();
                    
                    
                // }  
            });
        }
    });
    // $("#cf-top").on('submit', function (e){
    //     e.preventDefault();
    //     $.ajax({
    //         type: 'POST',
    //         url: 'https://dwh.villacarte.com/api/lead/create',
    //         crossDomain: true,
    //         data: JSON.stringify({ x: 5, y: 6 }),
    //         dataType: 'json',
    //         success:function(json){
    //             alert("Success");
    //         },
    //         error:function(data){
    //             var blob = new Blob([data]);
    //             var link = document.createElement('a');
    //             link.href = window.URL.createObjectURL(blob);
    //             link.download = 'file:///Users/mac/Downloads/lavistavillas/agreement_sample_en.pdf';
    //             link.click();
                
    //             $("#cf-top .cf-step-1").hide();
    //             $("#cf-top .cf-step-2").show();
    //         }  
    //     });
    // });
    // $("#cf-top-mobile").on('submit', function (e){
    //     e.preventDefault();
    //     $.ajax({
    //         type: 'POST',
    //         url: 'https://dwh.villacarte.com/api/lead/create',
    //         crossDomain: true,
    //         data: JSON.stringify({ x: 5, y: 6 }),
    //         dataType: 'json',
    //         success:function(json){
    //             alert("Success");
    //         },
    //         error:function(){
    //             $("#cf-top-mobile .cf-step-1").hide();
    //             $("#cf-top-mobile .cf-step-2").show();
    //         }  
    //     });
    // });
    // $("#cf-bottom").on('submit', function (e){
    //     e.preventDefault();
    //     $.ajax({
    //         type: 'POST',
    //         url: 'https://dwh.villacarte.com/api/lead/create',
    //         crossDomain: true,
    //         data: JSON.stringify({ x: 5, y: 6 }),
    //         dataType: 'json',
    //         success:function(json){
    //             alert("Success");
    //         },
    //         error:function(){
    //             $("#cf-bottom .cf-step-1").hide();
    //             $("#cf-bottom .cf-step-2").show();
    //         }  
    //     });
    // });
    // $("#cf-bottom-mobile").on('submit', function (e){
    //     e.preventDefault();
    //     $.ajax({
    //         type: 'POST',
    //         url: 'https://dwh.villacarte.com/api/lead/create',
    //         crossDomain: true,
    //         data: JSON.stringify({ x: 5, y: 6 }),
    //         dataType: 'json',
    //         success:function(json){
    //             alert("Success");
    //         },
    //         error:function(){
    //             $("#cf-bottom-mobile .cf-step-1").hide();
    //             $("#cf-bottom-mobile .cf-step-2").show();
    //         }  
    //     });
    // });
});