const defaultUserInfo = {
  name: 'Demo User',
  image: "../../assets/images/user.png"
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}