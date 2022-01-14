// import { useState, useEffect } from "react";

// const useLocalStorage = (key, data) => {

//   useEffect(() => {
//     if (localStorage.getItem(key) === null) {
//       localStorage.setItem(key, JSON.stringify());
//     }

//   }, []);

//   useEffect(() => {
//     if (localStorage.getItem("tasks") === null) {
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
//     setTasks(() => JSON.parse(localStorage.getItem("tasks")));
//   }, []);


// }

// export default useLocalStorage;