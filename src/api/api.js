import { post } from './restAPI';
/** -------------------------- 會員 -------------------------- */
/**
 * 會員登入 [POST]
 */
export const callLoginUser = (postData) => post('user/login', postData);
/**
 * 會員註冊 [POST]
 */
export const callSignUpUser = (postData) => post('user', postData);

/** -------------------------- 會員 end -------------------------- */
/** -------------------------- 餐廳 -------------------------- */
// /**
//  * 會員登入 [POST]
//  */
// export const callLoginUser = (postData) => post('login', postData);
// /**
//  * 會員登出 [POST]
//  */
// export const callLogOutUser = (postData) => post('logout', postData);

/** -------------------------- 餐廳 end -------------------------- */
