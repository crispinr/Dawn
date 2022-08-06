import { ZDK, ZDKNetwork, ZDKChain } from "@zoralabs/zdk";

const networkInfo = {
  network: ZDKNetwork.Ethereum,
  chain: ZDKChain.Mainnet,
};

const API_ENDPOINT = "https://api.zora.co/graphql";
const args = {
  endPoint: API_ENDPOINT,
  networks: [networkInfo],
};

const zdk = new ZDK(args);
// Refer: https://docs.zora.co/docs/zora-api/zdk#collections

var collections = zdk
  .collections({
    where: {
      collectionAddresses: [
        "0xCa21d4228cDCc68D4e23807E5e370C07577Dd152",
        "0x42069ABFE407C60cf4ae4112bEDEaD391dBa1cdB",
      ],
    },
    //OPTIONAL
    pagination: {
      limit: 10,
    },
    sort: {
      sortDirection: "DESC",
      sortKey: "CREATED",
    },
    includeFullDetails: true,
  })
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  });

//   import {ZDK} from '@zoralabs/zdk';

//   async function fetchCollections(addresses) {
//     return await zdk.collections({
//       where: {
//         collectionAddresses: [addresses],
//       }
//     });
//   }

//   const zdk = new ZDK("https://api.zora.co/graphql");
//   const collections = await fetchCollections('0x5180db8F5c931aaE63c74266b211F580155ecac8');
//   console.log(JSON.stringify(collections, null, 2));