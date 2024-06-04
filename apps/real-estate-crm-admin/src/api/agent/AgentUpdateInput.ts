import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  properties?: PropertyUpdateManyWithoutAgentsInput;
};
