import AllStaff from "../staffs/AllStaffs";

const DummyData = [
  {
    id: '1',
    name: 'Derrick Mwema',
    department: 'Deep State',
  },
  {
    id: '2',
    name: 'Dextero Mbugua',
    department: 'Mkenyadamu',
  },
];

function StaffListPage() {

  return (
    <div>
      <h1>All Staff</h1>
      <AllStaff staffs={DummyData} />
    </div>
  );

}

export default StaffListPage;