import {
  GlobalsService
} from "./chunk-2P3VPPWI.js";
import {
  environment
} from "./chunk-FHDR2O3P.js";
import {
  HttpClient
} from "./chunk-A45OPFBF.js";
import {
  lastValueFrom,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-BMXAQSY2.js";
import {
  __async
} from "./chunk-C42J3HML.js";

// src/app/views/profile/profile.component.ts
var _ProfileComponent = class _ProfileComponent {
  constructor(httpClient, globalsService) {
    this.httpClient = httpClient;
    this.globalsService = globalsService;
    this.backend_apiUrl = environment.backend_apiUrl;
    this.email = "";
    this.name = "";
    this.gender = "";
    this.globalsService.userId$.subscribe((userId) => __async(this, null, function* () {
      const fetchUserFromDB = (userid) => __async(this, null, function* () {
        const params = {
          userid
          // Define or fetch your access token here
        };
        try {
          const response = yield lastValueFrom(this.httpClient.post(`${this.backend_apiUrl}/api/Database/SelectUserByUserID`, params, { withCredentials: true }));
          return response.result;
        } catch (error) {
          console.error("Error fetching standards: ", error);
          throw error;
        }
      });
      if (userId) {
        console.log(`User ID updated: ${userId}`);
        const userDetails = yield fetchUserFromDB(userId);
        this.email = userDetails[0].email;
        this.gender = userDetails[0].gender;
        this.name = userDetails[0].name;
        console.log(userDetails[0]);
      }
    }));
  }
  ngOnInit() {
  }
};
_ProfileComponent.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(GlobalsService));
};
_ProfileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, template: function ProfileComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Email: ", ctx.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Name: ", ctx.name, " ");
  }
}, encapsulation: 2 });
var ProfileComponent = _ProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent" });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=profile.component-2YOKIPAH.js.map
