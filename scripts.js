var searchInput = getElementsById('search');

fetch(`https://omdb-api.now.sh/?s=${searchInput}`)
 .then(function(res){
   return res.json();
 })
 .then(function(data){
   //console.log(data.results[0]);
   console.log(data);
 };
