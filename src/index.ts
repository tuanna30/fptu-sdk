import AdminService from "./Admin";
import AuthenService from "./Authen";
import CrawlService from "./Crawl";
import MyConfessService from "./MyConfess";
import OverviewService from "./Overview";
import SearchService from "./Search";
import SendService from "./Send";
import PushService from "./Push";

declare global {
    interface Window {
        FPTUSDK: any;
    }

    var APP_ENV: any;
}

class SDK {
    protected admin: any;
    protected authen: any;
    protected crawl: any;
    protected myconfess: any;
    protected overview: any;
    protected search: any;
    protected send: any;
    protected push: any;

    constructor() {
        this.admin = AdminService;
        this.authen = AuthenService;
        this.crawl = CrawlService;
        this.myconfess = MyConfessService;
        this.overview = OverviewService;
        this.search = SearchService;
        this.send = SendService;
        this.push = PushService;
    }
}

window.FPTUSDK = new SDK();