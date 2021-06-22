import { Match } from "./data-wrapper.interface";

export interface Gamer {
    gamerTag: string;
    score: number;
    kills: number;
    matches: Match[];
}