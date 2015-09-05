// var MsTranslator = require('mstranslator');
// Second parameter to constructor (true) indicates that
// the token should be auto-generated.
// var client = new MsTranslator({
//   client_id: "famosas"
//   , client_secret: "asdasdsadsadasdasdasss"
// }, true);


var http = require('http')
var cheerio = require('cheerio')

var http = require("http");
var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  http.get('http://www.xvideos.com' + req.url, function(response) {
    // console.log(response);

    var body = '';
    response.on('data', function(chunk) {
      body += chunk;
    });
    response.on('end', function() {
      $ = cheerio.load(body);
      // $('#video-ad').remove();
      // $('#video-tags a, .thumbInside p a, h2, #categories a, #mainMenu a').each(function(i, elm) {
      $('*:not(:has(*))').each(function(i, elm) {

        var elm = $(elm);
        // if (!elm.children().length) {

          // console.log(elm.text());
          var text = elm.text(function () {


          // var params = {
          //     text: $(this).text()
          //     , from: 'en'
          //     , to: 'es'
          //   };

    // Don't worry about access token, it will be auto-generated if needed.
          // client.translate(params, function(err, data) {
          //   console.log();
          //   return (data);
          // });


            return $(this).text().toLowerCase()
              .replace('blonde', 'rubia')
              .replace('teen', 'adolescente')
              .replace('big tits', 'grandes tetas')
              .replace('tits', 'tetas')
              .replace('lesbian', 'lesbiana')
              .replace('huge', 'enormes')
              .replace('redhead', 'pelirroja')
              .replace('big ass', 'culo grande')
              .replace('ass', 'culo')
              .replace('with', 'con')
              .replace('dick', 'pene')
              .replace('cock', 'pija')
              .replace('virgin', 'virgen')
              .replace('german', 'alemana')
              .replace('pretty', 'excelente')
              .replace('pretty', 'excelente')
              .replace('brunette', 'morena')
              .replace('fucked', 'cogida')
              .replace('chatte', 'concha')
              .replace('housekeeper', 'ama de casa')
              .replace('crying', 'gritando')
              .replace('bed', 'cama')
              .replace('its', 'su')
              .replace('her', 'su')
              .replace('his', 'su')
              .replace('woman', 'mujer')
              .replace('women', 'mujeres')
              .replace('she', 'ella')
              .replace('he', 'el')
              .replace('first time', 'primera vez')
              .replace('it is', 'es')
              .replace('like', 'parece')
              .replace('couple', 'pareja')
              .replace('orgasm', 'orgasmo')
              .replace('porn', 'porno')
              .replace('erotic', 'erotico')
              .replace('more', 'mas')
              .replace('lovely', 'amorosa')
              .replace('back', 'atras')
              .replace('best', 'mejor')
              .replace('babe', 'bebota')
              .replace('hot', 'caliente')
              .replace('from', 'de')
              .replace('young', 'joven')
              .replace('boobs', 'tetas')
              .replace('busty', 'tetona')
              .replace('pussy', 'concha')
              .replace('gets', '')
              .replace('black', 'negra')
              .replace('breasted', 'pechugona')
              .replace('breast', 'senos')
              .replace('girl', 'pendeja')
              .replace('cuttie', 'linda')
              .replace('cute', 'linda')
              .replace('milf', 'mamasita')

            }
          // }
        );
      })
          res.end($.html());
          // res.end(body);
    });
  });
});

server.listen(3000);
