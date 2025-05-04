export interface UserSelection {
  destination: string;
  duration: number;
  budget: string;
  travelList: string;
}

export const useLocalUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
