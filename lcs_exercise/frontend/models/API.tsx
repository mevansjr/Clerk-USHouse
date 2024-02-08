export interface APIData {
    MemberData: MemberData;
}

export interface MemberData {
    "title-info":    TitleInfo;
    members:         Members;
    committees:      Committees;
    "_publish-date": string;
}

export interface Committees {
    committee: CommitteesCommittee[];
}

export interface CommitteesCommittee {
    "committee-fullname": string;
    ratio:                Ratio;
    subcommittee?:        CommitteeSubcommittee[];
    _type:                Type;
    _comcode:             Comcode;
    "_com-room":          string;
    "_com-header-text"?:  string;
    "_com-zip":           string;
    "_com-zip-suffix":    string;
    "_com-building-code": COMBuildingCode;
    "_com-phone":         string;
}

export enum COMBuildingCode {
    C = "C",
    Chob = "CHOB",
    Dsob = "DSOB",
    Fhob = "FHOB",
    Lhob = "LHOB",
    Rhob = "RHOB",
}

export enum Comcode {
    Ag00 = "AG00",
    Ap00 = "AP00",
    As00 = "AS00",
    Ba00 = "BA00",
    Bu00 = "BU00",
    Ec00 = "EC00",
    Ed00 = "ED00",
    Fa00 = "FA00",
    Fd00 = "FD00",
    Go00 = "GO00",
    Ha00 = "HA00",
    Hm00 = "HM00",
    If00 = "IF00",
    Ig00 = "IG00",
    Ii00 = "II00",
    It00 = "IT00",
    Jl00 = "JL00",
    Jp00 = "JP00",
    Ju00 = "JU00",
    Pw00 = "PW00",
    Ru00 = "RU00",
    Sm00 = "SM00",
    So00 = "SO00",
    Sy00 = "SY00",
    Vc00 = "VC00",
    Vr00 = "VR00",
    Wm00 = "WM00",
    Zs00 = "ZS00",
}

export enum Type {
    Joint = "joint",
    Select = "select",
    Standing = "standing",
}

export interface Ratio {
    majority: string;
    minority: string;
}

export interface CommitteeSubcommittee {
    "subcommittee-fullname": string;
    ratio:                   Ratio;
    _subcomcode:             string;
    "_subcom-room":          string;
    "_subcom-zip":           string;
    "_subcom-zip-suffix":    string;
    "_subcom-building-code": COMBuildingCode;
    "_subcom-phone":         string;
}

export interface Members {
    member: Member[];
}

export interface Member {
    statedistrict:           string;
    "member-info":           MemberInfo;
    "committee-assignments": CommitteeAssignments;
    "predecessor-info"?:     PredecessorInfo;
}

export interface CommitteeAssignments {
    committee:     CommitteeCommittee[] | CommitteeCommittee;
    subcommittee?: PurpleSubcommittee[] | FluffySubcommittee;
}

export interface CommitteeCommittee {
    _comcode?:    Comcode;
    _rank:        string;
    _leadership?: Leadership;
}

export enum Leadership {
    Chair = "Chair",
    Chairman = "Chairman",
    Chairwoman = "Chairwoman",
    ViceChair = "Vice Chair",
    ViceChairman = "Vice Chairman",
}

export interface PurpleSubcommittee {
    _subcomcode:  string;
    _rank:        string;
    _leadership?: Leadership;
}

export interface FluffySubcommittee {
    _subcomcode: string;
    _rank:       string;
}

export interface MemberInfo {
    namelist:            string;
    bioguideID:          string;
    lastname:            string;
    firstname:           string;
    middlename:          string;
    "sort-name":         string;
    suffix:              Suffix;
    courtesy:            Courtesy;
    "prior-congress":    string;
    "official-name":     string;
    "formal-name":       string;
    party:               Majority;
    caucus:              Majority;
    state:               State;
    district:            string;
    townname:            string;
    "office-building":   COMBuildingCode;
    "office-room":       string;
    "office-zip":        string;
    "office-zip-suffix": string;
    phone:               string;
    "elected-date":      ElectedDateClass;
    "sworn-date":        ElectedDateClass;
    "footnote-ref"?:     string;
    footnote?:           string;
}

export enum Majority {
    D = "D",
    Empty = "",
    R = "R",
}

export enum Courtesy {
    Empty = "",
    MS = "Ms.",
    Mr = "Mr.",
    Mrs = "Mrs.",
}

export interface ElectedDateClass {
    _date:   string;
    __text?: string;
}

export interface State {
    "state-fullname": string;
    "_postal-code":   string;
}

export enum Suffix {
    Empty = "",
    Iii = "III",
    Iv = "IV",
    Jr = "Jr.",
    Sr = "Sr.",
}

export interface PredecessorInfo {
    "pred-lastname":      string;
    "pred-firstname":     string;
    "pred-middlename":    string;
    "pred-official-name": string;
    "pred-formal-name":   string;
    "pred-title":         string;
    "pred-memindex":      string;
    "pred-sort-name":     string;
    "pred-party":         Majority;
    "pred-vacate-date":   ElectedDateClass;
    "pred-footnote-ref":  string;
    "pred-footnote":      string;
    _cause:               string;
}

export interface TitleInfo {
    "congress-num":  string;
    "congress-text": string;
    session:         string;
    majority:        Majority;
    minority:        Majority;
    clerk:           string;
    weburl:          string;
}

export enum SortDirection {
    ASC = "ASC",
    DESC = "DESC",
}

export enum Party {
    REPUBLICAN = "R",
    DEMOCRAT = "D",
    OTHER = "O",
}