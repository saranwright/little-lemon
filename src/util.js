function getTodaysDate() {
    const today = new Date();

    // format: YYYY
    const year = today.getFullYear();
    // format: MM
    const month = `${today.getMonth() < 10 ? `0${(today.getMonth() + 1)}` : (today.getMonth() + 1)}`;
    // format: DD
    const day = `${today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()}`;

    // e.g., if today's date is June 4, 2023 --> "2023-06-04"
    return `${year}-${month}-${day}`;
}


function reformatDate(date) {
    const options = {
        weekday: "long", // e.g., "Sunday"
        year: "numeric", // e.g., "2023"
        month: "long", // e.g., "June"
        day: "numeric", // e.g., "4"
    };

    // replace "-" delimiters with "/" to correctly output date: https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
    // e.g., an input of "2023-05-28" (incorrectly) outputs "Saturday, May 27, 2023" vs. "2023/05/28" outputs "Sunday, May 28, 2023"
    const formattedDate = new Date(date.replaceAll("-", "/")).toLocaleString("en-US", options);

    return formattedDate;
}


function reformatTime(time) {
    const hour = (parseInt(time.split(":")[0]) + 11) % 12 + 1;
    const minutes = time.split(":")[1];
    const suffix = time.split(":")[0] >= 12 ? "PM" : "AM";

    // returns time in 12-hr clock format --> HH:MM<meridiem> (e.g., "7:30PM")
    const formattedTime = `${hour}:${minutes}${suffix}`;

    return formattedTime;
}

export { getTodaysDate, reformatDate, reformatTime };