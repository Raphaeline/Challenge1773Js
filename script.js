// Masukin tanggal yang ingin dihitung mundur
var hitungMundur = new Date("Dec 30, 2022 00:00:00").getTime();

// refresh setiap 1 detik
var x = setInterval(function () {
  var sekarang = new Date().getTime();

  // ngitung beda jam sekarang sama jam yang dimasukkin
  var jedaWaktu = hitungMundur - sekarang;

  var hari = Math.floor(jedaWaktu / (1000 * 60 * 60 * 24));
  var jam = Math.floor((jedaWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var menit = Math.floor((jedaWaktu % (1000 * 60 * 60)) / (1000 * 60));
  var detik = Math.floor((jedaWaktu % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = hari + " Hari, " + jam + " Jam, " + menit + " Menit, " + detik + " Detik ";

  // If the count down is over, write some text
  if (jedaWaktu < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
