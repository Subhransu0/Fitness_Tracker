import {
  NzToolTipComponent,
  NzTooltipBaseDirective,
  isTooltipEmpty
} from "./chunk-N7YF62ZX.js";
import {
  NzConnectedOverlayDirective,
  NzOverlayModule
} from "./chunk-VWAMPXSQ.js";
import {
  CdkConnectedOverlay,
  OverlayModule
} from "./chunk-CEBTQ6O5.js";
import "./chunk-MY5PDEKJ.js";
import "./chunk-3TW6M2PO.js";
import "./chunk-3YLFXDIK.js";
import {
  NzNoAnimationDirective
} from "./chunk-BUPDQVH5.js";
import "./chunk-G6R3QJQT.js";
import "./chunk-EVBYRSU7.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-GPVCVRZO.js";
import {
  zoomBigMotion
} from "./chunk-VOTRGBB5.js";
import "./chunk-SNA5H6LK.js";
import "./chunk-SCVB7XX4.js";
import "./chunk-YYN7BX2N.js";
import "./chunk-C7QK5UOM.js";
import "./chunk-VSLCO7GE.js";
import {
  WithConfig
} from "./chunk-VFMZNHRD.js";
import "./chunk-3KMVCVII.js";
import "./chunk-KYUQOYNT.js";
import "./chunk-6IOX52DO.js";
import {
  NgClass,
  NgStyle
} from "./chunk-Q5V4HACB.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  __decorate,
  booleanAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2YFXADOF.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-popover.mjs
function NzPopoverComponent_ng_template_0_Conditional_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzTitle);
  }
}
function NzPopoverComponent_ng_template_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, NzPopoverComponent_ng_template_0_Conditional_6_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle);
  }
}
function NzPopoverComponent_ng_template_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzContent);
  }
}
function NzPopoverComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    ɵɵelement(3, "span", 5);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6)(5, "div");
    ɵɵtemplate(6, NzPopoverComponent_ng_template_0_Conditional_6_Template, 2, 1, "div", 7);
    ɵɵelementStart(7, "div", 8);
    ɵɵtemplate(8, NzPopoverComponent_ng_template_0_ng_container_8_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-popover-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵɵadvance(6);
    ɵɵconditional(ctx_r1.nzTitle ? 6 : -1);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzContent);
  }
}
var NZ_CONFIG_MODULE_NAME = "popover";
var NzPopoverDirective = class _NzPopoverDirective extends NzTooltipBaseDirective {
  getProxyPropertyMap() {
    return __spreadValues({
      nzPopoverBackdrop: ["nzBackdrop", () => this.nzPopoverBackdrop]
    }, super.getProxyPropertyMap());
  }
  constructor() {
    super(NzPopoverComponent);
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.trigger = "hover";
    this.placement = "top";
    this.nzPopoverBackdrop = false;
    this.visibleChange = new EventEmitter();
  }
  static {
    this.ɵfac = function NzPopoverDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzPopoverDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzPopoverDirective,
      selectors: [["", "nz-popover", ""]],
      hostVars: 2,
      hostBindings: function NzPopoverDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-popover-open", ctx.visible);
        }
      },
      inputs: {
        arrowPointAtCenter: [2, "nzPopoverArrowPointAtCenter", "arrowPointAtCenter", booleanAttribute],
        title: [0, "nzPopoverTitle", "title"],
        content: [0, "nzPopoverContent", "content"],
        directiveTitle: [0, "nz-popover", "directiveTitle"],
        trigger: [0, "nzPopoverTrigger", "trigger"],
        placement: [0, "nzPopoverPlacement", "placement"],
        origin: [0, "nzPopoverOrigin", "origin"],
        visible: [0, "nzPopoverVisible", "visible"],
        mouseEnterDelay: [0, "nzPopoverMouseEnterDelay", "mouseEnterDelay"],
        mouseLeaveDelay: [0, "nzPopoverMouseLeaveDelay", "mouseLeaveDelay"],
        overlayClassName: [0, "nzPopoverOverlayClassName", "overlayClassName"],
        overlayStyle: [0, "nzPopoverOverlayStyle", "overlayStyle"],
        nzPopoverBackdrop: "nzPopoverBackdrop"
      },
      outputs: {
        visibleChange: "nzPopoverVisibleChange"
      },
      exportAs: ["nzPopover"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
    });
  }
};
__decorate([WithConfig()], NzPopoverDirective.prototype, "nzPopoverBackdrop", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-popover]",
      exportAs: "nzPopover",
      host: {
        "[class.ant-popover-open]": "visible"
      },
      standalone: true
    }]
  }], () => [], {
    arrowPointAtCenter: [{
      type: Input,
      args: [{
        alias: "nzPopoverArrowPointAtCenter",
        transform: booleanAttribute
      }]
    }],
    title: [{
      type: Input,
      args: ["nzPopoverTitle"]
    }],
    content: [{
      type: Input,
      args: ["nzPopoverContent"]
    }],
    directiveTitle: [{
      type: Input,
      args: ["nz-popover"]
    }],
    trigger: [{
      type: Input,
      args: ["nzPopoverTrigger"]
    }],
    placement: [{
      type: Input,
      args: ["nzPopoverPlacement"]
    }],
    origin: [{
      type: Input,
      args: ["nzPopoverOrigin"]
    }],
    visible: [{
      type: Input,
      args: ["nzPopoverVisible"]
    }],
    mouseEnterDelay: [{
      type: Input,
      args: ["nzPopoverMouseEnterDelay"]
    }],
    mouseLeaveDelay: [{
      type: Input,
      args: ["nzPopoverMouseLeaveDelay"]
    }],
    overlayClassName: [{
      type: Input,
      args: ["nzPopoverOverlayClassName"]
    }],
    overlayStyle: [{
      type: Input,
      args: ["nzPopoverOverlayStyle"]
    }],
    nzPopoverBackdrop: [{
      type: Input
    }],
    visibleChange: [{
      type: Output,
      args: ["nzPopoverVisibleChange"]
    }]
  });
})();
var NzPopoverComponent = class _NzPopoverComponent extends NzToolTipComponent {
  constructor() {
    super(...arguments);
    this._prefix = "ant-popover";
  }
  get hasBackdrop() {
    return this.nzTrigger === "click" ? this.nzBackdrop : false;
  }
  isEmpty() {
    return isTooltipEmpty(this.nzTitle) && isTooltipEmpty(this.nzContent);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNzPopoverComponent_BaseFactory;
      return function NzPopoverComponent_Factory(__ngFactoryType__) {
        return (ɵNzPopoverComponent_BaseFactory || (ɵNzPopoverComponent_BaseFactory = ɵɵgetInheritedFactory(_NzPopoverComponent)))(__ngFactoryType__ || _NzPopoverComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzPopoverComponent,
      selectors: [["nz-popover"]],
      exportAs: ["nzPopoverComponent"],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 6,
      consts: [["overlay", "cdkConnectedOverlay"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "nzArrowPointAtCenter"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], [1, "ant-popover-arrow-content"], ["role", "tooltip", 1, "ant-popover-inner"], [1, "ant-popover-title"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"]],
      template: function NzPopoverComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, NzPopoverComponent_ng_template_0_Template, 9, 9, "ng-template", 1, 0, ɵɵtemplateRefExtractor);
          ɵɵlistener("overlayOutsideClick", function NzPopoverComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onClickOutside($event));
          })("detach", function NzPopoverComponent_Template_ng_template_detach_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.hide());
          })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onPositionChange($event));
          });
        }
        if (rf & 2) {
          ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", ctx.cdkConnectedOverlayPush)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
        }
      },
      dependencies: [OverlayModule, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, NgClass, NgStyle, NzNoAnimationDirective, NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      data: {
        animation: [zoomBigMotion]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverComponent, [{
    type: Component,
    args: [{
      selector: "nz-popover",
      exportAs: "nzPopoverComponent",
      animations: [zoomBigMotion],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="cdkConnectedOverlayPush"
      [nzArrowPointAtCenter]="nzArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow">
            <span class="ant-popover-arrow-content"></span>
          </div>
          <div class="ant-popover-inner" role="tooltip">
            <div>
              @if (nzTitle) {
                <div class="ant-popover-title">
                  <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
                </div>
              }
              <div class="ant-popover-inner-content">
                <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      imports: [OverlayModule, NzOverlayModule, NgClass, NgStyle, NzNoAnimationDirective, NzOutletModule],
      standalone: true
    }]
  }], null, null);
})();
var NzPopoverModule = class _NzPopoverModule {
  static {
    this.ɵfac = function NzPopoverModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzPopoverModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzPopoverModule,
      imports: [NzPopoverDirective, NzPopoverComponent],
      exports: [NzPopoverDirective, NzPopoverComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzPopoverComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverModule, [{
    type: NgModule,
    args: [{
      imports: [NzPopoverDirective, NzPopoverComponent],
      exports: [NzPopoverDirective, NzPopoverComponent]
    }]
  }], null, null);
})();
export {
  NzPopoverComponent,
  NzPopoverDirective,
  NzPopoverModule
};
//# sourceMappingURL=ng-zorro-antd_popover.js.map