import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { InvalidCredentiasError } from "@/domain/error/invalid-credentials-error";
import { UnexpectedError } from "@/domain/error/unexpected-error copy";
import { AuthenticationParams } from "@/domain/usecases/authetication";

export class RemoteAuthetication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unauthorized: throw new InvalidCredentiasError()
      default: throw new UnexpectedError()
    }
  }
}