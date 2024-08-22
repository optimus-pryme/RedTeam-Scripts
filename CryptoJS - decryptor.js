/**
 * Author - Newman Mortey
 * Script Usage :
    * A simple script to decrypt ciphertext encrypted with CrytoJS module
    * You may encounter web applications that have data transferred in encrypted format
    * To identify if CryptoJS is in use review the application client-side code
    * To retrieve the key from client-side, check the browser local storage.
    * 
  * To capture the ciphertext, you can use any proxy tool such as burpsuite.
  * Reach out via marka7923@duck.com for any support. 
 */

const CryptoJS = require('crypto-js');

var ciphertext = "[PLACE THE CIPHER TEXT HERE]"
var key_ = "[PLACE THE KEY HERE]"

var key = CryptoJS.enc.Utf8.parse(key_);
var iv = CryptoJS.enc.Utf8.parse(key_);


var decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
  keySize: 16, //Key size may change for you.
  iv: iv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7,
});

var rawData = decrypted.toString(CryptoJS.enc.Utf8);

// Output the decrypted ciphertext to console.
console.log(rawData);
