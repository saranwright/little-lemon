function getTodaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = `${today.getMonth() < 10 ? `0${(today.getMonth() + 1)}` : (today.getMonth() + 1)}`;
    const day = `${today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()}`;

    return `${year}-${month}-${day}`;
}

function reformatDate(date) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const formattedDate = new Date(date.replaceAll("-", "/")).toLocaleString("en-US", options);

    return formattedDate;
}

function reformatTime(time) {
    const hour = (parseInt(time.split(":")[0]) + 11) % 12 + 1;
    const minutes = time.split(":")[1];
    const suffix = time.split(":")[0] >= 12 ? "PM" : "AM";
    const formattedTime = `${hour}:${minutes}${suffix}`;
    
    return formattedTime;
}

export { getTodaysDate, reformatDate, reformatTime };