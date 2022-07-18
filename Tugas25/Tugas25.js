function panggilSort(){
  var kota = [2,39,76,50,9,7,41,2,24,1,16]

  console.log(kota);
  console.log("=====================================================");
  kota = kota.sort();
  console.log(kota);


  kota = kota.reverse();
  console.log(kota);

  var kota = kota.filter(function(kota) {
  return kota > 10;
  });

  return kota
}



console.log(panggilSort()); //untuk mengurutkan sesuai kata sesuai abjad
