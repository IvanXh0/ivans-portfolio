import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export const formatDuration = (startDate: string): string => {
  const now = dayjs();
  const start = dayjs(startDate);
  const months = now.diff(start, 'month');

  if (months < 1) return 'Less than a month';
  
  if (months < 12) 
    return months === 1 ? '1 month' : `${months} months`;
  
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (remainingMonths === 0) 
    return years === 1 ? '1 year' : `${years} years`;
  
  
  return `${years} year${years > 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
};
