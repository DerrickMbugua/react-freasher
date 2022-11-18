function Todo(props) {

  function deleteHandler() {
    console.log("Testing!");
    console.log(props.text);
  }

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.text}</h5>


      <button type="button" onClick={deleteHandler} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        Delete

      </button>
    </div>

  );
}

export default Todo;