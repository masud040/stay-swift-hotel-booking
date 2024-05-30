export function isDateInbetween(date, form, to) {
  return (
    new Date(date).getTime() >= new Date(form).getTime() &&
    new Date(date).getTime() <= new Date(to).getTime()
  );
}
