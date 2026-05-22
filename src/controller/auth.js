import { loginService, registerService } from "../service/auth.js";

export const registerController = async (req, res) => {
  const users = await registerService(req.body);

  res.status(201).json({
    message: "Register successfully",
    data: users,
  });
};

export const loginController = async (req, res) => {
  const { session, user } = await loginService(req.body);

  res.cookie("refreshToken", session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie("sessionId", session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

  res.status(200).json({
    message: "Login successfully",
    data: {
      user,
      token: session.accessToken,
    },
  });
};

export const logoutController = async (req, res) => {};
export const refreshController = async (req, res) => {};
