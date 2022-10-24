$(document).ready(function () {
    $("#cf-top").validate({
        errorPlacement: function() {},
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
            }
        },
        submitHandler: function() {
            $.ajax({
                type: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                url: 'https://dwh.villacarte.com/api/lead/create',
                data: JSON.stringify(
                    {
                        name: $('#cf-top input[name=name]').val(),
                        email: $('#cf-top input[name=email]').val(),
                        phone: $('#cf-top input[name=phone]').val(),
                        language: $('#cf-top input[name=language]').val(),
                        sourcePage: window.location.href,
                        sourceForm: "Top form"
                    }
                ),
                success() {
                    $("#cf-top .cf-step-1").hide();
                    $("#cf-top .cf-step-2").show();
                },
            });
        }
    });
    $("#cf-bottom").validate({
        errorPlacement: function() {},
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
            }
        },
        submitHandler: function() {
            $.ajax({
                type: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                url: 'https://dwh.villacarte.com/api/lead/create',
                data: JSON.stringify(
                    {
                        name: $('#cf-bottom input[name=name]').val(),
                        email: $('#cf-bottom input[name=email]').val(),
                        phone: $('#cf-bottom input[name=phone]').val(),
                        language: $('#cf-bottom input[name=language]').val(),
                        sourcePage: window.location.href,
                        sourceForm: "Bottom form"
                    }
                ),
                success() {
                    $("#cf-bottom .cf-step-1").hide();
                    $("#cf-bottom .cf-step-2").show();

                    var link = document.createElement('a');
                    link.href = 'https://eagleadmin1.github.io/promo.lavistavillas.com/agreement_sample_en.pdf';
                    link.download = 'agreement_sample_en.pdf' 
                    link.click();
                },
            });
        }
    });
});