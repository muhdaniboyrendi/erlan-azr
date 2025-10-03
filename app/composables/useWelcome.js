export const useWelcome = () => {
  const hasVisited = useState("hasVisited", () => false);

  const markAsVisited = () => {
    hasVisited.value = true;
  };

  return {
    hasVisited,
    markAsVisited,
  };
};
