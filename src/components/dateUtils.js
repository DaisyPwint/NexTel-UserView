import dayjs from 'dayjs';

export const calculateTotalNights = (checkIn, checkOut) => {
  const startDate = dayjs(checkIn);
  const endDate = dayjs(checkOut);
  const totalNight = endDate.diff(startDate, 'day');
  return totalNight;
};
