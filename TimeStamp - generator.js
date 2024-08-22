/**
 * Author - Newman Mortey
 * Script Usage :
    * A simple scipt to generate timestamp
    * Use this script when web application :
        * make use of timestamps as encryption key
        * uses timestamp to outddate cookies.
        * Timestamp is used to generate dynamic data.

  * Reach out via marka7923@duck.com for any support. 
 */

function formatTimestamp() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
    const day = String(now.getDate()).padStart(2, '0');
    let hour = now.getHours();
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    hour = hour % 12;
    hour = hour ? hour : 12; // hour '0' should be '12'
    hour = String(hour).padStart(2, '0');

    const timestamp = `${year}${month}${day}${hour}${minute}${second}${ampm}`;
    return timestamp;
}

console.log(formatTimestamp());
