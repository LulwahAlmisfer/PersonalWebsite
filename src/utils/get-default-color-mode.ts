const getDefaultColorMode = (): "dark" | "light" => {
  if (typeof window === "undefined") {
    return "light";
  }

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
};

export default getDefaultColorMode;
