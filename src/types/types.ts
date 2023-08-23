
export type EventType = "Prelekcja" | "Panel Dyskusyjny" | "Warsztaty" | "Konkurs" | "Inne" | "LARP";

export interface ScheduleItem {
    name: string
    desc: string
    type: EventType
    location: string
    author: string
    time: {
        startTime: string
        endTime: string
    }
}

export interface SessionItem {
    id: string
    name: string
    system: string
    desc: string
    isBegginerFriendly: boolean
    begginerFriendlyDesc: string
    minAge: string | number
    location: string
    mg: string
    players: number
    outsideCompetition?: boolean
    triggers: string[]
    time: {
        startTime: string
        endTime: string
    }
}

export interface Schedule {
    thursday: {
        schedule: ScheduleItem[];
        sessionList: SessionItem[];
    }
    friday: {
        schedule: ScheduleItem[];
        sessionList: SessionItem[];
    }
    saturday: {
        schedule: ScheduleItem[];
        sessionList: SessionItem[];
    }
}
