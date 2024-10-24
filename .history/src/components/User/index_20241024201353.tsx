import { MdLocationPin } from "react-icons/md";
import { UserProps } from "../../@types/user";
import { Link } from "react-router-dom";

import classes from "./styles.module.css";

export const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={classes.container}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div className={classes.status}>
        <div>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver os melhores projetos</Link>
    </div>
  );
};
