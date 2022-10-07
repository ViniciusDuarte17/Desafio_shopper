export const ValidateDate = (date: string) => {

    const splitDate = date.split("-");
    const splitMonth = Number(splitDate[1]) + 1;
    const splitYear = Number(splitDate[2]);
    const splitDay = Number(splitDate[0]);
    const todaysDate = new Date();
    const todaysMonth = todaysDate.getMonth();
    const todaysYear = todaysDate.getFullYear();
    const todaysDay = todaysDate.getDate();
    if (
        splitYear < todaysYear ||
        splitMonth < todaysMonth ||
        splitDay < todaysDay
    ) {
        return false;
    } else {
        splitYear >= todaysYear &&
            splitMonth >= todaysMonth &&
            splitDay >= todaysDay;
        return true;
    }
}