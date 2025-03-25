import {
  AccordionButtonDirective,
  AccordionComponent,
  AccordionItemComponent,
  TemplateIdDirective
} from "./chunk-WO4HTU2M.js";
import "./chunk-A45OPFBF.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-BMXAQSY2.js";
import "./chunk-C42J3HML.js";

// src/app/views/faqs/faqs.component.ts
function FAQsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function FAQsComponent_ng_template_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275nextContext();
      const item0_r2 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(item0_r2.toggleItem());
    });
    \u0275\u0275text(1, " 1. Are the standards based on my Google Account's gender? ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const item0_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("collapsed", !item0_r2.visible);
  }
}
function FAQsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, " This site currently only show male standards. The female standards will be available soon. ");
    \u0275\u0275elementEnd();
  }
}
function FAQsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function FAQsComponent_ng_template_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      \u0275\u0275nextContext();
      const item1_r4 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(item1_r4.toggleItem());
    });
    \u0275\u0275text(1, " 2. Where will my data be stored? ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const item1_r4 = \u0275\u0275reference(7);
    \u0275\u0275property("collapsed", !item1_r4.visible);
  }
}
function FAQsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, " Your data will be stored in a cloud PostgreSQL database securely. ");
    \u0275\u0275elementEnd();
  }
}
function FAQsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function FAQsComponent_ng_template_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      \u0275\u0275nextContext();
      const item2_r6 = \u0275\u0275reference(11);
      return \u0275\u0275resetView(item2_r6.toggleItem());
    });
    \u0275\u0275text(1, " 3. How can I contribute / report issues of this site? ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const item2_r6 = \u0275\u0275reference(11);
    \u0275\u0275property("collapsed", !item2_r6.visible);
  }
}
function FAQsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, " You can create a 'New issue' on ");
    \u0275\u0275elementStart(2, "a", 9);
    \u0275\u0275text(3, "https://github.com/yhmyhm0910/workout-progress/issues");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " to report issues / suggest new features. ");
    \u0275\u0275elementEnd();
  }
}
var _FAQsComponent = class _FAQsComponent {
  // items = [1, 2, 3, 4];
  constructor() {
  }
  ngOnInit() {
  }
};
_FAQsComponent.\u0275fac = function FAQsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FAQsComponent)();
};
_FAQsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FAQsComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 4, consts: [["item0", "cAccordionItem"], ["item1", "cAccordionItem"], ["item2", "cAccordionItem"], [3, "alwaysOpen"], [3, "visible"], ["cTemplateId", "accordionHeaderTemplate"], ["cTemplateId", "accordionBodyTemplate"], ["cAccordionButton", "", 3, "click", "collapsed"], [1, "accordion-body"], ["href", "https://github.com/yhmyhm0910/workout-progress/issues"]], template: function FAQsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "c-accordion", 3)(2, "c-accordion-item", 4, 0);
    \u0275\u0275template(4, FAQsComponent_ng_template_4_Template, 2, 1, "ng-template", 5)(5, FAQsComponent_ng_template_5_Template, 2, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "c-accordion-item", 4, 1);
    \u0275\u0275template(8, FAQsComponent_ng_template_8_Template, 2, 1, "ng-template", 5)(9, FAQsComponent_ng_template_9_Template, 2, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "c-accordion-item", 4, 2);
    \u0275\u0275template(12, FAQsComponent_ng_template_12_Template, 2, 1, "ng-template", 5)(13, FAQsComponent_ng_template_13_Template, 5, 0, "ng-template", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("alwaysOpen", true);
    \u0275\u0275advance();
    \u0275\u0275property("visible", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("visible", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("visible", false);
  }
}, dependencies: [
  AccordionComponent,
  AccordionItemComponent,
  TemplateIdDirective,
  AccordionButtonDirective
], encapsulation: 2 });
var FAQsComponent = _FAQsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FAQsComponent, { className: "FAQsComponent" });
})();
export {
  FAQsComponent
};
//# sourceMappingURL=faqs.component-5WPONNEC.js.map
