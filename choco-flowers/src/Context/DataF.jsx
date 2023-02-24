// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const DataFContext = createContext();
// export default function DataFContextProvider({ children }) {
//   const [mdata, setMdata] = useState([]);
//   const [page, setPage] = useState(1);
//   const [load, setLoad] = useState(false);

//   const getData = (page) => {
//     setLoad(true);
//     axios
//       .get(`http://localhost:8018/plants?_limit=8&_page=${page}`)
//       .then((res) => {
//         console.log(res.data);
//         setMdata(res.data);
//         setLoad(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoad(false);
//       });
//   };

//   useEffect(() => {
//     getData(page);
//   }, [page]);

//   const handleChange = (val) => {
//     setPage(page + val);
//   };
//   return (
//     <DataFContext.Provider value={{ mdata, handleChange, page, load }}>
//       {children}
//     </DataFContext.Provider>
//   );
// }
