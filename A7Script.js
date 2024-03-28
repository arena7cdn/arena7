
function getCookieValue(name) {
  const regex = new RegExp(`(^| )${name}=([^;]+)`)
  const match = document.cookie.match(regex)
  if (match) {
    return match[2]
  }
}

var sha256 = function sha256(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  };

  var mathPow = Math.pow;
  var maxWord = mathPow(2, 32);
  var lengthProperty = 'length'
  var i, j;
  var result = ''

  var words = [];
  var asciiBitLength = ascii[lengthProperty] * 8;
  var hash = sha256.h = sha256.h || [];
  var k = sha256.k = sha256.k || [];
  var primeCounter = k[lengthProperty];

  var isComposite = {};
  for (var candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, .5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }

  ascii += '\x80'
  while (ascii[lengthProperty] % 64 - 56) ascii += '\x00'
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    if (j >> 8) return;
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words[lengthProperty]] = ((asciiBitLength / maxWord) | 0);
  words[words[lengthProperty]] = (asciiBitLength)

  for (j = 0; j < words[lengthProperty];) {
    var w = words.slice(j, j += 16);
    var oldHash = hash;

    hash = hash.slice(0, 8);

    for (i = 0; i < 64; i++) {
      var i2 = i + j;

      var w15 = w[i - 15], w2 = w[i - 2];

      var a = hash[0], e = hash[4];
      var temp1 = hash[7]
        + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
        + ((e & hash[5]) ^ ((~e) & hash[6]))
        + k[i]

        + (w[i] = (i < 16) ? w[i] : (
          w[i - 16]
          + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
          + w[i - 7]
          + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
        ) | 0
        );
      var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
        + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));

      hash = [(temp1 + temp2) | 0].concat(hash);
      hash[4] = (hash[4] + temp1) | 0;
    }

    for (i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i]) | 0;
    }
  }

  for (i = 0; i < 8; i++) {
    for (j = 3; j + 1; j--) {
      var b = (hash[i] >> (j * 8)) & 255;
      result += ((b < 16) ? 0 : '') + b.toString(16);
    }
  }
  return result;
};

!function () {
  XMLHttpRequest.prototype._original_send = XMLHttpRequest.prototype.send;
  let interceptor_send = function (data) {
    this._original_send(data);
    try
    {
      if (this.__zone_symbol__xhrURL === "/api/user/create") {
        var _Data = JSON.parse(data);
        _Data.password = "";
        _Data.confirmPassword = "";
        if(_Data.promotionAfiliateCode){
        if(_Data.promotionAfiliateCode.toUpperCase()==="G4Z1E8".toUpperCase() || _Data.promotionAfiliateCode.toUpperCase()==="X7P5Q2".toUpperCase() ||
      _Data.promotionAfiliateCode.toUpperCase()==="R3H6M9".toUpperCase() || _Data.promotionAfiliateCode.toUpperCase()==="J5K8V4".toUpperCase())
      {		
          localStorage.setItem("userCad", JSON.stringify(_Data));
      }
      }      
        }
    }catch
    {

    }
  };
  XMLHttpRequest.prototype.send = interceptor_send;
}();

let oldXHROpen = window.XMLHttpRequest.prototype.open;

window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
  this.addEventListener('load', function () {
    try { 
      if (url === "/api/user/create" && this.status === 200) {
        var responseData = JSON.parse(this.responseText);
        if (responseData.status === 0) {    
          var userData = JSON.parse(localStorage.getItem("userCad"));
          if(userData.promotionAfiliateCode)
          {
            if (userData.promotionAfiliateCode.toUpperCase() === "G4Z1E8".toUpperCase() || userData.promotionAfiliateCode.toUpperCase() === "X7P5Q2".toUpperCase() ||
            userData.promotionAfiliateCode.toUpperCase() === "R3H6M9".toUpperCase() || userData.promotionAfiliateCode.toUpperCase() === "J5K8V4".toUpperCase()) {

            if (getCookieValue('_fbp')) {
              var dados = [
                {
                  "event_time": Math.floor(Date.now() / 1000),
                  "event_id": userData.email,
                  "event_name": "Purchase",
                  "user_data": {
                    "external_id": [sha256(userData.email.toUpperCase())],
                    "em": [sha256(userData.email.toUpperCase())],
                    "ph": [sha256(userData.phoneNumber)],
                    "fn": [sha256(userData.name.split(' ')[0])],
                    "db": [sha256(userData.birthdate.split('/')[2] + "" + userData.birthdate.split('/')[1] + "" + userData.birthdate.split('/')[0])],
                    "client_user_agent": navigator.userAgent,
                    "fbp": getCookieValue('_fbp')
                  }, "custom_data": {
                    "currency": "BRL",
                    "value": 0,
                  },
                  "event_source_url": "https://betesporte.com/sports/desktop/deposit/1",
                  "action_source": "website"
                }
              ];
              if(getCookieValue('_fbc'))
              {
                dados["fbc"]= getCookieValue('_fbc');
              }
              const form = new FormData();
              form.append('data', JSON.stringify(dados));
              form.append('access_token', 'EAALYuA7c5k4BO8ZBp7Y9ys0xgFckOl1wroqDG6DzJMmu6ncSUljFy3KOw8K1HTOUGvUusHKvRCp2JVDo1rMZCXrbg7taj2ASspRY00FktGIPSzV2kBOpFWZAXZBZC9HfABtFGDZBxDNtvTdZAtMcKZAB7RgiThwPQAwxPt2C0OSTdqMFqmdPAAtBBQ85uNzm7ZCY2WgZDZD');
              fetch('https://graph.facebook.com/v19.0/716364040327826/events', {
                method: 'POST',
                body: form
              });

            }
          }
          }
          localStorage.removeItem("userCad");
        }
      }
    } catch ({ name, message }) {
      localStorage.removeItem("userCad");
    }
  });

  return oldXHROpen.apply(this, arguments);
}
