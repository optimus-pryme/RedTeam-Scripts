/**
 * Author - Newman Mortey
 * Script Usage :
    * A simple script to encrypt data  with CrytoJS module
    
 * When to use this script:
    * When you encounter web applications that have data transferred in encrypted format using CryptoJS
    * To identify if CryptoJS is in use review the application client-side code as it will be on client-side.
    * To retrieve the encryption key from client-side, check the browser local storage.
    * Developers may choose any value such as the cookie, timestamp or username as the key. That is a personal experience.

  * To capture the a sample text to encrypt, you can use any proxy tool such as burpsuite.
  * Reach out via marka7923@duck.com for any support. 
 */

const CryptoJS = require('crypto-js');

const data = "[PLACE YOUR RAW DATA HERE]" //eg: {'username':'test', 'password':'test12344'}


function doEncryption(data) {
    var key_ = "[PLACE THE KEY HERE]"; 
    if (key_ === null) return data;

    var key = CryptoJS.enc.Utf8.parse(key_);
    var iv = CryptoJS.enc.Utf8.parse(key_);

    var encrypt = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypt.toString();
}

const encryptedData = doEncryption(data);

//Output context of ciphertext
console.log(encryptedData);

