// let date = new Date();

// console.log(date); //2026-08-02T06:51:02.497Z

// console.log(date.toString()); //Sun Aug 02 2026 12:30:45 GMT+0530 (India Standard Time)

// console.log(date.toLocaleString()); // 8/2/2026, 12:48:00 PM

// console.log(date.toLocaleTimeString()); //12:48:36 PM

// let iso_date = new Date("2026-08-02T12:52:00Z"); 
// console.log(iso_date); //2026-08-02T12:52:00.000Z

// let date2 = new Date(2026, 8, 2, 15, 15, 10);

// console.log(date2); //2026-09-02T09:45:10.000Z

// console.log(date.getTime());

// let date3 = new Date(1785664090172);
// console.log(date3.toLocaleString()); //   8/2/2026, 3:18:10 PM

// let date4 = new Date();

// console.log(date4.getFullYear()) // 2026
// console.log(date4.getMonth())   // 7 (0-11) where 0 -> January
// console.log(date4.getDate()) // 2
// console.log(date4.getDay())  // 0 where 0 -> Sunday
// console.log(date4.getHours()) // 15
// console.log(date4.getMinutes()) // 30
// console.log(date4.getSeconds()) // 13
// console.log(date4.getTimezoneOffset()/60) // -5.5 (UTC - Local => 0.0 - (+5.5) => -5.5)
// console.log(date4.getMilliseconds()) // 539 (milliseconds ranges from 0 - 1000)


// let timeStamp = new Date().getTime(); // milliseconds since Jan 1, 1970
// console.log(timeStamp);

let date = new Date();
console.log(date.toString())    // Sun Aug 02 2026 15:50:09 GMT+0530 (India Standard Time)
console.log(date.toISOString()) // 2026-08-02T10:20:09.117Z
console.log(date.toLocaleString())  // 8/2/2026, 3:50:09 PM
console.log(date.toLocaleDateString()) // 8/2/2026
console.log(date.toLocaleTimeString()) // 3:50:09 PM

// Custom - formatted date
let d = new Date();
console.log(`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} `) //  2/8/2026 

