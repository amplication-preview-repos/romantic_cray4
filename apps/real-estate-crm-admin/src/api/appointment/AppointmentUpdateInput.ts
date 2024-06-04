import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  dateAndTime?: Date | null;
  notes?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
