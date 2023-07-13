export const decryptJWT = (token) => {
    const parts = token.split(".");
    if (parts.length !== 3) {
        throw new Error("JWT must have 3 parts");
    }
    const payload = parts[1];
    const decodedPayload = JSON.parse(atob(payload));
    console.log("Payload:", decodedPayload);
    console.log(decodedPayload.email);
    return decodedPayload.email;
};