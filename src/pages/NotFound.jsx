import { toast } from 'react-toastify';

export default function NotFound() {
  console.log('Error path');
  toast.error('Sorry, something went wrong.... Please try again.', {
    position: toast.POSITION.TOP_LEFT,
  });
  
  return;
}
