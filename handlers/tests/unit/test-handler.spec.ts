import { APIGatewayProxyEvent } from 'aws-lambda';
import { lambdaHandler } from '../../app';

describe('Unit test for app handler', function () {
    it('verifies successful response with queryString', async () => {
        const event: APIGatewayProxyEvent = {
            queryStringParameters: {
                a: "1"
            }
        } as any;
        const result = await lambdaHandler(event)

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(`Queries: ${JSON.stringify(event.queryStringParameters)}`);
    });

});