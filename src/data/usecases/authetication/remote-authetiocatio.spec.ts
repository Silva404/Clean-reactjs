import { HttpPostClient } from "../../protocols/http/http-post-client"
import { RemoteAuthetication } from "./remote-authentication"

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = "any_url"
    const httpPostClient = new HttpPostClientSpy()
    const sut = new RemoteAuthetication(url, httpPostClient)
    await sut.auth()
    expect(httpPostClient.url).toBe(url)
  })
})