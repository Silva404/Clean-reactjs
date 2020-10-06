import { AuthenticationParams } from "domain/usecases/authetication";
import { HttpPostClient } from "../../protocols/http/http-post-client";

export class RemoteAuthetication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }

  async auth(params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({ 
      url: this.url,
      body: params 
    })
  }
}