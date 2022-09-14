const gptUrl = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
import ADSIZES from "../config/standardSizes";

export default class AdLoader {

    constructor() {

        this.prepareGoogleAsyncApi();

        this.loadGoogleSDK().then(() => {
            this.initGoogleSDK();
        })
    }

    private prepareGoogleAsyncApi() {
        window.googletag = (window as any).googletag || {cmd: []};
    }

    private loadGoogleSDK(): Promise<any> {
        return new Promise((resolve, reject) => {
            let r = resolve;
            this.appendScriptToHead(gptUrl).then(() => {
                googletag.cmd.push(function () {
                    //resolve this for signaling gpt sdk is ready
                    r(null);
                })
            });
        })
    }

    private initGoogleSDK() {
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    }

    public registerAdSlot(domId: string, path: string) {
        googletag.cmd.push(() => {
            let sizes = this.filterForFittingSizes(domId, ADSIZES);
            let slot = googletag.defineSlot(path, sizes as googletag.MultiSize, domId).addService(googletag.pubads());
            //this is just for showing green boxed preview ads
            slot.setTargeting("adpreview","dev")
            googletag.enableServices();
            //TODO: delay that function call till the element approaches viewport
            googletag.display(domId);
        });
    }

    filterForFittingSizes(domId: string, sizes: googletag.GeneralSize): googletag.GeneralSize {
        let fittingSizes:googletag.GeneralSize = [];

        for (let size of sizes) {
            // if Multisize [[300,250],[300,200]]
            if (Array.isArray(size) && this.checkSizeCondition(size)) {
                fittingSizes.push(size);
            }
            // if SingleSize e.g. [300,250]
            else if (!Array.isArray(size) && sizes.length === 2) {
                let singleSize = [sizes[0],sizes[1]] as googletag.SingleSize;
                if (this.checkSizeCondition(singleSize)){
                    fittingSizes.push(singleSize);
                }
            }
            //NamedSize "fluid" or ["fluid"]
            else {
                fittingSizes.push(size as googletag.NamedSize)
            }
        }
        return fittingSizes;
    }

    checkSizeCondition(size: googletag.SingleSize): boolean {
        if (Array.isArray(size) && size.length > 1) {
            let width = document.body.clientWidth;
            let height = document.body.clientHeight;
            if (size[0] as number / 2 <= width && size[0] as number / 2 <= height) {
                return true;
            }
        }
        return false;
    }


    private appendScriptToHead(scriptSrc: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let s = document.createElement("script");
            s.type = "text/javascript";
            s.src = scriptSrc;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
        })
    }
}