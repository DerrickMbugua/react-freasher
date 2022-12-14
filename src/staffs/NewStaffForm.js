import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function NewStaffForm() {

  const nameRef = useRef();
  const departmentRef = useRef();
  const history = useNavigate();


  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const entererdDepartment = departmentRef.current.value;

    const staffs = {
      name: enteredName,
      department: entererdDepartment,
    };

    fetch('https://react-http-requests-3b378-default-rtdb.firebaseio.com/staffs.json',
      {
        method: 'POST',
        body: JSON.stringify(staffs),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history('/', { replace: true });
    });

    console.log('success');

  }

  return (
    <div>

      <form onSubmit={submitHandler}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
          <input type="text" ref={nameRef} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your department</label>
          <input type="text" id="department" ref={departmentRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </div>
  );
}

export default NewStaffForm;