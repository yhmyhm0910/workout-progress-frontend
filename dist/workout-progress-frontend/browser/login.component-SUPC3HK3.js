import {
  Router
} from "./chunk-WO4HTU2M.js";
import {
  environment
} from "./chunk-FHDR2O3P.js";
import "./chunk-A45OPFBF.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-BMXAQSY2.js";
import "./chunk-C42J3HML.js";

// src/app/views/pages/login/login.component.ts
var _LoginComponent = class _LoginComponent {
  handleOauthResponse() {
    const clientId = environment.OAuth_ClientID;
    const redirectUri = `${environment.backend_apiUrl}/api/Login/oauth/callback`;
    const scope = "openid email profile";
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scope)}&access_type=offline&prompt=consent`;
    window.location.href = oauthUrl;
  }
  constructor(router) {
    this.router = router;
    this.abc = "/assets/images/angular.jpg";
    this.poster = "/assets/images/login_poster_blue.webp";
    this.backend_apiUrl = environment.backend_apiUrl;
    const navigation = this.router.getCurrentNavigation();
    const bodyData = navigation?.extras.state?.["body"];
    console.log(bodyData);
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(Router));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 119, vars: 1, consts: [["id", "wrapper", 1, "fade-in"], ["id", "intro"], [1, "actions", "special"], [1, "gsi-material-button", 3, "click"], [1, "gsi-material-button-state"], [1, "gsi-material-button-content-wrapper"], [1, "gsi-material-button-icon"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 48 48", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "display", "block"], ["fill", "#EA4335", "d", "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"], ["fill", "#4285F4", "d", "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"], ["fill", "#FBBC05", "d", "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"], ["fill", "#34A853", "d", "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"], ["fill", "none", "d", "M0 0h48v48H0z"], [1, "gsi-material-button-contents"], [2, "display", "none"], [1, "actions"], ["href", "#/login/#main", 1, "button", "icon", "solid", "solo", "fa-arrow-down", "scrolly"], ["id", "main"], [1, "post", "featured"], [1, "major"], ["href", "#", 1, "image", "main"], [3, "src"], [1, "posts"], ["href", "#"], ["id", "footer"], [1, "split", "contact"], [1, "icons", "alt"], ["href", "https://github.com/yhmyhm0910/workout-progress", 1, "icon", "brands", "alt", "fa-github"], [1, "label"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h1");
    \u0275\u0275text(4, "Free Workout");
    \u0275\u0275element(5, "br");
    \u0275\u0275text(6, " Progress Tracker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Stay on track with everything you need to grow stronger.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul", 2)(10, "li")(11, "button", 3);
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_11_listener() {
      return ctx.handleOauthResponse();
    });
    \u0275\u0275element(12, "div", 4);
    \u0275\u0275elementStart(13, "div", 5)(14, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 7);
    \u0275\u0275element(16, "path", 8)(17, "path", 9)(18, "path", 10)(19, "path", 11)(20, "path", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "span", 13);
    \u0275\u0275text(22, "Sign in with Google");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24, "Sign in with Google");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "ul", 15)(26, "li")(27, "a", 16);
    \u0275\u0275text(28, "Continue");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 17)(30, "article", 18)(31, "header", 19)(32, "h2");
    \u0275\u0275text(33, "A Record of");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "h1");
    \u0275\u0275text(35, "your Work");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "a", 20);
    \u0275\u0275element(37, "img", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "section", 22)(39, "article")(40, "header")(41, "h2")(42, "a", 23);
    \u0275\u0275text(43, "Access Insights");
    \u0275\u0275element(44, "br");
    \u0275\u0275text(45, " with Charts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "p");
    \u0275\u0275text(47, "Analyze trends and feedback to optimize workout strategies and minimize the risk of overtraining.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "article")(49, "header")(50, "h2");
    \u0275\u0275text(51, "Track Progress ");
    \u0275\u0275element(52, "br");
    \u0275\u0275text(53, " Easily");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "p");
    \u0275\u0275text(55, "Log your lifts, reps, and weights to visualize progress over time and ensure you're following the principle of progressive overload.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "article")(57, "header")(58, "h2");
    \u0275\u0275text(59, "Identify");
    \u0275\u0275element(60, "br");
    \u0275\u0275text(61, " Plateaus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "p");
    \u0275\u0275text(63, "Highlight trends in your performance to recognize when progress has stalled, allowing for timely adjustments to your routine.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "article")(65, "header")(66, "h2");
    \u0275\u0275text(67, "Improve");
    \u0275\u0275element(68, "br");
    \u0275\u0275text(69, " Motivation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "p");
    \u0275\u0275text(71, "Seeing historical progress motivates you to stay consistent and push harder during workouts.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "article")(73, "header")(74, "h2");
    \u0275\u0275text(75, "Encourage ");
    \u0275\u0275element(76, "br");
    \u0275\u0275text(77, " Accountability");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "p");
    \u0275\u0275text(79, "By logging workouts, you create a personal record, making you more committed to your fitness journey.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "article")(81, "header")(82, "h2");
    \u0275\u0275text(83, "Save Time ");
    \u0275\u0275element(84, "br");
    \u0275\u0275text(85, " and Efforts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "p");
    \u0275\u0275text(87, "A centralized system eliminates the need for manual note-taking, providing convenience for fitness enthusiasts.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(88, "ul", 2)(89, "li")(90, "button", 3);
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_90_listener() {
      return ctx.handleOauthResponse();
    });
    \u0275\u0275element(91, "div", 4);
    \u0275\u0275elementStart(92, "div", 5)(93, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(94, "svg", 7);
    \u0275\u0275element(95, "path", 8)(96, "path", 9)(97, "path", 10)(98, "path", 11)(99, "path", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(100, "span", 13);
    \u0275\u0275text(101, "Sign in with Google");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span", 14);
    \u0275\u0275text(103, "Sign in with Google");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(104, "footer", 24)(105, "section", 25)(106, "section")(107, "h3");
    \u0275\u0275text(108, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "p");
    \u0275\u0275text(110, "chunhimyip@gmail.com");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "section")(112, "h3");
    \u0275\u0275text(113, "Github");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "ul", 26)(115, "li")(116, "a", 27)(117, "span", 28);
    \u0275\u0275text(118, "GitHub");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(37);
    \u0275\u0275property("src", ctx.poster, \u0275\u0275sanitizeUrl);
  }
}, styles: [`@import "https://fonts.googleapis.com/css?family=Merriweather:300,700,300italic,700italic|Source+Sans+Pro:900";



.fa[_ngcontent-%COMP%], 
.fab[_ngcontent-%COMP%], 
.fad[_ngcontent-%COMP%], 
.fal[_ngcontent-%COMP%], 
.far[_ngcontent-%COMP%], 
.fas[_ngcontent-%COMP%] {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}
.fa-lg[_ngcontent-%COMP%] {
  font-size: 1.33333em;
  line-height: .75em;
  vertical-align: -.0667em;
}
.fa-xs[_ngcontent-%COMP%] {
  font-size: .75em;
}
.fa-sm[_ngcontent-%COMP%] {
  font-size: .875em;
}
.fa-1x[_ngcontent-%COMP%] {
  font-size: 1em;
}
.fa-2x[_ngcontent-%COMP%] {
  font-size: 2em;
}
.fa-3x[_ngcontent-%COMP%] {
  font-size: 3em;
}
.fa-4x[_ngcontent-%COMP%] {
  font-size: 4em;
}
.fa-5x[_ngcontent-%COMP%] {
  font-size: 5em;
}
.fa-6x[_ngcontent-%COMP%] {
  font-size: 6em;
}
.fa-7x[_ngcontent-%COMP%] {
  font-size: 7em;
}
.fa-8x[_ngcontent-%COMP%] {
  font-size: 8em;
}
.fa-9x[_ngcontent-%COMP%] {
  font-size: 9em;
}
.fa-10x[_ngcontent-%COMP%] {
  font-size: 10em;
}
.fa-fw[_ngcontent-%COMP%] {
  text-align: center;
  width: 1.25em;
}
.fa-ul[_ngcontent-%COMP%] {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {
  position: relative;
}
.fa-li[_ngcontent-%COMP%] {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}
.fa-border[_ngcontent-%COMP%] {
  border: .08em solid #eee;
  border-radius: .1em;
  padding: .2em .25em .15em;
}
.fa-pull-left[_ngcontent-%COMP%] {
  float: left;
}
.fa-pull-right[_ngcontent-%COMP%] {
  float: right;
}
.fa.fa-pull-left[_ngcontent-%COMP%], 
.fab.fa-pull-left[_ngcontent-%COMP%], 
.fal.fa-pull-left[_ngcontent-%COMP%], 
.far.fa-pull-left[_ngcontent-%COMP%], 
.fas.fa-pull-left[_ngcontent-%COMP%] {
  margin-right: .3em;
}
.fa.fa-pull-right[_ngcontent-%COMP%], 
.fab.fa-pull-right[_ngcontent-%COMP%], 
.fal.fa-pull-right[_ngcontent-%COMP%], 
.far.fa-pull-right[_ngcontent-%COMP%], 
.fas.fa-pull-right[_ngcontent-%COMP%] {
  margin-left: .3em;
}
.fa-spin[_ngcontent-%COMP%] {
  -webkit-animation: _ngcontent-%COMP%_fa-spin 2s linear infinite;
  animation: _ngcontent-%COMP%_fa-spin 2s linear infinite;
}
.fa-pulse[_ngcontent-%COMP%] {
  -webkit-animation: _ngcontent-%COMP%_fa-spin 1s steps(8) infinite;
  animation: _ngcontent-%COMP%_fa-spin 1s steps(8) infinite;
}
@-webkit-keyframes _ngcontent-%COMP%_fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes _ngcontent-%COMP%_fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
.fa-rotate-90[_ngcontent-%COMP%] {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.fa-rotate-180[_ngcontent-%COMP%] {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.fa-rotate-270[_ngcontent-%COMP%] {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
}
.fa-flip-horizontal[_ngcontent-%COMP%] {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.fa-flip-vertical[_ngcontent-%COMP%] {
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
}
.fa-flip-both[_ngcontent-%COMP%], 
.fa-flip-horizontal.fa-flip-vertical[_ngcontent-%COMP%], 
.fa-flip-vertical[_ngcontent-%COMP%] {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
}
.fa-flip-both[_ngcontent-%COMP%], 
.fa-flip-horizontal.fa-flip-vertical[_ngcontent-%COMP%] {
  -webkit-transform: scale(-1);
  transform: scale(-1);
}
[_ngcontent-%COMP%]:root   .fa-flip-both[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], 
[_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%] {
  -webkit-filter: none;
  filter: none;
}
.fa-stack[_ngcontent-%COMP%] {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}
.fa-stack-1x[_ngcontent-%COMP%], 
.fa-stack-2x[_ngcontent-%COMP%] {
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%;
}
.fa-stack-1x[_ngcontent-%COMP%] {
  line-height: inherit;
}
.fa-stack-2x[_ngcontent-%COMP%] {
  font-size: 2em;
}
.fa-inverse[_ngcontent-%COMP%] {
  color: #fff;
}
.fa-500px[_ngcontent-%COMP%]:before {
  content: "\\f26e";
}
.fa-accessible-icon[_ngcontent-%COMP%]:before {
  content: "\\f368";
}
.fa-accusoft[_ngcontent-%COMP%]:before {
  content: "\\f369";
}
.fa-acquisitions-incorporated[_ngcontent-%COMP%]:before {
  content: "\\f6af";
}
.fa-ad[_ngcontent-%COMP%]:before {
  content: "\\f641";
}
.fa-address-book[_ngcontent-%COMP%]:before {
  content: "\\f2b9";
}
.fa-address-card[_ngcontent-%COMP%]:before {
  content: "\\f2bb";
}
.fa-adjust[_ngcontent-%COMP%]:before {
  content: "\\f042";
}
.fa-adn[_ngcontent-%COMP%]:before {
  content: "\\f170";
}
.fa-adversal[_ngcontent-%COMP%]:before {
  content: "\\f36a";
}
.fa-affiliatetheme[_ngcontent-%COMP%]:before {
  content: "\\f36b";
}
.fa-air-freshener[_ngcontent-%COMP%]:before {
  content: "\\f5d0";
}
.fa-airbnb[_ngcontent-%COMP%]:before {
  content: "\\f834";
}
.fa-algolia[_ngcontent-%COMP%]:before {
  content: "\\f36c";
}
.fa-align-center[_ngcontent-%COMP%]:before {
  content: "\\f037";
}
.fa-align-justify[_ngcontent-%COMP%]:before {
  content: "\\f039";
}
.fa-align-left[_ngcontent-%COMP%]:before {
  content: "\\f036";
}
.fa-align-right[_ngcontent-%COMP%]:before {
  content: "\\f038";
}
.fa-alipay[_ngcontent-%COMP%]:before {
  content: "\\f642";
}
.fa-allergies[_ngcontent-%COMP%]:before {
  content: "\\f461";
}
.fa-amazon[_ngcontent-%COMP%]:before {
  content: "\\f270";
}
.fa-amazon-pay[_ngcontent-%COMP%]:before {
  content: "\\f42c";
}
.fa-ambulance[_ngcontent-%COMP%]:before {
  content: "\\f0f9";
}
.fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before {
  content: "\\f2a3";
}
.fa-amilia[_ngcontent-%COMP%]:before {
  content: "\\f36d";
}
.fa-anchor[_ngcontent-%COMP%]:before {
  content: "\\f13d";
}
.fa-android[_ngcontent-%COMP%]:before {
  content: "\\f17b";
}
.fa-angellist[_ngcontent-%COMP%]:before {
  content: "\\f209";
}
.fa-angle-double-down[_ngcontent-%COMP%]:before {
  content: "\\f103";
}
.fa-angle-double-left[_ngcontent-%COMP%]:before {
  content: "\\f100";
}
.fa-angle-double-right[_ngcontent-%COMP%]:before {
  content: "\\f101";
}
.fa-angle-double-up[_ngcontent-%COMP%]:before {
  content: "\\f102";
}
.fa-angle-down[_ngcontent-%COMP%]:before {
  content: "\\f107";
}
.fa-angle-left[_ngcontent-%COMP%]:before {
  content: "\\f104";
}
.fa-angle-right[_ngcontent-%COMP%]:before {
  content: "\\f105";
}
.fa-angle-up[_ngcontent-%COMP%]:before {
  content: "\\f106";
}
.fa-angry[_ngcontent-%COMP%]:before {
  content: "\\f556";
}
.fa-angrycreative[_ngcontent-%COMP%]:before {
  content: "\\f36e";
}
.fa-angular[_ngcontent-%COMP%]:before {
  content: "\\f420";
}
.fa-ankh[_ngcontent-%COMP%]:before {
  content: "\\f644";
}
.fa-app-store[_ngcontent-%COMP%]:before {
  content: "\\f36f";
}
.fa-app-store-ios[_ngcontent-%COMP%]:before {
  content: "\\f370";
}
.fa-apper[_ngcontent-%COMP%]:before {
  content: "\\f371";
}
.fa-apple[_ngcontent-%COMP%]:before {
  content: "\\f179";
}
.fa-apple-alt[_ngcontent-%COMP%]:before {
  content: "\\f5d1";
}
.fa-apple-pay[_ngcontent-%COMP%]:before {
  content: "\\f415";
}
.fa-archive[_ngcontent-%COMP%]:before {
  content: "\\f187";
}
.fa-archway[_ngcontent-%COMP%]:before {
  content: "\\f557";
}
.fa-arrow-alt-circle-down[_ngcontent-%COMP%]:before {
  content: "\\f358";
}
.fa-arrow-alt-circle-left[_ngcontent-%COMP%]:before {
  content: "\\f359";
}
.fa-arrow-alt-circle-right[_ngcontent-%COMP%]:before {
  content: "\\f35a";
}
.fa-arrow-alt-circle-up[_ngcontent-%COMP%]:before {
  content: "\\f35b";
}
.fa-arrow-circle-down[_ngcontent-%COMP%]:before {
  content: "\\f0ab";
}
.fa-arrow-circle-left[_ngcontent-%COMP%]:before {
  content: "\\f0a8";
}
.fa-arrow-circle-right[_ngcontent-%COMP%]:before {
  content: "\\f0a9";
}
.fa-arrow-circle-up[_ngcontent-%COMP%]:before {
  content: "\\f0aa";
}
.fa-arrow-down[_ngcontent-%COMP%]:before {
  content: "\\f063";
}
.fa-arrow-left[_ngcontent-%COMP%]:before {
  content: "\\f060";
}
.fa-arrow-right[_ngcontent-%COMP%]:before {
  content: "\\f061";
}
.fa-arrow-up[_ngcontent-%COMP%]:before {
  content: "\\f062";
}
.fa-arrows-alt[_ngcontent-%COMP%]:before {
  content: "\\f0b2";
}
.fa-arrows-alt-h[_ngcontent-%COMP%]:before {
  content: "\\f337";
}
.fa-arrows-alt-v[_ngcontent-%COMP%]:before {
  content: "\\f338";
}
.fa-artstation[_ngcontent-%COMP%]:before {
  content: "\\f77a";
}
.fa-assistive-listening-systems[_ngcontent-%COMP%]:before {
  content: "\\f2a2";
}
.fa-asterisk[_ngcontent-%COMP%]:before {
  content: "\\f069";
}
.fa-asymmetrik[_ngcontent-%COMP%]:before {
  content: "\\f372";
}
.fa-at[_ngcontent-%COMP%]:before {
  content: "\\f1fa";
}
.fa-atlas[_ngcontent-%COMP%]:before {
  content: "\\f558";
}
.fa-atlassian[_ngcontent-%COMP%]:before {
  content: "\\f77b";
}
.fa-atom[_ngcontent-%COMP%]:before {
  content: "\\f5d2";
}
.fa-audible[_ngcontent-%COMP%]:before {
  content: "\\f373";
}
.fa-audio-description[_ngcontent-%COMP%]:before {
  content: "\\f29e";
}
.fa-autoprefixer[_ngcontent-%COMP%]:before {
  content: "\\f41c";
}
.fa-avianex[_ngcontent-%COMP%]:before {
  content: "\\f374";
}
.fa-aviato[_ngcontent-%COMP%]:before {
  content: "\\f421";
}
.fa-award[_ngcontent-%COMP%]:before {
  content: "\\f559";
}
.fa-aws[_ngcontent-%COMP%]:before {
  content: "\\f375";
}
.fa-baby[_ngcontent-%COMP%]:before {
  content: "\\f77c";
}
.fa-baby-carriage[_ngcontent-%COMP%]:before {
  content: "\\f77d";
}
.fa-backspace[_ngcontent-%COMP%]:before {
  content: "\\f55a";
}
.fa-backward[_ngcontent-%COMP%]:before {
  content: "\\f04a";
}
.fa-bacon[_ngcontent-%COMP%]:before {
  content: "\\f7e5";
}
.fa-bacteria[_ngcontent-%COMP%]:before {
  content: "\\e059";
}
.fa-bacterium[_ngcontent-%COMP%]:before {
  content: "\\e05a";
}
.fa-bahai[_ngcontent-%COMP%]:before {
  content: "\\f666";
}
.fa-balance-scale[_ngcontent-%COMP%]:before {
  content: "\\f24e";
}
.fa-balance-scale-left[_ngcontent-%COMP%]:before {
  content: "\\f515";
}
.fa-balance-scale-right[_ngcontent-%COMP%]:before {
  content: "\\f516";
}
.fa-ban[_ngcontent-%COMP%]:before {
  content: "\\f05e";
}
.fa-band-aid[_ngcontent-%COMP%]:before {
  content: "\\f462";
}
.fa-bandcamp[_ngcontent-%COMP%]:before {
  content: "\\f2d5";
}
.fa-barcode[_ngcontent-%COMP%]:before {
  content: "\\f02a";
}
.fa-bars[_ngcontent-%COMP%]:before {
  content: "\\f0c9";
}
.fa-baseball-ball[_ngcontent-%COMP%]:before {
  content: "\\f433";
}
.fa-basketball-ball[_ngcontent-%COMP%]:before {
  content: "\\f434";
}
.fa-bath[_ngcontent-%COMP%]:before {
  content: "\\f2cd";
}
.fa-battery-empty[_ngcontent-%COMP%]:before {
  content: "\\f244";
}
.fa-battery-full[_ngcontent-%COMP%]:before {
  content: "\\f240";
}
.fa-battery-half[_ngcontent-%COMP%]:before {
  content: "\\f242";
}
.fa-battery-quarter[_ngcontent-%COMP%]:before {
  content: "\\f243";
}
.fa-battery-three-quarters[_ngcontent-%COMP%]:before {
  content: "\\f241";
}
.fa-battle-net[_ngcontent-%COMP%]:before {
  content: "\\f835";
}
.fa-bed[_ngcontent-%COMP%]:before {
  content: "\\f236";
}
.fa-beer[_ngcontent-%COMP%]:before {
  content: "\\f0fc";
}
.fa-behance[_ngcontent-%COMP%]:before {
  content: "\\f1b4";
}
.fa-behance-square[_ngcontent-%COMP%]:before {
  content: "\\f1b5";
}
.fa-bell[_ngcontent-%COMP%]:before {
  content: "\\f0f3";
}
.fa-bell-slash[_ngcontent-%COMP%]:before {
  content: "\\f1f6";
}
.fa-bezier-curve[_ngcontent-%COMP%]:before {
  content: "\\f55b";
}
.fa-bible[_ngcontent-%COMP%]:before {
  content: "\\f647";
}
.fa-bicycle[_ngcontent-%COMP%]:before {
  content: "\\f206";
}
.fa-biking[_ngcontent-%COMP%]:before {
  content: "\\f84a";
}
.fa-bimobject[_ngcontent-%COMP%]:before {
  content: "\\f378";
}
.fa-binoculars[_ngcontent-%COMP%]:before {
  content: "\\f1e5";
}
.fa-biohazard[_ngcontent-%COMP%]:before {
  content: "\\f780";
}
.fa-birthday-cake[_ngcontent-%COMP%]:before {
  content: "\\f1fd";
}
.fa-bitbucket[_ngcontent-%COMP%]:before {
  content: "\\f171";
}
.fa-bitcoin[_ngcontent-%COMP%]:before {
  content: "\\f379";
}
.fa-bity[_ngcontent-%COMP%]:before {
  content: "\\f37a";
}
.fa-black-tie[_ngcontent-%COMP%]:before {
  content: "\\f27e";
}
.fa-blackberry[_ngcontent-%COMP%]:before {
  content: "\\f37b";
}
.fa-blender[_ngcontent-%COMP%]:before {
  content: "\\f517";
}
.fa-blender-phone[_ngcontent-%COMP%]:before {
  content: "\\f6b6";
}
.fa-blind[_ngcontent-%COMP%]:before {
  content: "\\f29d";
}
.fa-blog[_ngcontent-%COMP%]:before {
  content: "\\f781";
}
.fa-blogger[_ngcontent-%COMP%]:before {
  content: "\\f37c";
}
.fa-blogger-b[_ngcontent-%COMP%]:before {
  content: "\\f37d";
}
.fa-bluetooth[_ngcontent-%COMP%]:before {
  content: "\\f293";
}
.fa-bluetooth-b[_ngcontent-%COMP%]:before {
  content: "\\f294";
}
.fa-bold[_ngcontent-%COMP%]:before {
  content: "\\f032";
}
.fa-bolt[_ngcontent-%COMP%]:before {
  content: "\\f0e7";
}
.fa-bomb[_ngcontent-%COMP%]:before {
  content: "\\f1e2";
}
.fa-bone[_ngcontent-%COMP%]:before {
  content: "\\f5d7";
}
.fa-bong[_ngcontent-%COMP%]:before {
  content: "\\f55c";
}
.fa-book[_ngcontent-%COMP%]:before {
  content: "\\f02d";
}
.fa-book-dead[_ngcontent-%COMP%]:before {
  content: "\\f6b7";
}
.fa-book-medical[_ngcontent-%COMP%]:before {
  content: "\\f7e6";
}
.fa-book-open[_ngcontent-%COMP%]:before {
  content: "\\f518";
}
.fa-book-reader[_ngcontent-%COMP%]:before {
  content: "\\f5da";
}
.fa-bookmark[_ngcontent-%COMP%]:before {
  content: "\\f02e";
}
.fa-bootstrap[_ngcontent-%COMP%]:before {
  content: "\\f836";
}
.fa-border-all[_ngcontent-%COMP%]:before {
  content: "\\f84c";
}
.fa-border-none[_ngcontent-%COMP%]:before {
  content: "\\f850";
}
.fa-border-style[_ngcontent-%COMP%]:before {
  content: "\\f853";
}
.fa-bowling-ball[_ngcontent-%COMP%]:before {
  content: "\\f436";
}
.fa-box[_ngcontent-%COMP%]:before {
  content: "\\f466";
}
.fa-box-open[_ngcontent-%COMP%]:before {
  content: "\\f49e";
}
.fa-box-tissue[_ngcontent-%COMP%]:before {
  content: "\\e05b";
}
.fa-boxes[_ngcontent-%COMP%]:before {
  content: "\\f468";
}
.fa-braille[_ngcontent-%COMP%]:before {
  content: "\\f2a1";
}
.fa-brain[_ngcontent-%COMP%]:before {
  content: "\\f5dc";
}
.fa-bread-slice[_ngcontent-%COMP%]:before {
  content: "\\f7ec";
}
.fa-briefcase[_ngcontent-%COMP%]:before {
  content: "\\f0b1";
}
.fa-briefcase-medical[_ngcontent-%COMP%]:before {
  content: "\\f469";
}
.fa-broadcast-tower[_ngcontent-%COMP%]:before {
  content: "\\f519";
}
.fa-broom[_ngcontent-%COMP%]:before {
  content: "\\f51a";
}
.fa-brush[_ngcontent-%COMP%]:before {
  content: "\\f55d";
}
.fa-btc[_ngcontent-%COMP%]:before {
  content: "\\f15a";
}
.fa-buffer[_ngcontent-%COMP%]:before {
  content: "\\f837";
}
.fa-bug[_ngcontent-%COMP%]:before {
  content: "\\f188";
}
.fa-building[_ngcontent-%COMP%]:before {
  content: "\\f1ad";
}
.fa-bullhorn[_ngcontent-%COMP%]:before {
  content: "\\f0a1";
}
.fa-bullseye[_ngcontent-%COMP%]:before {
  content: "\\f140";
}
.fa-burn[_ngcontent-%COMP%]:before {
  content: "\\f46a";
}
.fa-buromobelexperte[_ngcontent-%COMP%]:before {
  content: "\\f37f";
}
.fa-bus[_ngcontent-%COMP%]:before {
  content: "\\f207";
}
.fa-bus-alt[_ngcontent-%COMP%]:before {
  content: "\\f55e";
}
.fa-business-time[_ngcontent-%COMP%]:before {
  content: "\\f64a";
}
.fa-buy-n-large[_ngcontent-%COMP%]:before {
  content: "\\f8a6";
}
.fa-buysellads[_ngcontent-%COMP%]:before {
  content: "\\f20d";
}
.fa-calculator[_ngcontent-%COMP%]:before {
  content: "\\f1ec";
}
.fa-calendar[_ngcontent-%COMP%]:before {
  content: "\\f133";
}
.fa-calendar-alt[_ngcontent-%COMP%]:before {
  content: "\\f073";
}
.fa-calendar-check[_ngcontent-%COMP%]:before {
  content: "\\f274";
}
.fa-calendar-day[_ngcontent-%COMP%]:before {
  content: "\\f783";
}
.fa-calendar-minus[_ngcontent-%COMP%]:before {
  content: "\\f272";
}
.fa-calendar-plus[_ngcontent-%COMP%]:before {
  content: "\\f271";
}
.fa-calendar-times[_ngcontent-%COMP%]:before {
  content: "\\f273";
}
.fa-calendar-week[_ngcontent-%COMP%]:before {
  content: "\\f784";
}
.fa-camera[_ngcontent-%COMP%]:before {
  content: "\\f030";
}
.fa-camera-retro[_ngcontent-%COMP%]:before {
  content: "\\f083";
}
.fa-campground[_ngcontent-%COMP%]:before {
  content: "\\f6bb";
}
.fa-canadian-maple-leaf[_ngcontent-%COMP%]:before {
  content: "\\f785";
}
.fa-candy-cane[_ngcontent-%COMP%]:before {
  content: "\\f786";
}
.fa-cannabis[_ngcontent-%COMP%]:before {
  content: "\\f55f";
}
.fa-capsules[_ngcontent-%COMP%]:before {
  content: "\\f46b";
}
.fa-car[_ngcontent-%COMP%]:before {
  content: "\\f1b9";
}
.fa-car-alt[_ngcontent-%COMP%]:before {
  content: "\\f5de";
}
.fa-car-battery[_ngcontent-%COMP%]:before {
  content: "\\f5df";
}
.fa-car-crash[_ngcontent-%COMP%]:before {
  content: "\\f5e1";
}
.fa-car-side[_ngcontent-%COMP%]:before {
  content: "\\f5e4";
}
.fa-caravan[_ngcontent-%COMP%]:before {
  content: "\\f8ff";
}
.fa-caret-down[_ngcontent-%COMP%]:before {
  content: "\\f0d7";
}
.fa-caret-left[_ngcontent-%COMP%]:before {
  content: "\\f0d9";
}
.fa-caret-right[_ngcontent-%COMP%]:before {
  content: "\\f0da";
}
.fa-caret-square-down[_ngcontent-%COMP%]:before {
  content: "\\f150";
}
.fa-caret-square-left[_ngcontent-%COMP%]:before {
  content: "\\f191";
}
.fa-caret-square-right[_ngcontent-%COMP%]:before {
  content: "\\f152";
}
.fa-caret-square-up[_ngcontent-%COMP%]:before {
  content: "\\f151";
}
.fa-caret-up[_ngcontent-%COMP%]:before {
  content: "\\f0d8";
}
.fa-carrot[_ngcontent-%COMP%]:before {
  content: "\\f787";
}
.fa-cart-arrow-down[_ngcontent-%COMP%]:before {
  content: "\\f218";
}
.fa-cart-plus[_ngcontent-%COMP%]:before {
  content: "\\f217";
}
.fa-cash-register[_ngcontent-%COMP%]:before {
  content: "\\f788";
}
.fa-cat[_ngcontent-%COMP%]:before {
  content: "\\f6be";
}
.fa-cc-amazon-pay[_ngcontent-%COMP%]:before {
  content: "\\f42d";
}
.fa-cc-amex[_ngcontent-%COMP%]:before {
  content: "\\f1f3";
}
.fa-cc-apple-pay[_ngcontent-%COMP%]:before {
  content: "\\f416";
}
.fa-cc-diners-club[_ngcontent-%COMP%]:before {
  content: "\\f24c";
}
.fa-cc-discover[_ngcontent-%COMP%]:before {
  content: "\\f1f2";
}
.fa-cc-jcb[_ngcontent-%COMP%]:before {
  content: "\\f24b";
}
.fa-cc-mastercard[_ngcontent-%COMP%]:before {
  content: "\\f1f1";
}
.fa-cc-paypal[_ngcontent-%COMP%]:before {
  content: "\\f1f4";
}
.fa-cc-stripe[_ngcontent-%COMP%]:before {
  content: "\\f1f5";
}
.fa-cc-visa[_ngcontent-%COMP%]:before {
  content: "\\f1f0";
}
.fa-centercode[_ngcontent-%COMP%]:before {
  content: "\\f380";
}
.fa-centos[_ngcontent-%COMP%]:before {
  content: "\\f789";
}
.fa-certificate[_ngcontent-%COMP%]:before {
  content: "\\f0a3";
}
.fa-chair[_ngcontent-%COMP%]:before {
  content: "\\f6c0";
}
.fa-chalkboard[_ngcontent-%COMP%]:before {
  content: "\\f51b";
}
.fa-chalkboard-teacher[_ngcontent-%COMP%]:before {
  content: "\\f51c";
}
.fa-charging-station[_ngcontent-%COMP%]:before {
  content: "\\f5e7";
}
.fa-chart-area[_ngcontent-%COMP%]:before {
  content: "\\f1fe";
}
.fa-chart-bar[_ngcontent-%COMP%]:before {
  content: "\\f080";
}
.fa-chart-line[_ngcontent-%COMP%]:before {
  content: "\\f201";
}
.fa-chart-pie[_ngcontent-%COMP%]:before {
  content: "\\f200";
}
.fa-check[_ngcontent-%COMP%]:before {
  content: "\\f00c";
}
.fa-check-circle[_ngcontent-%COMP%]:before {
  content: "\\f058";
}
.fa-check-double[_ngcontent-%COMP%]:before {
  content: "\\f560";
}
.fa-check-square[_ngcontent-%COMP%]:before {
  content: "\\f14a";
}
.fa-cheese[_ngcontent-%COMP%]:before {
  content: "\\f7ef";
}
.fa-chess[_ngcontent-%COMP%]:before {
  content: "\\f439";
}
.fa-chess-bishop[_ngcontent-%COMP%]:before {
  content: "\\f43a";
}
.fa-chess-board[_ngcontent-%COMP%]:before {
  content: "\\f43c";
}
.fa-chess-king[_ngcontent-%COMP%]:before {
  content: "\\f43f";
}
.fa-chess-knight[_ngcontent-%COMP%]:before {
  content: "\\f441";
}
.fa-chess-pawn[_ngcontent-%COMP%]:before {
  content: "\\f443";
}
.fa-chess-queen[_ngcontent-%COMP%]:before {
  content: "\\f445";
}
.fa-chess-rook[_ngcontent-%COMP%]:before {
  content: "\\f447";
}
.fa-chevron-circle-down[_ngcontent-%COMP%]:before {
  content: "\\f13a";
}
.fa-chevron-circle-left[_ngcontent-%COMP%]:before {
  content: "\\f137";
}
.fa-chevron-circle-right[_ngcontent-%COMP%]:before {
  content: "\\f138";
}
.fa-chevron-circle-up[_ngcontent-%COMP%]:before {
  content: "\\f139";
}
.fa-chevron-down[_ngcontent-%COMP%]:before {
  content: "\\f078";
}
.fa-chevron-left[_ngcontent-%COMP%]:before {
  content: "\\f053";
}
.fa-chevron-right[_ngcontent-%COMP%]:before {
  content: "\\f054";
}
.fa-chevron-up[_ngcontent-%COMP%]:before {
  content: "\\f077";
}
.fa-child[_ngcontent-%COMP%]:before {
  content: "\\f1ae";
}
.fa-chrome[_ngcontent-%COMP%]:before {
  content: "\\f268";
}
.fa-chromecast[_ngcontent-%COMP%]:before {
  content: "\\f838";
}
.fa-church[_ngcontent-%COMP%]:before {
  content: "\\f51d";
}
.fa-circle[_ngcontent-%COMP%]:before {
  content: "\\f111";
}
.fa-circle-notch[_ngcontent-%COMP%]:before {
  content: "\\f1ce";
}
.fa-city[_ngcontent-%COMP%]:before {
  content: "\\f64f";
}
.fa-clinic-medical[_ngcontent-%COMP%]:before {
  content: "\\f7f2";
}
.fa-clipboard[_ngcontent-%COMP%]:before {
  content: "\\f328";
}
.fa-clipboard-check[_ngcontent-%COMP%]:before {
  content: "\\f46c";
}
.fa-clipboard-list[_ngcontent-%COMP%]:before {
  content: "\\f46d";
}
.fa-clock[_ngcontent-%COMP%]:before {
  content: "\\f017";
}
.fa-clone[_ngcontent-%COMP%]:before {
  content: "\\f24d";
}
.fa-closed-captioning[_ngcontent-%COMP%]:before {
  content: "\\f20a";
}
.fa-cloud[_ngcontent-%COMP%]:before {
  content: "\\f0c2";
}
.fa-cloud-download-alt[_ngcontent-%COMP%]:before {
  content: "\\f381";
}
.fa-cloud-meatball[_ngcontent-%COMP%]:before {
  content: "\\f73b";
}
.fa-cloud-moon[_ngcontent-%COMP%]:before {
  content: "\\f6c3";
}
.fa-cloud-moon-rain[_ngcontent-%COMP%]:before {
  content: "\\f73c";
}
.fa-cloud-rain[_ngcontent-%COMP%]:before {
  content: "\\f73d";
}
.fa-cloud-showers-heavy[_ngcontent-%COMP%]:before {
  content: "\\f740";
}
.fa-cloud-sun[_ngcontent-%COMP%]:before {
  content: "\\f6c4";
}
.fa-cloud-sun-rain[_ngcontent-%COMP%]:before {
  content: "\\f743";
}
.fa-cloud-upload-alt[_ngcontent-%COMP%]:before {
  content: "\\f382";
}
.fa-cloudflare[_ngcontent-%COMP%]:before {
  content: "\\e07d";
}
.fa-cloudscale[_ngcontent-%COMP%]:before {
  content: "\\f383";
}
.fa-cloudsmith[_ngcontent-%COMP%]:before {
  content: "\\f384";
}
.fa-cloudversify[_ngcontent-%COMP%]:before {
  content: "\\f385";
}
.fa-cocktail[_ngcontent-%COMP%]:before {
  content: "\\f561";
}
.fa-code[_ngcontent-%COMP%]:before {
  content: "\\f121";
}
.fa-code-branch[_ngcontent-%COMP%]:before {
  content: "\\f126";
}
.fa-codepen[_ngcontent-%COMP%]:before {
  content: "\\f1cb";
}
.fa-codiepie[_ngcontent-%COMP%]:before {
  content: "\\f284";
}
.fa-coffee[_ngcontent-%COMP%]:before {
  content: "\\f0f4";
}
.fa-cog[_ngcontent-%COMP%]:before {
  content: "\\f013";
}
.fa-cogs[_ngcontent-%COMP%]:before {
  content: "\\f085";
}
.fa-coins[_ngcontent-%COMP%]:before {
  content: "\\f51e";
}
.fa-columns[_ngcontent-%COMP%]:before {
  content: "\\f0db";
}
.fa-comment[_ngcontent-%COMP%]:before {
  content: "\\f075";
}
.fa-comment-alt[_ngcontent-%COMP%]:before {
  content: "\\f27a";
}
.fa-comment-dollar[_ngcontent-%COMP%]:before {
  content: "\\f651";
}
.fa-comment-dots[_ngcontent-%COMP%]:before {
  content: "\\f4ad";
}
.fa-comment-medical[_ngcontent-%COMP%]:before {
  content: "\\f7f5";
}
.fa-comment-slash[_ngcontent-%COMP%]:before {
  content: "\\f4b3";
}
.fa-comments[_ngcontent-%COMP%]:before {
  content: "\\f086";
}
.fa-comments-dollar[_ngcontent-%COMP%]:before {
  content: "\\f653";
}
.fa-compact-disc[_ngcontent-%COMP%]:before {
  content: "\\f51f";
}
.fa-compass[_ngcontent-%COMP%]:before {
  content: "\\f14e";
}
.fa-compress[_ngcontent-%COMP%]:before {
  content: "\\f066";
}
.fa-compress-alt[_ngcontent-%COMP%]:before {
  content: "\\f422";
}
.fa-compress-arrows-alt[_ngcontent-%COMP%]:before {
  content: "\\f78c";
}
.fa-concierge-bell[_ngcontent-%COMP%]:before {
  content: "\\f562";
}
.fa-confluence[_ngcontent-%COMP%]:before {
  content: "\\f78d";
}
.fa-connectdevelop[_ngcontent-%COMP%]:before {
  content: "\\f20e";
}
.fa-contao[_ngcontent-%COMP%]:before {
  content: "\\f26d";
}
.fa-cookie[_ngcontent-%COMP%]:before {
  content: "\\f563";
}
.fa-cookie-bite[_ngcontent-%COMP%]:before {
  content: "\\f564";
}
.fa-copy[_ngcontent-%COMP%]:before {
  content: "\\f0c5";
}
.fa-copyright[_ngcontent-%COMP%]:before {
  content: "\\f1f9";
}
.fa-cotton-bureau[_ngcontent-%COMP%]:before {
  content: "\\f89e";
}
.fa-couch[_ngcontent-%COMP%]:before {
  content: "\\f4b8";
}
.fa-cpanel[_ngcontent-%COMP%]:before {
  content: "\\f388";
}
.fa-creative-commons[_ngcontent-%COMP%]:before {
  content: "\\f25e";
}
.fa-creative-commons-by[_ngcontent-%COMP%]:before {
  content: "\\f4e7";
}
.fa-creative-commons-nc[_ngcontent-%COMP%]:before {
  content: "\\f4e8";
}
.fa-creative-commons-nc-eu[_ngcontent-%COMP%]:before {
  content: "\\f4e9";
}
.fa-creative-commons-nc-jp[_ngcontent-%COMP%]:before {
  content: "\\f4ea";
}
.fa-creative-commons-nd[_ngcontent-%COMP%]:before {
  content: "\\f4eb";
}
.fa-creative-commons-pd[_ngcontent-%COMP%]:before {
  content: "\\f4ec";
}
.fa-creative-commons-pd-alt[_ngcontent-%COMP%]:before {
  content: "\\f4ed";
}
.fa-creative-commons-remix[_ngcontent-%COMP%]:before {
  content: "\\f4ee";
}
.fa-creative-commons-sa[_ngcontent-%COMP%]:before {
  content: "\\f4ef";
}
.fa-creative-commons-sampling[_ngcontent-%COMP%]:before {
  content: "\\f4f0";
}
.fa-creative-commons-sampling-plus[_ngcontent-%COMP%]:before {
  content: "\\f4f1";
}
.fa-creative-commons-share[_ngcontent-%COMP%]:before {
  content: "\\f4f2";
}
.fa-creative-commons-zero[_ngcontent-%COMP%]:before {
  content: "\\f4f3";
}
.fa-credit-card[_ngcontent-%COMP%]:before {
  content: "\\f09d";
}
.fa-critical-role[_ngcontent-%COMP%]:before {
  content: "\\f6c9";
}
.fa-crop[_ngcontent-%COMP%]:before {
  content: "\\f125";
}
.fa-crop-alt[_ngcontent-%COMP%]:before {
  content: "\\f565";
}
.fa-cross[_ngcontent-%COMP%]:before {
  content: "\\f654";
}
.fa-crosshairs[_ngcontent-%COMP%]:before {
  content: "\\f05b";
}
.fa-crow[_ngcontent-%COMP%]:before {
  content: "\\f520";
}
.fa-crown[_ngcontent-%COMP%]:before {
  content: "\\f521";
}
.fa-crutch[_ngcontent-%COMP%]:before {
  content: "\\f7f7";
}
.fa-css3[_ngcontent-%COMP%]:before {
  content: "\\f13c";
}
.fa-css3-alt[_ngcontent-%COMP%]:before {
  content: "\\f38b";
}
.fa-cube[_ngcontent-%COMP%]:before {
  content: "\\f1b2";
}
.fa-cubes[_ngcontent-%COMP%]:before {
  content: "\\f1b3";
}
.fa-cut[_ngcontent-%COMP%]:before {
  content: "\\f0c4";
}
.fa-cuttlefish[_ngcontent-%COMP%]:before {
  content: "\\f38c";
}
.fa-d-and-d[_ngcontent-%COMP%]:before {
  content: "\\f38d";
}
.fa-d-and-d-beyond[_ngcontent-%COMP%]:before {
  content: "\\f6ca";
}
.fa-dailymotion[_ngcontent-%COMP%]:before {
  content: "\\e052";
}
.fa-dashcube[_ngcontent-%COMP%]:before {
  content: "\\f210";
}
.fa-database[_ngcontent-%COMP%]:before {
  content: "\\f1c0";
}
.fa-deaf[_ngcontent-%COMP%]:before {
  content: "\\f2a4";
}
.fa-deezer[_ngcontent-%COMP%]:before {
  content: "\\e077";
}
.fa-delicious[_ngcontent-%COMP%]:before {
  content: "\\f1a5";
}
.fa-democrat[_ngcontent-%COMP%]:before {
  content: "\\f747";
}
.fa-deploydog[_ngcontent-%COMP%]:before {
  content: "\\f38e";
}
.fa-deskpro[_ngcontent-%COMP%]:before {
  content: "\\f38f";
}
.fa-desktop[_ngcontent-%COMP%]:before {
  content: "\\f108";
}
.fa-dev[_ngcontent-%COMP%]:before {
  content: "\\f6cc";
}
.fa-deviantart[_ngcontent-%COMP%]:before {
  content: "\\f1bd";
}
.fa-dharmachakra[_ngcontent-%COMP%]:before {
  content: "\\f655";
}
.fa-dhl[_ngcontent-%COMP%]:before {
  content: "\\f790";
}
.fa-diagnoses[_ngcontent-%COMP%]:before {
  content: "\\f470";
}
.fa-diaspora[_ngcontent-%COMP%]:before {
  content: "\\f791";
}
.fa-dice[_ngcontent-%COMP%]:before {
  content: "\\f522";
}
.fa-dice-d20[_ngcontent-%COMP%]:before {
  content: "\\f6cf";
}
.fa-dice-d6[_ngcontent-%COMP%]:before {
  content: "\\f6d1";
}
.fa-dice-five[_ngcontent-%COMP%]:before {
  content: "\\f523";
}
.fa-dice-four[_ngcontent-%COMP%]:before {
  content: "\\f524";
}
.fa-dice-one[_ngcontent-%COMP%]:before {
  content: "\\f525";
}
.fa-dice-six[_ngcontent-%COMP%]:before {
  content: "\\f526";
}
.fa-dice-three[_ngcontent-%COMP%]:before {
  content: "\\f527";
}
.fa-dice-two[_ngcontent-%COMP%]:before {
  content: "\\f528";
}
.fa-digg[_ngcontent-%COMP%]:before {
  content: "\\f1a6";
}
.fa-digital-ocean[_ngcontent-%COMP%]:before {
  content: "\\f391";
}
.fa-digital-tachograph[_ngcontent-%COMP%]:before {
  content: "\\f566";
}
.fa-directions[_ngcontent-%COMP%]:before {
  content: "\\f5eb";
}
.fa-discord[_ngcontent-%COMP%]:before {
  content: "\\f392";
}
.fa-discourse[_ngcontent-%COMP%]:before {
  content: "\\f393";
}
.fa-disease[_ngcontent-%COMP%]:before {
  content: "\\f7fa";
}
.fa-divide[_ngcontent-%COMP%]:before {
  content: "\\f529";
}
.fa-dizzy[_ngcontent-%COMP%]:before {
  content: "\\f567";
}
.fa-dna[_ngcontent-%COMP%]:before {
  content: "\\f471";
}
.fa-dochub[_ngcontent-%COMP%]:before {
  content: "\\f394";
}
.fa-docker[_ngcontent-%COMP%]:before {
  content: "\\f395";
}
.fa-dog[_ngcontent-%COMP%]:before {
  content: "\\f6d3";
}
.fa-dollar-sign[_ngcontent-%COMP%]:before {
  content: "\\f155";
}
.fa-dolly[_ngcontent-%COMP%]:before {
  content: "\\f472";
}
.fa-dolly-flatbed[_ngcontent-%COMP%]:before {
  content: "\\f474";
}
.fa-donate[_ngcontent-%COMP%]:before {
  content: "\\f4b9";
}
.fa-door-closed[_ngcontent-%COMP%]:before {
  content: "\\f52a";
}
.fa-door-open[_ngcontent-%COMP%]:before {
  content: "\\f52b";
}
.fa-dot-circle[_ngcontent-%COMP%]:before {
  content: "\\f192";
}
.fa-dove[_ngcontent-%COMP%]:before {
  content: "\\f4ba";
}
.fa-download[_ngcontent-%COMP%]:before {
  content: "\\f019";
}
.fa-draft2digital[_ngcontent-%COMP%]:before {
  content: "\\f396";
}
.fa-drafting-compass[_ngcontent-%COMP%]:before {
  content: "\\f568";
}
.fa-dragon[_ngcontent-%COMP%]:before {
  content: "\\f6d5";
}
.fa-draw-polygon[_ngcontent-%COMP%]:before {
  content: "\\f5ee";
}
.fa-dribbble[_ngcontent-%COMP%]:before {
  content: "\\f17d";
}
.fa-dribbble-square[_ngcontent-%COMP%]:before {
  content: "\\f397";
}
.fa-dropbox[_ngcontent-%COMP%]:before {
  content: "\\f16b";
}
.fa-drum[_ngcontent-%COMP%]:before {
  content: "\\f569";
}
.fa-drum-steelpan[_ngcontent-%COMP%]:before {
  content: "\\f56a";
}
.fa-drumstick-bite[_ngcontent-%COMP%]:before {
  content: "\\f6d7";
}
.fa-drupal[_ngcontent-%COMP%]:before {
  content: "\\f1a9";
}
.fa-dumbbell[_ngcontent-%COMP%]:before {
  content: "\\f44b";
}
.fa-dumpster[_ngcontent-%COMP%]:before {
  content: "\\f793";
}
.fa-dumpster-fire[_ngcontent-%COMP%]:before {
  content: "\\f794";
}
.fa-dungeon[_ngcontent-%COMP%]:before {
  content: "\\f6d9";
}
.fa-dyalog[_ngcontent-%COMP%]:before {
  content: "\\f399";
}
.fa-earlybirds[_ngcontent-%COMP%]:before {
  content: "\\f39a";
}
.fa-ebay[_ngcontent-%COMP%]:before {
  content: "\\f4f4";
}
.fa-edge[_ngcontent-%COMP%]:before {
  content: "\\f282";
}
.fa-edge-legacy[_ngcontent-%COMP%]:before {
  content: "\\e078";
}
.fa-edit[_ngcontent-%COMP%]:before {
  content: "\\f044";
}
.fa-egg[_ngcontent-%COMP%]:before {
  content: "\\f7fb";
}
.fa-eject[_ngcontent-%COMP%]:before {
  content: "\\f052";
}
.fa-elementor[_ngcontent-%COMP%]:before {
  content: "\\f430";
}
.fa-ellipsis-h[_ngcontent-%COMP%]:before {
  content: "\\f141";
}
.fa-ellipsis-v[_ngcontent-%COMP%]:before {
  content: "\\f142";
}
.fa-ello[_ngcontent-%COMP%]:before {
  content: "\\f5f1";
}
.fa-ember[_ngcontent-%COMP%]:before {
  content: "\\f423";
}
.fa-empire[_ngcontent-%COMP%]:before {
  content: "\\f1d1";
}
.fa-envelope[_ngcontent-%COMP%]:before {
  content: "\\f0e0";
}
.fa-envelope-open[_ngcontent-%COMP%]:before {
  content: "\\f2b6";
}
.fa-envelope-open-text[_ngcontent-%COMP%]:before {
  content: "\\f658";
}
.fa-envelope-square[_ngcontent-%COMP%]:before {
  content: "\\f199";
}
.fa-envira[_ngcontent-%COMP%]:before {
  content: "\\f299";
}
.fa-equals[_ngcontent-%COMP%]:before {
  content: "\\f52c";
}
.fa-eraser[_ngcontent-%COMP%]:before {
  content: "\\f12d";
}
.fa-erlang[_ngcontent-%COMP%]:before {
  content: "\\f39d";
}
.fa-ethereum[_ngcontent-%COMP%]:before {
  content: "\\f42e";
}
.fa-ethernet[_ngcontent-%COMP%]:before {
  content: "\\f796";
}
.fa-etsy[_ngcontent-%COMP%]:before {
  content: "\\f2d7";
}
.fa-euro-sign[_ngcontent-%COMP%]:before {
  content: "\\f153";
}
.fa-evernote[_ngcontent-%COMP%]:before {
  content: "\\f839";
}
.fa-exchange-alt[_ngcontent-%COMP%]:before {
  content: "\\f362";
}
.fa-exclamation[_ngcontent-%COMP%]:before {
  content: "\\f12a";
}
.fa-exclamation-circle[_ngcontent-%COMP%]:before {
  content: "\\f06a";
}
.fa-exclamation-triangle[_ngcontent-%COMP%]:before {
  content: "\\f071";
}
.fa-expand[_ngcontent-%COMP%]:before {
  content: "\\f065";
}
.fa-expand-alt[_ngcontent-%COMP%]:before {
  content: "\\f424";
}
.fa-expand-arrows-alt[_ngcontent-%COMP%]:before {
  content: "\\f31e";
}
.fa-expeditedssl[_ngcontent-%COMP%]:before {
  content: "\\f23e";
}
.fa-external-link-alt[_ngcontent-%COMP%]:before {
  content: "\\f35d";
}
.fa-external-link-square-alt[_ngcontent-%COMP%]:before {
  content: "\\f360";
}
.fa-eye[_ngcontent-%COMP%]:before {
  content: "\\f06e";
}
.fa-eye-dropper[_ngcontent-%COMP%]:before {
  content: "\\f1fb";
}
.fa-eye-slash[_ngcontent-%COMP%]:before {
  content: "\\f070";
}
.fa-facebook[_ngcontent-%COMP%]:before {
  content: "\\f09a";
}
.fa-facebook-f[_ngcontent-%COMP%]:before {
  content: "\\f39e";
}
.fa-facebook-messenger[_ngcontent-%COMP%]:before {
  content: "\\f39f";
}
.fa-facebook-square[_ngcontent-%COMP%]:before {
  content: "\\f082";
}
.fa-fan[_ngcontent-%COMP%]:before {
  content: "\\f863";
}
.fa-fantasy-flight-games[_ngcontent-%COMP%]:before {
  content: "\\f6dc";
}
.fa-fast-backward[_ngcontent-%COMP%]:before {
  content: "\\f049";
}
.fa-fast-forward[_ngcontent-%COMP%]:before {
  content: "\\f050";
}
.fa-faucet[_ngcontent-%COMP%]:before {
  content: "\\e005";
}
.fa-fax[_ngcontent-%COMP%]:before {
  content: "\\f1ac";
}
.fa-feather[_ngcontent-%COMP%]:before {
  content: "\\f52d";
}
.fa-feather-alt[_ngcontent-%COMP%]:before {
  content: "\\f56b";
}
.fa-fedex[_ngcontent-%COMP%]:before {
  content: "\\f797";
}
.fa-fedora[_ngcontent-%COMP%]:before {
  content: "\\f798";
}
.fa-female[_ngcontent-%COMP%]:before {
  content: "\\f182";
}
.fa-fighter-jet[_ngcontent-%COMP%]:before {
  content: "\\f0fb";
}
.fa-figma[_ngcontent-%COMP%]:before {
  content: "\\f799";
}
.fa-file[_ngcontent-%COMP%]:before {
  content: "\\f15b";
}
.fa-file-alt[_ngcontent-%COMP%]:before {
  content: "\\f15c";
}
.fa-file-archive[_ngcontent-%COMP%]:before {
  content: "\\f1c6";
}
.fa-file-audio[_ngcontent-%COMP%]:before {
  content: "\\f1c7";
}
.fa-file-code[_ngcontent-%COMP%]:before {
  content: "\\f1c9";
}
.fa-file-contract[_ngcontent-%COMP%]:before {
  content: "\\f56c";
}
.fa-file-csv[_ngcontent-%COMP%]:before {
  content: "\\f6dd";
}
.fa-file-download[_ngcontent-%COMP%]:before {
  content: "\\f56d";
}
.fa-file-excel[_ngcontent-%COMP%]:before {
  content: "\\f1c3";
}
.fa-file-export[_ngcontent-%COMP%]:before {
  content: "\\f56e";
}
.fa-file-image[_ngcontent-%COMP%]:before {
  content: "\\f1c5";
}
.fa-file-import[_ngcontent-%COMP%]:before {
  content: "\\f56f";
}
.fa-file-invoice[_ngcontent-%COMP%]:before {
  content: "\\f570";
}
.fa-file-invoice-dollar[_ngcontent-%COMP%]:before {
  content: "\\f571";
}
.fa-file-medical[_ngcontent-%COMP%]:before {
  content: "\\f477";
}
.fa-file-medical-alt[_ngcontent-%COMP%]:before {
  content: "\\f478";
}
.fa-file-pdf[_ngcontent-%COMP%]:before {
  content: "\\f1c1";
}
.fa-file-powerpoint[_ngcontent-%COMP%]:before {
  content: "\\f1c4";
}
.fa-file-prescription[_ngcontent-%COMP%]:before {
  content: "\\f572";
}
.fa-file-signature[_ngcontent-%COMP%]:before {
  content: "\\f573";
}
.fa-file-upload[_ngcontent-%COMP%]:before {
  content: "\\f574";
}
.fa-file-video[_ngcontent-%COMP%]:before {
  content: "\\f1c8";
}
.fa-file-word[_ngcontent-%COMP%]:before {
  content: "\\f1c2";
}
.fa-fill[_ngcontent-%COMP%]:before {
  content: "\\f575";
}
.fa-fill-drip[_ngcontent-%COMP%]:before {
  content: "\\f576";
}
.fa-film[_ngcontent-%COMP%]:before {
  content: "\\f008";
}
.fa-filter[_ngcontent-%COMP%]:before {
  content: "\\f0b0";
}
.fa-fingerprint[_ngcontent-%COMP%]:before {
  content: "\\f577";
}
.fa-fire[_ngcontent-%COMP%]:before {
  content: "\\f06d";
}
.fa-fire-alt[_ngcontent-%COMP%]:before {
  content: "\\f7e4";
}
.fa-fire-extinguisher[_ngcontent-%COMP%]:before {
  content: "\\f134";
}
.fa-firefox[_ngcontent-%COMP%]:before {
  content: "\\f269";
}
.fa-firefox-browser[_ngcontent-%COMP%]:before {
  content: "\\e007";
}
.fa-first-aid[_ngcontent-%COMP%]:before {
  content: "\\f479";
}
.fa-first-order[_ngcontent-%COMP%]:before {
  content: "\\f2b0";
}
.fa-first-order-alt[_ngcontent-%COMP%]:before {
  content: "\\f50a";
}
.fa-firstdraft[_ngcontent-%COMP%]:before {
  content: "\\f3a1";
}
.fa-fish[_ngcontent-%COMP%]:before {
  content: "\\f578";
}
.fa-fist-raised[_ngcontent-%COMP%]:before {
  content: "\\f6de";
}
.fa-flag[_ngcontent-%COMP%]:before {
  content: "\\f024";
}
.fa-flag-checkered[_ngcontent-%COMP%]:before {
  content: "\\f11e";
}
.fa-flag-usa[_ngcontent-%COMP%]:before {
  content: "\\f74d";
}
.fa-flask[_ngcontent-%COMP%]:before {
  content: "\\f0c3";
}
.fa-flickr[_ngcontent-%COMP%]:before {
  content: "\\f16e";
}
.fa-flipboard[_ngcontent-%COMP%]:before {
  content: "\\f44d";
}
.fa-flushed[_ngcontent-%COMP%]:before {
  content: "\\f579";
}
.fa-fly[_ngcontent-%COMP%]:before {
  content: "\\f417";
}
.fa-folder[_ngcontent-%COMP%]:before {
  content: "\\f07b";
}
.fa-folder-minus[_ngcontent-%COMP%]:before {
  content: "\\f65d";
}
.fa-folder-open[_ngcontent-%COMP%]:before {
  content: "\\f07c";
}
.fa-folder-plus[_ngcontent-%COMP%]:before {
  content: "\\f65e";
}
.fa-font[_ngcontent-%COMP%]:before {
  content: "\\f031";
}
.fa-font-awesome[_ngcontent-%COMP%]:before {
  content: "\\f2b4";
}
.fa-font-awesome-alt[_ngcontent-%COMP%]:before {
  content: "\\f35c";
}
.fa-font-awesome-flag[_ngcontent-%COMP%]:before {
  content: "\\f425";
}
.fa-font-awesome-logo-full[_ngcontent-%COMP%]:before {
  content: "\\f4e6";
}
.fa-fonticons[_ngcontent-%COMP%]:before {
  content: "\\f280";
}
.fa-fonticons-fi[_ngcontent-%COMP%]:before {
  content: "\\f3a2";
}
.fa-football-ball[_ngcontent-%COMP%]:before {
  content: "\\f44e";
}
.fa-fort-awesome[_ngcontent-%COMP%]:before {
  content: "\\f286";
}
.fa-fort-awesome-alt[_ngcontent-%COMP%]:before {
  content: "\\f3a3";
}
.fa-forumbee[_ngcontent-%COMP%]:before {
  content: "\\f211";
}
.fa-forward[_ngcontent-%COMP%]:before {
  content: "\\f04e";
}
.fa-foursquare[_ngcontent-%COMP%]:before {
  content: "\\f180";
}
.fa-free-code-camp[_ngcontent-%COMP%]:before {
  content: "\\f2c5";
}
.fa-freebsd[_ngcontent-%COMP%]:before {
  content: "\\f3a4";
}
.fa-frog[_ngcontent-%COMP%]:before {
  content: "\\f52e";
}
.fa-frown[_ngcontent-%COMP%]:before {
  content: "\\f119";
}
.fa-frown-open[_ngcontent-%COMP%]:before {
  content: "\\f57a";
}
.fa-fulcrum[_ngcontent-%COMP%]:before {
  content: "\\f50b";
}
.fa-funnel-dollar[_ngcontent-%COMP%]:before {
  content: "\\f662";
}
.fa-futbol[_ngcontent-%COMP%]:before {
  content: "\\f1e3";
}
.fa-galactic-republic[_ngcontent-%COMP%]:before {
  content: "\\f50c";
}
.fa-galactic-senate[_ngcontent-%COMP%]:before {
  content: "\\f50d";
}
.fa-gamepad[_ngcontent-%COMP%]:before {
  content: "\\f11b";
}
.fa-gas-pump[_ngcontent-%COMP%]:before {
  content: "\\f52f";
}
.fa-gavel[_ngcontent-%COMP%]:before {
  content: "\\f0e3";
}
.fa-gem[_ngcontent-%COMP%]:before {
  content: "\\f3a5";
}
.fa-genderless[_ngcontent-%COMP%]:before {
  content: "\\f22d";
}
.fa-get-pocket[_ngcontent-%COMP%]:before {
  content: "\\f265";
}
.fa-gg[_ngcontent-%COMP%]:before {
  content: "\\f260";
}
.fa-gg-circle[_ngcontent-%COMP%]:before {
  content: "\\f261";
}
.fa-ghost[_ngcontent-%COMP%]:before {
  content: "\\f6e2";
}
.fa-gift[_ngcontent-%COMP%]:before {
  content: "\\f06b";
}
.fa-gifts[_ngcontent-%COMP%]:before {
  content: "\\f79c";
}
.fa-git[_ngcontent-%COMP%]:before {
  content: "\\f1d3";
}
.fa-git-alt[_ngcontent-%COMP%]:before {
  content: "\\f841";
}
.fa-git-square[_ngcontent-%COMP%]:before {
  content: "\\f1d2";
}
.fa-github[_ngcontent-%COMP%]:before {
  content: "\\f09b";
}
.fa-github-alt[_ngcontent-%COMP%]:before {
  content: "\\f113";
}
.fa-github-square[_ngcontent-%COMP%]:before {
  content: "\\f092";
}
.fa-gitkraken[_ngcontent-%COMP%]:before {
  content: "\\f3a6";
}
.fa-gitlab[_ngcontent-%COMP%]:before {
  content: "\\f296";
}
.fa-gitter[_ngcontent-%COMP%]:before {
  content: "\\f426";
}
.fa-glass-cheers[_ngcontent-%COMP%]:before {
  content: "\\f79f";
}
.fa-glass-martini[_ngcontent-%COMP%]:before {
  content: "\\f000";
}
.fa-glass-martini-alt[_ngcontent-%COMP%]:before {
  content: "\\f57b";
}
.fa-glass-whiskey[_ngcontent-%COMP%]:before {
  content: "\\f7a0";
}
.fa-glasses[_ngcontent-%COMP%]:before {
  content: "\\f530";
}
.fa-glide[_ngcontent-%COMP%]:before {
  content: "\\f2a5";
}
.fa-glide-g[_ngcontent-%COMP%]:before {
  content: "\\f2a6";
}
.fa-globe[_ngcontent-%COMP%]:before {
  content: "\\f0ac";
}
.fa-globe-africa[_ngcontent-%COMP%]:before {
  content: "\\f57c";
}
.fa-globe-americas[_ngcontent-%COMP%]:before {
  content: "\\f57d";
}
.fa-globe-asia[_ngcontent-%COMP%]:before {
  content: "\\f57e";
}
.fa-globe-europe[_ngcontent-%COMP%]:before {
  content: "\\f7a2";
}
.fa-gofore[_ngcontent-%COMP%]:before {
  content: "\\f3a7";
}
.fa-golf-ball[_ngcontent-%COMP%]:before {
  content: "\\f450";
}
.fa-goodreads[_ngcontent-%COMP%]:before {
  content: "\\f3a8";
}
.fa-goodreads-g[_ngcontent-%COMP%]:before {
  content: "\\f3a9";
}
.fa-google[_ngcontent-%COMP%]:before {
  content: "\\f1a0";
}
.fa-google-drive[_ngcontent-%COMP%]:before {
  content: "\\f3aa";
}
.fa-google-pay[_ngcontent-%COMP%]:before {
  content: "\\e079";
}
.fa-google-play[_ngcontent-%COMP%]:before {
  content: "\\f3ab";
}
.fa-google-plus[_ngcontent-%COMP%]:before {
  content: "\\f2b3";
}
.fa-google-plus-g[_ngcontent-%COMP%]:before {
  content: "\\f0d5";
}
.fa-google-plus-square[_ngcontent-%COMP%]:before {
  content: "\\f0d4";
}
.fa-google-wallet[_ngcontent-%COMP%]:before {
  content: "\\f1ee";
}
.fa-gopuram[_ngcontent-%COMP%]:before {
  content: "\\f664";
}
.fa-graduation-cap[_ngcontent-%COMP%]:before {
  content: "\\f19d";
}
.fa-gratipay[_ngcontent-%COMP%]:before {
  content: "\\f184";
}
.fa-grav[_ngcontent-%COMP%]:before {
  content: "\\f2d6";
}
.fa-greater-than[_ngcontent-%COMP%]:before {
  content: "\\f531";
}
.fa-greater-than-equal[_ngcontent-%COMP%]:before {
  content: "\\f532";
}
.fa-grimace[_ngcontent-%COMP%]:before {
  content: "\\f57f";
}
.fa-grin[_ngcontent-%COMP%]:before {
  content: "\\f580";
}
.fa-grin-alt[_ngcontent-%COMP%]:before {
  content: "\\f581";
}
.fa-grin-beam[_ngcontent-%COMP%]:before {
  content: "\\f582";
}
.fa-grin-beam-sweat[_ngcontent-%COMP%]:before {
  content: "\\f583";
}
.fa-grin-hearts[_ngcontent-%COMP%]:before {
  content: "\\f584";
}
.fa-grin-squint[_ngcontent-%COMP%]:before {
  content: "\\f585";
}
.fa-grin-squint-tears[_ngcontent-%COMP%]:before {
  content: "\\f586";
}
.fa-grin-stars[_ngcontent-%COMP%]:before {
  content: "\\f587";
}
.fa-grin-tears[_ngcontent-%COMP%]:before {
  content: "\\f588";
}
.fa-grin-tongue[_ngcontent-%COMP%]:before {
  content: "\\f589";
}
.fa-grin-tongue-squint[_ngcontent-%COMP%]:before {
  content: "\\f58a";
}
.fa-grin-tongue-wink[_ngcontent-%COMP%]:before {
  content: "\\f58b";
}
.fa-grin-wink[_ngcontent-%COMP%]:before {
  content: "\\f58c";
}
.fa-grip-horizontal[_ngcontent-%COMP%]:before {
  content: "\\f58d";
}
.fa-grip-lines[_ngcontent-%COMP%]:before {
  content: "\\f7a4";
}
.fa-grip-lines-vertical[_ngcontent-%COMP%]:before {
  content: "\\f7a5";
}
.fa-grip-vertical[_ngcontent-%COMP%]:before {
  content: "\\f58e";
}
.fa-gripfire[_ngcontent-%COMP%]:before {
  content: "\\f3ac";
}
.fa-grunt[_ngcontent-%COMP%]:before {
  content: "\\f3ad";
}
.fa-guilded[_ngcontent-%COMP%]:before {
  content: "\\e07e";
}
.fa-guitar[_ngcontent-%COMP%]:before {
  content: "\\f7a6";
}
.fa-gulp[_ngcontent-%COMP%]:before {
  content: "\\f3ae";
}
.fa-h-square[_ngcontent-%COMP%]:before {
  content: "\\f0fd";
}
.fa-hacker-news[_ngcontent-%COMP%]:before {
  content: "\\f1d4";
}
.fa-hacker-news-square[_ngcontent-%COMP%]:before {
  content: "\\f3af";
}
.fa-hackerrank[_ngcontent-%COMP%]:before {
  content: "\\f5f7";
}
.fa-hamburger[_ngcontent-%COMP%]:before {
  content: "\\f805";
}
.fa-hammer[_ngcontent-%COMP%]:before {
  content: "\\f6e3";
}
.fa-hamsa[_ngcontent-%COMP%]:before {
  content: "\\f665";
}
.fa-hand-holding[_ngcontent-%COMP%]:before {
  content: "\\f4bd";
}
.fa-hand-holding-heart[_ngcontent-%COMP%]:before {
  content: "\\f4be";
}
.fa-hand-holding-medical[_ngcontent-%COMP%]:before {
  content: "\\e05c";
}
.fa-hand-holding-usd[_ngcontent-%COMP%]:before {
  content: "\\f4c0";
}
.fa-hand-holding-water[_ngcontent-%COMP%]:before {
  content: "\\f4c1";
}
.fa-hand-lizard[_ngcontent-%COMP%]:before {
  content: "\\f258";
}
.fa-hand-middle-finger[_ngcontent-%COMP%]:before {
  content: "\\f806";
}
.fa-hand-paper[_ngcontent-%COMP%]:before {
  content: "\\f256";
}
.fa-hand-peace[_ngcontent-%COMP%]:before {
  content: "\\f25b";
}
.fa-hand-point-down[_ngcontent-%COMP%]:before {
  content: "\\f0a7";
}
.fa-hand-point-left[_ngcontent-%COMP%]:before {
  content: "\\f0a5";
}
.fa-hand-point-right[_ngcontent-%COMP%]:before {
  content: "\\f0a4";
}
.fa-hand-point-up[_ngcontent-%COMP%]:before {
  content: "\\f0a6";
}
.fa-hand-pointer[_ngcontent-%COMP%]:before {
  content: "\\f25a";
}
.fa-hand-rock[_ngcontent-%COMP%]:before {
  content: "\\f255";
}
.fa-hand-scissors[_ngcontent-%COMP%]:before {
  content: "\\f257";
}
.fa-hand-sparkles[_ngcontent-%COMP%]:before {
  content: "\\e05d";
}
.fa-hand-spock[_ngcontent-%COMP%]:before {
  content: "\\f259";
}
.fa-hands[_ngcontent-%COMP%]:before {
  content: "\\f4c2";
}
.fa-hands-helping[_ngcontent-%COMP%]:before {
  content: "\\f4c4";
}
.fa-hands-wash[_ngcontent-%COMP%]:before {
  content: "\\e05e";
}
.fa-handshake[_ngcontent-%COMP%]:before {
  content: "\\f2b5";
}
.fa-handshake-alt-slash[_ngcontent-%COMP%]:before {
  content: "\\e05f";
}
.fa-handshake-slash[_ngcontent-%COMP%]:before {
  content: "\\e060";
}
.fa-hanukiah[_ngcontent-%COMP%]:before {
  content: "\\f6e6";
}
.fa-hard-hat[_ngcontent-%COMP%]:before {
  content: "\\f807";
}
.fa-hashtag[_ngcontent-%COMP%]:before {
  content: "\\f292";
}
.fa-hat-cowboy[_ngcontent-%COMP%]:before {
  content: "\\f8c0";
}
.fa-hat-cowboy-side[_ngcontent-%COMP%]:before {
  content: "\\f8c1";
}
.fa-hat-wizard[_ngcontent-%COMP%]:before {
  content: "\\f6e8";
}
.fa-hdd[_ngcontent-%COMP%]:before {
  content: "\\f0a0";
}
.fa-head-side-cough[_ngcontent-%COMP%]:before {
  content: "\\e061";
}
.fa-head-side-cough-slash[_ngcontent-%COMP%]:before {
  content: "\\e062";
}
.fa-head-side-mask[_ngcontent-%COMP%]:before {
  content: "\\e063";
}
.fa-head-side-virus[_ngcontent-%COMP%]:before {
  content: "\\e064";
}
.fa-heading[_ngcontent-%COMP%]:before {
  content: "\\f1dc";
}
.fa-headphones[_ngcontent-%COMP%]:before {
  content: "\\f025";
}
.fa-headphones-alt[_ngcontent-%COMP%]:before {
  content: "\\f58f";
}
.fa-headset[_ngcontent-%COMP%]:before {
  content: "\\f590";
}
.fa-heart[_ngcontent-%COMP%]:before {
  content: "\\f004";
}
.fa-heart-broken[_ngcontent-%COMP%]:before {
  content: "\\f7a9";
}
.fa-heartbeat[_ngcontent-%COMP%]:before {
  content: "\\f21e";
}
.fa-helicopter[_ngcontent-%COMP%]:before {
  content: "\\f533";
}
.fa-highlighter[_ngcontent-%COMP%]:before {
  content: "\\f591";
}
.fa-hiking[_ngcontent-%COMP%]:before {
  content: "\\f6ec";
}
.fa-hippo[_ngcontent-%COMP%]:before {
  content: "\\f6ed";
}
.fa-hips[_ngcontent-%COMP%]:before {
  content: "\\f452";
}
.fa-hire-a-helper[_ngcontent-%COMP%]:before {
  content: "\\f3b0";
}
.fa-history[_ngcontent-%COMP%]:before {
  content: "\\f1da";
}
.fa-hive[_ngcontent-%COMP%]:before {
  content: "\\e07f";
}
.fa-hockey-puck[_ngcontent-%COMP%]:before {
  content: "\\f453";
}
.fa-holly-berry[_ngcontent-%COMP%]:before {
  content: "\\f7aa";
}
.fa-home[_ngcontent-%COMP%]:before {
  content: "\\f015";
}
.fa-hooli[_ngcontent-%COMP%]:before {
  content: "\\f427";
}
.fa-hornbill[_ngcontent-%COMP%]:before {
  content: "\\f592";
}
.fa-horse[_ngcontent-%COMP%]:before {
  content: "\\f6f0";
}
.fa-horse-head[_ngcontent-%COMP%]:before {
  content: "\\f7ab";
}
.fa-hospital[_ngcontent-%COMP%]:before {
  content: "\\f0f8";
}
.fa-hospital-alt[_ngcontent-%COMP%]:before {
  content: "\\f47d";
}
.fa-hospital-symbol[_ngcontent-%COMP%]:before {
  content: "\\f47e";
}
.fa-hospital-user[_ngcontent-%COMP%]:before {
  content: "\\f80d";
}
.fa-hot-tub[_ngcontent-%COMP%]:before {
  content: "\\f593";
}
.fa-hotdog[_ngcontent-%COMP%]:before {
  content: "\\f80f";
}
.fa-hotel[_ngcontent-%COMP%]:before {
  content: "\\f594";
}
.fa-hotjar[_ngcontent-%COMP%]:before {
  content: "\\f3b1";
}
.fa-hourglass[_ngcontent-%COMP%]:before {
  content: "\\f254";
}
.fa-hourglass-end[_ngcontent-%COMP%]:before {
  content: "\\f253";
}
.fa-hourglass-half[_ngcontent-%COMP%]:before {
  content: "\\f252";
}
.fa-hourglass-start[_ngcontent-%COMP%]:before {
  content: "\\f251";
}
.fa-house-damage[_ngcontent-%COMP%]:before {
  content: "\\f6f1";
}
.fa-house-user[_ngcontent-%COMP%]:before {
  content: "\\e065";
}
.fa-houzz[_ngcontent-%COMP%]:before {
  content: "\\f27c";
}
.fa-hryvnia[_ngcontent-%COMP%]:before {
  content: "\\f6f2";
}
.fa-html5[_ngcontent-%COMP%]:before {
  content: "\\f13b";
}
.fa-hubspot[_ngcontent-%COMP%]:before {
  content: "\\f3b2";
}
.fa-i-cursor[_ngcontent-%COMP%]:before {
  content: "\\f246";
}
.fa-ice-cream[_ngcontent-%COMP%]:before {
  content: "\\f810";
}
.fa-icicles[_ngcontent-%COMP%]:before {
  content: "\\f7ad";
}
.fa-icons[_ngcontent-%COMP%]:before {
  content: "\\f86d";
}
.fa-id-badge[_ngcontent-%COMP%]:before {
  content: "\\f2c1";
}
.fa-id-card[_ngcontent-%COMP%]:before {
  content: "\\f2c2";
}
.fa-id-card-alt[_ngcontent-%COMP%]:before {
  content: "\\f47f";
}
.fa-ideal[_ngcontent-%COMP%]:before {
  content: "\\e013";
}
.fa-igloo[_ngcontent-%COMP%]:before {
  content: "\\f7ae";
}
.fa-image[_ngcontent-%COMP%]:before {
  content: "\\f03e";
}
.fa-images[_ngcontent-%COMP%]:before {
  content: "\\f302";
}
.fa-imdb[_ngcontent-%COMP%]:before {
  content: "\\f2d8";
}
.fa-inbox[_ngcontent-%COMP%]:before {
  content: "\\f01c";
}
.fa-indent[_ngcontent-%COMP%]:before {
  content: "\\f03c";
}
.fa-industry[_ngcontent-%COMP%]:before {
  content: "\\f275";
}
.fa-infinity[_ngcontent-%COMP%]:before {
  content: "\\f534";
}
.fa-info[_ngcontent-%COMP%]:before {
  content: "\\f129";
}
.fa-info-circle[_ngcontent-%COMP%]:before {
  content: "\\f05a";
}
.fa-innosoft[_ngcontent-%COMP%]:before {
  content: "\\e080";
}
.fa-instagram[_ngcontent-%COMP%]:before {
  content: "\\f16d";
}
.fa-instagram-square[_ngcontent-%COMP%]:before {
  content: "\\e055";
}
.fa-instalod[_ngcontent-%COMP%]:before {
  content: "\\e081";
}
.fa-intercom[_ngcontent-%COMP%]:before {
  content: "\\f7af";
}
.fa-internet-explorer[_ngcontent-%COMP%]:before {
  content: "\\f26b";
}
.fa-invision[_ngcontent-%COMP%]:before {
  content: "\\f7b0";
}
.fa-ioxhost[_ngcontent-%COMP%]:before {
  content: "\\f208";
}
.fa-italic[_ngcontent-%COMP%]:before {
  content: "\\f033";
}
.fa-itch-io[_ngcontent-%COMP%]:before {
  content: "\\f83a";
}
.fa-itunes[_ngcontent-%COMP%]:before {
  content: "\\f3b4";
}
.fa-itunes-note[_ngcontent-%COMP%]:before {
  content: "\\f3b5";
}
.fa-java[_ngcontent-%COMP%]:before {
  content: "\\f4e4";
}
.fa-jedi[_ngcontent-%COMP%]:before {
  content: "\\f669";
}
.fa-jedi-order[_ngcontent-%COMP%]:before {
  content: "\\f50e";
}
.fa-jenkins[_ngcontent-%COMP%]:before {
  content: "\\f3b6";
}
.fa-jira[_ngcontent-%COMP%]:before {
  content: "\\f7b1";
}
.fa-joget[_ngcontent-%COMP%]:before {
  content: "\\f3b7";
}
.fa-joint[_ngcontent-%COMP%]:before {
  content: "\\f595";
}
.fa-joomla[_ngcontent-%COMP%]:before {
  content: "\\f1aa";
}
.fa-journal-whills[_ngcontent-%COMP%]:before {
  content: "\\f66a";
}
.fa-js[_ngcontent-%COMP%]:before {
  content: "\\f3b8";
}
.fa-js-square[_ngcontent-%COMP%]:before {
  content: "\\f3b9";
}
.fa-jsfiddle[_ngcontent-%COMP%]:before {
  content: "\\f1cc";
}
.fa-kaaba[_ngcontent-%COMP%]:before {
  content: "\\f66b";
}
.fa-kaggle[_ngcontent-%COMP%]:before {
  content: "\\f5fa";
}
.fa-key[_ngcontent-%COMP%]:before {
  content: "\\f084";
}
.fa-keybase[_ngcontent-%COMP%]:before {
  content: "\\f4f5";
}
.fa-keyboard[_ngcontent-%COMP%]:before {
  content: "\\f11c";
}
.fa-keycdn[_ngcontent-%COMP%]:before {
  content: "\\f3ba";
}
.fa-khanda[_ngcontent-%COMP%]:before {
  content: "\\f66d";
}
.fa-kickstarter[_ngcontent-%COMP%]:before {
  content: "\\f3bb";
}
.fa-kickstarter-k[_ngcontent-%COMP%]:before {
  content: "\\f3bc";
}
.fa-kiss[_ngcontent-%COMP%]:before {
  content: "\\f596";
}
.fa-kiss-beam[_ngcontent-%COMP%]:before {
  content: "\\f597";
}
.fa-kiss-wink-heart[_ngcontent-%COMP%]:before {
  content: "\\f598";
}
.fa-kiwi-bird[_ngcontent-%COMP%]:before {
  content: "\\f535";
}
.fa-korvue[_ngcontent-%COMP%]:before {
  content: "\\f42f";
}
.fa-landmark[_ngcontent-%COMP%]:before {
  content: "\\f66f";
}
.fa-language[_ngcontent-%COMP%]:before {
  content: "\\f1ab";
}
.fa-laptop[_ngcontent-%COMP%]:before {
  content: "\\f109";
}
.fa-laptop-code[_ngcontent-%COMP%]:before {
  content: "\\f5fc";
}
.fa-laptop-house[_ngcontent-%COMP%]:before {
  content: "\\e066";
}
.fa-laptop-medical[_ngcontent-%COMP%]:before {
  content: "\\f812";
}
.fa-laravel[_ngcontent-%COMP%]:before {
  content: "\\f3bd";
}
.fa-lastfm[_ngcontent-%COMP%]:before {
  content: "\\f202";
}
.fa-lastfm-square[_ngcontent-%COMP%]:before {
  content: "\\f203";
}
.fa-laugh[_ngcontent-%COMP%]:before {
  content: "\\f599";
}
.fa-laugh-beam[_ngcontent-%COMP%]:before {
  content: "\\f59a";
}
.fa-laugh-squint[_ngcontent-%COMP%]:before {
  content: "\\f59b";
}
.fa-laugh-wink[_ngcontent-%COMP%]:before {
  content: "\\f59c";
}
.fa-layer-group[_ngcontent-%COMP%]:before {
  content: "\\f5fd";
}
.fa-leaf[_ngcontent-%COMP%]:before {
  content: "\\f06c";
}
.fa-leanpub[_ngcontent-%COMP%]:before {
  content: "\\f212";
}
.fa-lemon[_ngcontent-%COMP%]:before {
  content: "\\f094";
}
.fa-less[_ngcontent-%COMP%]:before {
  content: "\\f41d";
}
.fa-less-than[_ngcontent-%COMP%]:before {
  content: "\\f536";
}
.fa-less-than-equal[_ngcontent-%COMP%]:before {
  content: "\\f537";
}
.fa-level-down-alt[_ngcontent-%COMP%]:before {
  content: "\\f3be";
}
.fa-level-up-alt[_ngcontent-%COMP%]:before {
  content: "\\f3bf";
}
.fa-life-ring[_ngcontent-%COMP%]:before {
  content: "\\f1cd";
}
.fa-lightbulb[_ngcontent-%COMP%]:before {
  content: "\\f0eb";
}
.fa-line[_ngcontent-%COMP%]:before {
  content: "\\f3c0";
}
.fa-link[_ngcontent-%COMP%]:before {
  content: "\\f0c1";
}
.fa-linkedin[_ngcontent-%COMP%]:before {
  content: "\\f08c";
}
.fa-linkedin-in[_ngcontent-%COMP%]:before {
  content: "\\f0e1";
}
.fa-linode[_ngcontent-%COMP%]:before {
  content: "\\f2b8";
}
.fa-linux[_ngcontent-%COMP%]:before {
  content: "\\f17c";
}
.fa-lira-sign[_ngcontent-%COMP%]:before {
  content: "\\f195";
}
.fa-list[_ngcontent-%COMP%]:before {
  content: "\\f03a";
}
.fa-list-alt[_ngcontent-%COMP%]:before {
  content: "\\f022";
}
.fa-list-ol[_ngcontent-%COMP%]:before {
  content: "\\f0cb";
}
.fa-list-ul[_ngcontent-%COMP%]:before {
  content: "\\f0ca";
}
.fa-location-arrow[_ngcontent-%COMP%]:before {
  content: "\\f124";
}
.fa-lock[_ngcontent-%COMP%]:before {
  content: "\\f023";
}
.fa-lock-open[_ngcontent-%COMP%]:before {
  content: "\\f3c1";
}
.fa-long-arrow-alt-down[_ngcontent-%COMP%]:before {
  content: "\\f309";
}
.fa-long-arrow-alt-left[_ngcontent-%COMP%]:before {
  content: "\\f30a";
}
.fa-long-arrow-alt-right[_ngcontent-%COMP%]:before {
  content: "\\f30b";
}
.fa-long-arrow-alt-up[_ngcontent-%COMP%]:before {
  content: "\\f30c";
}
.fa-low-vision[_ngcontent-%COMP%]:before {
  content: "\\f2a8";
}
.fa-luggage-cart[_ngcontent-%COMP%]:before {
  content: "\\f59d";
}
.fa-lungs[_ngcontent-%COMP%]:before {
  content: "\\f604";
}
.fa-lungs-virus[_ngcontent-%COMP%]:before {
  content: "\\e067";
}
.fa-lyft[_ngcontent-%COMP%]:before {
  content: "\\f3c3";
}
.fa-magento[_ngcontent-%COMP%]:before {
  content: "\\f3c4";
}
.fa-magic[_ngcontent-%COMP%]:before {
  content: "\\f0d0";
}
.fa-magnet[_ngcontent-%COMP%]:before {
  content: "\\f076";
}
.fa-mail-bulk[_ngcontent-%COMP%]:before {
  content: "\\f674";
}
.fa-mailchimp[_ngcontent-%COMP%]:before {
  content: "\\f59e";
}
.fa-male[_ngcontent-%COMP%]:before {
  content: "\\f183";
}
.fa-mandalorian[_ngcontent-%COMP%]:before {
  content: "\\f50f";
}
.fa-map[_ngcontent-%COMP%]:before {
  content: "\\f279";
}
.fa-map-marked[_ngcontent-%COMP%]:before {
  content: "\\f59f";
}
.fa-map-marked-alt[_ngcontent-%COMP%]:before {
  content: "\\f5a0";
}
.fa-map-marker[_ngcontent-%COMP%]:before {
  content: "\\f041";
}
.fa-map-marker-alt[_ngcontent-%COMP%]:before {
  content: "\\f3c5";
}
.fa-map-pin[_ngcontent-%COMP%]:before {
  content: "\\f276";
}
.fa-map-signs[_ngcontent-%COMP%]:before {
  content: "\\f277";
}
.fa-markdown[_ngcontent-%COMP%]:before {
  content: "\\f60f";
}
.fa-marker[_ngcontent-%COMP%]:before {
  content: "\\f5a1";
}
.fa-mars[_ngcontent-%COMP%]:before {
  content: "\\f222";
}
.fa-mars-double[_ngcontent-%COMP%]:before {
  content: "\\f227";
}
.fa-mars-stroke[_ngcontent-%COMP%]:before {
  content: "\\f229";
}
.fa-mars-stroke-h[_ngcontent-%COMP%]:before {
  content: "\\f22b";
}
.fa-mars-stroke-v[_ngcontent-%COMP%]:before {
  content: "\\f22a";
}
.fa-mask[_ngcontent-%COMP%]:before {
  content: "\\f6fa";
}
.fa-mastodon[_ngcontent-%COMP%]:before {
  content: "\\f4f6";
}
.fa-maxcdn[_ngcontent-%COMP%]:before {
  content: "\\f136";
}
.fa-mdb[_ngcontent-%COMP%]:before {
  content: "\\f8ca";
}
.fa-medal[_ngcontent-%COMP%]:before {
  content: "\\f5a2";
}
.fa-medapps[_ngcontent-%COMP%]:before {
  content: "\\f3c6";
}
.fa-medium[_ngcontent-%COMP%]:before {
  content: "\\f23a";
}
.fa-medium-m[_ngcontent-%COMP%]:before {
  content: "\\f3c7";
}
.fa-medkit[_ngcontent-%COMP%]:before {
  content: "\\f0fa";
}
.fa-medrt[_ngcontent-%COMP%]:before {
  content: "\\f3c8";
}
.fa-meetup[_ngcontent-%COMP%]:before {
  content: "\\f2e0";
}
.fa-megaport[_ngcontent-%COMP%]:before {
  content: "\\f5a3";
}
.fa-meh[_ngcontent-%COMP%]:before {
  content: "\\f11a";
}
.fa-meh-blank[_ngcontent-%COMP%]:before {
  content: "\\f5a4";
}
.fa-meh-rolling-eyes[_ngcontent-%COMP%]:before {
  content: "\\f5a5";
}
.fa-memory[_ngcontent-%COMP%]:before {
  content: "\\f538";
}
.fa-mendeley[_ngcontent-%COMP%]:before {
  content: "\\f7b3";
}
.fa-menorah[_ngcontent-%COMP%]:before {
  content: "\\f676";
}
.fa-mercury[_ngcontent-%COMP%]:before {
  content: "\\f223";
}
.fa-meteor[_ngcontent-%COMP%]:before {
  content: "\\f753";
}
.fa-microblog[_ngcontent-%COMP%]:before {
  content: "\\e01a";
}
.fa-microchip[_ngcontent-%COMP%]:before {
  content: "\\f2db";
}
.fa-microphone[_ngcontent-%COMP%]:before {
  content: "\\f130";
}
.fa-microphone-alt[_ngcontent-%COMP%]:before {
  content: "\\f3c9";
}
.fa-microphone-alt-slash[_ngcontent-%COMP%]:before {
  content: "\\f539";
}
.fa-microphone-slash[_ngcontent-%COMP%]:before {
  content: "\\f131";
}
.fa-microscope[_ngcontent-%COMP%]:before {
  content: "\\f610";
}
.fa-microsoft[_ngcontent-%COMP%]:before {
  content: "\\f3ca";
}
.fa-minus[_ngcontent-%COMP%]:before {
  content: "\\f068";
}
.fa-minus-circle[_ngcontent-%COMP%]:before {
  content: "\\f056";
}
.fa-minus-square[_ngcontent-%COMP%]:before {
  content: "\\f146";
}
.fa-mitten[_ngcontent-%COMP%]:before {
  content: "\\f7b5";
}
.fa-mix[_ngcontent-%COMP%]:before {
  content: "\\f3cb";
}
.fa-mixcloud[_ngcontent-%COMP%]:before {
  content: "\\f289";
}
.fa-mixer[_ngcontent-%COMP%]:before {
  content: "\\e056";
}
.fa-mizuni[_ngcontent-%COMP%]:before {
  content: "\\f3cc";
}
.fa-mobile[_ngcontent-%COMP%]:before {
  content: "\\f10b";
}
.fa-mobile-alt[_ngcontent-%COMP%]:before {
  content: "\\f3cd";
}
.fa-modx[_ngcontent-%COMP%]:before {
  content: "\\f285";
}
.fa-monero[_ngcontent-%COMP%]:before {
  content: "\\f3d0";
}
.fa-money-bill[_ngcontent-%COMP%]:before {
  content: "\\f0d6";
}
.fa-money-bill-alt[_ngcontent-%COMP%]:before {
  content: "\\f3d1";
}
.fa-money-bill-wave[_ngcontent-%COMP%]:before {
  content: "\\f53a";
}
.fa-money-bill-wave-alt[_ngcontent-%COMP%]:before {
  content: "\\f53b";
}
.fa-money-check[_ngcontent-%COMP%]:before {
  content: "\\f53c";
}
.fa-money-check-alt[_ngcontent-%COMP%]:before {
  content: "\\f53d";
}
.fa-monument[_ngcontent-%COMP%]:before {
  content: "\\f5a6";
}
.fa-moon[_ngcontent-%COMP%]:before {
  content: "\\f186";
}
.fa-mortar-pestle[_ngcontent-%COMP%]:before {
  content: "\\f5a7";
}
.fa-mosque[_ngcontent-%COMP%]:before {
  content: "\\f678";
}
.fa-motorcycle[_ngcontent-%COMP%]:before {
  content: "\\f21c";
}
.fa-mountain[_ngcontent-%COMP%]:before {
  content: "\\f6fc";
}
.fa-mouse[_ngcontent-%COMP%]:before {
  content: "\\f8cc";
}
.fa-mouse-pointer[_ngcontent-%COMP%]:before {
  content: "\\f245";
}
.fa-mug-hot[_ngcontent-%COMP%]:before {
  content: "\\f7b6";
}
.fa-music[_ngcontent-%COMP%]:before {
  content: "\\f001";
}
.fa-napster[_ngcontent-%COMP%]:before {
  content: "\\f3d2";
}
.fa-neos[_ngcontent-%COMP%]:before {
  content: "\\f612";
}
.fa-network-wired[_ngcontent-%COMP%]:before {
  content: "\\f6ff";
}
.fa-neuter[_ngcontent-%COMP%]:before {
  content: "\\f22c";
}
.fa-newspaper[_ngcontent-%COMP%]:before {
  content: "\\f1ea";
}
.fa-nimblr[_ngcontent-%COMP%]:before {
  content: "\\f5a8";
}
.fa-node[_ngcontent-%COMP%]:before {
  content: "\\f419";
}
.fa-node-js[_ngcontent-%COMP%]:before {
  content: "\\f3d3";
}
.fa-not-equal[_ngcontent-%COMP%]:before {
  content: "\\f53e";
}
.fa-notes-medical[_ngcontent-%COMP%]:before {
  content: "\\f481";
}
.fa-npm[_ngcontent-%COMP%]:before {
  content: "\\f3d4";
}
.fa-ns8[_ngcontent-%COMP%]:before {
  content: "\\f3d5";
}
.fa-nutritionix[_ngcontent-%COMP%]:before {
  content: "\\f3d6";
}
.fa-object-group[_ngcontent-%COMP%]:before {
  content: "\\f247";
}
.fa-object-ungroup[_ngcontent-%COMP%]:before {
  content: "\\f248";
}
.fa-octopus-deploy[_ngcontent-%COMP%]:before {
  content: "\\e082";
}
.fa-odnoklassniki[_ngcontent-%COMP%]:before {
  content: "\\f263";
}
.fa-odnoklassniki-square[_ngcontent-%COMP%]:before {
  content: "\\f264";
}
.fa-oil-can[_ngcontent-%COMP%]:before {
  content: "\\f613";
}
.fa-old-republic[_ngcontent-%COMP%]:before {
  content: "\\f510";
}
.fa-om[_ngcontent-%COMP%]:before {
  content: "\\f679";
}
.fa-opencart[_ngcontent-%COMP%]:before {
  content: "\\f23d";
}
.fa-openid[_ngcontent-%COMP%]:before {
  content: "\\f19b";
}
.fa-opera[_ngcontent-%COMP%]:before {
  content: "\\f26a";
}
.fa-optin-monster[_ngcontent-%COMP%]:before {
  content: "\\f23c";
}
.fa-orcid[_ngcontent-%COMP%]:before {
  content: "\\f8d2";
}
.fa-osi[_ngcontent-%COMP%]:before {
  content: "\\f41a";
}
.fa-otter[_ngcontent-%COMP%]:before {
  content: "\\f700";
}
.fa-outdent[_ngcontent-%COMP%]:before {
  content: "\\f03b";
}
.fa-page4[_ngcontent-%COMP%]:before {
  content: "\\f3d7";
}
.fa-pagelines[_ngcontent-%COMP%]:before {
  content: "\\f18c";
}
.fa-pager[_ngcontent-%COMP%]:before {
  content: "\\f815";
}
.fa-paint-brush[_ngcontent-%COMP%]:before {
  content: "\\f1fc";
}
.fa-paint-roller[_ngcontent-%COMP%]:before {
  content: "\\f5aa";
}
.fa-palette[_ngcontent-%COMP%]:before {
  content: "\\f53f";
}
.fa-palfed[_ngcontent-%COMP%]:before {
  content: "\\f3d8";
}
.fa-pallet[_ngcontent-%COMP%]:before {
  content: "\\f482";
}
.fa-paper-plane[_ngcontent-%COMP%]:before {
  content: "\\f1d8";
}
.fa-paperclip[_ngcontent-%COMP%]:before {
  content: "\\f0c6";
}
.fa-parachute-box[_ngcontent-%COMP%]:before {
  content: "\\f4cd";
}
.fa-paragraph[_ngcontent-%COMP%]:before {
  content: "\\f1dd";
}
.fa-parking[_ngcontent-%COMP%]:before {
  content: "\\f540";
}
.fa-passport[_ngcontent-%COMP%]:before {
  content: "\\f5ab";
}
.fa-pastafarianism[_ngcontent-%COMP%]:before {
  content: "\\f67b";
}
.fa-paste[_ngcontent-%COMP%]:before {
  content: "\\f0ea";
}
.fa-patreon[_ngcontent-%COMP%]:before {
  content: "\\f3d9";
}
.fa-pause[_ngcontent-%COMP%]:before {
  content: "\\f04c";
}
.fa-pause-circle[_ngcontent-%COMP%]:before {
  content: "\\f28b";
}
.fa-paw[_ngcontent-%COMP%]:before {
  content: "\\f1b0";
}
.fa-paypal[_ngcontent-%COMP%]:before {
  content: "\\f1ed";
}
.fa-peace[_ngcontent-%COMP%]:before {
  content: "\\f67c";
}
.fa-pen[_ngcontent-%COMP%]:before {
  content: "\\f304";
}
.fa-pen-alt[_ngcontent-%COMP%]:before {
  content: "\\f305";
}
.fa-pen-fancy[_ngcontent-%COMP%]:before {
  content: "\\f5ac";
}
.fa-pen-nib[_ngcontent-%COMP%]:before {
  content: "\\f5ad";
}
.fa-pen-square[_ngcontent-%COMP%]:before {
  content: "\\f14b";
}
.fa-pencil-alt[_ngcontent-%COMP%]:before {
  content: "\\f303";
}
.fa-pencil-ruler[_ngcontent-%COMP%]:before {
  content: "\\f5ae";
}
.fa-penny-arcade[_ngcontent-%COMP%]:before {
  content: "\\f704";
}
.fa-people-arrows[_ngcontent-%COMP%]:before {
  content: "\\e068";
}
.fa-people-carry[_ngcontent-%COMP%]:before {
  content: "\\f4ce";
}
.fa-pepper-hot[_ngcontent-%COMP%]:before {
  content: "\\f816";
}
.fa-perbyte[_ngcontent-%COMP%]:before {
  content: "\\e083";
}
.fa-percent[_ngcontent-%COMP%]:before {
  content: "\\f295";
}
.fa-percentage[_ngcontent-%COMP%]:before {
  content: "\\f541";
}
.fa-periscope[_ngcontent-%COMP%]:before {
  content: "\\f3da";
}
.fa-person-booth[_ngcontent-%COMP%]:before {
  content: "\\f756";
}
.fa-phabricator[_ngcontent-%COMP%]:before {
  content: "\\f3db";
}
.fa-phoenix-framework[_ngcontent-%COMP%]:before {
  content: "\\f3dc";
}
.fa-phoenix-squadron[_ngcontent-%COMP%]:before {
  content: "\\f511";
}
.fa-phone[_ngcontent-%COMP%]:before {
  content: "\\f095";
}
.fa-phone-alt[_ngcontent-%COMP%]:before {
  content: "\\f879";
}
.fa-phone-slash[_ngcontent-%COMP%]:before {
  content: "\\f3dd";
}
.fa-phone-square[_ngcontent-%COMP%]:before {
  content: "\\f098";
}
.fa-phone-square-alt[_ngcontent-%COMP%]:before {
  content: "\\f87b";
}
.fa-phone-volume[_ngcontent-%COMP%]:before {
  content: "\\f2a0";
}
.fa-photo-video[_ngcontent-%COMP%]:before {
  content: "\\f87c";
}
.fa-php[_ngcontent-%COMP%]:before {
  content: "\\f457";
}
.fa-pied-piper[_ngcontent-%COMP%]:before {
  content: "\\f2ae";
}
.fa-pied-piper-alt[_ngcontent-%COMP%]:before {
  content: "\\f1a8";
}
.fa-pied-piper-hat[_ngcontent-%COMP%]:before {
  content: "\\f4e5";
}
.fa-pied-piper-pp[_ngcontent-%COMP%]:before {
  content: "\\f1a7";
}
.fa-pied-piper-square[_ngcontent-%COMP%]:before {
  content: "\\e01e";
}
.fa-piggy-bank[_ngcontent-%COMP%]:before {
  content: "\\f4d3";
}
.fa-pills[_ngcontent-%COMP%]:before {
  content: "\\f484";
}
.fa-pinterest[_ngcontent-%COMP%]:before {
  content: "\\f0d2";
}
.fa-pinterest-p[_ngcontent-%COMP%]:before {
  content: "\\f231";
}
.fa-pinterest-square[_ngcontent-%COMP%]:before {
  content: "\\f0d3";
}
.fa-pizza-slice[_ngcontent-%COMP%]:before {
  content: "\\f818";
}
.fa-place-of-worship[_ngcontent-%COMP%]:before {
  content: "\\f67f";
}
.fa-plane[_ngcontent-%COMP%]:before {
  content: "\\f072";
}
.fa-plane-arrival[_ngcontent-%COMP%]:before {
  content: "\\f5af";
}
.fa-plane-departure[_ngcontent-%COMP%]:before {
  content: "\\f5b0";
}
.fa-plane-slash[_ngcontent-%COMP%]:before {
  content: "\\e069";
}
.fa-play[_ngcontent-%COMP%]:before {
  content: "\\f04b";
}
.fa-play-circle[_ngcontent-%COMP%]:before {
  content: "\\f144";
}
.fa-playstation[_ngcontent-%COMP%]:before {
  content: "\\f3df";
}
.fa-plug[_ngcontent-%COMP%]:before {
  content: "\\f1e6";
}
.fa-plus[_ngcontent-%COMP%]:before {
  content: "\\f067";
}
.fa-plus-circle[_ngcontent-%COMP%]:before {
  content: "\\f055";
}
.fa-plus-square[_ngcontent-%COMP%]:before {
  content: "\\f0fe";
}
.fa-podcast[_ngcontent-%COMP%]:before {
  content: "\\f2ce";
}
.fa-poll[_ngcontent-%COMP%]:before {
  content: "\\f681";
}
.fa-poll-h[_ngcontent-%COMP%]:before {
  content: "\\f682";
}
.fa-poo[_ngcontent-%COMP%]:before {
  content: "\\f2fe";
}
.fa-poo-storm[_ngcontent-%COMP%]:before {
  content: "\\f75a";
}
.fa-poop[_ngcontent-%COMP%]:before {
  content: "\\f619";
}
.fa-portrait[_ngcontent-%COMP%]:before {
  content: "\\f3e0";
}
.fa-pound-sign[_ngcontent-%COMP%]:before {
  content: "\\f154";
}
.fa-power-off[_ngcontent-%COMP%]:before {
  content: "\\f011";
}
.fa-pray[_ngcontent-%COMP%]:before {
  content: "\\f683";
}
.fa-praying-hands[_ngcontent-%COMP%]:before {
  content: "\\f684";
}
.fa-prescription[_ngcontent-%COMP%]:before {
  content: "\\f5b1";
}
.fa-prescription-bottle[_ngcontent-%COMP%]:before {
  content: "\\f485";
}
.fa-prescription-bottle-alt[_ngcontent-%COMP%]:before {
  content: "\\f486";
}
.fa-print[_ngcontent-%COMP%]:before {
  content: "\\f02f";
}
.fa-procedures[_ngcontent-%COMP%]:before {
  content: "\\f487";
}
.fa-product-hunt[_ngcontent-%COMP%]:before {
  content: "\\f288";
}
.fa-project-diagram[_ngcontent-%COMP%]:before {
  content: "\\f542";
}
.fa-pump-medical[_ngcontent-%COMP%]:before {
  content: "\\e06a";
}
.fa-pump-soap[_ngcontent-%COMP%]:before {
  content: "\\e06b";
}
.fa-pushed[_ngcontent-%COMP%]:before {
  content: "\\f3e1";
}
.fa-puzzle-piece[_ngcontent-%COMP%]:before {
  content: "\\f12e";
}
.fa-python[_ngcontent-%COMP%]:before {
  content: "\\f3e2";
}
.fa-qq[_ngcontent-%COMP%]:before {
  content: "\\f1d6";
}
.fa-qrcode[_ngcontent-%COMP%]:before {
  content: "\\f029";
}
.fa-question[_ngcontent-%COMP%]:before {
  content: "\\f128";
}
.fa-question-circle[_ngcontent-%COMP%]:before {
  content: "\\f059";
}
.fa-quidditch[_ngcontent-%COMP%]:before {
  content: "\\f458";
}
.fa-quinscape[_ngcontent-%COMP%]:before {
  content: "\\f459";
}
.fa-quora[_ngcontent-%COMP%]:before {
  content: "\\f2c4";
}
.fa-quote-left[_ngcontent-%COMP%]:before {
  content: "\\f10d";
}
.fa-quote-right[_ngcontent-%COMP%]:before {
  content: "\\f10e";
}
.fa-quran[_ngcontent-%COMP%]:before {
  content: "\\f687";
}
.fa-r-project[_ngcontent-%COMP%]:before {
  content: "\\f4f7";
}
.fa-radiation[_ngcontent-%COMP%]:before {
  content: "\\f7b9";
}
.fa-radiation-alt[_ngcontent-%COMP%]:before {
  content: "\\f7ba";
}
.fa-rainbow[_ngcontent-%COMP%]:before {
  content: "\\f75b";
}
.fa-random[_ngcontent-%COMP%]:before {
  content: "\\f074";
}
.fa-raspberry-pi[_ngcontent-%COMP%]:before {
  content: "\\f7bb";
}
.fa-ravelry[_ngcontent-%COMP%]:before {
  content: "\\f2d9";
}
.fa-react[_ngcontent-%COMP%]:before {
  content: "\\f41b";
}
.fa-reacteurope[_ngcontent-%COMP%]:before {
  content: "\\f75d";
}
.fa-readme[_ngcontent-%COMP%]:before {
  content: "\\f4d5";
}
.fa-rebel[_ngcontent-%COMP%]:before {
  content: "\\f1d0";
}
.fa-receipt[_ngcontent-%COMP%]:before {
  content: "\\f543";
}
.fa-record-vinyl[_ngcontent-%COMP%]:before {
  content: "\\f8d9";
}
.fa-recycle[_ngcontent-%COMP%]:before {
  content: "\\f1b8";
}
.fa-red-river[_ngcontent-%COMP%]:before {
  content: "\\f3e3";
}
.fa-reddit[_ngcontent-%COMP%]:before {
  content: "\\f1a1";
}
.fa-reddit-alien[_ngcontent-%COMP%]:before {
  content: "\\f281";
}
.fa-reddit-square[_ngcontent-%COMP%]:before {
  content: "\\f1a2";
}
.fa-redhat[_ngcontent-%COMP%]:before {
  content: "\\f7bc";
}
.fa-redo[_ngcontent-%COMP%]:before {
  content: "\\f01e";
}
.fa-redo-alt[_ngcontent-%COMP%]:before {
  content: "\\f2f9";
}
.fa-registered[_ngcontent-%COMP%]:before {
  content: "\\f25d";
}
.fa-remove-format[_ngcontent-%COMP%]:before {
  content: "\\f87d";
}
.fa-renren[_ngcontent-%COMP%]:before {
  content: "\\f18b";
}
.fa-reply[_ngcontent-%COMP%]:before {
  content: "\\f3e5";
}
.fa-reply-all[_ngcontent-%COMP%]:before {
  content: "\\f122";
}
.fa-replyd[_ngcontent-%COMP%]:before {
  content: "\\f3e6";
}
.fa-republican[_ngcontent-%COMP%]:before {
  content: "\\f75e";
}
.fa-researchgate[_ngcontent-%COMP%]:before {
  content: "\\f4f8";
}
.fa-resolving[_ngcontent-%COMP%]:before {
  content: "\\f3e7";
}
.fa-restroom[_ngcontent-%COMP%]:before {
  content: "\\f7bd";
}
.fa-retweet[_ngcontent-%COMP%]:before {
  content: "\\f079";
}
.fa-rev[_ngcontent-%COMP%]:before {
  content: "\\f5b2";
}
.fa-ribbon[_ngcontent-%COMP%]:before {
  content: "\\f4d6";
}
.fa-ring[_ngcontent-%COMP%]:before {
  content: "\\f70b";
}
.fa-road[_ngcontent-%COMP%]:before {
  content: "\\f018";
}
.fa-robot[_ngcontent-%COMP%]:before {
  content: "\\f544";
}
.fa-rocket[_ngcontent-%COMP%]:before {
  content: "\\f135";
}
.fa-rocketchat[_ngcontent-%COMP%]:before {
  content: "\\f3e8";
}
.fa-rockrms[_ngcontent-%COMP%]:before {
  content: "\\f3e9";
}
.fa-route[_ngcontent-%COMP%]:before {
  content: "\\f4d7";
}
.fa-rss[_ngcontent-%COMP%]:before {
  content: "\\f09e";
}
.fa-rss-square[_ngcontent-%COMP%]:before {
  content: "\\f143";
}
.fa-ruble-sign[_ngcontent-%COMP%]:before {
  content: "\\f158";
}
.fa-ruler[_ngcontent-%COMP%]:before {
  content: "\\f545";
}
.fa-ruler-combined[_ngcontent-%COMP%]:before {
  content: "\\f546";
}
.fa-ruler-horizontal[_ngcontent-%COMP%]:before {
  content: "\\f547";
}
.fa-ruler-vertical[_ngcontent-%COMP%]:before {
  content: "\\f548";
}
.fa-running[_ngcontent-%COMP%]:before {
  content: "\\f70c";
}
.fa-rupee-sign[_ngcontent-%COMP%]:before {
  content: "\\f156";
}
.fa-rust[_ngcontent-%COMP%]:before {
  content: "\\e07a";
}
.fa-sad-cry[_ngcontent-%COMP%]:before {
  content: "\\f5b3";
}
.fa-sad-tear[_ngcontent-%COMP%]:before {
  content: "\\f5b4";
}
.fa-safari[_ngcontent-%COMP%]:before {
  content: "\\f267";
}
.fa-salesforce[_ngcontent-%COMP%]:before {
  content: "\\f83b";
}
.fa-sass[_ngcontent-%COMP%]:before {
  content: "\\f41e";
}
.fa-satellite[_ngcontent-%COMP%]:before {
  content: "\\f7bf";
}
.fa-satellite-dish[_ngcontent-%COMP%]:before {
  content: "\\f7c0";
}
.fa-save[_ngcontent-%COMP%]:before {
  content: "\\f0c7";
}
.fa-schlix[_ngcontent-%COMP%]:before {
  content: "\\f3ea";
}
.fa-school[_ngcontent-%COMP%]:before {
  content: "\\f549";
}
.fa-screwdriver[_ngcontent-%COMP%]:before {
  content: "\\f54a";
}
.fa-scribd[_ngcontent-%COMP%]:before {
  content: "\\f28a";
}
.fa-scroll[_ngcontent-%COMP%]:before {
  content: "\\f70e";
}
.fa-sd-card[_ngcontent-%COMP%]:before {
  content: "\\f7c2";
}
.fa-search[_ngcontent-%COMP%]:before {
  content: "\\f002";
}
.fa-search-dollar[_ngcontent-%COMP%]:before {
  content: "\\f688";
}
.fa-search-location[_ngcontent-%COMP%]:before {
  content: "\\f689";
}
.fa-search-minus[_ngcontent-%COMP%]:before {
  content: "\\f010";
}
.fa-search-plus[_ngcontent-%COMP%]:before {
  content: "\\f00e";
}
.fa-searchengin[_ngcontent-%COMP%]:before {
  content: "\\f3eb";
}
.fa-seedling[_ngcontent-%COMP%]:before {
  content: "\\f4d8";
}
.fa-sellcast[_ngcontent-%COMP%]:before {
  content: "\\f2da";
}
.fa-sellsy[_ngcontent-%COMP%]:before {
  content: "\\f213";
}
.fa-server[_ngcontent-%COMP%]:before {
  content: "\\f233";
}
.fa-servicestack[_ngcontent-%COMP%]:before {
  content: "\\f3ec";
}
.fa-shapes[_ngcontent-%COMP%]:before {
  content: "\\f61f";
}
.fa-share[_ngcontent-%COMP%]:before {
  content: "\\f064";
}
.fa-share-alt[_ngcontent-%COMP%]:before {
  content: "\\f1e0";
}
.fa-share-alt-square[_ngcontent-%COMP%]:before {
  content: "\\f1e1";
}
.fa-share-square[_ngcontent-%COMP%]:before {
  content: "\\f14d";
}
.fa-shekel-sign[_ngcontent-%COMP%]:before {
  content: "\\f20b";
}
.fa-shield-alt[_ngcontent-%COMP%]:before {
  content: "\\f3ed";
}
.fa-shield-virus[_ngcontent-%COMP%]:before {
  content: "\\e06c";
}
.fa-ship[_ngcontent-%COMP%]:before {
  content: "\\f21a";
}
.fa-shipping-fast[_ngcontent-%COMP%]:before {
  content: "\\f48b";
}
.fa-shirtsinbulk[_ngcontent-%COMP%]:before {
  content: "\\f214";
}
.fa-shoe-prints[_ngcontent-%COMP%]:before {
  content: "\\f54b";
}
.fa-shopify[_ngcontent-%COMP%]:before {
  content: "\\e057";
}
.fa-shopping-bag[_ngcontent-%COMP%]:before {
  content: "\\f290";
}
.fa-shopping-basket[_ngcontent-%COMP%]:before {
  content: "\\f291";
}
.fa-shopping-cart[_ngcontent-%COMP%]:before {
  content: "\\f07a";
}
.fa-shopware[_ngcontent-%COMP%]:before {
  content: "\\f5b5";
}
.fa-shower[_ngcontent-%COMP%]:before {
  content: "\\f2cc";
}
.fa-shuttle-van[_ngcontent-%COMP%]:before {
  content: "\\f5b6";
}
.fa-sign[_ngcontent-%COMP%]:before {
  content: "\\f4d9";
}
.fa-sign-in-alt[_ngcontent-%COMP%]:before {
  content: "\\f2f6";
}
.fa-sign-language[_ngcontent-%COMP%]:before {
  content: "\\f2a7";
}
.fa-sign-out-alt[_ngcontent-%COMP%]:before {
  content: "\\f2f5";
}
.fa-signal[_ngcontent-%COMP%]:before {
  content: "\\f012";
}
.fa-signature[_ngcontent-%COMP%]:before {
  content: "\\f5b7";
}
.fa-sim-card[_ngcontent-%COMP%]:before {
  content: "\\f7c4";
}
.fa-simplybuilt[_ngcontent-%COMP%]:before {
  content: "\\f215";
}
.fa-sink[_ngcontent-%COMP%]:before {
  content: "\\e06d";
}
.fa-sistrix[_ngcontent-%COMP%]:before {
  content: "\\f3ee";
}
.fa-sitemap[_ngcontent-%COMP%]:before {
  content: "\\f0e8";
}
.fa-sith[_ngcontent-%COMP%]:before {
  content: "\\f512";
}
.fa-skating[_ngcontent-%COMP%]:before {
  content: "\\f7c5";
}
.fa-sketch[_ngcontent-%COMP%]:before {
  content: "\\f7c6";
}
.fa-skiing[_ngcontent-%COMP%]:before {
  content: "\\f7c9";
}
.fa-skiing-nordic[_ngcontent-%COMP%]:before {
  content: "\\f7ca";
}
.fa-skull[_ngcontent-%COMP%]:before {
  content: "\\f54c";
}
.fa-skull-crossbones[_ngcontent-%COMP%]:before {
  content: "\\f714";
}
.fa-skyatlas[_ngcontent-%COMP%]:before {
  content: "\\f216";
}
.fa-skype[_ngcontent-%COMP%]:before {
  content: "\\f17e";
}
.fa-slack[_ngcontent-%COMP%]:before {
  content: "\\f198";
}
.fa-slack-hash[_ngcontent-%COMP%]:before {
  content: "\\f3ef";
}
.fa-slash[_ngcontent-%COMP%]:before {
  content: "\\f715";
}
.fa-sleigh[_ngcontent-%COMP%]:before {
  content: "\\f7cc";
}
.fa-sliders-h[_ngcontent-%COMP%]:before {
  content: "\\f1de";
}
.fa-slideshare[_ngcontent-%COMP%]:before {
  content: "\\f1e7";
}
.fa-smile[_ngcontent-%COMP%]:before {
  content: "\\f118";
}
.fa-smile-beam[_ngcontent-%COMP%]:before {
  content: "\\f5b8";
}
.fa-smile-wink[_ngcontent-%COMP%]:before {
  content: "\\f4da";
}
.fa-smog[_ngcontent-%COMP%]:before {
  content: "\\f75f";
}
.fa-smoking[_ngcontent-%COMP%]:before {
  content: "\\f48d";
}
.fa-smoking-ban[_ngcontent-%COMP%]:before {
  content: "\\f54d";
}
.fa-sms[_ngcontent-%COMP%]:before {
  content: "\\f7cd";
}
.fa-snapchat[_ngcontent-%COMP%]:before {
  content: "\\f2ab";
}
.fa-snapchat-ghost[_ngcontent-%COMP%]:before {
  content: "\\f2ac";
}
.fa-snapchat-square[_ngcontent-%COMP%]:before {
  content: "\\f2ad";
}
.fa-snowboarding[_ngcontent-%COMP%]:before {
  content: "\\f7ce";
}
.fa-snowflake[_ngcontent-%COMP%]:before {
  content: "\\f2dc";
}
.fa-snowman[_ngcontent-%COMP%]:before {
  content: "\\f7d0";
}
.fa-snowplow[_ngcontent-%COMP%]:before {
  content: "\\f7d2";
}
.fa-soap[_ngcontent-%COMP%]:before {
  content: "\\e06e";
}
.fa-socks[_ngcontent-%COMP%]:before {
  content: "\\f696";
}
.fa-solar-panel[_ngcontent-%COMP%]:before {
  content: "\\f5ba";
}
.fa-sort[_ngcontent-%COMP%]:before {
  content: "\\f0dc";
}
.fa-sort-alpha-down[_ngcontent-%COMP%]:before {
  content: "\\f15d";
}
.fa-sort-alpha-down-alt[_ngcontent-%COMP%]:before {
  content: "\\f881";
}
.fa-sort-alpha-up[_ngcontent-%COMP%]:before {
  content: "\\f15e";
}
.fa-sort-alpha-up-alt[_ngcontent-%COMP%]:before {
  content: "\\f882";
}
.fa-sort-amount-down[_ngcontent-%COMP%]:before {
  content: "\\f160";
}
.fa-sort-amount-down-alt[_ngcontent-%COMP%]:before {
  content: "\\f884";
}
.fa-sort-amount-up[_ngcontent-%COMP%]:before {
  content: "\\f161";
}
.fa-sort-amount-up-alt[_ngcontent-%COMP%]:before {
  content: "\\f885";
}
.fa-sort-down[_ngcontent-%COMP%]:before {
  content: "\\f0dd";
}
.fa-sort-numeric-down[_ngcontent-%COMP%]:before {
  content: "\\f162";
}
.fa-sort-numeric-down-alt[_ngcontent-%COMP%]:before {
  content: "\\f886";
}
.fa-sort-numeric-up[_ngcontent-%COMP%]:before {
  content: "\\f163";
}
.fa-sort-numeric-up-alt[_ngcontent-%COMP%]:before {
  content: "\\f887";
}
.fa-sort-up[_ngcontent-%COMP%]:before {
  content: "\\f0de";
}
.fa-soundcloud[_ngcontent-%COMP%]:before {
  content: "\\f1be";
}
.fa-sourcetree[_ngcontent-%COMP%]:before {
  content: "\\f7d3";
}
.fa-spa[_ngcontent-%COMP%]:before {
  content: "\\f5bb";
}
.fa-space-shuttle[_ngcontent-%COMP%]:before {
  content: "\\f197";
}
.fa-speakap[_ngcontent-%COMP%]:before {
  content: "\\f3f3";
}
.fa-speaker-deck[_ngcontent-%COMP%]:before {
  content: "\\f83c";
}
.fa-spell-check[_ngcontent-%COMP%]:before {
  content: "\\f891";
}
.fa-spider[_ngcontent-%COMP%]:before {
  content: "\\f717";
}
.fa-spinner[_ngcontent-%COMP%]:before {
  content: "\\f110";
}
.fa-splotch[_ngcontent-%COMP%]:before {
  content: "\\f5bc";
}
.fa-spotify[_ngcontent-%COMP%]:before {
  content: "\\f1bc";
}
.fa-spray-can[_ngcontent-%COMP%]:before {
  content: "\\f5bd";
}
.fa-square[_ngcontent-%COMP%]:before {
  content: "\\f0c8";
}
.fa-square-full[_ngcontent-%COMP%]:before {
  content: "\\f45c";
}
.fa-square-root-alt[_ngcontent-%COMP%]:before {
  content: "\\f698";
}
.fa-squarespace[_ngcontent-%COMP%]:before {
  content: "\\f5be";
}
.fa-stack-exchange[_ngcontent-%COMP%]:before {
  content: "\\f18d";
}
.fa-stack-overflow[_ngcontent-%COMP%]:before {
  content: "\\f16c";
}
.fa-stackpath[_ngcontent-%COMP%]:before {
  content: "\\f842";
}
.fa-stamp[_ngcontent-%COMP%]:before {
  content: "\\f5bf";
}
.fa-star[_ngcontent-%COMP%]:before {
  content: "\\f005";
}
.fa-star-and-crescent[_ngcontent-%COMP%]:before {
  content: "\\f699";
}
.fa-star-half[_ngcontent-%COMP%]:before {
  content: "\\f089";
}
.fa-star-half-alt[_ngcontent-%COMP%]:before {
  content: "\\f5c0";
}
.fa-star-of-david[_ngcontent-%COMP%]:before {
  content: "\\f69a";
}
.fa-star-of-life[_ngcontent-%COMP%]:before {
  content: "\\f621";
}
.fa-staylinked[_ngcontent-%COMP%]:before {
  content: "\\f3f5";
}
.fa-steam[_ngcontent-%COMP%]:before {
  content: "\\f1b6";
}
.fa-steam-square[_ngcontent-%COMP%]:before {
  content: "\\f1b7";
}
.fa-steam-symbol[_ngcontent-%COMP%]:before {
  content: "\\f3f6";
}
.fa-step-backward[_ngcontent-%COMP%]:before {
  content: "\\f048";
}
.fa-step-forward[_ngcontent-%COMP%]:before {
  content: "\\f051";
}
.fa-stethoscope[_ngcontent-%COMP%]:before {
  content: "\\f0f1";
}
.fa-sticker-mule[_ngcontent-%COMP%]:before {
  content: "\\f3f7";
}
.fa-sticky-note[_ngcontent-%COMP%]:before {
  content: "\\f249";
}
.fa-stop[_ngcontent-%COMP%]:before {
  content: "\\f04d";
}
.fa-stop-circle[_ngcontent-%COMP%]:before {
  content: "\\f28d";
}
.fa-stopwatch[_ngcontent-%COMP%]:before {
  content: "\\f2f2";
}
.fa-stopwatch-20[_ngcontent-%COMP%]:before {
  content: "\\e06f";
}
.fa-store[_ngcontent-%COMP%]:before {
  content: "\\f54e";
}
.fa-store-alt[_ngcontent-%COMP%]:before {
  content: "\\f54f";
}
.fa-store-alt-slash[_ngcontent-%COMP%]:before {
  content: "\\e070";
}
.fa-store-slash[_ngcontent-%COMP%]:before {
  content: "\\e071";
}
.fa-strava[_ngcontent-%COMP%]:before {
  content: "\\f428";
}
.fa-stream[_ngcontent-%COMP%]:before {
  content: "\\f550";
}
.fa-street-view[_ngcontent-%COMP%]:before {
  content: "\\f21d";
}
.fa-strikethrough[_ngcontent-%COMP%]:before {
  content: "\\f0cc";
}
.fa-stripe[_ngcontent-%COMP%]:before {
  content: "\\f429";
}
.fa-stripe-s[_ngcontent-%COMP%]:before {
  content: "\\f42a";
}
.fa-stroopwafel[_ngcontent-%COMP%]:before {
  content: "\\f551";
}
.fa-studiovinari[_ngcontent-%COMP%]:before {
  content: "\\f3f8";
}
.fa-stumbleupon[_ngcontent-%COMP%]:before {
  content: "\\f1a4";
}
.fa-stumbleupon-circle[_ngcontent-%COMP%]:before {
  content: "\\f1a3";
}
.fa-subscript[_ngcontent-%COMP%]:before {
  content: "\\f12c";
}
.fa-subway[_ngcontent-%COMP%]:before {
  content: "\\f239";
}
.fa-suitcase[_ngcontent-%COMP%]:before {
  content: "\\f0f2";
}
.fa-suitcase-rolling[_ngcontent-%COMP%]:before {
  content: "\\f5c1";
}
.fa-sun[_ngcontent-%COMP%]:before {
  content: "\\f185";
}
.fa-superpowers[_ngcontent-%COMP%]:before {
  content: "\\f2dd";
}
.fa-superscript[_ngcontent-%COMP%]:before {
  content: "\\f12b";
}
.fa-supple[_ngcontent-%COMP%]:before {
  content: "\\f3f9";
}
.fa-surprise[_ngcontent-%COMP%]:before {
  content: "\\f5c2";
}
.fa-suse[_ngcontent-%COMP%]:before {
  content: "\\f7d6";
}
.fa-swatchbook[_ngcontent-%COMP%]:before {
  content: "\\f5c3";
}
.fa-swift[_ngcontent-%COMP%]:before {
  content: "\\f8e1";
}
.fa-swimmer[_ngcontent-%COMP%]:before {
  content: "\\f5c4";
}
.fa-swimming-pool[_ngcontent-%COMP%]:before {
  content: "\\f5c5";
}
.fa-symfony[_ngcontent-%COMP%]:before {
  content: "\\f83d";
}
.fa-synagogue[_ngcontent-%COMP%]:before {
  content: "\\f69b";
}
.fa-sync[_ngcontent-%COMP%]:before {
  content: "\\f021";
}
.fa-sync-alt[_ngcontent-%COMP%]:before {
  content: "\\f2f1";
}
.fa-syringe[_ngcontent-%COMP%]:before {
  content: "\\f48e";
}
.fa-table[_ngcontent-%COMP%]:before {
  content: "\\f0ce";
}
.fa-table-tennis[_ngcontent-%COMP%]:before {
  content: "\\f45d";
}
.fa-tablet[_ngcontent-%COMP%]:before {
  content: "\\f10a";
}
.fa-tablet-alt[_ngcontent-%COMP%]:before {
  content: "\\f3fa";
}
.fa-tablets[_ngcontent-%COMP%]:before {
  content: "\\f490";
}
.fa-tachometer-alt[_ngcontent-%COMP%]:before {
  content: "\\f3fd";
}
.fa-tag[_ngcontent-%COMP%]:before {
  content: "\\f02b";
}
.fa-tags[_ngcontent-%COMP%]:before {
  content: "\\f02c";
}
.fa-tape[_ngcontent-%COMP%]:before {
  content: "\\f4db";
}
.fa-tasks[_ngcontent-%COMP%]:before {
  content: "\\f0ae";
}
.fa-taxi[_ngcontent-%COMP%]:before {
  content: "\\f1ba";
}
.fa-teamspeak[_ngcontent-%COMP%]:before {
  content: "\\f4f9";
}
.fa-teeth[_ngcontent-%COMP%]:before {
  content: "\\f62e";
}
.fa-teeth-open[_ngcontent-%COMP%]:before {
  content: "\\f62f";
}
.fa-telegram[_ngcontent-%COMP%]:before {
  content: "\\f2c6";
}
.fa-telegram-plane[_ngcontent-%COMP%]:before {
  content: "\\f3fe";
}
.fa-temperature-high[_ngcontent-%COMP%]:before {
  content: "\\f769";
}
.fa-temperature-low[_ngcontent-%COMP%]:before {
  content: "\\f76b";
}
.fa-tencent-weibo[_ngcontent-%COMP%]:before {
  content: "\\f1d5";
}
.fa-tenge[_ngcontent-%COMP%]:before {
  content: "\\f7d7";
}
.fa-terminal[_ngcontent-%COMP%]:before {
  content: "\\f120";
}
.fa-text-height[_ngcontent-%COMP%]:before {
  content: "\\f034";
}
.fa-text-width[_ngcontent-%COMP%]:before {
  content: "\\f035";
}
.fa-th[_ngcontent-%COMP%]:before {
  content: "\\f00a";
}
.fa-th-large[_ngcontent-%COMP%]:before {
  content: "\\f009";
}
.fa-th-list[_ngcontent-%COMP%]:before {
  content: "\\f00b";
}
.fa-the-red-yeti[_ngcontent-%COMP%]:before {
  content: "\\f69d";
}
.fa-theater-masks[_ngcontent-%COMP%]:before {
  content: "\\f630";
}
.fa-themeco[_ngcontent-%COMP%]:before {
  content: "\\f5c6";
}
.fa-themeisle[_ngcontent-%COMP%]:before {
  content: "\\f2b2";
}
.fa-thermometer[_ngcontent-%COMP%]:before {
  content: "\\f491";
}
.fa-thermometer-empty[_ngcontent-%COMP%]:before {
  content: "\\f2cb";
}
.fa-thermometer-full[_ngcontent-%COMP%]:before {
  content: "\\f2c7";
}
.fa-thermometer-half[_ngcontent-%COMP%]:before {
  content: "\\f2c9";
}
.fa-thermometer-quarter[_ngcontent-%COMP%]:before {
  content: "\\f2ca";
}
.fa-thermometer-three-quarters[_ngcontent-%COMP%]:before {
  content: "\\f2c8";
}
.fa-think-peaks[_ngcontent-%COMP%]:before {
  content: "\\f731";
}
.fa-thumbs-down[_ngcontent-%COMP%]:before {
  content: "\\f165";
}
.fa-thumbs-up[_ngcontent-%COMP%]:before {
  content: "\\f164";
}
.fa-thumbtack[_ngcontent-%COMP%]:before {
  content: "\\f08d";
}
.fa-ticket-alt[_ngcontent-%COMP%]:before {
  content: "\\f3ff";
}
.fa-tiktok[_ngcontent-%COMP%]:before {
  content: "\\e07b";
}
.fa-times[_ngcontent-%COMP%]:before {
  content: "\\f00d";
}
.fa-times-circle[_ngcontent-%COMP%]:before {
  content: "\\f057";
}
.fa-tint[_ngcontent-%COMP%]:before {
  content: "\\f043";
}
.fa-tint-slash[_ngcontent-%COMP%]:before {
  content: "\\f5c7";
}
.fa-tired[_ngcontent-%COMP%]:before {
  content: "\\f5c8";
}
.fa-toggle-off[_ngcontent-%COMP%]:before {
  content: "\\f204";
}
.fa-toggle-on[_ngcontent-%COMP%]:before {
  content: "\\f205";
}
.fa-toilet[_ngcontent-%COMP%]:before {
  content: "\\f7d8";
}
.fa-toilet-paper[_ngcontent-%COMP%]:before {
  content: "\\f71e";
}
.fa-toilet-paper-slash[_ngcontent-%COMP%]:before {
  content: "\\e072";
}
.fa-toolbox[_ngcontent-%COMP%]:before {
  content: "\\f552";
}
.fa-tools[_ngcontent-%COMP%]:before {
  content: "\\f7d9";
}
.fa-tooth[_ngcontent-%COMP%]:before {
  content: "\\f5c9";
}
.fa-torah[_ngcontent-%COMP%]:before {
  content: "\\f6a0";
}
.fa-torii-gate[_ngcontent-%COMP%]:before {
  content: "\\f6a1";
}
.fa-tractor[_ngcontent-%COMP%]:before {
  content: "\\f722";
}
.fa-trade-federation[_ngcontent-%COMP%]:before {
  content: "\\f513";
}
.fa-trademark[_ngcontent-%COMP%]:before {
  content: "\\f25c";
}
.fa-traffic-light[_ngcontent-%COMP%]:before {
  content: "\\f637";
}
.fa-trailer[_ngcontent-%COMP%]:before {
  content: "\\e041";
}
.fa-train[_ngcontent-%COMP%]:before {
  content: "\\f238";
}
.fa-tram[_ngcontent-%COMP%]:before {
  content: "\\f7da";
}
.fa-transgender[_ngcontent-%COMP%]:before {
  content: "\\f224";
}
.fa-transgender-alt[_ngcontent-%COMP%]:before {
  content: "\\f225";
}
.fa-trash[_ngcontent-%COMP%]:before {
  content: "\\f1f8";
}
.fa-trash-alt[_ngcontent-%COMP%]:before {
  content: "\\f2ed";
}
.fa-trash-restore[_ngcontent-%COMP%]:before {
  content: "\\f829";
}
.fa-trash-restore-alt[_ngcontent-%COMP%]:before {
  content: "\\f82a";
}
.fa-tree[_ngcontent-%COMP%]:before {
  content: "\\f1bb";
}
.fa-trello[_ngcontent-%COMP%]:before {
  content: "\\f181";
}
.fa-trophy[_ngcontent-%COMP%]:before {
  content: "\\f091";
}
.fa-truck[_ngcontent-%COMP%]:before {
  content: "\\f0d1";
}
.fa-truck-loading[_ngcontent-%COMP%]:before {
  content: "\\f4de";
}
.fa-truck-monster[_ngcontent-%COMP%]:before {
  content: "\\f63b";
}
.fa-truck-moving[_ngcontent-%COMP%]:before {
  content: "\\f4df";
}
.fa-truck-pickup[_ngcontent-%COMP%]:before {
  content: "\\f63c";
}
.fa-tshirt[_ngcontent-%COMP%]:before {
  content: "\\f553";
}
.fa-tty[_ngcontent-%COMP%]:before {
  content: "\\f1e4";
}
.fa-tumblr[_ngcontent-%COMP%]:before {
  content: "\\f173";
}
.fa-tumblr-square[_ngcontent-%COMP%]:before {
  content: "\\f174";
}
.fa-tv[_ngcontent-%COMP%]:before {
  content: "\\f26c";
}
.fa-twitch[_ngcontent-%COMP%]:before {
  content: "\\f1e8";
}
.fa-twitter[_ngcontent-%COMP%]:before {
  content: "\\f099";
}
.fa-twitter-square[_ngcontent-%COMP%]:before {
  content: "\\f081";
}
.fa-typo3[_ngcontent-%COMP%]:before {
  content: "\\f42b";
}
.fa-uber[_ngcontent-%COMP%]:before {
  content: "\\f402";
}
.fa-ubuntu[_ngcontent-%COMP%]:before {
  content: "\\f7df";
}
.fa-uikit[_ngcontent-%COMP%]:before {
  content: "\\f403";
}
.fa-umbraco[_ngcontent-%COMP%]:before {
  content: "\\f8e8";
}
.fa-umbrella[_ngcontent-%COMP%]:before {
  content: "\\f0e9";
}
.fa-umbrella-beach[_ngcontent-%COMP%]:before {
  content: "\\f5ca";
}
.fa-uncharted[_ngcontent-%COMP%]:before {
  content: "\\e084";
}
.fa-underline[_ngcontent-%COMP%]:before {
  content: "\\f0cd";
}
.fa-undo[_ngcontent-%COMP%]:before {
  content: "\\f0e2";
}
.fa-undo-alt[_ngcontent-%COMP%]:before {
  content: "\\f2ea";
}
.fa-uniregistry[_ngcontent-%COMP%]:before {
  content: "\\f404";
}
.fa-unity[_ngcontent-%COMP%]:before {
  content: "\\e049";
}
.fa-universal-access[_ngcontent-%COMP%]:before {
  content: "\\f29a";
}
.fa-university[_ngcontent-%COMP%]:before {
  content: "\\f19c";
}
.fa-unlink[_ngcontent-%COMP%]:before {
  content: "\\f127";
}
.fa-unlock[_ngcontent-%COMP%]:before {
  content: "\\f09c";
}
.fa-unlock-alt[_ngcontent-%COMP%]:before {
  content: "\\f13e";
}
.fa-unsplash[_ngcontent-%COMP%]:before {
  content: "\\e07c";
}
.fa-untappd[_ngcontent-%COMP%]:before {
  content: "\\f405";
}
.fa-upload[_ngcontent-%COMP%]:before {
  content: "\\f093";
}
.fa-ups[_ngcontent-%COMP%]:before {
  content: "\\f7e0";
}
.fa-usb[_ngcontent-%COMP%]:before {
  content: "\\f287";
}
.fa-user[_ngcontent-%COMP%]:before {
  content: "\\f007";
}
.fa-user-alt[_ngcontent-%COMP%]:before {
  content: "\\f406";
}
.fa-user-alt-slash[_ngcontent-%COMP%]:before {
  content: "\\f4fa";
}
.fa-user-astronaut[_ngcontent-%COMP%]:before {
  content: "\\f4fb";
}
.fa-user-check[_ngcontent-%COMP%]:before {
  content: "\\f4fc";
}
.fa-user-circle[_ngcontent-%COMP%]:before {
  content: "\\f2bd";
}
.fa-user-clock[_ngcontent-%COMP%]:before {
  content: "\\f4fd";
}
.fa-user-cog[_ngcontent-%COMP%]:before {
  content: "\\f4fe";
}
.fa-user-edit[_ngcontent-%COMP%]:before {
  content: "\\f4ff";
}
.fa-user-friends[_ngcontent-%COMP%]:before {
  content: "\\f500";
}
.fa-user-graduate[_ngcontent-%COMP%]:before {
  content: "\\f501";
}
.fa-user-injured[_ngcontent-%COMP%]:before {
  content: "\\f728";
}
.fa-user-lock[_ngcontent-%COMP%]:before {
  content: "\\f502";
}
.fa-user-md[_ngcontent-%COMP%]:before {
  content: "\\f0f0";
}
.fa-user-minus[_ngcontent-%COMP%]:before {
  content: "\\f503";
}
.fa-user-ninja[_ngcontent-%COMP%]:before {
  content: "\\f504";
}
.fa-user-nurse[_ngcontent-%COMP%]:before {
  content: "\\f82f";
}
.fa-user-plus[_ngcontent-%COMP%]:before {
  content: "\\f234";
}
.fa-user-secret[_ngcontent-%COMP%]:before {
  content: "\\f21b";
}
.fa-user-shield[_ngcontent-%COMP%]:before {
  content: "\\f505";
}
.fa-user-slash[_ngcontent-%COMP%]:before {
  content: "\\f506";
}
.fa-user-tag[_ngcontent-%COMP%]:before {
  content: "\\f507";
}
.fa-user-tie[_ngcontent-%COMP%]:before {
  content: "\\f508";
}
.fa-user-times[_ngcontent-%COMP%]:before {
  content: "\\f235";
}
.fa-users[_ngcontent-%COMP%]:before {
  content: "\\f0c0";
}
.fa-users-cog[_ngcontent-%COMP%]:before {
  content: "\\f509";
}
.fa-users-slash[_ngcontent-%COMP%]:before {
  content: "\\e073";
}
.fa-usps[_ngcontent-%COMP%]:before {
  content: "\\f7e1";
}
.fa-ussunnah[_ngcontent-%COMP%]:before {
  content: "\\f407";
}
.fa-utensil-spoon[_ngcontent-%COMP%]:before {
  content: "\\f2e5";
}
.fa-utensils[_ngcontent-%COMP%]:before {
  content: "\\f2e7";
}
.fa-vaadin[_ngcontent-%COMP%]:before {
  content: "\\f408";
}
.fa-vector-square[_ngcontent-%COMP%]:before {
  content: "\\f5cb";
}
.fa-venus[_ngcontent-%COMP%]:before {
  content: "\\f221";
}
.fa-venus-double[_ngcontent-%COMP%]:before {
  content: "\\f226";
}
.fa-venus-mars[_ngcontent-%COMP%]:before {
  content: "\\f228";
}
.fa-vest[_ngcontent-%COMP%]:before {
  content: "\\e085";
}
.fa-vest-patches[_ngcontent-%COMP%]:before {
  content: "\\e086";
}
.fa-viacoin[_ngcontent-%COMP%]:before {
  content: "\\f237";
}
.fa-viadeo[_ngcontent-%COMP%]:before {
  content: "\\f2a9";
}
.fa-viadeo-square[_ngcontent-%COMP%]:before {
  content: "\\f2aa";
}
.fa-vial[_ngcontent-%COMP%]:before {
  content: "\\f492";
}
.fa-vials[_ngcontent-%COMP%]:before {
  content: "\\f493";
}
.fa-viber[_ngcontent-%COMP%]:before {
  content: "\\f409";
}
.fa-video[_ngcontent-%COMP%]:before {
  content: "\\f03d";
}
.fa-video-slash[_ngcontent-%COMP%]:before {
  content: "\\f4e2";
}
.fa-vihara[_ngcontent-%COMP%]:before {
  content: "\\f6a7";
}
.fa-vimeo[_ngcontent-%COMP%]:before {
  content: "\\f40a";
}
.fa-vimeo-square[_ngcontent-%COMP%]:before {
  content: "\\f194";
}
.fa-vimeo-v[_ngcontent-%COMP%]:before {
  content: "\\f27d";
}
.fa-vine[_ngcontent-%COMP%]:before {
  content: "\\f1ca";
}
.fa-virus[_ngcontent-%COMP%]:before {
  content: "\\e074";
}
.fa-virus-slash[_ngcontent-%COMP%]:before {
  content: "\\e075";
}
.fa-viruses[_ngcontent-%COMP%]:before {
  content: "\\e076";
}
.fa-vk[_ngcontent-%COMP%]:before {
  content: "\\f189";
}
.fa-vnv[_ngcontent-%COMP%]:before {
  content: "\\f40b";
}
.fa-voicemail[_ngcontent-%COMP%]:before {
  content: "\\f897";
}
.fa-volleyball-ball[_ngcontent-%COMP%]:before {
  content: "\\f45f";
}
.fa-volume-down[_ngcontent-%COMP%]:before {
  content: "\\f027";
}
.fa-volume-mute[_ngcontent-%COMP%]:before {
  content: "\\f6a9";
}
.fa-volume-off[_ngcontent-%COMP%]:before {
  content: "\\f026";
}
.fa-volume-up[_ngcontent-%COMP%]:before {
  content: "\\f028";
}
.fa-vote-yea[_ngcontent-%COMP%]:before {
  content: "\\f772";
}
.fa-vr-cardboard[_ngcontent-%COMP%]:before {
  content: "\\f729";
}
.fa-vuejs[_ngcontent-%COMP%]:before {
  content: "\\f41f";
}
.fa-walking[_ngcontent-%COMP%]:before {
  content: "\\f554";
}
.fa-wallet[_ngcontent-%COMP%]:before {
  content: "\\f555";
}
.fa-warehouse[_ngcontent-%COMP%]:before {
  content: "\\f494";
}
.fa-watchman-monitoring[_ngcontent-%COMP%]:before {
  content: "\\e087";
}
.fa-water[_ngcontent-%COMP%]:before {
  content: "\\f773";
}
.fa-wave-square[_ngcontent-%COMP%]:before {
  content: "\\f83e";
}
.fa-waze[_ngcontent-%COMP%]:before {
  content: "\\f83f";
}
.fa-weebly[_ngcontent-%COMP%]:before {
  content: "\\f5cc";
}
.fa-weibo[_ngcontent-%COMP%]:before {
  content: "\\f18a";
}
.fa-weight[_ngcontent-%COMP%]:before {
  content: "\\f496";
}
.fa-weight-hanging[_ngcontent-%COMP%]:before {
  content: "\\f5cd";
}
.fa-weixin[_ngcontent-%COMP%]:before {
  content: "\\f1d7";
}
.fa-whatsapp[_ngcontent-%COMP%]:before {
  content: "\\f232";
}
.fa-whatsapp-square[_ngcontent-%COMP%]:before {
  content: "\\f40c";
}
.fa-wheelchair[_ngcontent-%COMP%]:before {
  content: "\\f193";
}
.fa-whmcs[_ngcontent-%COMP%]:before {
  content: "\\f40d";
}
.fa-wifi[_ngcontent-%COMP%]:before {
  content: "\\f1eb";
}
.fa-wikipedia-w[_ngcontent-%COMP%]:before {
  content: "\\f266";
}
.fa-wind[_ngcontent-%COMP%]:before {
  content: "\\f72e";
}
.fa-window-close[_ngcontent-%COMP%]:before {
  content: "\\f410";
}
.fa-window-maximize[_ngcontent-%COMP%]:before {
  content: "\\f2d0";
}
.fa-window-minimize[_ngcontent-%COMP%]:before {
  content: "\\f2d1";
}
.fa-window-restore[_ngcontent-%COMP%]:before {
  content: "\\f2d2";
}
.fa-windows[_ngcontent-%COMP%]:before {
  content: "\\f17a";
}
.fa-wine-bottle[_ngcontent-%COMP%]:before {
  content: "\\f72f";
}
.fa-wine-glass[_ngcontent-%COMP%]:before {
  content: "\\f4e3";
}
.fa-wine-glass-alt[_ngcontent-%COMP%]:before {
  content: "\\f5ce";
}
.fa-wix[_ngcontent-%COMP%]:before {
  content: "\\f5cf";
}
.fa-wizards-of-the-coast[_ngcontent-%COMP%]:before {
  content: "\\f730";
}
.fa-wodu[_ngcontent-%COMP%]:before {
  content: "\\e088";
}
.fa-wolf-pack-battalion[_ngcontent-%COMP%]:before {
  content: "\\f514";
}
.fa-won-sign[_ngcontent-%COMP%]:before {
  content: "\\f159";
}
.fa-wordpress[_ngcontent-%COMP%]:before {
  content: "\\f19a";
}
.fa-wordpress-simple[_ngcontent-%COMP%]:before {
  content: "\\f411";
}
.fa-wpbeginner[_ngcontent-%COMP%]:before {
  content: "\\f297";
}
.fa-wpexplorer[_ngcontent-%COMP%]:before {
  content: "\\f2de";
}
.fa-wpforms[_ngcontent-%COMP%]:before {
  content: "\\f298";
}
.fa-wpressr[_ngcontent-%COMP%]:before {
  content: "\\f3e4";
}
.fa-wrench[_ngcontent-%COMP%]:before {
  content: "\\f0ad";
}
.fa-x-ray[_ngcontent-%COMP%]:before {
  content: "\\f497";
}
.fa-xbox[_ngcontent-%COMP%]:before {
  content: "\\f412";
}
.fa-xing[_ngcontent-%COMP%]:before {
  content: "\\f168";
}
.fa-xing-square[_ngcontent-%COMP%]:before {
  content: "\\f169";
}
.fa-y-combinator[_ngcontent-%COMP%]:before {
  content: "\\f23b";
}
.fa-yahoo[_ngcontent-%COMP%]:before {
  content: "\\f19e";
}
.fa-yammer[_ngcontent-%COMP%]:before {
  content: "\\f840";
}
.fa-yandex[_ngcontent-%COMP%]:before {
  content: "\\f413";
}
.fa-yandex-international[_ngcontent-%COMP%]:before {
  content: "\\f414";
}
.fa-yarn[_ngcontent-%COMP%]:before {
  content: "\\f7e3";
}
.fa-yelp[_ngcontent-%COMP%]:before {
  content: "\\f1e9";
}
.fa-yen-sign[_ngcontent-%COMP%]:before {
  content: "\\f157";
}
.fa-yin-yang[_ngcontent-%COMP%]:before {
  content: "\\f6ad";
}
.fa-yoast[_ngcontent-%COMP%]:before {
  content: "\\f2b1";
}
.fa-youtube[_ngcontent-%COMP%]:before {
  content: "\\f167";
}
.fa-youtube-square[_ngcontent-%COMP%]:before {
  content: "\\f431";
}
.fa-zhihu[_ngcontent-%COMP%]:before {
  content: "\\f63f";
}
.sr-only[_ngcontent-%COMP%] {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.sr-only-focusable[_ngcontent-%COMP%]:active, 
.sr-only-focusable[_ngcontent-%COMP%]:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}
@font-face {
  font-family: "Font Awesome 5 Brands";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("./media/fa-brands-400.eot");
  src:
    url("./media/fa-brands-400.eot?#iefix") format("embedded-opentype"),
    url("./media/fa-brands-400.woff2") format("woff2"),
    url("./media/fa-brands-400.woff") format("woff"),
    url("./media/fa-brands-400.ttf") format("truetype"),
    url("./media/fa-brands-400.svg#fontawesome") format("svg");
}
.fab[_ngcontent-%COMP%] {
  font-family: "Font Awesome 5 Brands";
}
@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("./media/fa-regular-400.eot");
  src:
    url("./media/fa-regular-400.eot?#iefix") format("embedded-opentype"),
    url("./media/fa-regular-400.woff2") format("woff2"),
    url("./media/fa-regular-400.woff") format("woff"),
    url("./media/fa-regular-400.ttf") format("truetype"),
    url("./media/fa-regular-400.svg#fontawesome") format("svg");
}
.fab[_ngcontent-%COMP%], 
.far[_ngcontent-%COMP%] {
  font-weight: 400;
}
@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url("./media/fa-solid-900.eot");
  src:
    url("./media/fa-solid-900.eot?#iefix") format("embedded-opentype"),
    url("./media/fa-solid-900.woff2") format("woff2"),
    url("./media/fa-solid-900.woff") format("woff"),
    url("./media/fa-solid-900.ttf") format("truetype"),
    url("./media/fa-solid-900.svg#fontawesome") format("svg");
}
.fa[_ngcontent-%COMP%], 
.far[_ngcontent-%COMP%], 
.fas[_ngcontent-%COMP%] {
  font-family: "Font Awesome 5 Free";
}
.fa[_ngcontent-%COMP%], 
.fas[_ngcontent-%COMP%] {
  font-weight: 900;
}



html[_ngcontent-%COMP%], 
body[_ngcontent-%COMP%], 
div[_ngcontent-%COMP%], 
span[_ngcontent-%COMP%], 
applet[_ngcontent-%COMP%], 
object[_ngcontent-%COMP%], 
iframe[_ngcontent-%COMP%], 
h1[_ngcontent-%COMP%], 
h2[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%], 
h4[_ngcontent-%COMP%], 
h5[_ngcontent-%COMP%], 
h6[_ngcontent-%COMP%], 
p[_ngcontent-%COMP%], 
blockquote[_ngcontent-%COMP%], 
pre[_ngcontent-%COMP%], 
a[_ngcontent-%COMP%], 
abbr[_ngcontent-%COMP%], 
acronym[_ngcontent-%COMP%], 
address[_ngcontent-%COMP%], 
big[_ngcontent-%COMP%], 
cite[_ngcontent-%COMP%], 
code[_ngcontent-%COMP%], 
del[_ngcontent-%COMP%], 
dfn[_ngcontent-%COMP%], 
em[_ngcontent-%COMP%], 
img[_ngcontent-%COMP%], 
ins[_ngcontent-%COMP%], 
kbd[_ngcontent-%COMP%], 
q[_ngcontent-%COMP%], 
s[_ngcontent-%COMP%], 
samp[_ngcontent-%COMP%], 
small[_ngcontent-%COMP%], 
strike[_ngcontent-%COMP%], 
strong[_ngcontent-%COMP%], 
sub[_ngcontent-%COMP%], 
sup[_ngcontent-%COMP%], 
tt[_ngcontent-%COMP%], 
var[_ngcontent-%COMP%], 
b[_ngcontent-%COMP%], 
u[_ngcontent-%COMP%], 
i[_ngcontent-%COMP%], 
center[_ngcontent-%COMP%], 
dl[_ngcontent-%COMP%], 
dt[_ngcontent-%COMP%], 
dd[_ngcontent-%COMP%], 
ol[_ngcontent-%COMP%], 
ul[_ngcontent-%COMP%], 
li[_ngcontent-%COMP%], 
fieldset[_ngcontent-%COMP%], 
form[_ngcontent-%COMP%], 
label[_ngcontent-%COMP%], 
legend[_ngcontent-%COMP%], 
table[_ngcontent-%COMP%], 
caption[_ngcontent-%COMP%], 
tbody[_ngcontent-%COMP%], 
tfoot[_ngcontent-%COMP%], 
thead[_ngcontent-%COMP%], 
tr[_ngcontent-%COMP%], 
th[_ngcontent-%COMP%], 
td[_ngcontent-%COMP%], 
article[_ngcontent-%COMP%], 
aside[_ngcontent-%COMP%], 
canvas[_ngcontent-%COMP%], 
details[_ngcontent-%COMP%], 
embed[_ngcontent-%COMP%], 
figure[_ngcontent-%COMP%], 
figcaption[_ngcontent-%COMP%], 
footer[_ngcontent-%COMP%], 
header[_ngcontent-%COMP%], 
hgroup[_ngcontent-%COMP%], 
menu[_ngcontent-%COMP%], 
nav[_ngcontent-%COMP%], 
output[_ngcontent-%COMP%], 
ruby[_ngcontent-%COMP%], 
section[_ngcontent-%COMP%], 
summary[_ngcontent-%COMP%], 
time[_ngcontent-%COMP%], 
mark[_ngcontent-%COMP%], 
audio[_ngcontent-%COMP%], 
video[_ngcontent-%COMP%] {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article[_ngcontent-%COMP%], 
aside[_ngcontent-%COMP%], 
details[_ngcontent-%COMP%], 
figcaption[_ngcontent-%COMP%], 
figure[_ngcontent-%COMP%], 
footer[_ngcontent-%COMP%], 
header[_ngcontent-%COMP%], 
hgroup[_ngcontent-%COMP%], 
menu[_ngcontent-%COMP%], 
nav[_ngcontent-%COMP%], 
section[_ngcontent-%COMP%] {
  display: block;
}
body[_ngcontent-%COMP%] {
  line-height: 1;
}
ol[_ngcontent-%COMP%], 
ul[_ngcontent-%COMP%] {
  list-style: none;
}
blockquote[_ngcontent-%COMP%], 
q[_ngcontent-%COMP%] {
  quotes: none;
}
blockquote[_ngcontent-%COMP%]:before, 
blockquote[_ngcontent-%COMP%]:after, 
q[_ngcontent-%COMP%]:before, 
q[_ngcontent-%COMP%]:after {
  content: "";
  content: none;
}
table[_ngcontent-%COMP%] {
  border-collapse: collapse;
  border-spacing: 0;
}
body[_ngcontent-%COMP%] {
  -webkit-text-size-adjust: none;
}
mark[_ngcontent-%COMP%] {
  background-color: transparent;
  color: inherit;
}
input[_ngcontent-%COMP%]::-moz-focus-inner {
  border: 0;
  padding: 0;
}
input[_ngcontent-%COMP%], 
select[_ngcontent-%COMP%], 
textarea[_ngcontent-%COMP%] {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}
@-ms-viewport {
  width: device-width;
}
body[_ngcontent-%COMP%] {
  -ms-overflow-style: scrollbar;
}
@media screen and (max-width: 480px) {
  html[_ngcontent-%COMP%], 
   body[_ngcontent-%COMP%] {
    min-width: 320px;
  }
}
html[_ngcontent-%COMP%] {
  box-sizing: border-box;
}
*[_ngcontent-%COMP%], 
*[_ngcontent-%COMP%]:before, 
*[_ngcontent-%COMP%]:after {
  box-sizing: inherit;
}
body[_ngcontent-%COMP%] {
  background-color: #1e252d;
}
body.is-preload[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], 
body.is-preload[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, 
body.is-preload[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {
  -moz-animation: none !important;
  -webkit-animation: none !important;
  -ms-animation: none !important;
  animation: none !important;
  -moz-transition: none !important;
  -webkit-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}
html[_ngcontent-%COMP%] {
  font-size: 16pt;
}
@media screen and (max-width: 1680px) {
  html[_ngcontent-%COMP%] {
    font-size: 12pt;
  }
}
@media screen and (max-width: 1280px) {
  html[_ngcontent-%COMP%] {
    font-size: 11pt;
  }
}
@media screen and (max-width: 360px) {
  html[_ngcontent-%COMP%] {
    font-size: 10pt;
  }
}
body[_ngcontent-%COMP%] {
  color: #212931;
}
body[_ngcontent-%COMP%], 
input[_ngcontent-%COMP%], 
select[_ngcontent-%COMP%], 
textarea[_ngcontent-%COMP%] {
  font-family:
    "Merriweather",
    Georgia,
    serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 2.375;
}
a[_ngcontent-%COMP%] {
  -moz-transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  -webkit-transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  -ms-transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  border-bottom: dotted 1px;
  text-decoration: none;
}
a[_ngcontent-%COMP%]:hover {
  border-bottom-color: transparent;
}
strong[_ngcontent-%COMP%], 
b[_ngcontent-%COMP%] {
  font-weight: 600;
}
em[_ngcontent-%COMP%], 
i[_ngcontent-%COMP%] {
  font-style: italic;
}
p[_ngcontent-%COMP%] {
  text-align: justify;
  margin: 0 0 2rem 0;
}
h1[_ngcontent-%COMP%], 
h2[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%], 
h4[_ngcontent-%COMP%], 
h5[_ngcontent-%COMP%], 
h6[_ngcontent-%COMP%] {
  font-family:
    "Source Sans Pro",
    Helvetica,
    sans-serif;
  font-weight: 900;
  line-height: 1.5;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  margin: 0 0 1rem 0;
}
h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  border-bottom: 0;
  color: inherit;
  text-decoration: none;
}
h1[_ngcontent-%COMP%] {
  font-size: 4rem;
  line-height: 1.1;
  margin: 0 0 2rem 0;
}
h2[_ngcontent-%COMP%] {
  font-size: 1.75rem;
  line-height: 1.3;
  margin: 0 0 1.5rem 0;
}
h3[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  margin: 0 0 1.5rem 0;
}
h4[_ngcontent-%COMP%] {
  font-size: 1rem;
}
h5[_ngcontent-%COMP%] {
  font-size: 0.9rem;
}
h6[_ngcontent-%COMP%] {
  font-size: 0.8rem;
}
sub[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  position: relative;
  top: 0.5rem;
}
sup[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  position: relative;
  top: -0.5rem;
}
blockquote[_ngcontent-%COMP%] {
  border-left: solid 4px;
  font-style: italic;
  margin: 0 0 2rem 0;
  padding: 0.5rem 0 0.5rem 2rem;
}
code[_ngcontent-%COMP%] {
  border: solid 2px;
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  margin: 0 0.25rem;
  padding: 0.25rem 0.65rem;
}
pre[_ngcontent-%COMP%] {
  -webkit-overflow-scrolling: touch;
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  margin: 0 0 2rem 0;
}
pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  display: block;
  line-height: 1.75;
  padding: 1rem 1.5rem;
  overflow-x: auto;
}
hr[_ngcontent-%COMP%] {
  border: 0;
  border-bottom: solid 2px;
  margin: 3rem 0;
}
hr.major[_ngcontent-%COMP%] {
  margin: 5rem 0;
}
.align-left[_ngcontent-%COMP%] {
  text-align: left;
}
.align-center[_ngcontent-%COMP%] {
  text-align: center;
}
.align-right[_ngcontent-%COMP%] {
  text-align: right;
}
input[_ngcontent-%COMP%], 
select[_ngcontent-%COMP%], 
textarea[_ngcontent-%COMP%] {
  color: #212931;
}
a[_ngcontent-%COMP%] {
  color: #212931;
  border-bottom-color: rgba(33, 41, 49, 0.5);
}
a[_ngcontent-%COMP%]:hover {
  border-bottom-color: transparent;
  color: #18bfef !important;
}
strong[_ngcontent-%COMP%], 
b[_ngcontent-%COMP%] {
  color: #212931;
}
h1[_ngcontent-%COMP%], 
h2[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%], 
h4[_ngcontent-%COMP%], 
h5[_ngcontent-%COMP%], 
h6[_ngcontent-%COMP%] {
  color: #212931;
}
blockquote[_ngcontent-%COMP%] {
  border-left-color: #eeeeee;
}
code[_ngcontent-%COMP%] {
  background: rgba(220, 220, 220, 0.25);
  border-color: #eeeeee;
}
hr[_ngcontent-%COMP%] {
  border-bottom-color: #eeeeee;
}
.row[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: stretch;
}
.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  box-sizing: border-box;
}
.row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.row.aln-left[_ngcontent-%COMP%] {
  justify-content: flex-start;
}
.row.aln-center[_ngcontent-%COMP%] {
  justify-content: center;
}
.row.aln-right[_ngcontent-%COMP%] {
  justify-content: flex-end;
}
.row.aln-top[_ngcontent-%COMP%] {
  align-items: flex-start;
}
.row.aln-middle[_ngcontent-%COMP%] {
  align-items: center;
}
.row.aln-bottom[_ngcontent-%COMP%] {
  align-items: flex-end;
}
.row[_ngcontent-%COMP%]    > .imp[_ngcontent-%COMP%] {
  order: -1;
}
.row[_ngcontent-%COMP%]    > .col-1[_ngcontent-%COMP%] {
  width: 8.33333%;
}
.row[_ngcontent-%COMP%]    > .off-1[_ngcontent-%COMP%] {
  margin-left: 8.33333%;
}
.row[_ngcontent-%COMP%]    > .col-2[_ngcontent-%COMP%] {
  width: 16.66667%;
}
.row[_ngcontent-%COMP%]    > .off-2[_ngcontent-%COMP%] {
  margin-left: 16.66667%;
}
.row[_ngcontent-%COMP%]    > .col-3[_ngcontent-%COMP%] {
  width: 25%;
}
.row[_ngcontent-%COMP%]    > .off-3[_ngcontent-%COMP%] {
  margin-left: 25%;
}
.row[_ngcontent-%COMP%]    > .col-4[_ngcontent-%COMP%] {
  width: 33.33333%;
}
.row[_ngcontent-%COMP%]    > .off-4[_ngcontent-%COMP%] {
  margin-left: 33.33333%;
}
.row[_ngcontent-%COMP%]    > .col-5[_ngcontent-%COMP%] {
  width: 41.66667%;
}
.row[_ngcontent-%COMP%]    > .off-5[_ngcontent-%COMP%] {
  margin-left: 41.66667%;
}
.row[_ngcontent-%COMP%]    > .col-6[_ngcontent-%COMP%] {
  width: 50%;
}
.row[_ngcontent-%COMP%]    > .off-6[_ngcontent-%COMP%] {
  margin-left: 50%;
}
.row[_ngcontent-%COMP%]    > .col-7[_ngcontent-%COMP%] {
  width: 58.33333%;
}
.row[_ngcontent-%COMP%]    > .off-7[_ngcontent-%COMP%] {
  margin-left: 58.33333%;
}
.row[_ngcontent-%COMP%]    > .col-8[_ngcontent-%COMP%] {
  width: 66.66667%;
}
.row[_ngcontent-%COMP%]    > .off-8[_ngcontent-%COMP%] {
  margin-left: 66.66667%;
}
.row[_ngcontent-%COMP%]    > .col-9[_ngcontent-%COMP%] {
  width: 75%;
}
.row[_ngcontent-%COMP%]    > .off-9[_ngcontent-%COMP%] {
  margin-left: 75%;
}
.row[_ngcontent-%COMP%]    > .col-10[_ngcontent-%COMP%] {
  width: 83.33333%;
}
.row[_ngcontent-%COMP%]    > .off-10[_ngcontent-%COMP%] {
  margin-left: 83.33333%;
}
.row[_ngcontent-%COMP%]    > .col-11[_ngcontent-%COMP%] {
  width: 91.66667%;
}
.row[_ngcontent-%COMP%]    > .off-11[_ngcontent-%COMP%] {
  margin-left: 91.66667%;
}
.row[_ngcontent-%COMP%]    > .col-12[_ngcontent-%COMP%] {
  width: 100%;
}
.row[_ngcontent-%COMP%]    > .off-12[_ngcontent-%COMP%] {
  margin-left: 100%;
}
.row.gtr-0[_ngcontent-%COMP%] {
  margin-top: 0;
  margin-left: 0rem;
}
.row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding: 0 0 0 0rem;
}
.row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {
  margin-top: 0rem;
}
.row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding-top: 0rem;
}
.row.gtr-25[_ngcontent-%COMP%] {
  margin-top: 0;
  margin-left: -0.375rem;
}
.row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding: 0 0 0 0.375rem;
}
.row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {
  margin-top: -0.375rem;
}
.row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding-top: 0.375rem;
}
.row.gtr-50[_ngcontent-%COMP%] {
  margin-top: 0;
  margin-left: -0.75rem;
}
.row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding: 0 0 0 0.75rem;
}
.row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {
  margin-top: -0.75rem;
}
.row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding-top: 0.75rem;
}
.row[_ngcontent-%COMP%] {
  margin-top: 0;
  margin-left: -1.5rem;
}
.row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding: 0 0 0 1.5rem;
}
.row.gtr-uniform[_ngcontent-%COMP%] {
  margin-top: -1.5rem;
}
.row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding-top: 1.5rem;
}
.row.gtr-150[_ngcontent-%COMP%] {
  margin-top: 0;
  margin-left: -2.25rem;
}
.row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding: 0 0 0 2.25rem;
}
.row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {
  margin-top: -2.25rem;
}
.row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding-top: 2.25rem;
}
.row.gtr-200[_ngcontent-%COMP%] {
  margin-top: 0;
  margin-left: -3rem;
}
.row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding: 0 0 0 3rem;
}
.row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {
  margin-top: -3rem;
}
.row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding-top: 3rem;
}
@media screen and (max-width: 1680px) {
  .row[_ngcontent-%COMP%] {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: stretch;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    box-sizing: border-box;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
    margin-bottom: 0;
  }
  .row.aln-left[_ngcontent-%COMP%] {
    justify-content: flex-start;
  }
  .row.aln-center[_ngcontent-%COMP%] {
    justify-content: center;
  }
  .row.aln-right[_ngcontent-%COMP%] {
    justify-content: flex-end;
  }
  .row.aln-top[_ngcontent-%COMP%] {
    align-items: flex-start;
  }
  .row.aln-middle[_ngcontent-%COMP%] {
    align-items: center;
  }
  .row.aln-bottom[_ngcontent-%COMP%] {
    align-items: flex-end;
  }
  .row[_ngcontent-%COMP%]    > .imp-xlarge[_ngcontent-%COMP%] {
    order: -1;
  }
  .row[_ngcontent-%COMP%]    > .col-1-xlarge[_ngcontent-%COMP%] {
    width: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-1-xlarge[_ngcontent-%COMP%] {
    margin-left: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-2-xlarge[_ngcontent-%COMP%] {
    width: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-2-xlarge[_ngcontent-%COMP%] {
    margin-left: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-3-xlarge[_ngcontent-%COMP%] {
    width: 25%;
  }
  .row[_ngcontent-%COMP%]    > .off-3-xlarge[_ngcontent-%COMP%] {
    margin-left: 25%;
  }
  .row[_ngcontent-%COMP%]    > .col-4-xlarge[_ngcontent-%COMP%] {
    width: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-4-xlarge[_ngcontent-%COMP%] {
    margin-left: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-5-xlarge[_ngcontent-%COMP%] {
    width: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-5-xlarge[_ngcontent-%COMP%] {
    margin-left: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-6-xlarge[_ngcontent-%COMP%] {
    width: 50%;
  }
  .row[_ngcontent-%COMP%]    > .off-6-xlarge[_ngcontent-%COMP%] {
    margin-left: 50%;
  }
  .row[_ngcontent-%COMP%]    > .col-7-xlarge[_ngcontent-%COMP%] {
    width: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-7-xlarge[_ngcontent-%COMP%] {
    margin-left: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-8-xlarge[_ngcontent-%COMP%] {
    width: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-8-xlarge[_ngcontent-%COMP%] {
    margin-left: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-9-xlarge[_ngcontent-%COMP%] {
    width: 75%;
  }
  .row[_ngcontent-%COMP%]    > .off-9-xlarge[_ngcontent-%COMP%] {
    margin-left: 75%;
  }
  .row[_ngcontent-%COMP%]    > .col-10-xlarge[_ngcontent-%COMP%] {
    width: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-10-xlarge[_ngcontent-%COMP%] {
    margin-left: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-11-xlarge[_ngcontent-%COMP%] {
    width: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-11-xlarge[_ngcontent-%COMP%] {
    margin-left: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-12-xlarge[_ngcontent-%COMP%] {
    width: 100%;
  }
  .row[_ngcontent-%COMP%]    > .off-12-xlarge[_ngcontent-%COMP%] {
    margin-left: 100%;
  }
  .row.gtr-0[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: 0rem;
  }
  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0rem;
  }
  .row.gtr-25[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.375rem;
  }
  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.375rem;
  }
  .row.gtr-50[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.75rem;
  }
  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.75rem;
  }
  .row[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -1.5rem;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 1.5rem;
  }
  .row.gtr-150[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -2.25rem;
  }
  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 2.25rem;
  }
  .row.gtr-200[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -3rem;
  }
  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 3rem;
  }
}
@media screen and (max-width: 1280px) {
  .row[_ngcontent-%COMP%] {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: stretch;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    box-sizing: border-box;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
    margin-bottom: 0;
  }
  .row.aln-left[_ngcontent-%COMP%] {
    justify-content: flex-start;
  }
  .row.aln-center[_ngcontent-%COMP%] {
    justify-content: center;
  }
  .row.aln-right[_ngcontent-%COMP%] {
    justify-content: flex-end;
  }
  .row.aln-top[_ngcontent-%COMP%] {
    align-items: flex-start;
  }
  .row.aln-middle[_ngcontent-%COMP%] {
    align-items: center;
  }
  .row.aln-bottom[_ngcontent-%COMP%] {
    align-items: flex-end;
  }
  .row[_ngcontent-%COMP%]    > .imp-large[_ngcontent-%COMP%] {
    order: -1;
  }
  .row[_ngcontent-%COMP%]    > .col-1-large[_ngcontent-%COMP%] {
    width: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-1-large[_ngcontent-%COMP%] {
    margin-left: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-2-large[_ngcontent-%COMP%] {
    width: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-2-large[_ngcontent-%COMP%] {
    margin-left: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-3-large[_ngcontent-%COMP%] {
    width: 25%;
  }
  .row[_ngcontent-%COMP%]    > .off-3-large[_ngcontent-%COMP%] {
    margin-left: 25%;
  }
  .row[_ngcontent-%COMP%]    > .col-4-large[_ngcontent-%COMP%] {
    width: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-4-large[_ngcontent-%COMP%] {
    margin-left: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-5-large[_ngcontent-%COMP%] {
    width: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-5-large[_ngcontent-%COMP%] {
    margin-left: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-6-large[_ngcontent-%COMP%] {
    width: 50%;
  }
  .row[_ngcontent-%COMP%]    > .off-6-large[_ngcontent-%COMP%] {
    margin-left: 50%;
  }
  .row[_ngcontent-%COMP%]    > .col-7-large[_ngcontent-%COMP%] {
    width: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-7-large[_ngcontent-%COMP%] {
    margin-left: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-8-large[_ngcontent-%COMP%] {
    width: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-8-large[_ngcontent-%COMP%] {
    margin-left: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-9-large[_ngcontent-%COMP%] {
    width: 75%;
  }
  .row[_ngcontent-%COMP%]    > .off-9-large[_ngcontent-%COMP%] {
    margin-left: 75%;
  }
  .row[_ngcontent-%COMP%]    > .col-10-large[_ngcontent-%COMP%] {
    width: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-10-large[_ngcontent-%COMP%] {
    margin-left: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-11-large[_ngcontent-%COMP%] {
    width: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-11-large[_ngcontent-%COMP%] {
    margin-left: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-12-large[_ngcontent-%COMP%] {
    width: 100%;
  }
  .row[_ngcontent-%COMP%]    > .off-12-large[_ngcontent-%COMP%] {
    margin-left: 100%;
  }
  .row.gtr-0[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: 0rem;
  }
  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0rem;
  }
  .row.gtr-25[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.375rem;
  }
  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.375rem;
  }
  .row.gtr-50[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.75rem;
  }
  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.75rem;
  }
  .row[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -1.5rem;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 1.5rem;
  }
  .row.gtr-150[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -2.25rem;
  }
  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 2.25rem;
  }
  .row.gtr-200[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -3rem;
  }
  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 3rem;
  }
}
@media screen and (max-width: 980px) {
  .row[_ngcontent-%COMP%] {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: stretch;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    box-sizing: border-box;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
    margin-bottom: 0;
  }
  .row.aln-left[_ngcontent-%COMP%] {
    justify-content: flex-start;
  }
  .row.aln-center[_ngcontent-%COMP%] {
    justify-content: center;
  }
  .row.aln-right[_ngcontent-%COMP%] {
    justify-content: flex-end;
  }
  .row.aln-top[_ngcontent-%COMP%] {
    align-items: flex-start;
  }
  .row.aln-middle[_ngcontent-%COMP%] {
    align-items: center;
  }
  .row.aln-bottom[_ngcontent-%COMP%] {
    align-items: flex-end;
  }
  .row[_ngcontent-%COMP%]    > .imp-medium[_ngcontent-%COMP%] {
    order: -1;
  }
  .row[_ngcontent-%COMP%]    > .col-1-medium[_ngcontent-%COMP%] {
    width: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-1-medium[_ngcontent-%COMP%] {
    margin-left: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-2-medium[_ngcontent-%COMP%] {
    width: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-2-medium[_ngcontent-%COMP%] {
    margin-left: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-3-medium[_ngcontent-%COMP%] {
    width: 25%;
  }
  .row[_ngcontent-%COMP%]    > .off-3-medium[_ngcontent-%COMP%] {
    margin-left: 25%;
  }
  .row[_ngcontent-%COMP%]    > .col-4-medium[_ngcontent-%COMP%] {
    width: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-4-medium[_ngcontent-%COMP%] {
    margin-left: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-5-medium[_ngcontent-%COMP%] {
    width: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-5-medium[_ngcontent-%COMP%] {
    margin-left: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-6-medium[_ngcontent-%COMP%] {
    width: 50%;
  }
  .row[_ngcontent-%COMP%]    > .off-6-medium[_ngcontent-%COMP%] {
    margin-left: 50%;
  }
  .row[_ngcontent-%COMP%]    > .col-7-medium[_ngcontent-%COMP%] {
    width: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-7-medium[_ngcontent-%COMP%] {
    margin-left: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-8-medium[_ngcontent-%COMP%] {
    width: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-8-medium[_ngcontent-%COMP%] {
    margin-left: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-9-medium[_ngcontent-%COMP%] {
    width: 75%;
  }
  .row[_ngcontent-%COMP%]    > .off-9-medium[_ngcontent-%COMP%] {
    margin-left: 75%;
  }
  .row[_ngcontent-%COMP%]    > .col-10-medium[_ngcontent-%COMP%] {
    width: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-10-medium[_ngcontent-%COMP%] {
    margin-left: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-11-medium[_ngcontent-%COMP%] {
    width: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-11-medium[_ngcontent-%COMP%] {
    margin-left: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-12-medium[_ngcontent-%COMP%] {
    width: 100%;
  }
  .row[_ngcontent-%COMP%]    > .off-12-medium[_ngcontent-%COMP%] {
    margin-left: 100%;
  }
  .row.gtr-0[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: 0rem;
  }
  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0rem;
  }
  .row.gtr-25[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.375rem;
  }
  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.375rem;
  }
  .row.gtr-50[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.75rem;
  }
  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.75rem;
  }
  .row[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -1.5rem;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 1.5rem;
  }
  .row.gtr-150[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -2.25rem;
  }
  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 2.25rem;
  }
  .row.gtr-200[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -3rem;
  }
  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 3rem;
  }
}
@media screen and (max-width: 736px) {
  .row[_ngcontent-%COMP%] {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: stretch;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    box-sizing: border-box;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
    margin-bottom: 0;
  }
  .row.aln-left[_ngcontent-%COMP%] {
    justify-content: flex-start;
  }
  .row.aln-center[_ngcontent-%COMP%] {
    justify-content: center;
  }
  .row.aln-right[_ngcontent-%COMP%] {
    justify-content: flex-end;
  }
  .row.aln-top[_ngcontent-%COMP%] {
    align-items: flex-start;
  }
  .row.aln-middle[_ngcontent-%COMP%] {
    align-items: center;
  }
  .row.aln-bottom[_ngcontent-%COMP%] {
    align-items: flex-end;
  }
  .row[_ngcontent-%COMP%]    > .imp-small[_ngcontent-%COMP%] {
    order: -1;
  }
  .row[_ngcontent-%COMP%]    > .col-1-small[_ngcontent-%COMP%] {
    width: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-1-small[_ngcontent-%COMP%] {
    margin-left: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-2-small[_ngcontent-%COMP%] {
    width: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-2-small[_ngcontent-%COMP%] {
    margin-left: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-3-small[_ngcontent-%COMP%] {
    width: 25%;
  }
  .row[_ngcontent-%COMP%]    > .off-3-small[_ngcontent-%COMP%] {
    margin-left: 25%;
  }
  .row[_ngcontent-%COMP%]    > .col-4-small[_ngcontent-%COMP%] {
    width: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-4-small[_ngcontent-%COMP%] {
    margin-left: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-5-small[_ngcontent-%COMP%] {
    width: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-5-small[_ngcontent-%COMP%] {
    margin-left: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-6-small[_ngcontent-%COMP%] {
    width: 50%;
  }
  .row[_ngcontent-%COMP%]    > .off-6-small[_ngcontent-%COMP%] {
    margin-left: 50%;
  }
  .row[_ngcontent-%COMP%]    > .col-7-small[_ngcontent-%COMP%] {
    width: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-7-small[_ngcontent-%COMP%] {
    margin-left: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-8-small[_ngcontent-%COMP%] {
    width: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-8-small[_ngcontent-%COMP%] {
    margin-left: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-9-small[_ngcontent-%COMP%] {
    width: 75%;
  }
  .row[_ngcontent-%COMP%]    > .off-9-small[_ngcontent-%COMP%] {
    margin-left: 75%;
  }
  .row[_ngcontent-%COMP%]    > .col-10-small[_ngcontent-%COMP%] {
    width: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-10-small[_ngcontent-%COMP%] {
    margin-left: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-11-small[_ngcontent-%COMP%] {
    width: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-11-small[_ngcontent-%COMP%] {
    margin-left: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-12-small[_ngcontent-%COMP%] {
    width: 100%;
  }
  .row[_ngcontent-%COMP%]    > .off-12-small[_ngcontent-%COMP%] {
    margin-left: 100%;
  }
  .row.gtr-0[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: 0rem;
  }
  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0rem;
  }
  .row.gtr-25[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.375rem;
  }
  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.375rem;
  }
  .row.gtr-50[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.75rem;
  }
  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.75rem;
  }
  .row[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -1.5rem;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 1.5rem;
  }
  .row.gtr-150[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -2.25rem;
  }
  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 2.25rem;
  }
  .row.gtr-200[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -3rem;
  }
  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 3rem;
  }
}
@media screen and (max-width: 480px) {
  .row[_ngcontent-%COMP%] {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: stretch;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    box-sizing: border-box;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
    margin-bottom: 0;
  }
  .row.aln-left[_ngcontent-%COMP%] {
    justify-content: flex-start;
  }
  .row.aln-center[_ngcontent-%COMP%] {
    justify-content: center;
  }
  .row.aln-right[_ngcontent-%COMP%] {
    justify-content: flex-end;
  }
  .row.aln-top[_ngcontent-%COMP%] {
    align-items: flex-start;
  }
  .row.aln-middle[_ngcontent-%COMP%] {
    align-items: center;
  }
  .row.aln-bottom[_ngcontent-%COMP%] {
    align-items: flex-end;
  }
  .row[_ngcontent-%COMP%]    > .imp-xsmall[_ngcontent-%COMP%] {
    order: -1;
  }
  .row[_ngcontent-%COMP%]    > .col-1-xsmall[_ngcontent-%COMP%] {
    width: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-1-xsmall[_ngcontent-%COMP%] {
    margin-left: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-2-xsmall[_ngcontent-%COMP%] {
    width: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-2-xsmall[_ngcontent-%COMP%] {
    margin-left: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-3-xsmall[_ngcontent-%COMP%] {
    width: 25%;
  }
  .row[_ngcontent-%COMP%]    > .off-3-xsmall[_ngcontent-%COMP%] {
    margin-left: 25%;
  }
  .row[_ngcontent-%COMP%]    > .col-4-xsmall[_ngcontent-%COMP%] {
    width: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-4-xsmall[_ngcontent-%COMP%] {
    margin-left: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-5-xsmall[_ngcontent-%COMP%] {
    width: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-5-xsmall[_ngcontent-%COMP%] {
    margin-left: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-6-xsmall[_ngcontent-%COMP%] {
    width: 50%;
  }
  .row[_ngcontent-%COMP%]    > .off-6-xsmall[_ngcontent-%COMP%] {
    margin-left: 50%;
  }
  .row[_ngcontent-%COMP%]    > .col-7-xsmall[_ngcontent-%COMP%] {
    width: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-7-xsmall[_ngcontent-%COMP%] {
    margin-left: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-8-xsmall[_ngcontent-%COMP%] {
    width: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-8-xsmall[_ngcontent-%COMP%] {
    margin-left: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-9-xsmall[_ngcontent-%COMP%] {
    width: 75%;
  }
  .row[_ngcontent-%COMP%]    > .off-9-xsmall[_ngcontent-%COMP%] {
    margin-left: 75%;
  }
  .row[_ngcontent-%COMP%]    > .col-10-xsmall[_ngcontent-%COMP%] {
    width: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-10-xsmall[_ngcontent-%COMP%] {
    margin-left: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-11-xsmall[_ngcontent-%COMP%] {
    width: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-11-xsmall[_ngcontent-%COMP%] {
    margin-left: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-12-xsmall[_ngcontent-%COMP%] {
    width: 100%;
  }
  .row[_ngcontent-%COMP%]    > .off-12-xsmall[_ngcontent-%COMP%] {
    margin-left: 100%;
  }
  .row.gtr-0[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: 0rem;
  }
  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0rem;
  }
  .row.gtr-25[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.375rem;
  }
  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.375rem;
  }
  .row.gtr-50[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.75rem;
  }
  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.75rem;
  }
  .row[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -1.5rem;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 1.5rem;
  }
  .row.gtr-150[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -2.25rem;
  }
  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 2.25rem;
  }
  .row.gtr-200[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -3rem;
  }
  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 3rem;
  }
}
@media screen and (max-width: 360px) {
  .row[_ngcontent-%COMP%] {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: stretch;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    box-sizing: border-box;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
    margin-bottom: 0;
  }
  .row.aln-left[_ngcontent-%COMP%] {
    justify-content: flex-start;
  }
  .row.aln-center[_ngcontent-%COMP%] {
    justify-content: center;
  }
  .row.aln-right[_ngcontent-%COMP%] {
    justify-content: flex-end;
  }
  .row.aln-top[_ngcontent-%COMP%] {
    align-items: flex-start;
  }
  .row.aln-middle[_ngcontent-%COMP%] {
    align-items: center;
  }
  .row.aln-bottom[_ngcontent-%COMP%] {
    align-items: flex-end;
  }
  .row[_ngcontent-%COMP%]    > .imp-xxsmall[_ngcontent-%COMP%] {
    order: -1;
  }
  .row[_ngcontent-%COMP%]    > .col-1-xxsmall[_ngcontent-%COMP%] {
    width: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-1-xxsmall[_ngcontent-%COMP%] {
    margin-left: 8.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-2-xxsmall[_ngcontent-%COMP%] {
    width: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-2-xxsmall[_ngcontent-%COMP%] {
    margin-left: 16.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-3-xxsmall[_ngcontent-%COMP%] {
    width: 25%;
  }
  .row[_ngcontent-%COMP%]    > .off-3-xxsmall[_ngcontent-%COMP%] {
    margin-left: 25%;
  }
  .row[_ngcontent-%COMP%]    > .col-4-xxsmall[_ngcontent-%COMP%] {
    width: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-4-xxsmall[_ngcontent-%COMP%] {
    margin-left: 33.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-5-xxsmall[_ngcontent-%COMP%] {
    width: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-5-xxsmall[_ngcontent-%COMP%] {
    margin-left: 41.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-6-xxsmall[_ngcontent-%COMP%] {
    width: 50%;
  }
  .row[_ngcontent-%COMP%]    > .off-6-xxsmall[_ngcontent-%COMP%] {
    margin-left: 50%;
  }
  .row[_ngcontent-%COMP%]    > .col-7-xxsmall[_ngcontent-%COMP%] {
    width: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-7-xxsmall[_ngcontent-%COMP%] {
    margin-left: 58.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-8-xxsmall[_ngcontent-%COMP%] {
    width: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-8-xxsmall[_ngcontent-%COMP%] {
    margin-left: 66.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-9-xxsmall[_ngcontent-%COMP%] {
    width: 75%;
  }
  .row[_ngcontent-%COMP%]    > .off-9-xxsmall[_ngcontent-%COMP%] {
    margin-left: 75%;
  }
  .row[_ngcontent-%COMP%]    > .col-10-xxsmall[_ngcontent-%COMP%] {
    width: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .off-10-xxsmall[_ngcontent-%COMP%] {
    margin-left: 83.33333%;
  }
  .row[_ngcontent-%COMP%]    > .col-11-xxsmall[_ngcontent-%COMP%] {
    width: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .off-11-xxsmall[_ngcontent-%COMP%] {
    margin-left: 91.66667%;
  }
  .row[_ngcontent-%COMP%]    > .col-12-xxsmall[_ngcontent-%COMP%] {
    width: 100%;
  }
  .row[_ngcontent-%COMP%]    > .off-12-xxsmall[_ngcontent-%COMP%] {
    margin-left: 100%;
  }
  .row.gtr-0[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: 0rem;
  }
  .row.gtr-0[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: 0rem;
  }
  .row.gtr-0.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0rem;
  }
  .row.gtr-25[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.375rem;
  }
  .row.gtr-25[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.375rem;
  }
  .row.gtr-25.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.375rem;
  }
  .row.gtr-50[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -0.75rem;
  }
  .row.gtr-50[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -0.75rem;
  }
  .row.gtr-50.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 0.75rem;
  }
  .row[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -1.5rem;
  }
  .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -1.5rem;
  }
  .row.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 1.5rem;
  }
  .row.gtr-150[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -2.25rem;
  }
  .row.gtr-150[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -2.25rem;
  }
  .row.gtr-150.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 2.25rem;
  }
  .row.gtr-200[_ngcontent-%COMP%] {
    margin-top: 0;
    margin-left: -3rem;
  }
  .row.gtr-200[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0 0 0 3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%] {
    margin-top: -3rem;
  }
  .row.gtr-200.gtr-uniform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding-top: 3rem;
  }
}
.box[_ngcontent-%COMP%] {
  border: solid 2px;
  margin-bottom: 2rem;
  padding: 1.5rem;
}
.box[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child, 
.box[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child    > [_ngcontent-%COMP%]:last-child, 
.box[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child    > [_ngcontent-%COMP%]:last-child    > [_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.box.alt[_ngcontent-%COMP%] {
  border: 0;
  border-radius: 0;
  padding: 0;
}
.box[_ngcontent-%COMP%] {
  border-color: #eeeeee;
}
input[type=submit][_ngcontent-%COMP%], 
input[type=reset][_ngcontent-%COMP%], 
input[type=button][_ngcontent-%COMP%], 
button[_ngcontent-%COMP%], 
.button[_ngcontent-%COMP%] {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition:
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  -webkit-transition:
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  -ms-transition:
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  transition:
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  display: inline-block;
  font-family:
    "Source Sans Pro",
    Helvetica,
    sans-serif;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.075em;
  height: 3rem;
  line-height: 3rem;
  padding: 0 2rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
}
input[type=submit].icon[_ngcontent-%COMP%]:before, 
input[type=reset].icon[_ngcontent-%COMP%]:before, 
input[type=button].icon[_ngcontent-%COMP%]:before, 
button.icon[_ngcontent-%COMP%]:before, 
.button.icon[_ngcontent-%COMP%]:before {
  margin-right: 0.5rem;
}
input[type=submit].icon.solo[_ngcontent-%COMP%], 
input[type=reset].icon.solo[_ngcontent-%COMP%], 
input[type=button].icon.solo[_ngcontent-%COMP%], 
button.icon.solo[_ngcontent-%COMP%], 
.button.icon.solo[_ngcontent-%COMP%] {
  position: relative;
  width: 4rem;
  height: 4rem;
  line-height: 4rem;
  border-radius: 4rem;
  text-indent: 4rem;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
}
input[type=submit].icon.solo[_ngcontent-%COMP%]:before, 
input[type=reset].icon.solo[_ngcontent-%COMP%]:before, 
input[type=button].icon.solo[_ngcontent-%COMP%]:before, 
button.icon.solo[_ngcontent-%COMP%]:before, 
.button.icon.solo[_ngcontent-%COMP%]:before {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  line-height: inherit;
  font-size: 1.25rem;
  margin-right: 0;
  text-align: center;
  text-indent: 0;
}
input[type=submit].fit[_ngcontent-%COMP%], 
input[type=reset].fit[_ngcontent-%COMP%], 
input[type=button].fit[_ngcontent-%COMP%], 
button.fit[_ngcontent-%COMP%], 
.button.fit[_ngcontent-%COMP%] {
  width: 100%;
}
input[type=submit].small[_ngcontent-%COMP%], 
input[type=reset].small[_ngcontent-%COMP%], 
input[type=button].small[_ngcontent-%COMP%], 
button.small[_ngcontent-%COMP%], 
.button.small[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 1.5rem;
}
input[type=submit].large[_ngcontent-%COMP%], 
input[type=reset].large[_ngcontent-%COMP%], 
input[type=button].large[_ngcontent-%COMP%], 
button.large[_ngcontent-%COMP%], 
.button.large[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  height: 3.5rem;
  line-height: 3.5rem;
  padding: 0 2.75rem;
}
@media screen and (max-width: 980px) {
  input[type=submit][_ngcontent-%COMP%], 
   input[type=reset][_ngcontent-%COMP%], 
   input[type=button][_ngcontent-%COMP%], 
   button[_ngcontent-%COMP%], 
   .button[_ngcontent-%COMP%] {
    font-size: 0.9rem;
    height: 3.25rem;
    line-height: 3.25rem;
  }
  input[type=submit].large[_ngcontent-%COMP%], 
   input[type=reset].large[_ngcontent-%COMP%], 
   input[type=button].large[_ngcontent-%COMP%], 
   button.large[_ngcontent-%COMP%], 
   .button.large[_ngcontent-%COMP%] {
    font-size: 1rem;
    height: 3.75rem;
    line-height: 3.75rem;
  }
}
input[type=submit].disabled[_ngcontent-%COMP%], 
input[type=submit][_ngcontent-%COMP%]:disabled, 
input[type=reset].disabled[_ngcontent-%COMP%], 
input[type=reset][_ngcontent-%COMP%]:disabled, 
input[type=button].disabled[_ngcontent-%COMP%], 
input[type=button][_ngcontent-%COMP%]:disabled, 
button.disabled[_ngcontent-%COMP%], 
button[_ngcontent-%COMP%]:disabled, 
.button.disabled[_ngcontent-%COMP%], 
.button[_ngcontent-%COMP%]:disabled {
  pointer-events: none;
  opacity: 0.25;
}
input[type=submit][_ngcontent-%COMP%], 
input[type=reset][_ngcontent-%COMP%], 
input[type=button][_ngcontent-%COMP%], 
button[_ngcontent-%COMP%], 
.button[_ngcontent-%COMP%] {
  background-color: transparent;
  box-shadow: inset 0 0 0 2px #212931;
  color: #212931 !important;
}
input[type=submit][_ngcontent-%COMP%]:hover, 
input[type=reset][_ngcontent-%COMP%]:hover, 
input[type=button][_ngcontent-%COMP%]:hover, 
button[_ngcontent-%COMP%]:hover, 
.button[_ngcontent-%COMP%]:hover {
  box-shadow: inset 0 0 0 2px #18bfef;
  color: #18bfef !important;
}
input[type=submit].primary[_ngcontent-%COMP%], 
input[type=reset].primary[_ngcontent-%COMP%], 
input[type=button].primary[_ngcontent-%COMP%], 
button.primary[_ngcontent-%COMP%], 
.button.primary[_ngcontent-%COMP%] {
  background-color: #212931;
  box-shadow: none;
  color: #ffffff !important;
}
input[type=submit].primary[_ngcontent-%COMP%]:hover, 
input[type=reset].primary[_ngcontent-%COMP%]:hover, 
input[type=button].primary[_ngcontent-%COMP%]:hover, 
button.primary[_ngcontent-%COMP%]:hover, 
.button.primary[_ngcontent-%COMP%]:hover {
  background-color: #18bfef;
}
form[_ngcontent-%COMP%] {
  margin: 0 0 2rem 0;
}
form[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
form[_ngcontent-%COMP%]    > .fields[_ngcontent-%COMP%] {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: calc(100% + 3rem);
  margin: -1.5rem 0 2rem -1.5rem;
}
form[_ngcontent-%COMP%]    > .fields[_ngcontent-%COMP%]    > .field[_ngcontent-%COMP%] {
  -moz-flex-grow: 0;
  -webkit-flex-grow: 0;
  -ms-flex-grow: 0;
  flex-grow: 0;
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  padding: 1.5rem 0 0 1.5rem;
  width: calc(100% - 1.5rem);
}
form[_ngcontent-%COMP%]    > .fields[_ngcontent-%COMP%]    > .field.half[_ngcontent-%COMP%] {
  width: calc(50% - 0.75rem);
}
form[_ngcontent-%COMP%]    > .fields[_ngcontent-%COMP%]    > .field.third[_ngcontent-%COMP%] {
  width: calc(100%/3 - 0.5rem);
}
form[_ngcontent-%COMP%]    > .fields[_ngcontent-%COMP%]    > .field.quarter[_ngcontent-%COMP%] {
  width: calc(25% - 0.375rem);
}
@media screen and (max-width: 480px) {
  form[_ngcontent-%COMP%]    > .fields[_ngcontent-%COMP%] {
    width: calc(100% + 3rem);
    margin: -1.5rem 0 2rem -1.5rem;
  }
  form[_ngcontent-%COMP%]    > .fields[_ngcontent-%COMP%]    > .field[_ngcontent-%COMP%] {
    padding: 1.5rem 0 0 1.5rem;
    width: calc(100% - 1.5rem);
  }
  form[_ngcontent-%COMP%]    > .fields[_ngcontent-%COMP%]    > .field.half[_ngcontent-%COMP%] {
    width: calc(100% - 1.5rem);
  }
  form[_ngcontent-%COMP%]    > .fields[_ngcontent-%COMP%]    > .field.third[_ngcontent-%COMP%] {
    width: calc(100% - 1.5rem);
  }
  form[_ngcontent-%COMP%]    > .fields[_ngcontent-%COMP%]    > .field.quarter[_ngcontent-%COMP%] {
    width: calc(100% - 1.5rem);
  }
}
label[_ngcontent-%COMP%] {
  display: block;
  font-family:
    "Source Sans Pro",
    Helvetica,
    sans-serif;
  font-weight: 900;
  line-height: 1.5;
  letter-spacing: 0.075em;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 0 0 0.75rem 0;
}
@media screen and (max-width: 980px) {
  label[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
}
input[type=text][_ngcontent-%COMP%], 
input[type=password][_ngcontent-%COMP%], 
input[type=email][_ngcontent-%COMP%], 
select[_ngcontent-%COMP%], 
textarea[_ngcontent-%COMP%] {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background: transparent;
  border-radius: 0;
  border: solid 2px;
  color: inherit;
  display: block;
  outline: 0;
  padding: 0 1rem;
  text-decoration: none;
  width: 100%;
}
input[type=text][_ngcontent-%COMP%]:invalid, 
input[type=password][_ngcontent-%COMP%]:invalid, 
input[type=email][_ngcontent-%COMP%]:invalid, 
select[_ngcontent-%COMP%]:invalid, 
textarea[_ngcontent-%COMP%]:invalid {
  box-shadow: none;
}
select[_ngcontent-%COMP%] {
  background-size: 1.25rem;
  background-repeat: no-repeat;
  background-position: calc(100% - 1rem) center;
  height: 3rem;
  padding-right: 3rem;
  text-overflow: ellipsis;
}
select[_ngcontent-%COMP%]:focus::-ms-value {
  background-color: transparent;
}
select[_ngcontent-%COMP%]::-ms-expand {
  display: none;
}
input[type=text][_ngcontent-%COMP%], 
input[type=password][_ngcontent-%COMP%], 
input[type=email][_ngcontent-%COMP%], 
select[_ngcontent-%COMP%] {
  height: 3rem;
}
textarea[_ngcontent-%COMP%] {
  padding: 0.75rem 1rem;
}
input[type=checkbox][_ngcontent-%COMP%], 
input[type=radio][_ngcontent-%COMP%] {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  display: block;
  float: left;
  margin-right: -2rem;
  opacity: 0;
  width: 1rem;
  z-index: -1;
}
input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], 
input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  letter-spacing: 0;
  font-family:
    "Merriweather",
    Georgia,
    serif;
  text-transform: none;
  font-weight: 300;
  padding-left: 2.8rem;
  padding-right: 1rem;
  position: relative;
}
input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, 
input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, 
input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {
  border-radius: 0;
  border: solid 2px;
  content: "";
  display: inline-block;
  font-size: 0.8rem;
  height: 1.8rem;
  left: 0;
  line-height: 1.65rem;
  position: absolute;
  text-align: center;
  top: -0.125rem;
  width: 1.8rem;
}
input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, 
input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {
  content: "\\f00c";
}
input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {
  border-radius: 0;
}
input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {
  border-radius: 100%;
}
[_ngcontent-%COMP%]::-webkit-input-placeholder {
  opacity: 1.0;
}
[_ngcontent-%COMP%]:-moz-placeholder {
  opacity: 1.0;
}
[_ngcontent-%COMP%]::-moz-placeholder {
  opacity: 1.0;
}
[_ngcontent-%COMP%]:-ms-input-placeholder {
  opacity: 1.0;
}
label[_ngcontent-%COMP%] {
  color: #212931;
}
input[type=text][_ngcontent-%COMP%], 
input[type=password][_ngcontent-%COMP%], 
input[type=email][_ngcontent-%COMP%], 
select[_ngcontent-%COMP%], 
textarea[_ngcontent-%COMP%] {
  border-color: #eeeeee;
}
input[type=text][_ngcontent-%COMP%]:focus, 
input[type=password][_ngcontent-%COMP%]:focus, 
input[type=email][_ngcontent-%COMP%]:focus, 
select[_ngcontent-%COMP%]:focus, 
textarea[_ngcontent-%COMP%]:focus {
  border-color: #18bfef;
}
select[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23eeeeee' /%3E%3C/svg%3E");
}
select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background-color: #ffffff;
  color: #212931;
}
.select-wrapper[_ngcontent-%COMP%]:before {
  color: #eeeeee;
}
input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], 
input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {
  color: #212931;
}
input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, 
input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {
  border-color: #eeeeee;
}
input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, 
input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {
  background-color: #212931;
  border-color: #212931;
  color: #ffffff;
}
input[type=checkbox][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, 
input[type=radio][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {
  border-color: #18bfef;
}
[_ngcontent-%COMP%]::-webkit-input-placeholder {
  color: #909498 !important;
}
[_ngcontent-%COMP%]:-moz-placeholder {
  color: #909498 !important;
}
[_ngcontent-%COMP%]::-moz-placeholder {
  color: #909498 !important;
}
[_ngcontent-%COMP%]:-ms-input-placeholder {
  color: #909498 !important;
}
.formerize-placeholder[_ngcontent-%COMP%] {
  color: #909498 !important;
}
.icon[_ngcontent-%COMP%] {
  text-decoration: none;
  border-bottom: none;
  position: relative;
}
.icon[_ngcontent-%COMP%]:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
}
.icon[_ngcontent-%COMP%]    > .label[_ngcontent-%COMP%] {
  display: none;
}
.icon[_ngcontent-%COMP%]:before {
  line-height: inherit;
}
.icon.solid[_ngcontent-%COMP%]:before {
  font-weight: 900;
}
.icon.brands[_ngcontent-%COMP%]:before {
  font-family: "Font Awesome 5 Brands";
}
.image[_ngcontent-%COMP%] {
  border: 0;
  display: inline-block;
  position: relative;
}
.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  display: block;
}
.image.left[_ngcontent-%COMP%], 
.image.right[_ngcontent-%COMP%] {
  max-width: 40%;
}
.image.left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], 
.image.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
}
.image.left[_ngcontent-%COMP%] {
  float: left;
  margin: 0 2rem 2rem 0;
  top: 0.75rem;
}
.image.right[_ngcontent-%COMP%] {
  float: right;
  margin: 0 0 2rem 2rem;
  top: 0.75rem;
}
.image.fit[_ngcontent-%COMP%] {
  display: block;
  margin: 2.5rem 0;
  width: 100%;
}
.image.fit[_ngcontent-%COMP%]:first-child {
  margin-top: 0;
}
.image.fit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
}
.image.main[_ngcontent-%COMP%] {
  display: block;
  margin: 4rem 0;
  width: 100%;
}
.image.main[_ngcontent-%COMP%]:first-child {
  margin-top: 0;
}
.image.main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
}
@media screen and (max-width: 736px) {
  .image.fit[_ngcontent-%COMP%] {
    margin: 2rem 0;
  }
  .image.main[_ngcontent-%COMP%] {
    margin: 2rem 0;
  }
}
a.image[_ngcontent-%COMP%] {
  overflow: hidden;
}
a.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  -moz-transition: -moz-transform 0.2s ease-out;
  -webkit-transition: -webkit-transform 0.2s ease-out;
  -ms-transition: -ms-transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
}
a.image[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {
  -moz-transform: scale(1.05);
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}
ul.actions[_ngcontent-%COMP%] {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  cursor: default;
  list-style: none;
  margin-left: -1rem;
  padding-left: 0;
}
ul.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding: 0 0 0 1rem;
  vertical-align: middle;
}
ul.actions.special[_ngcontent-%COMP%] {
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  width: 100%;
  margin-left: 0;
}
ul.actions.special[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {
  padding-left: 0;
}
ul.actions.stacked[_ngcontent-%COMP%] {
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 0;
}
ul.actions.stacked[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding: 1.3rem 0 0 0;
}
ul.actions.stacked[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {
  padding-top: 0;
}
ul.actions.fit[_ngcontent-%COMP%] {
  width: calc(100% + 1rem);
}
ul.actions.fit[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  width: 100%;
}
ul.actions.fit[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  width: 100%;
}
ul.actions.fit.stacked[_ngcontent-%COMP%] {
  width: 100%;
}
@media screen and (max-width: 480px) {
  ul.actions[_ngcontent-%COMP%]:not(.fixed) {
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 0;
    width: 100% !important;
  }
  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%] {
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
    -moz-flex-shrink: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-shrink: 1;
    flex-shrink: 1;
    padding: 1rem 0 0 0;
    text-align: center;
    width: 100%;
  }
  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    width: 100%;
  }
  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]:first-child {
    padding-top: 0;
  }
  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%], 
   ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], 
   ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], 
   ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], 
   ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {
    width: 100%;
  }
  ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=submit].icon[_ngcontent-%COMP%]:before, 
   ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=reset].icon[_ngcontent-%COMP%]:before, 
   ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   input[type=button].icon[_ngcontent-%COMP%]:before, 
   ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%]:before, 
   ul.actions[_ngcontent-%COMP%]:not(.fixed)   li[_ngcontent-%COMP%]   .button.icon[_ngcontent-%COMP%]:before {
    margin-left: -0.5rem;
  }
}
ul.icons[_ngcontent-%COMP%] {
  cursor: default;
  list-style: none;
  padding-left: 0;
}
ul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 0 0.5rem 0 0;
  vertical-align: middle;
}
ul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {
  padding-right: 0;
}
ul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {
  width: 2.25rem;
  height: 2.25rem;
  line-height: 2.25rem;
  display: inline-block;
  text-align: center;
  border-radius: 100%;
  font-size: 1.25rem;
}
ul.icons.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {
  -moz-transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  -webkit-transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  -ms-transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  font-size: 1rem;
}
ol[_ngcontent-%COMP%] {
  list-style: decimal;
  margin: 0 0 2rem 0;
  padding-left: 1.25rem;
}
ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding-left: 0.25rem;
}
ul[_ngcontent-%COMP%] {
  list-style: disc;
  margin: 0 0 2rem 0;
  padding-left: 1rem;
}
ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding-left: 0.5rem;
}
ul.divided[_ngcontent-%COMP%] {
  list-style: none;
  padding-left: 0;
}
ul.divided[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  border-top: solid 1px;
  padding: 0.5rem 0;
}
ul.divided[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {
  border-top: 0;
  padding-top: 0;
}
dl[_ngcontent-%COMP%] {
  margin: 0 0 2rem 0;
}
dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {
  display: block;
  font-weight: 600;
  margin: 0 0 1rem 0;
}
dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {
  margin-left: 2rem;
}
ul.divided[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  border-top-color: #eeeeee;
}
ul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]:hover:before {
  color: #18bfef;
}
ul.icons.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {
  box-shadow: inset 0 0 0 2px #eeeeee;
}
ul.icons.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]:hover:before {
  box-shadow: inset 0 0 0 2px #18bfef;
}
section.special[_ngcontent-%COMP%], 
article.special[_ngcontent-%COMP%] {
  text-align: center;
}
header[_ngcontent-%COMP%] {
  cursor: default;
}
header[_ngcontent-%COMP%]    > .date[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.8rem;
  height: 1;
  margin: 0 0 1rem 0;
  position: relative;
}
header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
  font-style: italic;
}
header[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  margin-top: -0.5rem;
  line-height: 2;
}
header[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {
  font-size: 1rem;
  margin-top: -0.75rem;
}
header[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  margin-top: -0.75rem;
}
header[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  margin-top: -0.75rem;
}
header.major[_ngcontent-%COMP%] {
  margin: 0 0 4rem 0;
  text-align: center;
}
header.major[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
header.major[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
  margin-top: 0;
  text-align: center;
}
header.major[_ngcontent-%COMP%]    > .date[_ngcontent-%COMP%] {
  font-size: 1rem;
  margin: 0 0 4rem 0;
}
header.major[_ngcontent-%COMP%]    > .date[_ngcontent-%COMP%]:before, 
header.major[_ngcontent-%COMP%]    > .date[_ngcontent-%COMP%]:after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  width: calc(50% - 6rem);
  border-top: solid 2px;
}
header.major[_ngcontent-%COMP%]    > .date[_ngcontent-%COMP%]:before {
  left: 0;
}
header.major[_ngcontent-%COMP%]    > .date[_ngcontent-%COMP%]:after {
  right: 0;
}
@media screen and (max-width: 980px) {
  header[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {
    display: none;
  }
}
@media screen and (max-width: 736px) {
  header.major[_ngcontent-%COMP%] {
    margin: 0 0 2rem 0;
  }
}
header.major[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:before, 
header.major[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:after {
  border-top-color: #eeeeee;
}
.table-wrapper[_ngcontent-%COMP%] {
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
}
table[_ngcontent-%COMP%] {
  margin: 0 0 2rem 0;
  width: 100%;
}
table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border: solid 1px;
  border-left: 0;
  border-right: 0;
}
table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 0.75rem 0.75rem;
}
table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  font-family:
    "Source Sans Pro",
    Helvetica,
    sans-serif;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.075em;
  line-height: 1.5;
  padding: 0 0.75rem 0.75rem 0.75rem;
  text-align: left;
  text-transform: uppercase;
}
@media screen and (max-width: 980px) {
  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
}
table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  border-bottom: solid 2px;
}
table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {
  border-top: solid 2px;
}
table.alt[_ngcontent-%COMP%] {
  border-collapse: separate;
}
table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  border: solid 1px;
  border-left-width: 0;
  border-top-width: 0;
}
table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {
  border-left-width: 1px;
}
table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {
  border-top-width: 1px;
}
table.alt[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  border-bottom: 0;
}
table.alt[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {
  border-top: 0;
}
table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-color: #eeeeee;
}
table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1) {
  background-color: rgba(220, 220, 220, 0.25);
}
table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  color: #212931;
}
table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  border-bottom-color: #eeeeee;
}
table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {
  border-top-color: #eeeeee;
}
table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  border-color: #eeeeee;
}
.pagination[_ngcontent-%COMP%] {
  display: -moz-inline-flex;
  display: -webkit-inline-flex;
  display: -ms-inline-flex;
  display: inline-flex;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  list-style: none;
  margin: 0 0 2rem 2px;
  padding: 0;
}
.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  -moz-transition:
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  -webkit-transition:
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  -ms-transition:
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  transition:
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  border: solid 2px;
  display: inline-block;
  font-family:
    "Source Sans Pro",
    Helvetica,
    sans-serif;
  font-size: 0.8rem;
  font-weight: 900;
  height: 3rem;
  letter-spacing: 0.075em;
  line-height: calc(3rem - 4px);
  margin-left: -2px;
  min-width: 3rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}
.pagination[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%], 
.pagination[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {
  text-decoration: none;
  padding: 0 1.75rem;
}
.pagination[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:before, 
.pagination[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
.pagination[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:before, 
.pagination[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:before {
  display: inline-block;
  color: inherit !important;
  line-height: inherit;
}
.pagination[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:before {
  content: "\\f104";
  margin-right: 0.9375em;
}
.pagination[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:before {
  content: "\\f105";
  float: right;
  margin-left: 0.9375em;
}
@media screen and (max-width: 980px) {
  .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
   .pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 480px) {
  .pagination[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%], 
   .pagination[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%] {
    display: none;
  }
}
.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  border-color: #eeeeee;
}
.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #212931 !important;
}
.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #18bfef !important;
  border-color: #18bfef;
  z-index: 1;
}
.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + a[_ngcontent-%COMP%], 
.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + span[_ngcontent-%COMP%] {
  border-left-color: #18bfef;
}
.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {
  background-color: #eeeeee;
}
.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: #eeeeee;
}
#wrapper[_ngcontent-%COMP%] {
  -moz-transition: opacity 0.5s ease;
  -webkit-transition: opacity 0.5s ease;
  -ms-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-color: #ffffff36;
}
#wrapper[_ngcontent-%COMP%]    > .bg[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #c9d8e8;
  background-size:
    auto,
    auto,
    100% auto;
  background-position:
    center,
    center,
    top center;
  background-repeat:
    repeat,
    no-repeat,
    no-repeat;
  background-attachment:
    scroll,
    scroll,
    scroll;
  z-index: 3;
}
#wrapper[_ngcontent-%COMP%]    > .bg.fixed[_ngcontent-%COMP%] {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
#wrapper.fade-in[_ngcontent-%COMP%]:before {
  pointer-events: none;
  -moz-transition: opacity 1s ease-in-out;
  -webkit-transition: opacity 1s ease-in-out;
  -ms-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  -moz-transition-delay: 0.75s;
  -webkit-transition-delay: 0.75s;
  -ms-transition-delay: 0.75s;
  transition-delay: 0.75s;
  background: #1e252d;
  content: "";
  display: block;
  height: 100%;
  left: 0;
  opacity: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
body.is-preload[_ngcontent-%COMP%]   #wrapper.fade-in[_ngcontent-%COMP%]:before {
  opacity: 1;
}
@media screen and (orientation: portrait) {
  #wrapper[_ngcontent-%COMP%]    > .bg[_ngcontent-%COMP%] {
    background-size:
      auto,
      auto,
      auto 175%;
  }
}
#intro[_ngcontent-%COMP%] {
  padding: 8rem 4rem 6rem 4rem;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-justify-content: -moz-flex-end;
  -webkit-justify-content: -webkit-flex-end;
  -ms-justify-content: -ms-flex-end;
  justify-content: flex-end;
  -moz-transition: opacity 1s ease, -moz-transform 1s ease;
  -webkit-transition: opacity 1s ease, -webkit-transform 1s ease;
  -ms-transition: opacity 1s ease, -ms-transform 1s ease;
  transition: opacity 1s ease, transform 1s ease;
  position: relative;
  cursor: default;
  text-align: center;
  z-index: 1;
  min-height: 100vh;
  background-image:
    url(/../../../../../../assets/images/login_background.jpg),
    linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)),
    url(/../../../../../../assets/images/login_background.jpg);
}
#intro[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  color: #ffffff;
}
#intro[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {
  color: #ffffff;
}
#intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
}
#intro[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {
  border-left-color: #ffffff;
}
#intro[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.075);
  border-color: #ffffff;
}
#intro[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {
  border-bottom-color: #ffffff;
}
#intro[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover, 
#intro[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%]:hover, 
#intro[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:hover, 
#intro[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, 
#intro[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {
  box-shadow: inset 0 0 0 2px #18bfef;
  color: #18bfef !important;
}
#intro[_ngcontent-%COMP%]   input[type=submit].primary[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   input[type=reset].primary[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   input[type=button].primary[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], 
#intro[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {
  background-color: #ffffff;
  box-shadow: none;
  color: #1e252d !important;
}
#intro[_ngcontent-%COMP%]   input[type=submit].primary[_ngcontent-%COMP%]:hover, 
#intro[_ngcontent-%COMP%]   input[type=reset].primary[_ngcontent-%COMP%]:hover, 
#intro[_ngcontent-%COMP%]   input[type=button].primary[_ngcontent-%COMP%]:hover, 
#intro[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, 
#intro[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {
  background-color: #18bfef;
}
#intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 5rem;
  line-height: 1;
}
#intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-style: italic;
  margin-top: -0.25rem;
  text-align: center;
}
#intro[_ngcontent-%COMP%]    + #header[_ngcontent-%COMP%] {
  margin-top: -20rem;
}
#intro[_ngcontent-%COMP%]    + #header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {
  -moz-transform: translateY(2rem);
  -webkit-transform: translateY(2rem);
  -ms-transform: translateY(2rem);
  transform: translateY(2rem);
  opacity: 0;
  visibility: hidden;
}
#intro.hidden[_ngcontent-%COMP%] {
  pointer-events: none;
  -moz-transform: translateY(2rem);
  -webkit-transform: translateY(2rem);
  -ms-transform: translateY(2rem);
  transform: translateY(2rem);
  -moz-transition:
    opacity 0.5s ease,
    -moz-transform 0.5s ease,
    visibility 0.5s;
  -webkit-transition:
    opacity 0.5s ease,
    -webkit-transform 0.5s ease,
    visibility 0.5s;
  -ms-transition:
    opacity 0.5s ease,
    -ms-transform 0.5s ease,
    visibility 0.5s;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease,
    visibility 0.5s;
  opacity: 0;
  visibility: hidden;
}
#intro.hidden[_ngcontent-%COMP%]    + #header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {
  -moz-transform: translateY(0);
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}
body.is-preload[_ngcontent-%COMP%]   #intro[_ngcontent-%COMP%] {
  -moz-transform: translateY(2rem);
  -webkit-transform: translateY(2rem);
  -ms-transform: translateY(2rem);
  transform: translateY(2rem);
  opacity: 0;
}
body.is-preload[_ngcontent-%COMP%]   #intro[_ngcontent-%COMP%]:not(.hidden)    + #header[_ngcontent-%COMP%]    + #nav[_ngcontent-%COMP%] {
  -moz-transform: translateY(4rem);
  -webkit-transform: translateY(4rem);
  -ms-transform: translateY(4rem);
  transform: translateY(4rem);
  opacity: 0;
}
@media screen and (max-width: 980px) {
  #intro[_ngcontent-%COMP%] {
    padding: 4rem 4rem 2rem 4rem;
    min-height: 90vh;
  }
  #intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {
    display: none;
  }
  #intro[_ngcontent-%COMP%]    + #header[_ngcontent-%COMP%] {
    margin-top: -14rem;
  }
}
@media screen and (max-width: 736px) {
  #intro[_ngcontent-%COMP%] {
    padding: 3rem 2rem 1rem 2rem;
    min-height: 80vh;
  }
  #intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    font-size: 3.25rem;
    line-height: 1.1;
    margin-bottom: 1rem;
  }
  #intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 1rem;
    margin-top: 0rem;
  }
  #intro[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {
    display: none;
  }
}
#header[_ngcontent-%COMP%] {
  color: #ffffff;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-justify-content: -moz-flex-end;
  -webkit-justify-content: -webkit-flex-end;
  -ms-justify-content: -ms-flex-end;
  justify-content: flex-end;
  pointer-events: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 20rem;
  padding-bottom: 8rem;
  position: relative;
  text-align: center;
  z-index: 2;
}
#header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
#header[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
#header[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  color: #ffffff;
}
#header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #ffffff;
  border-bottom-color: rgba(255, 255, 255, 0.5);
}
#header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  border-bottom-color: transparent;
  color: #18bfef !important;
}
#header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], 
#header[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {
  color: #ffffff;
}
#header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
#header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
#header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
#header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
#header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
#header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  color: #ffffff;
}
#header[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {
  border-left-color: #ffffff;
}
#header[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.075);
  border-color: #ffffff;
}
#header[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {
  border-bottom-color: #ffffff;
}
#header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {
  -moz-transition:
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out,
    opacity 0.5s ease,
    -moz-transform 0.5s ease,
    visibility 0.5s;
  -webkit-transition:
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out,
    opacity 0.5s ease,
    -webkit-transform 0.5s ease,
    visibility 0.5s;
  -ms-transition:
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out,
    opacity 0.5s ease,
    -ms-transform 0.5s ease,
    visibility 0.5s;
  transition:
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out,
    opacity 0.5s ease,
    transform 0.5s ease,
    visibility 0.5s;
  pointer-events: auto;
  border-style: solid;
  border-color: #ffffff;
  border-width: 5px !important;
  font-family:
    "Source Sans Pro",
    Helvetica,
    sans-serif;
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: 0.075em;
  line-height: 1;
  padding: 1rem 1.75rem;
  text-transform: uppercase;
  visibility: visible;
}
#header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {
  border-color: #18bfef !important;
  color: #18bfef !important;
}
@media screen and (max-width: 980px) {
  #header[_ngcontent-%COMP%] {
    height: 14rem;
    padding-bottom: 4rem;
  }
}
@media screen and (max-width: 736px) {
  #header[_ngcontent-%COMP%] {
    padding-bottom: 3rem;
  }
  #header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {
    font-size: 1.75rem;
    border-width: 3px !important;
  }
}
#nav[_ngcontent-%COMP%] {
  color: #ffffff;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-transition: -moz-transform 1s ease, opacity 1s ease;
  -webkit-transition: -webkit-transform 1s ease, opacity 1s ease;
  -ms-transition: -ms-transform 1s ease, opacity 1s ease;
  transition: transform 1s ease, opacity 1s ease;
  background: rgba(255, 255, 255, 0.175);
  height: 4rem;
  line-height: 4rem;
  margin: -4rem auto 0 auto;
  overflow: hidden;
  padding: 0 2rem 0 0;
  position: relative;
  width: calc(100% - 4rem);
  max-width: 72rem;
  z-index: 2;
}
#nav[_ngcontent-%COMP%]   ul.divided[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  border-top-color: #ffffff;
}
#nav[_ngcontent-%COMP%]   ul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]:hover:before {
  color: #18bfef;
}
#nav[_ngcontent-%COMP%]   ul.icons.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {
  box-shadow: inset 0 0 0 2px #ffffff;
}
#nav[_ngcontent-%COMP%]   ul.icons.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]:hover:before {
  box-shadow: inset 0 0 0 2px #18bfef;
}
#nav[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
#nav[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
#nav[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  color: #ffffff;
}
#nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #ffffff;
  border-bottom-color: rgba(255, 255, 255, 0.5);
}
#nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  border-bottom-color: transparent;
  color: #18bfef !important;
}
#nav[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], 
#nav[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {
  color: #ffffff;
}
#nav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
#nav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
#nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
#nav[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
#nav[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
#nav[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  color: #ffffff;
}
#nav[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {
  border-left-color: #ffffff;
}
#nav[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.075);
  border-color: #ffffff;
}
#nav[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {
  border-bottom-color: #ffffff;
}
#nav[_ngcontent-%COMP%]   ul.links[_ngcontent-%COMP%] {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  font-family:
    "Source Sans Pro",
    Helvetica,
    sans-serif;
  font-weight: 900;
  letter-spacing: 0.075em;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  text-transform: uppercase;
}
#nav[_ngcontent-%COMP%]   ul.links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: block;
  padding-left: 0;
}
#nav[_ngcontent-%COMP%]   ul.links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  display: block;
  font-size: 0.8rem;
  outline: none;
  padding: 0 2rem;
}
#nav[_ngcontent-%COMP%]   ul.links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: inherit !important;
  background-color: rgba(255, 255, 255, 0.1);
}
#nav[_ngcontent-%COMP%]   ul.links[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {
  background-color: #ffffff;
}
#nav[_ngcontent-%COMP%]   ul.links[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #1e252d;
}
#nav[_ngcontent-%COMP%]   ul.links[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #18bfef !important;
}
#nav[_ngcontent-%COMP%]   ul.icons[_ngcontent-%COMP%] {
  -moz-flex-grow: 0;
  -webkit-flex-grow: 0;
  -ms-flex-grow: 0;
  flex-grow: 0;
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  margin-bottom: 0;
}
@media screen and (max-width: 980px) {
  #nav[_ngcontent-%COMP%] {
    display: none;
  }
}
#main[_ngcontent-%COMP%] {
  background-color: #ffffff;
  position: relative;
  margin: 0 auto;
  width: calc(100% - 4rem);
  max-width: 72rem;
  z-index: 2;
}
#main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding: 4rem 4rem 2rem 4rem;
  border-top: solid 2px #eeeeee;
  margin: 0;
}
#main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {
  border-top: 0;
}
#main[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {
  text-align: center;
}
#main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: black;
}
#main[_ngcontent-%COMP%]    > .post[_ngcontent-%COMP%] {
  padding: 8rem 8rem 6rem 8rem;
}
#main[_ngcontent-%COMP%]    > .post[_ngcontent-%COMP%]   header.major[_ngcontent-%COMP%]    > .date[_ngcontent-%COMP%] {
  margin-top: -2rem;
}
#main[_ngcontent-%COMP%]    > .post[_ngcontent-%COMP%]   header.major[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], 
#main[_ngcontent-%COMP%]    > .post[_ngcontent-%COMP%]   header.major[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 4rem;
  line-height: 1.1;
  margin: 0 0 2rem 0;
}
#main[_ngcontent-%COMP%]    > .post.featured[_ngcontent-%COMP%] {
  text-align: center;
}
@media screen and (max-width: 1280px) {
  #main[_ngcontent-%COMP%]    > .post[_ngcontent-%COMP%] {
    padding: 6rem 4rem 4rem 4rem;
  }
}
@media screen and (max-width: 736px) {
  #main[_ngcontent-%COMP%]    > .post[_ngcontent-%COMP%] {
    padding: 4rem 2rem 2rem 2rem;
  }
  #main[_ngcontent-%COMP%]    > .post[_ngcontent-%COMP%]   header.major[_ngcontent-%COMP%]    > .date[_ngcontent-%COMP%] {
    margin-top: -1rem;
    margin-bottom: 2rem;
  }
  #main[_ngcontent-%COMP%]    > .post[_ngcontent-%COMP%]   header.major[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], 
   #main[_ngcontent-%COMP%]    > .post[_ngcontent-%COMP%]   header.major[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 0 0 1.5rem 0;
  }
}
#main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%] {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -moz-align-items: -moz-stretch;
  -webkit-align-items: -webkit-stretch;
  -ms-align-items: -ms-stretch;
  align-items: stretch;
  text-align: center;
  width: 100%;
  padding: 0;
}
#main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  -moz-flex-grow: 0;
  -webkit-flex-grow: 0;
  -ms-flex-grow: 0;
  flex-grow: 0;
}
#main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  width: 50%;
}
#main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding: 4rem;
  width: 50%;
}
#main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {
  border-color: #eeeeee;
  border-left-width: 2px;
  border-style: solid;
  border-top-width: 2px;
  text-align: center;
}
#main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
#main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]:nth-child(2n-1) {
  border-left-width: 0;
}
#main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]:nth-child(-n+2) {
  border-top-width: 0;
}
@media screen and (max-width: 980px) {
  #main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    width: 50%;
  }
  #main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 2.5rem;
    width: 50%;
  }
}
@media screen and (max-width: 736px) {
  #main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    width: 100%;
  }
  #main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 2rem;
    width: 100%;
  }
  #main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]:nth-child(2n-1) {
    border-left-width: 2px;
  }
  #main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]:nth-child(-n+2) {
    border-top-width: 2px;
  }
  #main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]:nth-child(n) {
    border-left-width: 0;
  }
  #main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]:nth-child(-n+1) {
    border-top-width: 0;
  }
  #main[_ngcontent-%COMP%]    > .posts[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {
    max-width: 25rem;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 736px) {
  #main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 2rem 2rem 0.1rem 2rem;
  }
}
@media screen and (max-width: 480px) {
  #main[_ngcontent-%COMP%] {
    width: 100%;
  }
}
#footer[_ngcontent-%COMP%] {
  color: #717981;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  background-color: #f5f5f5;
  color: #909498;
  cursor: default;
  position: relative;
  margin: 0 auto;
  width: calc(100% - 4rem);
  max-width: 72rem;
  z-index: 2;
}
#footer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  color: #717981;
}
#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #717981;
  border-bottom-color: rgba(113, 121, 129, 0.5);
}
#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  border-bottom-color: transparent;
  color: #18bfef !important;
}
#footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {
  color: #717981;
}
#footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  color: #717981;
}
#footer[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {
  border-left-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  background: rgba(220, 220, 220, 0.5);
  border-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {
  border-bottom-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {
  border-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {
  background-color: transparent;
  box-shadow: inset 0 0 0 2px #717981;
  color: #717981 !important;
}
#footer[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover, 
#footer[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%]:hover, 
#footer[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:hover, 
#footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, 
#footer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {
  box-shadow: inset 0 0 0 2px #18bfef;
  color: #18bfef !important;
}
#footer[_ngcontent-%COMP%]   input[type=submit].primary[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   input[type=reset].primary[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   input[type=button].primary[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%] {
  background-color: #717981;
  box-shadow: none;
  color: #f5f5f5 !important;
}
#footer[_ngcontent-%COMP%]   input[type=submit].primary[_ngcontent-%COMP%]:hover, 
#footer[_ngcontent-%COMP%]   input[type=reset].primary[_ngcontent-%COMP%]:hover, 
#footer[_ngcontent-%COMP%]   input[type=button].primary[_ngcontent-%COMP%]:hover, 
#footer[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%]:hover, 
#footer[_ngcontent-%COMP%]   .button.primary[_ngcontent-%COMP%]:hover {
  background-color: #18bfef;
}
#footer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  color: #717981;
}
#footer[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  border-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, 
#footer[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus, 
#footer[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, 
#footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, 
#footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {
  border-color: #18bfef;
}
#footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23e2e2e2' /%3E%3C/svg%3E");
}
#footer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background-color: #f5f5f5;
  color: #717981;
}
#footer[_ngcontent-%COMP%]   .select-wrapper[_ngcontent-%COMP%]:before {
  color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {
  color: #717981;
}
#footer[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, 
#footer[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {
  border-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, 
#footer[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {
  background-color: #717981;
  border-color: #717981;
  color: #f5f5f5;
}
#footer[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, 
#footer[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before {
  border-color: #18bfef;
}
#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {
  color: #b3b7bb !important;
}
#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {
  color: #b3b7bb !important;
}
#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {
  color: #b3b7bb !important;
}
#footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {
  color: #b3b7bb !important;
}
#footer[_ngcontent-%COMP%]   .formerize-placeholder[_ngcontent-%COMP%] {
  color: #b3b7bb !important;
}
#footer[_ngcontent-%COMP%]   ul.divided[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  border-top-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   ul.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]:hover:before {
  color: #18bfef;
}
#footer[_ngcontent-%COMP%]   ul.icons.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {
  box-shadow: inset 0 0 0 2px #e2e2e2;
}
#footer[_ngcontent-%COMP%]   ul.icons.alt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]:hover:before {
  box-shadow: inset 0 0 0 2px #18bfef;
}
#footer[_ngcontent-%COMP%]   header.major[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:before, 
#footer[_ngcontent-%COMP%]   header.major[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:after {
  border-top-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1) {
  background-color: rgba(220, 220, 220, 0.5);
}
#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  color: #717981;
}
#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  border-bottom-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {
  border-top-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   table.alt[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  border-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  border-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #717981 !important;
}
#footer[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #18bfef !important;
  border-color: #18bfef;
  z-index: 1;
}
#footer[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + a[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + span[_ngcontent-%COMP%] {
  border-left-color: #18bfef;
}
#footer[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {
  background-color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: #e2e2e2;
}
#footer[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {
  -moz-flex-basis: 50%;
  -webkit-flex-basis: 50%;
  -ms-flex-basis: 50%;
  flex-basis: 50%;
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  padding: 4rem 4rem 2rem 4rem;
  border-left: solid 2px #e2e2e2;
}
#footer[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:first-child {
  border-left: 0;
}
#footer[_ngcontent-%COMP%]    > section.split[_ngcontent-%COMP%] {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0;
}
#footer[_ngcontent-%COMP%]    > section.split[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {
  padding: 3rem 4rem 1rem 4rem;
  border-top: solid 2px #e2e2e2;
}
#footer[_ngcontent-%COMP%]    > section.split[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:first-child {
  padding: 5rem 4rem 1rem 4rem;
  border-top: 0;
}
#footer[_ngcontent-%COMP%]    > section.split[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:last-child {
  padding: 3rem 4rem 3rem 4rem;
}
#footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  padding: 3.15rem 4rem;
}
#footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
#footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  -moz-flex-grow: 0;
  -webkit-flex-grow: 0;
  -ms-flex-grow: 0;
  flex-grow: 0;
  width: 6rem;
}
#footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
}
#footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:first-child {
  padding: 4rem 4rem 3rem 4rem;
}
#footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:last-child {
  padding: 3rem 4rem 4rem 4rem;
}
#footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section.alt[_ngcontent-%COMP%] {
  -moz-align-items: -moz-flex-start;
  -webkit-align-items: -webkit-flex-start;
  -ms-align-items: -ms-flex-start;
  align-items: flex-start;
}
#footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section.alt[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {
  margin-top: -0.325rem;
}
#footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
#footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.8rem;
}
@media screen and (max-width: 980px) {
  #footer[_ngcontent-%COMP%] {
    display: block;
  }
  #footer[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {
    border-top: solid 2px #e2e2e2;
  }
  #footer[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:first-child {
    border-top: 0;
  }
  #footer[_ngcontent-%COMP%]    > section.split[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {
    padding: 4rem 4rem 2rem 4rem;
  }
  #footer[_ngcontent-%COMP%]    > section.split[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:first-child {
    padding: 4rem 4rem 2rem 4rem;
  }
  #footer[_ngcontent-%COMP%]    > section.split[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:last-child {
    padding: 4rem 4rem 2rem 4rem;
  }
  #footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {
    padding: 4rem;
  }
  #footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:first-child {
    padding: 4rem;
  }
  #footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:last-child {
    padding: 4rem;
  }
  #footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], 
   #footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
   #footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 736px) {
  #footer[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {
    padding: 2rem 2rem 0.1rem 2rem;
  }
  #footer[_ngcontent-%COMP%]    > section.split[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {
    padding: 2rem 2rem 0.1rem 2rem;
  }
  #footer[_ngcontent-%COMP%]    > section.split[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:first-child {
    padding: 2rem 2rem 0.1rem 2rem;
  }
  #footer[_ngcontent-%COMP%]    > section.split[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:last-child {
    padding: 2rem 2rem 0.1rem 2rem;
  }
  #footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {
    padding: 2rem;
  }
  #footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:first-child {
    padding: 2rem;
  }
  #footer[_ngcontent-%COMP%]    > section.split.contact[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:last-child {
    padding: 2rem;
  }
}
@media screen and (max-width: 480px) {
  #footer[_ngcontent-%COMP%] {
    width: 100%;
  }
}
#copyright[_ngcontent-%COMP%] {
  color: #ffffff;
  position: relative;
  color: rgba(255, 255, 255, 0.25);
  cursor: default;
  font-family:
    "Source Sans Pro",
    Helvetica,
    sans-serif;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.075em;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  margin: 4rem auto 8rem auto;
  width: calc(100% - 4rem);
  max-width: 72rem;
  z-index: 2;
}
#copyright[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
#copyright[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
#copyright[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  color: #ffffff;
}
#copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #ffffff;
  border-bottom-color: rgba(255, 255, 255, 0.5);
}
#copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  border-bottom-color: transparent;
  color: #18bfef !important;
}
#copyright[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], 
#copyright[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {
  color: #ffffff;
}
#copyright[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
#copyright[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
#copyright[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
#copyright[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
#copyright[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], 
#copyright[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {
  color: #ffffff;
}
#copyright[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {
  border-left-color: #ffffff;
}
#copyright[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.075);
  border-color: #ffffff;
}
#copyright[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {
  border-bottom-color: #ffffff;
}
#copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: inherit;
  border-bottom-color: inherit;
}
#copyright[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
#copyright[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  border-left: solid 2px;
  display: inline-block;
  line-height: 1;
  margin-left: 1rem;
  padding-left: 1rem;
}
#copyright[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {
  border-left: 0;
  margin-left: 0;
  padding-left: 0;
}
@media screen and (max-width: 1280px) {
  #copyright[_ngcontent-%COMP%] {
    margin: 4rem auto;
  }
}
@media screen and (max-width: 480px) {
  #copyright[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
    border-left: 0;
    margin: 1rem 0 0 0;
    padding-left: 0;
    display: block;
  }
  #copyright[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {
    margin-top: 0;
  }
}
#navPanelToggle[_ngcontent-%COMP%] {
  text-decoration: none;
  -moz-transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  -webkit-transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  -ms-transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  display: none;
  position: fixed;
  top: 0.75rem;
  right: 0.75rem;
  border: 0;
  color: #ffffff;
  font-family:
    "Source Sans Pro",
    Helvetica,
    sans-serif;
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.075em;
  padding: 0.375rem 1.25rem;
  text-transform: uppercase;
  z-index: 10001;
}
#navPanelToggle[_ngcontent-%COMP%]:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
#navPanelToggle[_ngcontent-%COMP%]:before {
  content: "\\f0c9";
  margin-right: 0.5rem;
}
#navPanelToggle.alt[_ngcontent-%COMP%] {
  background-color: rgba(255, 255, 255, 0.875);
  box-shadow: 0 0.125rem 0.75rem 0 rgba(30, 37, 45, 0.25);
  color: #212931;
}
#navPanelToggle.alt[_ngcontent-%COMP%]:hover {
  background-color: #ffffff;
}
@media screen and (max-width: 980px) {
  #navPanelToggle[_ngcontent-%COMP%] {
    display: block;
  }
}
@media screen and (max-width: 736px) {
  #navPanelToggle[_ngcontent-%COMP%] {
    font-size: 0.8rem;
    padding: 0.25rem 1rem;
  }
}
#navPanel[_ngcontent-%COMP%] {
  -moz-transform: translateX(20rem);
  -webkit-transform: translateX(20rem);
  -ms-transform: translateX(20rem);
  transform: translateX(20rem);
  -moz-transition:
    -moz-transform 0.5s ease,
    box-shadow 0.5s ease,
    visibility 0.5s;
  -webkit-transition:
    -webkit-transform 0.5s ease,
    box-shadow 0.5s ease,
    visibility 0.5s;
  -ms-transition:
    -ms-transform 0.5s ease,
    box-shadow 0.5s ease,
    visibility 0.5s;
  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease,
    visibility 0.5s;
  display: none;
  -webkit-overflow-scrolling: touch;
  background: #ffffff;
  box-shadow: none;
  color: #212931;
  height: 100%;
  max-width: 80%;
  overflow-y: auto;
  padding: 3rem 2rem;
  position: fixed;
  right: 0;
  top: 0;
  visibility: hidden;
  width: 20rem;
  z-index: 10002;
}
#navPanel[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {
  list-style: none;
  padding-left: 0;
}
#navPanel[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  border-top: solid 2px #eeeeee;
}
#navPanel[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  border-bottom: 0;
  display: block;
  font-family:
    "Source Sans Pro",
    Helvetica,
    sans-serif;
  font-size: 0.9rem;
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.075em;
  padding: 0.75rem 0;
  text-transform: uppercase;
}
#navPanel[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {
  border-top: 0;
}
#navPanel[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {
  text-decoration: none;
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: 0;
  color: #909498;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  line-height: 3.25rem;
  padding-right: 1.25rem;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;
  vertical-align: middle;
  width: 7rem;
}
#navPanel[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
#navPanel[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:before {
  content: "\\f00d";
  font-size: 1.25rem;
}
#navPanel[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {
  color: #212931;
}
@media screen and (max-width: 736px) {
  #navPanel[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {
    height: 4rem;
    line-height: 4rem;
  }
}
@media screen and (max-width: 980px) {
  #navPanel[_ngcontent-%COMP%] {
    display: block;
  }
}
@media screen and (max-width: 736px) {
  #navPanel[_ngcontent-%COMP%] {
    padding: 2.5rem 1.75rem;
  }
}
@media screen and (max-width: 980px) {
  body.is-navPanel-visible[_ngcontent-%COMP%]   #wrapper[_ngcontent-%COMP%] {
    opacity: 0.5;
  }
  body.is-navPanel-visible[_ngcontent-%COMP%]   #navPanel[_ngcontent-%COMP%] {
    -moz-transform: translateX(0);
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.2);
    visibility: visible;
  }
}
.gsi-material-button[_ngcontent-%COMP%] {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-appearance: none;
  background-color: WHITE;
  background-image: none;
  border: 1px solid #747775;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #1f1f1f;
  cursor: pointer;
  font-family:
    "Roboto",
    arial,
    sans-serif;
  font-size: 14px;
  height: 40px;
  letter-spacing: 0.25px;
  outline: none;
  overflow: hidden;
  padding: 0 12px;
  position: relative;
  text-align: center;
  -webkit-transition:
    background-color .218s,
    border-color .218s,
    box-shadow .218s;
  transition:
    background-color .218s,
    border-color .218s,
    box-shadow .218s;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;
  max-width: 400px;
  min-width: min-content;
}
.gsi-material-button[_ngcontent-%COMP%]   .gsi-material-button-icon[_ngcontent-%COMP%] {
  height: 20px;
  margin-right: 12px;
  min-width: 20px;
  width: 20px;
}
.gsi-material-button[_ngcontent-%COMP%]   .gsi-material-button-content-wrapper[_ngcontent-%COMP%] {
  -webkit-align-items: center;
  align-items: center;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 100%;
}
.gsi-material-button[_ngcontent-%COMP%]   .gsi-material-button-contents[_ngcontent-%COMP%] {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  font-family:
    "Roboto",
    arial,
    sans-serif;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
.gsi-material-button[_ngcontent-%COMP%]   .gsi-material-button-state[_ngcontent-%COMP%] {
  -webkit-transition: opacity .218s;
  transition: opacity .218s;
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.gsi-material-button[_ngcontent-%COMP%]:disabled {
  cursor: default;
  background-color: #ffffff61;
  border-color: #1f1f1f1f;
}
.gsi-material-button[_ngcontent-%COMP%]:disabled   .gsi-material-button-contents[_ngcontent-%COMP%] {
  opacity: 38%;
}
.gsi-material-button[_ngcontent-%COMP%]:disabled   .gsi-material-button-icon[_ngcontent-%COMP%] {
  opacity: 38%;
}
.gsi-material-button[_ngcontent-%COMP%]:not(:disabled):active   .gsi-material-button-state[_ngcontent-%COMP%], 
.gsi-material-button[_ngcontent-%COMP%]:not(:disabled):focus   .gsi-material-button-state[_ngcontent-%COMP%] {
  background-color: #303030;
  opacity: 12%;
}
.gsi-material-button[_ngcontent-%COMP%]:not(:disabled):hover {
  -webkit-box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15);
}
.gsi-material-button[_ngcontent-%COMP%]:not(:disabled):hover   .gsi-material-button-state[_ngcontent-%COMP%] {
  background-color: #303030;
  opacity: 8%;
}





/*# sourceMappingURL=main.css.map */`] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent" });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-SUPC3HK3.js.map
