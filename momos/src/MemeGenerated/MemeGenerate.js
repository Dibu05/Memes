import React, {useState} from "react";
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

export const MemeGenerate = () => {
const [copied,setCopied] = useState(false);
  const clipboard = useClipboard();
  const location = useLocation();
  const history = useNavigate();
  const url = new URLSearchParams(location.search).get("url");

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => history.push("/")} className={styles.home}>
        Crear mas Memes!
      </button>
      {url && <img src={url} alt="meme" />}
        <button className={styles.copy} onClick={copyLink}>
            {copied ? "Copiado!" : "Copiar Link"}
        </button>

    </div>
  );
};
