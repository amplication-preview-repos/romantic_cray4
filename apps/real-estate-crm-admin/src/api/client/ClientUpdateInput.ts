import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  interestedProperties?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
