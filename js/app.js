
// Fungsi Mengubah Tampilan Jika Pada Forms Dropdown Berubah
function cuaca(nama,selector){
  var image = document.getElementsByName(nama)[0];
  image.src = selector.value;
}

function onChangeFod(selector) {
   var text = selector.options[selector.selectedIndex].text;
   var Message = 'Forecaster On Duty : ' + text;

   document.getElementById("SelectFodp").innerHTML = Message;
}

function OnchangeTab(evt, viewName){

var i,tabviews,tablinks;

  tabviews = document.getElementsByClassName("tabviews");
   for (i = 0; i < tabviews.length; i++) {
    tabviews[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(viewName).style.display = "block";
  evt.currentTarget.className += " active";


}



$('#radio-3').click(function() {
  html2canvas($('#Views')[0], {
    width: 1200,
    height: 1745
  }).then(function(canvas) {
    var a = document.createElement('a');
    a.href = canvas.toDataURL("image/png");
    var dw = today.format('Do') + 'LUSA.png' ;
    a.download = dw;
    a.click();
  });
});



function FilterCuaca(){

  var cuaca = ['pagi1','siang2','malam1','dinihari1'];

  var image = document.getElementsByName(cuaca);
  image.src = selector.value;


}
  moment.updateLocale('id', {
    /**/
  });
var today=moment().add(2, 'days');
var tomorrow=moment().add(3, 'days');

document.getElementById('tgl1').innerHTML = today.format('dddd Do MMMM YYYY');
document.getElementById('tgl2').innerHTML = tomorrow.format('dddd Do MMMM YYYY');
