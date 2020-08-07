export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number);

  const hourToMinutes = (hour * 60) + minutes;

  return hourToMinutes;
}