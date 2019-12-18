import querystring from "querystring";
import {
    Account,
    Address,
    Deadline,
    EmptyMessage,
    Mosaic,
    MosaicId,
    TransactionHttp,
    TransferTransaction,
    UInt64
} from "nem2-sdk";
const {GENERATION_HASH, MOSAIC_DIVISIBILITY, MOSAIC_ID, NETWORK, NODE_URL, FAUCET_PRIVATE_KEY } = process.env;

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return {statusCode: 405, body: "Method Not Allowed"};
    }

    const params = querystring.parse(event.body);
    const recipientAddress = Address.createFromRawAddress(params.address);
    const amount = params.amount < 1000 ?
        UInt64.fromUint(params.amount * Math.pow(10, parseInt(MOSAIC_DIVISIBILITY))) :
        UInt64.fromUint(1000 * Math.pow(10, parseInt(MOSAIC_DIVISIBILITY)));

    const transferTransaction = TransferTransaction.create(
        Deadline.create(),
        recipientAddress,
        [new Mosaic(new MosaicId(MOSAIC_ID), amount)],
        EmptyMessage,
        parseInt(NETWORK),
        UInt64.fromUint(2000000));

    const account = Account.createFromPrivateKey(FAUCET_PRIVATE_KEY, parseInt(NETWORK));
    const signedTransaction = account.sign(transferTransaction, GENERATION_HASH);

    const transactionHttp = new TransactionHttp(NODE_URL, NETWORK);
    transactionHttp.announce(signedTransaction)
        .subscribe(x => console.log(x),err => console.log(err));

    return {
        statusCode: 200,
        body: `Transaction announced: ${signedTransaction.hash}`
    };
};
