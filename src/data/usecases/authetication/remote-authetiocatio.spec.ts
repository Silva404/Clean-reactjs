import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAuthetication } from "./remote-authentication"

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
   
    const url = "any_url"
    const httpPostClient = new HttpPostClientSpy()
    const sut = new RemoteAuthetication(url, httpPostClient)
    await sut.auth()
    expect(httpPostClient.url).toBe(url)
  })
})