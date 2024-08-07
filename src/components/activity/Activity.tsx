import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./styles.module.scss";
import { useState } from "react";

type Props = {
  name: string;
  onRemove: () => void;
  onDone: (name: string) => void;
}

export function Activity({ name, onDone, onRemove }: Props) {
  const [checked, setChecked] = useState<boolean>(false);

  function handleCheckedChange() {
    if (!checked) {
      setChecked(!checked);
      onDone(name)
    }
    else {
      setChecked(!checked);
      onDone(name);
    }
  }

  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={handleCheckedChange}
      >
        {checked ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={checked ? styles.textCompleted : ""}>
        {name}
      </p>

      <button type="button" className={styles.deleteButton} onClick={() => onRemove()}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}