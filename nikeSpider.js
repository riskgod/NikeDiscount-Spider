// import * as rp from "request-promise";

const rp = require("request-promise");
const to = require("await-to-js").default;

async function spider(id) {
  const baseUrl = `https://www.nike.com/w/graphql?queryid=products&anonymousId=F4F874A5239FE04D042AE639E33096FA&endpoint=%2Fproduct_feed%2Frollup_threads%2Fv2%3Ffilter%3Dmarketplace(CN)%26filter%3Dlanguage(zh-Hans)%26filter%3DemployeePrice(true)%26filter%3DattributeIds(0f64ecc7-d624-4e91-b171-b83a03dd8550%2C16633190-45e5-4830-a068-232ac7aea82c)%26anchor%3D${id}%26count%3D24%26consumerChannelId%3Dd9a5bc42-4b9c-4976-858a-f159cf99c647%26sort%3DproductInfo.merchPrice.currentPriceAsc`;
  const options = {
    uri: baseUrl,
    json: true
  };

  console.log(baseUrl);

  const [err, result] = await to(rp(options));

  if (err) {
    console.error(err);
  }
  return result;
}

const baseArry = Array(20)
  .fill(0)
  .map((e, i) => e + 24 * i);
baseArry.shift();

spider(baseArry[0]).then(e => {
  console.log(e);
});

// async function __main__() {
//   // let result
//   //   for (const e of baseArry) {
//   const [err, spiderRest] = await spider(baseArry[0]);
//   //   if (err) {
//   //     return err;
//   // }
//   console.log(spiderRest);
//   // filter discounted === true
//   // return all discounted products
// }
// // }

// __main__();
