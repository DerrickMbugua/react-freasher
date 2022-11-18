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
      <ul>
        {DummyData.map((staff) => {
          return <li key={staff.id}>{staff.name}</li>
        })}
      </ul>
    </div>
  );

}

export default StaffListPage;