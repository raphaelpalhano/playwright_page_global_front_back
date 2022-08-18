export async function requestWithBody(endpoint, body) {
  const request = await interact
    .post(endpoint, {
      data: body,
      failOnStatusCode: true,
      headers: {
        Accept: '*/*',
        ContentType: 'application/json',
      },
    });
  return request;
}
