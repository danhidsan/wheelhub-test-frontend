type UserData = {
  user: string;
  password: string;
  hint?: string;
};

export const createUser = (user: UserData) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ status: 200, user }), 5000);
  });
};