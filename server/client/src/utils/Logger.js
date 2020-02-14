export const logMessage = (id, level, msg) => {
    const message = {
        user: id, 
        level: level,
        text: msg
    };
   
    if (level === 'ERROR') {
        console.log("MESSAGE SENT LOG4J =", JSON.stringify(message));
        window.applogger.error(JSON.stringify(message));
    } else if (level === 'INFO') {
        window.applogger.info(JSON.stringify(message));
    } else {
        console.log("NO MESSAGE SENT");
    }
};
