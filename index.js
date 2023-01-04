import gcipCloudFunctions from 'gcip-cloud-functions';

const authClient = new gcipCloudFunctions.Auth();

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
export const beforeSignInHandler = authClient.functions().beforeSignInHandler((user, context) => {
  return {
    sessionClaims: {
      fooBar: ['hello', 'world'],
      signInIpAddress: context.ipAddress,
    },
  };
});
