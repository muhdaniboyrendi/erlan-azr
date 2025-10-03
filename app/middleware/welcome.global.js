// middleware/welcome.global.js
export default defineNuxtRouteMiddleware((to, from) => {
  // Only run on client-side
  if (process.server) return;

  const { hasVisited } = useWelcome();

  // Redirect to welcome only on initial load to home page
  if (!hasVisited.value && to.path === "/" && !from) {
    return navigateTo("/welcome");
  }
});
