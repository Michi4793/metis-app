import { AuthenticationClient } from 'auth0';

const auth0 = new AuthenticationClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
});

export const login = async (username: string, password: string) => {
  try {
    const response = await auth0.passwordGrant({
      username,
      password,
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async (accessToken: string) => {
  try {
    await auth0.logout({ returnTo: process.env.LOGOUT_REDIRECT_URI, token: accessToken });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await auth0.createUser({
      email,
      password,
      connection: 'Username-Password-Authentication',
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserInfo = async (accessToken: string) => {
  try {
    const userInfo = await auth0.getProfile(accessToken);
    return userInfo;
  } catch (error) {
    throw new Error(error.message);
  }
};