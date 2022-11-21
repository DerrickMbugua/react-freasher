function StaffItem(props) {

  return (
    <div className="text-center">
      <h1>{props.name}</h1>
      <p>{props.department}</p>
    </div>
  );
}

export default StaffItem;