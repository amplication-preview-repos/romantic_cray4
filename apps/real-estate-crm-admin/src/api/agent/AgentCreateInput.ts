import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
};
