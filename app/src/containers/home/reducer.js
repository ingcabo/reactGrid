export const initialStateRedirect =  false;

export default function redirectReducer(state = initialStateRedirect, action) {
  if (action.type === "REDIRECT") {
    //console.log(action);
    const redirect  = action.redirect;
    return redirect;
  }
    return state;
}
