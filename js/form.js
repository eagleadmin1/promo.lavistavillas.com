$(document).ready(function () {

    const rules = {
        name: {
            required: true,
        },
        phone: {
            required: true,
        }
    }

    const getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return '';
    };

    function ajaxRequest (formId, sourceForm, downloadPdf = false) {
        return(
            $.ajax({
                type: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                url: 'https://dwh.villacarte.com/api/lead/create',
                data: JSON.stringify(
                    {
                        name: $(`${formId} input[name=name]`).val(),
                        email: $(`${formId} input[name=email]`).val(),
                        phone: $(`${formId} input[name=phone]`).val(),
                        language: $(`${formId} input[name=language]`).val(),

                        utmSource: getUrlParameter('utmSource'),
                        utmCampaign: getUrlParameter('utmCampaign'),
                        utmContent: getUrlParameter('utmContent'),
                        utmMedium: getUrlParameter('utmMedium'),
                        utmTerm: getUrlParameter('utmTerm'),

                        sourcePage: window.location.href,
                        sourceForm: sourceForm,
                    }
                ),
                success() {
                    $(`${formId} .cf-step-1`).hide();
                    $(`${formId} .cf-step-2`).show();

                    if(downloadPdf) {
                        var link = document.createElement('a');
                        link.href = window.location.href + '/' + $(`${formId} input[name=pdfURL]`).val();
                        link.download = $(`${formId} input[name=pdfName]`).val();
                        link.click();
                    }
                },
            })
        )
    }

    $('#cf-top').validate({
        errorPlacement: function() {},
        rules,
        submitHandler: function() {
            ajaxRequest('#cf-top', 'Top form')
        }
    });

    $('#cf-top-mobile').validate({
        errorPlacement: function() {},
        rules,
        submitHandler: function() {
            ajaxRequest('#cf-top-mobile', 'Top form modal')
        }
    });

    $('#cf-middle').validate({
        errorPlacement: function() {},
        rules,
        submitHandler: function() {
            ajaxRequest('#cf-middle', 'Middle form modal')
        }
    });

    $('#cf-bottom').validate({
        errorPlacement: function() {},
        rules,
        submitHandler: function() {
            ajaxRequest('#cf-bottom', 'Bottom form', true)
        }
    });
    
    $('#cf-bottom-mobile').validate({
        errorPlacement: function() {},
        rules,
        submitHandler: function() {
            ajaxRequest('#cf-bottom-mobile', 'Bottom form modal', true)
        }
    });

});