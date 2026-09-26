class Index{
    constructor(page){
        this.page = page;
        this.pageURL = "https://demowebshop.tricentis.com/"

    }
// Page open
    async pageOpen(){
        await this.page.goto(this.pageURL,{
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
        this.page.setViewportSize({width: 1920, height: 1080});
    }

// Page close
    async pageClose(url){
        await this.page.close();
    }
}
export {Index};

