import { Route, Routes } from 'react-router-dom';
import FavoriteStaffPage from './pages/FavoriteStaff';
import NewStaffPage from './pages/NewStaff';
import StaffListPage from './pages/StaffList';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<StaffListPage />}></Route>
        <Route path='/new-staff' element={<NewStaffPage />}> </Route>
        <Route path='/favorite-staff' element={<FavoriteStaffPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
