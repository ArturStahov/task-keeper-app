export const getUser = state => state.auth.user;

export const getAuthLoading = state => state.auth.userLoader;

export const getAuthError = state => state.auth.userError;

export const getIsLoggedIn = state => state.auth.isLoggedIn;
