import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  NzDestroyService,
  NzScrollService
} from "./chunk-R5T23Z73.js";
import "./chunk-PWEDAS6R.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-JBLXKBKM.js";
import {
  fadeMotion
} from "./chunk-TPULG5UW.js";
import "./chunk-J34RL3XF.js";
import "./chunk-TNS6N2NR.js";
import "./chunk-RK3DJFJA.js";
import {
  Platform,
  normalizePassiveListenerOptions
} from "./chunk-OS3H7SGH.js";
import {
  Directionality
} from "./chunk-SUDFK2ZR.js";
import {
  __decorate
} from "./chunk-XQZMWH4T.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-WKWVNXS4.js";
import "./chunk-V4N2LXHM.js";
import {
  DOCUMENT,
  NgIf,
  NgTemplateOutlet
} from "./chunk-WRKQCKFI.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  inject,
  numberAttribute,
  require_cjs,
  require_operators,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-UFOVQTBA.js";
import {
  __toESM
} from "./chunk-NQ4HTGF6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-back-top.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var _c0 = ["backTop"];
function NzBackTopComponent_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "div", 6);
    ɵɵelement(2, "span", 7);
    ɵɵelementEnd()();
  }
}
function NzBackTopComponent_Conditional_0_ng_template_4_Template(rf, ctx) {
}
function NzBackTopComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵtemplate(2, NzBackTopComponent_Conditional_0_ng_template_2_Template, 3, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, NzBackTopComponent_Conditional_0_ng_template_4_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultContent_r1 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-back-top-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("@fadeMotion", void 0);
    ɵɵadvance(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nzTemplate || defaultContent_r1);
  }
}
var NZ_CONFIG_MODULE_NAME = "backTop";
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var NzBackTopComponent = class _NzBackTopComponent {
  set backTop(backTop) {
    if (backTop) {
      this.backTopClickSubscription.unsubscribe();
      this.backTopClickSubscription = this.zone.runOutsideAngular(() => (0, import_rxjs.fromEvent)(backTop.nativeElement, "click").pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe(() => {
        this.scrollSrv.scrollTo(this.getTarget(), 0, {
          duration: this.nzDuration
        });
        if (this.nzClick.observers.length) {
          this.zone.run(() => this.nzClick.emit(true));
        }
      }));
    }
  }
  constructor(nzConfigService, scrollSrv, platform, zone, cdr, destroy$, directionality) {
    this.nzConfigService = nzConfigService;
    this.scrollSrv = scrollSrv;
    this.platform = platform;
    this.zone = zone;
    this.cdr = cdr;
    this.destroy$ = destroy$;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.scrollListenerDestroy$ = new import_rxjs.Subject();
    this.target = null;
    this.visible = false;
    this.dir = "ltr";
    this.nzVisibilityHeight = 400;
    this.nzDuration = 450;
    this.nzClick = new EventEmitter();
    this.backTopClickSubscription = import_rxjs.Subscription.EMPTY;
    this.doc = inject(DOCUMENT);
    this.dir = this.directionality.value;
  }
  ngOnInit() {
    this.registerScrollEvent();
    this.directionality.change?.pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  getTarget() {
    return this.target || window;
  }
  handleScroll() {
    if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
      return;
    }
    this.visible = !this.visible;
    this.cdr.detectChanges();
  }
  registerScrollEvent() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.scrollListenerDestroy$.next(true);
    this.handleScroll();
    this.zone.runOutsideAngular(() => {
      (0, import_rxjs.fromEvent)(this.getTarget(), "scroll", passiveEventListenerOptions).pipe((0, import_operators.debounceTime)(50), (0, import_operators.takeUntil)(this.scrollListenerDestroy$)).subscribe(() => this.handleScroll());
    });
  }
  ngOnDestroy() {
    this.scrollListenerDestroy$.next(true);
    this.scrollListenerDestroy$.complete();
  }
  ngOnChanges(changes) {
    const {
      nzTarget
    } = changes;
    if (nzTarget) {
      this.target = typeof this.nzTarget === "string" ? this.doc.querySelector(this.nzTarget) : this.nzTarget;
      this.registerScrollEvent();
    }
  }
  static {
    this.ɵfac = function NzBackTopComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzBackTopComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzScrollService), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzBackTopComponent,
      selectors: [["nz-back-top"]],
      viewQuery: function NzBackTopComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.backTop = _t.first);
        }
      },
      inputs: {
        nzTemplate: "nzTemplate",
        nzVisibilityHeight: [2, "nzVisibilityHeight", "nzVisibilityHeight", numberAttribute],
        nzTarget: "nzTarget",
        nzDuration: [2, "nzDuration", "nzDuration", numberAttribute]
      },
      outputs: {
        nzClick: "nzClick"
      },
      exportAs: ["nzBackTop"],
      standalone: true,
      features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [["backTop", ""], ["defaultContent", ""], [1, "ant-back-top", 3, "ant-back-top-rtl"], [1, "ant-back-top"], [3, "ngTemplateOutlet"], [1, "ant-back-top-content"], [1, "ant-back-top-icon"], ["nz-icon", "", "nzType", "vertical-align-top"]],
      template: function NzBackTopComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzBackTopComponent_Conditional_0_Template, 5, 4, "div", 2);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.visible ? 0 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective],
      encapsulation: 2,
      data: {
        animation: [fadeMotion]
      },
      changeDetection: 0
    });
  }
};
__decorate([WithConfig()], NzBackTopComponent.prototype, "nzVisibilityHeight", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBackTopComponent, [{
    type: Component,
    args: [{
      selector: "nz-back-top",
      exportAs: "nzBackTop",
      animations: [fadeMotion],
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, NzIconModule],
      template: `
    @if (visible) {
      <div #backTop class="ant-back-top" [class.ant-back-top-rtl]="dir === 'rtl'" @fadeMotion>
        <ng-template #defaultContent>
          <div class="ant-back-top-content">
            <div class="ant-back-top-icon">
              <span nz-icon nzType="vertical-align-top"></span>
            </div>
          </div>
        </ng-template>
        <ng-template [ngTemplateOutlet]="nzTemplate || defaultContent"></ng-template>
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      providers: [NzDestroyService]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NzScrollService
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }, {
    type: Directionality
  }], {
    nzTemplate: [{
      type: Input
    }],
    nzVisibilityHeight: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzTarget: [{
      type: Input
    }],
    nzDuration: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzClick: [{
      type: Output
    }],
    backTop: [{
      type: ViewChild,
      args: ["backTop", {
        static: false
      }]
    }]
  });
})();
var NzBackTopModule = class _NzBackTopModule {
  static {
    this.ɵfac = function NzBackTopModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzBackTopModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzBackTopModule,
      imports: [NzBackTopComponent],
      exports: [NzBackTopComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzBackTopComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBackTopModule, [{
    type: NgModule,
    args: [{
      exports: [NzBackTopComponent],
      imports: [NzBackTopComponent]
    }]
  }], null, null);
})();
export {
  NzBackTopComponent,
  NzBackTopModule
};
//# sourceMappingURL=ng-zorro-antd_back-top.js.map
