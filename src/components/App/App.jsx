import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/NotFound';
import SharedLayout from '../SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../../pages/Home/Home'));
const NewContact = lazy(() => import('../../pages/NewContact/NewContact'));
const EditContact = lazy(() => import('../../pages/EditContact/EditContact'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/newcontact" element={<NewContact />} />
          <Route path="/:id" element={<EditContact />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
 