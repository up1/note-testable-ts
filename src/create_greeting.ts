type User = {
    name: string;
    surname?: string;
}

export const createGreeting = (user: User): string => {
    const basicGreeting = `Hello ${user.name}`;
    return user.surname ? `${basicGreeting} ${user.surname}` : basicGreeting;
}   
