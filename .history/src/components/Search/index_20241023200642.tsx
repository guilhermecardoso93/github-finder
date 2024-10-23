import { BsSearch } from "react-icons/bs";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

export const Search = ({ loadUser }: SearchProps) => {
  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input type="text" placeholder="Digite o nome do usurário" />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
