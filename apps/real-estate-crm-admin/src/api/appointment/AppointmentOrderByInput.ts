import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  dateAndTime?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
