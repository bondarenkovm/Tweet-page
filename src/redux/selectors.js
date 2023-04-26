export const selectUsers = state => state.users.items;
export const selectFollowing = state => state.following;
export const selectLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
