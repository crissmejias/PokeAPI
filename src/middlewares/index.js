export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "eddie" }, ...actionInfo.action.payload];
  const updatedAction = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: { results: featured } },
  };
  next(updatedAction);
};
// export const reversedPokes = (store) => (next) => (actionInfo) => {
//   const reversed = actionInfo.action.payload.results.reverse();
//   const updatedAction = {
//     ...actionInfo,
//     action: { ...actionInfo.action, payload: { results: reversed } },
//   };
//   next(updatedAction);
// };
