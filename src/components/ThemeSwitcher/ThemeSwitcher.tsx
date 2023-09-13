import React, { useEffect, useState } from "react";

import cn from "classnames";

import { useTheme } from "@/hooks";

import * as styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher: React.FC = () => {
  const [{ mode }, toggleTheme] = useTheme();
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={cn(styles.themeSwitcher, {
        [styles.dark]: mode === "dark",
      })}
    >
     
    </div>
  );
};

export default ThemeSwitcher;
