export function getUserName(id, array){
    const user = array.find(elem => elem.id === id);
    return user.name;
}