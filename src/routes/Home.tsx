import { useState } from "react";
import { UserProps } from "../@types/user";
import { Search } from "../components/Search";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  async function loadUser(userName: string) {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    console.log(data);
  }

  return (
    <>
      <Search loadUser={loadUser}/>
    </>
  );
};
