import { createContext, useEffect, useState } from "react";

export const DataContext = createContext("");

export const DataProvider = ({ children }: any) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setData(data);
    };
    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
