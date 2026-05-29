import {
  loginService,
  logoutService,
  refreshService,
  registerService,
} from "../service/auth.js";

export const registerController = async (req, res) => {
  const { users, session } = await registerService(req.body);

  res.status(201).json({
    message: "Register successfully",
    data: {
      users,
      session
    },
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

export const logoutController = async (req, res) => {
  if (req.cookies.sessionId) {
    await logoutService(req.cookies.sessionId);
  }

  res.clearCookie("sessionId");
  res.clearCookie("refreshToken");

  res.status(204).send();
};
export const refreshController = async (req, res) => {
  const session = await refreshService({
    sessionId: req.cookies.sessionId,
    refreshToken: req.cookies.refreshToken,
  });

  res.cookie("refreshToken", session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie("sessionId", session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

  res.status(200).json({
    message: "Successfully refreshed a session!",
    data: {
      accessToken: session.accessToken,
    },
  });
};
