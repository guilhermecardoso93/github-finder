import { useState } from "react";
import { Search } from "../components/Search";
import { UserProps } from "../@types/user";

export const Home = () => {
  const [user, setUser] = useState<UserProps|null>(null);

  return (
    <>
      <Search />
    </>
  );
};
