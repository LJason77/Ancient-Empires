print('Start #################################################################');

db = db.getSiblingDB('ancient_empire');
db.createUser(
    {
        user: 'root',
        pwd: 'root',
        roles: [{ role: 'dbOwner', db: 'ancient_empire' }],
    },
);

// Ethereum 区块
db.ethereum_block.createIndex({"blockNumber": 1}, {unique: true, background: true});
db.ethereum_block.createIndex({"timeStamp": 1}, {background: true});
db.ethereum_block.createIndex({"blockMiner": 1}, {background: true});

print('END #################################################################');
