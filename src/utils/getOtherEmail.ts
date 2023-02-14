const getOtherEmail = (users: string[] | undefined, currentUser: { email: string }) => {
    return users?.filter(user => user !== currentUser.email)[0];
}

export default getOtherEmail;
