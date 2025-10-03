// composables/useWelcome.js
export const useWelcome = () => {
  const hasVisited = useCookie("welcome-visited", {
    default: () => false,
    maxAge: 60 * 60 * 24, // 1 day
  });

  const markAsVisited = () => {
    hasVisited.value = true;
  };

  return {
    hasVisited,
    markAsVisited,
  };
};
