


$(document).ready(function () {

  $('#myform').validate({
    rules: {
      field1: {
        required: true,
        minlength: 5
      },
      field2: {
        required: true,
        date: true
      },
      field3: {
        required: true,
        minlength: 9,
        maxlength: 9
      }
    },

    submitHandler: function (form) {

      $(".progress").show();
      $(".meter > span").each(function() {
        $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate({
          width: $(this).data("origWidth") // or + "%" if fluid
        }, 5000)

      setTimeout(function() {
        $(".progress").hide();
        $("#myform p").html("You have been approved!").css({"color": "#00BC6F", "font-weight": "bold"});
      }, 5000);
      });
    },


  });
});
