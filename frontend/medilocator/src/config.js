const configuredApiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000"

export const API_URL = configuredApiUrl.replace(/\/$/, "")
export const apiUrl = (path) => `${API_URL}${path}`
export const mediaUrl = (path) => path?.startsWith("http") ? path : apiUrl(`/profilePics/${path || ""}`)
