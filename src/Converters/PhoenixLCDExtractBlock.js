import NumberWithCommas from "./NumberWithCommars";
function PhoenixLCDExtractBlock(data) {
    return NumberWithCommas(data.blocks[0].block_height);
}

export default PhoenixLCDExtractBlock;
