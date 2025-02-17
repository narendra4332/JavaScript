
//? new Date(): Creates a Date object representing the current date and time.
// const currentDate = new Date();
// console.log(currentDate);
//todo  This is the ISO 8601 format, which is a standard for representing dates and times.
//In this format, the date and time are represented together, separated by the letter "T".
//The "Z" at the end indicates that the time is in UTC (Coordinated Universal Time).

//? 2: new Date(year, month): Creates a Date object with the specified year and month.
// const date1 = new Date(2024, 2);
// console.log(date1);

//? 3: new Date(year, month, day): Creates a Date object with the specified year, month, and day.
// const date2 = new Date(2024, 1, 19);
// console.log(date2);

//? 4: new Date(year, month, day, hours): Creates a Date object with the specified year, month, day, and hours.
// const date3 = new Date(2024, 1, 19, 10);
// console.log(date3);

//? 5: new Date(year, month, day, hours, minutes): Creates a Date object with the specified year, month, day, hours, and minutes.
// const date4 = new Date(2024, 1, 19, 10, 44);
// console.log(date4);

//? 6: new Date(year, month, day, hours, minutes, seconds): Creates a Date object with the specified year, month, day, hours, minutes, and seconds.
// const date5 = new Date(2024, 1, 19, 10, 44, 9);
// console.log(date5);

//? 7: new Date(year, month, day, hours, minutes, seconds, ms): Creates a Date object with the specified year, month, day, hours, minutes, seconds, and milliseconds.
// const date6 = new Date(2024, 1, 19, 10, 44, 9, 274);
// console.log(date6);

//? 8: new Date(milliseconds): Creates a Date object representing the number of milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).
// const curMilliSeconds = new Date().getTime();
// // const milliseconds = 1632090690883; // Example milliseconds
// const dateFromMilliseconds = new Date(curMilliSeconds);
// console.log(dateFromMilliseconds);


//* Date String Format: If the dateString is in a recognizable format, the Date object will be created accordingly.
//? new Date(date string) creates a date object from a date string
// const date1 = new Date("2024-01-05"); // Year-Month-Day
// const date2 = new Date("January 5, 2024"); // Month Day, Year
// console.log(date1);
// console.log(date2);

//* ==================================================

// const currentDate = new Date();
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth(); // 0-based index
// console.log(month)
// const date = currentDate.getDate();
// const day = currentDate.getDay();
// console.log(currentDate);
// console.log(day);
// In JavaScript, the first day of the week (day 0) is Sunday.
// day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)

//* ==================================================
//* JavaScript Set Date Methods / Setting Components:
//* ===================================================

// const date = new Date();

//? setFullYear(yearValue[, monthValue[, dayValue]]): Sets the full year for a specified date according to local time.
// console.log(date);

// date.setFullYear(2025);
// console.log(date); // Date object with the year set to 2025

//? setMonth(monthValue[, dayValue]): Sets the month for a specified date according to local time.
// date.setMonth(5); // June (months are zero-based)
// console.log(date); // Date object with the month set to June

//? setDate(dayValue): Sets the day of the month for a specified date according to local time.
// date.setDate(15);
// console.log(date); // Date object with the day of the month set to 15

//* ==================================================
//* JavaScript Get Time Methods / Getting Components:
//* ===================================================
// const currentTime = new Date();

// const hours = currentTime.getHours();
// const minutes = currentTime.getMinutes();
// const seconds = currentTime.getSeconds();
// const time = currentTime.getTime();
// console.log(time);

//* ==================================================
//* JavaScript Set Time Methods / Getting Components:
//* ===================================================

// const date = new Date();

//? setHours(hourValue[, minuteValue[, secondValue[, millisecondValue]]]): Sets the hours for a specified date according to local time.
// date.setHours(10);
// console.log(date); // Date object with the hours set to 10

//? setMinutes(minuteValue[, secondValue[, millisecondValue]]): Sets the minutes for a specified date according to local time.
// date.setMinutes(30);
// console.log(date); // Date object with the minutes set to 30

//? setSeconds(secondValue[, millisecondValue]): Sets the seconds for a specified date according to local time.
// date.setSeconds(45);
// console.log(date); // Date object with the seconds set to 45

//? setMilliseconds(millisecondValue): Sets the milliseconds for a specified date according to local time.
// const date = new Date();

// date.setMilliseconds(500);
// console.log(date); 

//? setTime(timeValue): Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
// const date = new Date();
// date.setTime(1832090690883);
// console.log(date); 

//* ================================================================

//? 1: toLocaleString(): Returns a string representing the date and time portion of a Date object using the current locale's conventions.
    // const date = new Date();
    // const localString = date.toLocaleString();
    // console.log(localString); // Example output: "2/19/2024, 4:30:00 PM" (depending on the locale)

//? 2: toLocaleDateString(): Returns a string representing the date portion of a Date object using the current locale's conventions.
// const date = new Date();
// const localDateString = date.toLocaleDateString();
// console.log(localDateString); // Example output: "2/19/2024" (depending on the locale)

//? 3: toLocaleTimeString(): Returns a string representing the time portion of a Date object using the current locale's conventions.
// const date = new Date();
// const localTimeString = date.toLocaleTimeString();
// console.log(localTimeString); // Example output: "4:30:00 PM" (depending on the locale)

//? 5: parse(): Parses a string representation of a date and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
// const dateString = "2024-02-19T16:30:00Z";
// const parsedDate = Date.parse(dateString);
// console.log(parsedDate); // Example output: 1703254200000 (milliseconds)

//* ==================

// let newDate = new Date();
// console.log(Date.now());
// console.log(newDate.getTime());

//? Date.now() is a static method of the Date object.
//? Use Date.now() if you want the timestamp right this second.
//? It returns the current timestamp (number of milliseconds) representing the current moment.
//? Use new Date().getTime() if you have an existing Date object from elsewhere and want its timestamp.



    