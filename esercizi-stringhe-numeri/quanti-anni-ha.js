/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/


var anno = parseInt(1915);
var corr = parseInt(2021);
var eta = corr - anno;
var quota = 100 - eta;
console.log('La persona di anni'$(eta) 'gli mancano' $(quota) 'per arrivare a quota 100'); 
