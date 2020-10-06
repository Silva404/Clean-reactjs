import { AuthenticationParams } from "@/domain/usecases/authetication";
import faker from 'faker'
import { AccountModel } from "../models/account-model";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})