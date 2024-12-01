import { CrossIcon } from "@packages/icons";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Typography } from "../Typography";
import styles from "./styles.module.scss";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [isClient, setIsClient] = useState(false);

  // Проверка на то чтобы модалка не порталилась при SSR , если вдруг какая то из них открыта изначально
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return ReactDOM.createPortal(
    <div
      className={`${styles.overlay} ${
        isOpen ? styles["overlay--visible"] : ""
      }`}
      onClick={onClose}
    >
      <div
        className={`${styles.content} ${
          isOpen ? styles["content--visible"] : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["content__header"]}>
          <div className={styles["content__header-title"]}>
            <Typography size={28} weight="700">
              {title}
            </Typography>
          </div>

          <div className={styles["content__header-close"]} onClick={onClose}>
            <CrossIcon size={22} />
          </div>
        </div>
        <div className={styles["content__body"]}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
