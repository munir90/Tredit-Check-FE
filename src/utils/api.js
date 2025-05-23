// src/utils/api.js

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://verit-be.onrender.com/api";

function getHeaders(customHeaders = {}) {
  return {
    "Content-Type": "application/json",
    "x-verit-api-key": localStorage.getItem("verit_api_key") || "",
    ...customHeaders,
  };
}

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: getHeaders(options.headers),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Unknown error" }));
    throw new Error(error.message || res.statusText);
  }

  return res.json();
}

export function apiPost(path, body, customHeaders = {}) {
  return apiFetch(path, {
    method: "POST",
    body: JSON.stringify(body),
    headers: getHeaders(customHeaders),
  });
}

export function apiPut(path, body, customHeaders = {}) {
  return apiFetch(path, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: getHeaders(customHeaders),
  });
}

export function apiDelete(path, customHeaders = {}) {
  return apiFetch(path, {
    method: "DELETE",
    headers: getHeaders(customHeaders),
  });
}
