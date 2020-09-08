export const getUsersSelector = (state) => state.usersPage.users;
export const getPageSize = (state) => state.usersPage.pageSize;
export const totalUsersCount = (state) => state.usersPage.totalUsersCount;
export const currentPage = (state) => state.usersPage.currentPage;
export const followingInProgress = (state) => state.usersPage.followingInProgress;