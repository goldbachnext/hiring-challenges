const timeout = 100;

const ads = [
    {id: 1, impressionId: 1},
    {id: 2, impressionId: 2},
    {id: 3, impressionId: 3},
    {id: 4, impressionId: 4}
]
const getAllAdsIds = () => new Promise((resolve, reject) => setTimeout(resolve(ads.map(ad => ad.id)), timeout));

const impressions = [
    {id: 1, impressions: 1000},
    {id: 2, impressions: 2000},
    {id: 3, impressions: 3000},
    {id: 4, impressions: 4000}
]
const getAdById = (adId) => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => resolve(ads.filter(ad => ad.id === adId)[0]), timeout*2)
    })
}
const getAdImpression = (impressionId) => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => resolve(impressions.filter(impression => impression.id === impressionId)[0]), timeout)
    })
}
const getAllImpressions = async () => {
    const adIds = await getAllAdsIds();
    const startTime = Date.now();
    for (let adId of adIds) {
        const ad = await getAdById(adId);
        console.log("ad: ", ad);
        const adImpressions = await getAdImpression(ad.impressionId);
        console.log("adImpressions: ", adImpressions);
    }
    const endTime = Date.now();
    console.log("execution time: ", endTime - startTime);
}
getAllImpressions();