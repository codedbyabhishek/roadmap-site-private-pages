const PASSWORD_HASH = "93c18508e73deaf074ec2009cb128188ee7dac2755cd2b5f30cd162f05e13cea";
const SESSION_KEY = "roadmap_auth";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12;

async function sha256(text) {
  const enc = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", enc);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function isSessionActive() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.ts) return false;
    return Date.now() - parsed.ts < SESSION_TTL_MS;
  } catch {
    return false;
  }
}

function storeSession() {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ ok: true, ts: Date.now() }));
}

function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}

function requireAuth() {
  if (!isSessionActive()) {
    window.location.href = "./login.html";
  }
}

window.roadmapAuth = {
  sha256,
  isSessionActive,
  storeSession,
  clearSession,
  requireAuth,
  PASSWORD_HASH
};
