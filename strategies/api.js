module.exports = (strategy) => {
    const downloadYoutube = (url, formate) => strategy.donwload(url, formate);
    
    return {downloadYoutube};
}