export function FormattedDate(): string {
  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit", // To ensure two digits for minutes
  };

  const formatter = new Intl.DateTimeFormat("id-ID", options);
  const formattedDate = formatter.format(today);
  return formattedDate;
}
