import { Time } from "@angular/common";

export interface Appointment {
    name: string;
    email: string;
    number: string;
    doctor: string;
    notes: string;
    date: Date;
    time: Time;

}