import StaffItem from "./StaffItem";

function AllStaff(props) {

  return (
    <div>
      <ul>

        {props.staffs.map((staff) =>
        (<StaffItem key={staff.id}
          name={staff.name}
          department={staff.department} />)
        )}

      </ul>

    </div>
  );
}

export default AllStaff;