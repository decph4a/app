import { User as FirebaseUser } from '@firebase/auth';

const getOtherEmail = (users: string[] | undefined, currentUser: FirebaseUser): string => {
    const otherUserEmail = users?.find(userEmail => userEmail !== currentUser.email);
    return otherUserEmail ? otherUserEmail : 'Email not found';
};


export default getOtherEmail;
