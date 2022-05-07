import defaultSettings from "../config/defaultSettings"

const {pwa} = defaultSettings
const isHttps = document.location.protocol === "https:"
console.log("global.jsx")

const clearCache = () => {
  // remove all caches
  if (window.caches) {
    caches.keys().then((keys) => {
      keys.forEach((key) => {
        caches.delete(key)
      })
    }).catch((e) => console.log(e));
  }
}

clearCache()
