// middleware/welcome.global.js
export default defineNuxtRouteMiddleware((to) => {
  const { hasVisited } = useWelcome();
  if (!hasVisited.value && to.path !== "/welcome") {
    return navigateTo("/welcome");
  }
});
