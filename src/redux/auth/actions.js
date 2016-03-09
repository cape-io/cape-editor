import createAction from '../createAction'

export const LOGOUT = 'auth/LOGOUT'
export const PROVIDERS = 'auth/PROVIDERS'

// The comment above export defines the expected payload to the action creator.
// No comment, no payload expected.

// User object.
export const LOGIN = 'auth/LOGIN'
export const login = createAction(LOGIN)
// Email choice if user has more than one email. Must be associated with account.
export const TOKEN_SEND = 'auth/TOKEN_SEND'
export const tokenSend = createAction(TOKEN_SEND)
// Email string.
export const TOKEN_SENT = 'auth/TOKEN_SENT'
export const tokenSent = createAction(TOKEN_SENT)
// Token string.
export const TOKEN_VALIDATE = 'auth/TOKEN_VALIDATE'
export const tokenValidate = createAction(TOKEN_VALIDATE)
// User ID string. Sent from server in response to email.
export const USER_ID = 'auth/USER_ID'
export const setUserId = createAction(USER_ID)
export const USER_NEW = 'auth/USER_NEW'
export const userNew = createAction(USER_NEW)
