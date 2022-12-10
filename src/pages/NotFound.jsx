import { NotificationManager } from 'react-notifications';

export default function NotFound() {
  console.log('Error path');
  NotificationManager.warning(
    'Sorry, something went wrong.... Please try again.'
  );
  return;
}
