import { useState } from "react";
import { Search } from "../components/Search";

export const Home = () => {
  const [user, setUser] = useState(null);
  
  return (
    <>
      <Search />
    </>
  );
};
