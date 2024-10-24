import { KeyboardEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

import classes from "./styles.module.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  }

  return (
    <div className={classes.container}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_input}>
        <input
          type="text"
          placeholder="Digite o nome do usurário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};