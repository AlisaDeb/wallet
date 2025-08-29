export function getFormattedDateTime() {
  const now = new Date();
  const dateString = now.toLocaleDateString('en-CA', {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const timeString = now.toLocaleTimeString('en-GB', {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return { dateString, timeString };
}
