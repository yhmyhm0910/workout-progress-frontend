import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-BMXAQSY2.js";

// src/app/globals.service.ts
var _GlobalsService = class _GlobalsService {
  set userId(value) {
    this.userIdSubject.next(value);
  }
  get userId() {
    return this.userIdSubject.value;
  }
  constructor() {
    this.access_token = "";
    this.id_token = "";
    this.user_full_name = "";
    this.email = "";
    this.userIdSubject = new BehaviorSubject(null);
    this.userId$ = this.userIdSubject.asObservable();
  }
};
_GlobalsService.\u0275fac = function GlobalsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GlobalsService)();
};
_GlobalsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GlobalsService, factory: _GlobalsService.\u0275fac, providedIn: "root" });
var GlobalsService = _GlobalsService;

export {
  GlobalsService
};
//# sourceMappingURL=chunk-2P3VPPWI.js.map
