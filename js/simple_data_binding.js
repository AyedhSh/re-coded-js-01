$(document).ready(function() {
  printToDiv();
});

function printToDiv(){

  $('#textArea').on('keyup', function(key) {

    if(key.which == 8)
      {$('#myDiv').text(function (_,txt) {
        return txt.slice(0, -1);
      });}
    else if (key.which == 13)
      { $('#myDiv').append('<br/>');}

    else
     { $('#myDiv').append(String.fromCharCode(key.which).toLowerCase());}

 });

}
