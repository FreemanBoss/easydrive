// loginSchemaWrapper.ts
import { loginSchema,} from "./signinSchema";
import {registrationSchema } from "./signupSchema"

export default {
  login: loginSchema,
  registration: registrationSchema,
};
