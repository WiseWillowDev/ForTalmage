export interface DataWrapper {
    data: MatchList;
}

export interface MatchList {
    expiryDate: Date;
    matches: Match[];
    metadata: Metadata;
    paginationType: string;
    requestingPlayerAttributes: PlayerAttributesReq;
}

export interface Match {
    attributes: MatchAttributes;
    expiryDate: string;
    metadata: MatchMetaData
    segments: MatchSegment[]
}

export interface MatchAttributes {
    avgKd: AvgKd;
    id: string;
    mapId: string;
    modeId: string;
}

export interface AvgKd {
    kd: number;
    pct: number;
}

export interface MatchMetaData {
    duration: {};
    mapImageUrl: string;
    mapName: string;
    modeName: string;
    playerCount: number;
    teamCount: number;
    timestamp: Date;
}

export interface MatchMetaDataDuration {
    displayType: string;
    displayValue: string;
    value: number;
}

export interface MatchSegment {
    attributes: MatchSegmentAttributes;
    expiryDate: Date;
    metadata: MatchSegmentMetaData
    stats: MatchSegmentStats;
    type: string;
}

export interface MatchSegmentAttributes {
    platformSlug: string;
    platformUserIdentifier: string;
    team: string;
}

export interface MatchSegmentMetaData {
    clanTag: string;
    placement: number;
    platformUserHandle: string;
    teammates: any[];
}

export interface MatchSegmentStats {
    assists: MatchSegmentStatInfo;
    bonusXp: MatchSegmentStatInfo;
    challengeXp: MatchSegmentStatInfo;
    damageDone: MatchSegmentStatInfo;
    damageDonePerMinute: MatchSegmentStatInfo;
    damageTaken: MatchSegmentStatInfo;
    deaths: MatchSegmentStatInfo;
    distanceTraveled: MatchSegmentStatInfo;
    executions: MatchSegmentStatInfo;
    gulagDeaths: MatchSegmentStatInfo;
    gulagKills: MatchSegmentStatInfo;
    headshots: MatchSegmentStatInfo;
    kdRatio: MatchSegmentStatInfo;
    kills: MatchSegmentStatInfo;
    longestStreak: MatchSegmentStatInfo;
    matchXp: MatchSegmentStatInfo;
    medalXp: MatchSegmentStatInfo;
    miscXp: MatchSegmentStatInfo;
    nearmisses: MatchSegmentStatInfo;
    objectiveBrCacheOpen: MatchSegmentStatInfo;
    objectiveBrDownEnemyCircle2: MatchSegmentStatInfo;
    objectiveBrKioskBuy: MatchSegmentStatInfo;
    objectiveLastStandKill: MatchSegmentStatInfo;
    percentTimeMoving: MatchSegmentStatInfo;
    placement: MatchSegmentStatInfo;
    score: MatchSegmentStatInfo;
    scorePerMinute: MatchSegmentStatInfo;
    scoreXp: MatchSegmentStatInfo;
    teamPlacement: MatchSegmentStatInfo;
    teamSurvivalTime: MatchSegmentStatInfo;
    timePlayed: MatchSegmentStatInfo;
    totalXp: MatchSegmentStatInfo;
    wallBangs: MatchSegmentStatInfo;
}

export interface MatchSegmentStatInfo {
    category: string;
    displayCategory: string;
    displayName: string;
    displayType: string;
    displayValue: string;
    metadata: any;
    percentile: any;
    rank: any;
    value: number;
}

export interface Metadata {
    next: number;
}

export interface PlayerAttributesReq {
    platformUserIdentifier: string;
}