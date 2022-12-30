import axios from "axios";

async function TerraLatestBlock() {
    const res = await axios.get("https://api.nearblocks.io/v1/blocks/latest?limit=1");
    return res.data;
}

export default TerraLatestBlock

