export const ServerVariables = {
    // ========== User ========
    Register : "users/register",
    Login : "/users/login",
    Logout : "/users/logout",
    Update : "/users/:id",
    Delete : "/users/:id",
    FetchUser : "/users/fetch/:id",
    VerifyOTP : "/users/otp/verify",

    // ========= Password ========
    Generate : "generatePassword",
    FetchPassword : "getPassword/:id",
    updatePassword: "updatePassword/:id",
    DeletePassword : "deletePassword/:id",
    AddPassword: "addPassword/:id",
}