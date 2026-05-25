/** Google Forms wiring + option labels.
 *
 *  IMPORTANT: option strings must match the Google Form's stored values
 *  exactly, character for character — Google rejects mismatches silently
 *  under `mode: 'no-cors'`. If you edit the form, sync these in lockstep.
 */

export const FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLScSDHti6_06xaKQ5sTADS_VPMaX3mf2VoWTKUE2cIXR2TpxdQ/formResponse';

export const FEEDBACK_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScSDHti6_06xaKQ5sTADS_VPMaX3mf2VoWTKUE2cIXR2TpxdQ/viewform';

/** Entry IDs map to each Google Form question. Verified via prefill URL. */
export const ENTRY = {
  rating: 'entry.961518426', // Q1
  features: 'entry.1105178304', // Q2 (checkboxes)
  easeOfUse: 'entry.1615614262', // Q3
  helped: 'entry.941563120', // Q4
  comparison: 'entry.1967238831', // Q5
  bugs: 'entry.972490983', // Q6
  bugDesc: 'entry.2022165908', // Q7
  keepUsing: 'entry.1957893757', // Q8
  recommend: 'entry.1049718538', // Q9
  improve: 'entry.1180994269', // Q10
  comments: 'entry.140385047', // Q11
} as const;

export const FEATURES_OPTIONS = [
  'Focus / Study timer',
  'Session history / Progress tracking',
  'Schedule / Notifications reminders',
  'Settings / Customization',
  'Other',
] as const;

export const HELPED_OPTIONS = [
  'Yes, it helped a lot',
  'Somewhat / a little improvement',
  'Not really',
  "I haven't used it enough to tell",
] as const;

export const COMPARISON_OPTIONS = [
  'Much better',
  'Slightly better',
  'About the same',
  'Worse',
] as const;

export const BUGS_OPTIONS = [
  'No, everything worked fine',
  'Yes, minor glitches',
  'Yes, major issues that blocked me',
] as const;

export const KEEP_USING_OPTIONS = [
  'Yes, definitely',
  'Probably, once more features land',
  'Not sure yet',
  'Probably not',
] as const;

export const RECOMMEND_OPTIONS = [
  'Yes, definitely',
  'Maybe',
  'Probably not',
] as const;
