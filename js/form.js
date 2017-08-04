$('document').ready(function() {
    $('#form').validate({

        rules: {

            fname: {
                required: true,
                minlength: 2,
                maxlength: 60
            },

            phone: {
                required: true,
                minlength: 5,
                maxlength: 20
            },

            email: {
                required: true,
                email: true
            }
        },

        messages: {

            "fname": {
                required: "Заполните это поле",
                minlength: "От 2 до 60 символов",
                maxlength: "От 2 до 60 символов"
            },

            "phone": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },

            "email": {
                required: "Заполните это поле",
                email: "Введите корректный адрес электронной почты"
            }
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({

                target: '#target-form',

                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks2").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);

                    $("#form").clearForm();
                }
            })
        }

    });
});


$('document').ready(function() {
    $('#form-2').validate({

        rules: {

            fname_2: {
                required: true,
                minlength: 2,
                maxlength: 60
            },

            phone_2: {
                required: true,
                minlength: 5,
                maxlength: 20
            }

        },

        messages: {

            "fname_2": {
                required: "Заполните это поле",
                minlength: "От 2 до 60 символов",
                maxlength: "От 2 до 60 символов"
            },

            "phone_2": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            }
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({

                target: '#target-form-2',

                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);

                    $("#form-2").clearForm();
                }
            })
        }

    });
});


$('document').ready(function() {
    $('#form-3').validate({

        rules: {

            fname_3: {
                required: true,
                minlength: 2,
                maxlength: 60
            },

            phone_3: {
                required: true,
                minlength: 5,
                maxlength: 20
            }

        },

        messages: {

            "fname_3": {
                required: "Заполните это поле",
                minlength: "От 2 до 60 символов",
                maxlength: "От 2 до 60 символов"
            },

            "phone_3": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            }
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({

                target: '#target-form-3',

                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);

                    $("#form-3").clearForm();
                }
            })
        }

    });
});



$('document').ready(function() {
    $('#form-4').validate({

        rules: {

            fname_4: {
                required: true,
                minlength: 2,
                maxlength: 60
            },

            phone_4: {
                required: true,
                minlength: 5,
                maxlength: 20
            }

        },

        messages: {

            "fname_4": {
                required: "Заполните это поле",
                minlength: "От 2 до 60 символов",
                maxlength: "От 2 до 60 символов"
            },

            "phone_4": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            }
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({

                target: '#target-form-4',

                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);

                    $("#form-4").clearForm();
                }
            })
        }

    });
});


$('document').ready(function() {
    $('#form-5').validate({

        rules: {

            fname_5: {
                required: true,
                minlength: 2,
                maxlength: 60
            },

            phone_5: {
                required: true,
                minlength: 5,
                maxlength: 20
            },

            email_5: {
                required: true,
                email: true
            }
        },

        messages: {

            "fname_5": {
                required: "Заполните это поле",
                minlength: "От 2 до 60 символов",
                maxlength: "От 2 до 60 символов"
            },

            "phone_5": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },

            "email_5": {
                required: "Заполните это поле",
                email: "Введите корректный адрес электронной почты"
            }
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({

                target: '#target-form-5',

                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks2").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);

                    $("#form-5").clearForm();
                }
            })
        }

    });
});


$('document').ready(function() {
    $('#form-app-modal').validate({

        rules: {

            fname_app_modal: {
                required: true,
                minlength: 2,
                maxlength: 60
            },

            phone_app_modal: {
                required: true,
                //number: true,
                minlength: 5,
                maxlength: 20
            }
        },

        messages: {

            "fname_app_modal": {
                required: "Заполните это поле",
                minlength: "От 2 до 60 символов",
                maxlength: "От 2 до 60 символов"
            },

            "phone_app_modal": {
                required: "Заполните это поле",
                //number: "Только цифры",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            }

        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-app-modal',

                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);

                    $("#form-app-modal").clearForm();
                }
            })
        }

    });
});