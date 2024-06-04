import { Appointment } from "../appointment/Appointment";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  interestedProperties: string | null;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
