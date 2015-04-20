
// $("#approval-form").submit(function(event) {
//   event.preventDefault();
//   var $inputs = $(event.currentTarget).serializeJSON();
//
//   console.log($inputs);
// });

$(document).ready(function () {

  $('#myform').validate({ // initialize the plugin
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
    submitHandler: function (form) { // for demo
      alert('valid form submitted'); // for demo
      return false; // for demo
    }
  });

});
