import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { InvalidCredentiasError } from "@/domain/error/invalid-credentials-error";
import { UnexpectedError } from "@/domain/error/unexpected-error copy";
import { AccountModel } from "@/domain/models/account-model";
import { Authentication, AuthenticationParams } from "@/domain/usecases/authetication";

export class RemoteAuthetication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) { }

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentiasError()
      default: throw new UnexpectedError()
    }
  }
}