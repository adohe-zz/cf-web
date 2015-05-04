/**
 * Check whether the string is empty or null
 */
exports.isEmpty = function(str) {
    return (!str || 0 === str.length);
}

/**
 * Merge two objects recursively
 */
exports.merge = function(base, extend) {
    if(typeof base !== 'object')
        return extend;

    for(var key in extend) {
        if(typeof base[key] === 'object' && typeof extend[key] === 'object') {
            base[key] = merge(base[key], extend[key]);
        } else {
            base[key] = extend[key];
        }
    } 

    return base;
}
