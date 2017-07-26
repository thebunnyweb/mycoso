module.exports = function() {
    var input = $(".writerform .control-group input");
    var label = $(".writerform .control-group label")
    var check = $(".writerform .control-group input[type='checkbox']");

    label.on('click', function() {
        $(this).parent().find("input").focus();
    });


    input.on('focus', function() {
        $(this).parent().find("label").addClass("active");
    });
    input.on('blur', function() {
        if ($(this).val().length == 0) {
            $(this).parent().find("label").removeClass("active");
        }
    });


    check.on('click', function() {
        if ($(this).is(':checked')) {
            $(this).parent().find("span").css("color", "#2196F3")
        } else {
            $(this).parent().find("span").css("color", "#999")
        }

    });


}