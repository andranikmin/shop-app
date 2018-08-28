export const generateId = () => {
    let id = 1;
    return () => {
        return id++;
    };
};
