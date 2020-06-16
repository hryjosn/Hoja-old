import { post } from './restAPI';
/** -------------------------- 登入 / 登出 -------------------------- */
/**
 * 會員登入 [POST]
 */
export const callLoginUser = (postData) => post('login', postData);
/**
 * 會員登出 [POST]
 */
export const callLogOutUser = (postData) => post('logout', postData);

/** -------------------------- 登入 / 登出 end -------------------------- */
