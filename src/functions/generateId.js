const generateId = () => {
    let ID = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 8; i++) {
        ID += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return ID;
}

export default generateId