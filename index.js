/**
 * Database Utilities
 * Copyright 2015 by CloudOrchestra
 * Peter Beckman <beckman@getcloudorchestra.com>
 * Fri Mar 20 20:16:11 UTC 2015
 */

module.exports = 
{
    /**
     * For a given array of key-value pairs, calculate the sha1 hash of the values.
     * Used in the DB as the Primary Key for both data integrity and avoidance of 
     * an auto-increment so we can split the DB and not have to worry (as much) about
     * ID collision.
     */
    getDbId: function(hash) 
    {
        var crypto = require('crypto'),
            sha1sum = crypto.createHash('sha1'), 
            i, 
            len,
            keys,
            finalstr = '',
            ret;

        keys = Object.keys(hash);
        keys.sort();
        len = keys.length;
        for (i=0; i<len; i++)
        {
            finalstr = finalstr + hash[keys[i]];
        }
        sha1sum.update(finalstr);
        ret = sha1sum.digest('hex');
        return ret;
    }
}
