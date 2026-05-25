import { FORM_ACTION } from './constants';

/** Post a payload to the Google Form's `/formResponse` endpoint.
 *
 *  Arrays append the same key multiple times (the format Google Forms
 *  expects for checkboxes). `mode: 'no-cors'` means we never see the
 *  response body — Google saves the row but the promise resolves
 *  opaquely. Validate option strings on the client before calling.
 */
export async function submitToGoogleForms(
  data: Record<string, string | string[]>,
): Promise<void> {
  const body = new URLSearchParams();
  for (const [key, val] of Object.entries(data)) {
    if (Array.isArray(val)) {
      val.forEach((v) => body.append(key, v));
    } else if (val) {
      body.append(key, val);
    }
  }
  await fetch(FORM_ACTION, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
}
