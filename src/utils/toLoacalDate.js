export function toLocalDateString(date) {
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("en", options);
}
export function toLocalDateStringShort(date) {
  return new Date(date).toLocaleDateString("en");
}
