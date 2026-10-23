# alisa-assistant-skill

Webhook for Yandex Alice on Vercel: `POST /api`. Gemini generates short Russian voice answers; Exa provides optional current web search.

## Configuration

Set `GEMINI_API_KEY` and `EXA_AI_API_KEY` for this Vercel project (or link shared environment variables). Optional: `GEMINI_MODEL` (default `gemini-2.5-flash`).

In Yandex Dialogs choose webhook URL `https://YOUR-DOMAIN.vercel.app/api`.

## State and privacy

No database: recent dialogue turns are returned in `session_state.history` and read from `state.session.history` in subsequent Alice requests. Yandex carries session state; it is not persisted on Vercel. Avoid discussing sensitive information: the session state is sent to the client/platform. Only the last six exchanges are retained. `сброс` resets the history.

## Security

Keys remain server-side. Incoming request schema and history lengths are bounded. This public webhook cannot authenticate Alice calls using a shared secret in Yandex Dialogs by default; add WAF/rate limiting in Vercel and usage caps with Gemini/Exa before exposing broadly. Upstream search snippets are untrusted. No user identifiers are logged.

## Local check

`npm test` and `npm run check`. Test with an Alice webhook payload using POST; GET intentionally returns 405.
