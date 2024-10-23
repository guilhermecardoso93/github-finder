import { useState } from "react";
import { BsSearch } from "react-icons/bs";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usurário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
