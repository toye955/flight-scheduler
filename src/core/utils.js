export const getTimeInInteger = (time) => {
    return +(time.split(":").join(""))
}