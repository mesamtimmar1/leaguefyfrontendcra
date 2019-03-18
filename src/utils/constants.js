import XRegExp from 'xregexp';

export const SUMMONER_NAME_REGEX = XRegExp("^[0-9\\p{L} _\\.]+$");