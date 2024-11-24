export function getCurrentHostname() {
  return process.env.DOMAIN ?? window.location.hostname;
}
