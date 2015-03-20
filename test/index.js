var should = require('chai').should(),
    clorlib = require('../index'),
    getDbId = clorlib.getDbId;

describe('#getDbId', function() 
{
    it('Converts 1-item array values to a SHA-1 sum', function() 
    {
        getDbId({'foo':'bar'}).should.equal('62cdb7020ff920e5aa642c3d4066950dd1f01f4d');
    });

    it('Converts 2-item array values to a SHA-1 sum', function() 
    {
        getDbId({'foo':'bar','agoo':'poo'}).should.equal('759e95b3f61084f12bb526958c798a5584a0573b');
    });

    it('Converts 3-item array values to a SHA-1 sum', function() 
    {
        getDbId({'foo':'bar','agoo':'poo','crow':'feet'}).should.equal('e46ebffa43d1a602739a53e39c4bc307dc132b14');
    });

    // TODO Negative tests with bad input
});

