export async function getBookDays(form, to) {
  return (
    (new Date(to).getTime() - new Date(form).getTime()) /
      (24 * 60 * 60 * 1000) +
    1
  );
}
