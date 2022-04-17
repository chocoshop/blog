export const bookingResults = {UNKNOWN: 0, SUCCESS: 1, FAIL: 2} as const;
export type BookingResult = typeof bookingResults[keyof typeof bookingResults];