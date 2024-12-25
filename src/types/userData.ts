
type ErrorMsgProps = {
    message: string,
    documentation_url: string,
    status: string
}
type UserDataProps = {
    login: string,
    avatar_url: string,
    name: string,
    bio: string,
    html_url: string,
    public_repos: number,
    followers: number,
    following: number
};
export type userInfo = UserDataProps & ErrorMsgProps;