import { Route, Routes } from 'react-router-dom';
import FavoriteStaffPage from './pages/FavoriteStaff';
import NewStaffPage from './pages/NewStaff';
import StaffListPage from './pages/StaffList';
import Navbar from './components/layouts/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<StaffListPage />}></Route>
        <Route path='/new-staff' element={<NewStaffPage />}> </Route>
        <Route path='/favorite-staff' element={<FavoriteStaffPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
