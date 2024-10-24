import { useState } from "react";
import { UserProps } from "../@types/user";
import { Search } from "../components/Search";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  async function loadUser(userName: string) {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  }

  return (
    <>
      <Search loadUser={loadUser} />
    </>
  );
};
