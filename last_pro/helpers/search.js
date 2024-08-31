module.exports = (query) => {
    
    let objectSearch = {
        keyword: ""
    }
    if (query.keyword){
        objectSearch.keyword = query.keyword.trim();
        // using regex to find  result 
        const regex = new RegExp(objectSearch.keyword, "i");
        objectSearch.regex = regex;
    }
    return objectSearch;
};