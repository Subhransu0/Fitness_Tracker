import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  NzTooltipDirective
} from "./chunk-WGGYUB47.js";
import {
  NzGridModule
} from "./chunk-PB4P6FBM.js";
import {
  NzI18nService
} from "./chunk-5VNJEEWL.js";
import "./chunk-62CNV2BI.js";
import {
  NzFormStatusService
} from "./chunk-2AJM3INJ.js";
import "./chunk-F3RBYOAN.js";
import "./chunk-CQXRWULD.js";
import "./chunk-GQEFCDP5.js";
import "./chunk-PBGGD2A6.js";
import "./chunk-KHNB2VKF.js";
import "./chunk-SM5VLUK2.js";
import "./chunk-34VJFVQH.js";
import "./chunk-HAAHYTLP.js";
import {
  AbstractControl,
  FormControlDirective,
  FormControlName,
  NgControl,
  NgModel
} from "./chunk-USKKVBK6.js";
import "./chunk-R5T23Z73.js";
import "./chunk-PWEDAS6R.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-JBLXKBKM.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-Y62AHHZA.js";
import {
  helpMotion
} from "./chunk-TPULG5UW.js";
import "./chunk-J34RL3XF.js";
import "./chunk-TNS6N2NR.js";
import "./chunk-RK3DJFJA.js";
import "./chunk-OS3H7SGH.js";
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
import {
  toBoolean
} from "./chunk-V4N2LXHM.js";
import {
  NgClass
} from "./chunk-WRKQCKFI.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  Input,
  NgModule,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  require_cjs,
  require_operators,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UFOVQTBA.js";
import {
  __spreadValues,
  __toESM
} from "./chunk-NQ4HTGF6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-form.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var _c0 = ["*"];
var _c1 = (a0) => [a0];
var _c2 = (a0) => ({
  $implicit: a0
});
function NzFormControlComponent_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.innerTip);
  }
}
function NzFormControlComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 4);
    ɵɵtemplate(2, NzFormControlComponent_Conditional_3_ng_container_2_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("@helpMotion", void 0);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c1, "ant-form-item-explain-" + ctx_r0.status));
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.innerTip)("nzStringTemplateOutletContext", ɵɵpureFunction1(6, _c2, ctx_r0.validateControl));
  }
}
function NzFormControlComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzExtra);
  }
}
function NzFormControlComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, NzFormControlComponent_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzExtra);
  }
}
function NzFormLabelComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tooltipIconType_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzType", tooltipIconType_r1)("nzTheme", ctx_r1.tooltipIcon.theme);
  }
}
function NzFormLabelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtemplate(1, NzFormLabelComponent_Conditional_2_ng_container_1_Template, 2, 2, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzTooltipTitle", ctx_r1.nzTooltipTitle);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.tooltipIcon.type);
  }
}
var NzFormItemComponent = class _NzFormItemComponent {
  setWithHelpViaTips(value) {
    this.withHelpClass = value;
    this.cdr.markForCheck();
  }
  setStatus(status) {
    this.status = status;
    this.cdr.markForCheck();
  }
  setHasFeedback(hasFeedback) {
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.status = "";
    this.hasFeedback = false;
    this.withHelpClass = false;
    this.destroy$ = new import_rxjs.Subject();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzFormItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzFormItemComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzFormItemComponent,
      selectors: [["nz-form-item"]],
      hostAttrs: [1, "ant-form-item"],
      hostVars: 12,
      hostBindings: function NzFormItemComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-form-item-has-success", ctx.status === "success")("ant-form-item-has-warning", ctx.status === "warning")("ant-form-item-has-error", ctx.status === "error")("ant-form-item-is-validating", ctx.status === "validating")("ant-form-item-has-feedback", ctx.hasFeedback && ctx.status)("ant-form-item-with-help", ctx.withHelpClass);
        }
      },
      exportAs: ["nzFormItem"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzFormItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-item",
      exportAs: "nzFormItem",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-form-item",
        "[class.ant-form-item-has-success]": 'status === "success"',
        "[class.ant-form-item-has-warning]": 'status === "warning"',
        "[class.ant-form-item-has-error]": 'status === "error"',
        "[class.ant-form-item-is-validating]": 'status === "validating"',
        "[class.ant-form-item-has-feedback]": "hasFeedback && status",
        "[class.ant-form-item-with-help]": "withHelpClass"
      },
      template: ` <ng-content></ng-content> `,
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], null);
})();
var NZ_CONFIG_MODULE_NAME = "form";
var DefaultTooltipIcon = {
  type: "question-circle",
  theme: "outline"
};
var NzFormDirective = class _NzFormDirective {
  getInputObservable(changeType) {
    return this.inputChanges$.pipe((0, import_operators.filter)((changes) => changeType in changes), (0, import_operators.map)((value) => value[changeType]));
  }
  constructor(nzConfigService, directionality) {
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzLayout = "horizontal";
    this.nzNoColon = false;
    this.nzAutoTips = {};
    this.nzDisableAutoTips = false;
    this.nzTooltipIcon = DefaultTooltipIcon;
    this.nzLabelAlign = "right";
    this.nzLabelWrap = false;
    this.dir = "ltr";
    this.destroy$ = new import_rxjs.Subject();
    this.inputChanges$ = new import_rxjs.Subject();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    this.inputChanges$.next(changes);
  }
  ngOnDestroy() {
    this.inputChanges$.complete();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzFormDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzFormDirective)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzFormDirective,
      selectors: [["", "nz-form", ""]],
      hostAttrs: [1, "ant-form"],
      hostVars: 8,
      hostBindings: function NzFormDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-form-horizontal", ctx.nzLayout === "horizontal")("ant-form-vertical", ctx.nzLayout === "vertical")("ant-form-inline", ctx.nzLayout === "inline")("ant-form-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzLayout: "nzLayout",
        nzNoColon: [2, "nzNoColon", "nzNoColon", booleanAttribute],
        nzAutoTips: "nzAutoTips",
        nzDisableAutoTips: [2, "nzDisableAutoTips", "nzDisableAutoTips", booleanAttribute],
        nzTooltipIcon: "nzTooltipIcon",
        nzLabelAlign: "nzLabelAlign",
        nzLabelWrap: [2, "nzLabelWrap", "nzLabelWrap", booleanAttribute]
      },
      exportAs: ["nzForm"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
    });
  }
};
__decorate([WithConfig()], NzFormDirective.prototype, "nzNoColon", void 0);
__decorate([WithConfig()], NzFormDirective.prototype, "nzAutoTips", void 0);
__decorate([WithConfig()], NzFormDirective.prototype, "nzTooltipIcon", void 0);
__decorate([WithConfig()], NzFormDirective.prototype, "nzLabelWrap", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-form]",
      exportAs: "nzForm",
      host: {
        class: "ant-form",
        "[class.ant-form-horizontal]": `nzLayout === 'horizontal'`,
        "[class.ant-form-vertical]": `nzLayout === 'vertical'`,
        "[class.ant-form-inline]": `nzLayout === 'inline'`,
        "[class.ant-form-rtl]": `dir === 'rtl'`
      },
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: Directionality
  }], {
    nzLayout: [{
      type: Input
    }],
    nzNoColon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoTips: [{
      type: Input
    }],
    nzDisableAutoTips: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTooltipIcon: [{
      type: Input
    }],
    nzLabelAlign: [{
      type: Input
    }],
    nzLabelWrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzFormControlComponent = class _NzFormControlComponent {
  get disableAutoTips() {
    return this.nzDisableAutoTips !== void 0 ? toBoolean(this.nzDisableAutoTips) : !!this.nzFormDirective?.nzDisableAutoTips;
  }
  set nzHasFeedback(value) {
    this._hasFeedback = value;
    this.nzFormStatusService.formStatusChanges.next({
      status: this.status,
      hasFeedback: this._hasFeedback
    });
    if (this.nzFormItemComponent) {
      this.nzFormItemComponent.setHasFeedback(this._hasFeedback);
    }
  }
  get nzHasFeedback() {
    return this._hasFeedback;
  }
  set nzValidateStatus(value) {
    if (value instanceof AbstractControl || value instanceof NgModel) {
      this.validateControl = value;
      this.validateString = null;
      this.watchControl();
    } else if (value instanceof FormControlName) {
      this.validateControl = value.control;
      this.validateString = null;
      this.watchControl();
    } else {
      this.validateString = value;
      this.validateControl = null;
      this.setStatus();
    }
  }
  watchControl() {
    this.validateChanges.unsubscribe();
    if (this.validateControl && this.validateControl.statusChanges) {
      this.validateChanges = this.validateControl.statusChanges.pipe((0, import_operators.startWith)(null), (0, import_operators.takeUntil)(this.destroyed$)).subscribe(() => {
        if (!this.disableAutoTips) {
          this.updateAutoErrorTip();
        }
        this.setStatus();
        this.cdr.markForCheck();
      });
    }
  }
  setStatus() {
    this.status = this.getControlStatus(this.validateString);
    this.innerTip = this.getInnerTip(this.status);
    this.nzFormStatusService.formStatusChanges.next({
      status: this.status,
      hasFeedback: this.nzHasFeedback
    });
    if (this.nzFormItemComponent) {
      this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip);
      this.nzFormItemComponent.setStatus(this.status);
    }
  }
  getControlStatus(validateString) {
    let status;
    if (validateString === "warning" || this.validateControlStatus("INVALID", "warning")) {
      status = "warning";
    } else if (validateString === "error" || this.validateControlStatus("INVALID")) {
      status = "error";
    } else if (validateString === "validating" || validateString === "pending" || this.validateControlStatus("PENDING")) {
      status = "validating";
    } else if (validateString === "success" || this.validateControlStatus("VALID")) {
      status = "success";
    } else {
      status = "";
    }
    return status;
  }
  validateControlStatus(validStatus, statusType) {
    if (!this.validateControl) {
      return false;
    } else {
      const {
        dirty,
        touched,
        status
      } = this.validateControl;
      return (!!dirty || !!touched) && (statusType ? this.validateControl.hasError(statusType) : status === validStatus);
    }
  }
  getInnerTip(status) {
    switch (status) {
      case "error":
        return !this.disableAutoTips && this.autoErrorTip || this.nzErrorTip || null;
      case "validating":
        return this.nzValidatingTip || null;
      case "success":
        return this.nzSuccessTip || null;
      case "warning":
        return this.nzWarningTip || null;
      default:
        return null;
    }
  }
  updateAutoErrorTip() {
    if (this.validateControl) {
      const errors = this.validateControl.errors || {};
      let autoErrorTip = "";
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          autoErrorTip = errors[key]?.[this.localeId] ?? this.nzAutoTips?.[this.localeId]?.[key] ?? this.nzAutoTips.default?.[key] ?? this.nzFormDirective?.nzAutoTips?.[this.localeId]?.[key] ?? this.nzFormDirective?.nzAutoTips.default?.[key];
        }
        if (!!autoErrorTip) {
          break;
        }
      }
      this.autoErrorTip = autoErrorTip;
    }
  }
  subscribeAutoTips(observable) {
    observable?.pipe((0, import_operators.takeUntil)(this.destroyed$)).subscribe(() => {
      if (!this.disableAutoTips) {
        this.updateAutoErrorTip();
        this.setStatus();
        this.cdr.markForCheck();
      }
    });
  }
  constructor(cdr, i18n, nzFormStatusService) {
    this.cdr = cdr;
    this.nzFormStatusService = nzFormStatusService;
    this._hasFeedback = false;
    this.validateChanges = import_rxjs.Subscription.EMPTY;
    this.validateString = null;
    this.destroyed$ = new import_rxjs.Subject();
    this.status = "";
    this.validateControl = null;
    this.innerTip = null;
    this.nzAutoTips = {};
    this.nzFormItemComponent = inject(NzFormItemComponent, {
      host: true,
      optional: true
    });
    this.nzFormDirective = inject(NzFormDirective, {
      optional: true
    });
    this.subscribeAutoTips(i18n.localeChange.pipe((0, import_operators.tap)((locale) => this.localeId = locale.locale)));
    this.subscribeAutoTips(this.nzFormDirective?.getInputObservable("nzAutoTips"));
    this.subscribeAutoTips(this.nzFormDirective?.getInputObservable("nzDisableAutoTips").pipe((0, import_operators.filter)(() => this.nzDisableAutoTips === void 0)));
  }
  ngOnChanges(changes) {
    const {
      nzDisableAutoTips,
      nzAutoTips,
      nzSuccessTip,
      nzWarningTip,
      nzErrorTip,
      nzValidatingTip
    } = changes;
    if (nzDisableAutoTips || nzAutoTips) {
      this.updateAutoErrorTip();
      this.setStatus();
    } else if (nzSuccessTip || nzWarningTip || nzErrorTip || nzValidatingTip) {
      this.setStatus();
    }
  }
  ngOnInit() {
    this.setStatus();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  ngAfterContentInit() {
    if (!this.validateControl && !this.validateString) {
      if (this.defaultValidateControl instanceof FormControlDirective) {
        this.nzValidateStatus = this.defaultValidateControl.control;
      } else {
        this.nzValidateStatus = this.defaultValidateControl;
      }
    }
  }
  static {
    this.ɵfac = function NzFormControlComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzFormControlComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(NzFormStatusService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzFormControlComponent,
      selectors: [["nz-form-control"]],
      contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgControl, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultValidateControl = _t.first);
        }
      },
      hostAttrs: [1, "ant-form-item-control"],
      inputs: {
        nzSuccessTip: "nzSuccessTip",
        nzWarningTip: "nzWarningTip",
        nzErrorTip: "nzErrorTip",
        nzValidatingTip: "nzValidatingTip",
        nzExtra: "nzExtra",
        nzAutoTips: "nzAutoTips",
        nzDisableAutoTips: [2, "nzDisableAutoTips", "nzDisableAutoTips", booleanAttribute],
        nzHasFeedback: [2, "nzHasFeedback", "nzHasFeedback", booleanAttribute],
        nzValidateStatus: "nzValidateStatus"
      },
      exportAs: ["nzFormControl"],
      standalone: true,
      features: [ɵɵProvidersFeature([NzFormStatusService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 2,
      consts: [[1, "ant-form-item-control-input"], [1, "ant-form-item-control-input-content"], [1, "ant-form-item-explain", "ant-form-item-explain-connected"], [1, "ant-form-item-extra"], ["role", "alert", 3, "ngClass"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [4, "nzStringTemplateOutlet"]],
      template: function NzFormControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 0)(1, "div", 1);
          ɵɵprojection(2);
          ɵɵelementEnd()();
          ɵɵtemplate(3, NzFormControlComponent_Conditional_3_Template, 3, 8, "div", 2)(4, NzFormControlComponent_Conditional_4_Template, 2, 1, "div", 3);
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵconditional(ctx.innerTip ? 3 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.nzExtra ? 4 : -1);
        }
      },
      dependencies: [NgClass, NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      data: {
        animation: [helpMotion]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormControlComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-control",
      exportAs: "nzFormControl",
      preserveWhitespaces: false,
      animations: [helpMotion],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="ant-form-item-control-input">
      <div class="ant-form-item-control-input-content">
        <ng-content></ng-content>
      </div>
    </div>
    @if (innerTip) {
      <div @helpMotion class="ant-form-item-explain ant-form-item-explain-connected">
        <div role="alert" [ngClass]="['ant-form-item-explain-' + status]">
          <ng-container *nzStringTemplateOutlet="innerTip; context: { $implicit: validateControl }">{{
            innerTip
          }}</ng-container>
        </div>
      </div>
    }

    @if (nzExtra) {
      <div class="ant-form-item-extra">
        <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
      </div>
    }
  `,
      providers: [NzFormStatusService],
      host: {
        class: "ant-form-item-control"
      },
      imports: [NgClass, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: NzFormStatusService
  }], {
    defaultValidateControl: [{
      type: ContentChild,
      args: [NgControl, {
        static: false
      }]
    }],
    nzSuccessTip: [{
      type: Input
    }],
    nzWarningTip: [{
      type: Input
    }],
    nzErrorTip: [{
      type: Input
    }],
    nzValidatingTip: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzAutoTips: [{
      type: Input
    }],
    nzDisableAutoTips: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHasFeedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzValidateStatus: [{
      type: Input
    }]
  });
})();
function toTooltipIcon(value) {
  const icon = typeof value === "string" ? {
    type: value
  } : value;
  return __spreadValues(__spreadValues({}, DefaultTooltipIcon), icon);
}
var NzFormLabelComponent = class _NzFormLabelComponent {
  set nzNoColon(value) {
    this.noColon = value;
  }
  get nzNoColon() {
    return this.noColon !== "default" ? this.noColon : !!this.nzFormDirective?.nzNoColon;
  }
  set nzTooltipIcon(value) {
    this._tooltipIcon = toTooltipIcon(value);
  }
  // due to 'get' and 'set' accessor must have the same type, so it was renamed to `tooltipIcon`
  get tooltipIcon() {
    return this._tooltipIcon !== "default" ? this._tooltipIcon : toTooltipIcon(this.nzFormDirective?.nzTooltipIcon || DefaultTooltipIcon);
  }
  set nzLabelAlign(value) {
    this.labelAlign = value;
  }
  get nzLabelAlign() {
    return this.labelAlign !== "default" ? this.labelAlign : this.nzFormDirective?.nzLabelAlign || "right";
  }
  set nzLabelWrap(value) {
    this.labelWrap = value;
  }
  get nzLabelWrap() {
    return this.labelWrap !== "default" ? this.labelWrap : !!this.nzFormDirective?.nzLabelWrap;
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.nzRequired = false;
    this.noColon = "default";
    this._tooltipIcon = "default";
    this.labelAlign = "default";
    this.labelWrap = "default";
    this.destroy$ = new import_rxjs.Subject();
    this.nzFormDirective = inject(NzFormDirective, {
      skipSelf: true,
      optional: true
    });
    if (this.nzFormDirective) {
      this.nzFormDirective.getInputObservable("nzNoColon").pipe((0, import_operators.filter)(() => this.noColon === "default"), (0, import_operators.takeUntil)(this.destroy$)).subscribe(() => this.cdr.markForCheck());
      this.nzFormDirective.getInputObservable("nzTooltipIcon").pipe((0, import_operators.filter)(() => this._tooltipIcon === "default"), (0, import_operators.takeUntil)(this.destroy$)).subscribe(() => this.cdr.markForCheck());
      this.nzFormDirective.getInputObservable("nzLabelAlign").pipe((0, import_operators.filter)(() => this.labelAlign === "default"), (0, import_operators.takeUntil)(this.destroy$)).subscribe(() => this.cdr.markForCheck());
      this.nzFormDirective.getInputObservable("nzLabelWrap").pipe((0, import_operators.filter)(() => this.labelWrap === "default"), (0, import_operators.takeUntil)(this.destroy$)).subscribe(() => this.cdr.markForCheck());
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzFormLabelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzFormLabelComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzFormLabelComponent,
      selectors: [["nz-form-label"]],
      hostAttrs: [1, "ant-form-item-label"],
      hostVars: 4,
      hostBindings: function NzFormLabelComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-form-item-label-left", ctx.nzLabelAlign === "left")("ant-form-item-label-wrap", ctx.nzLabelWrap);
        }
      },
      inputs: {
        nzFor: "nzFor",
        nzRequired: [2, "nzRequired", "nzRequired", booleanAttribute],
        nzNoColon: [2, "nzNoColon", "nzNoColon", booleanAttribute],
        nzTooltipTitle: "nzTooltipTitle",
        nzTooltipIcon: "nzTooltipIcon",
        nzLabelAlign: "nzLabelAlign",
        nzLabelWrap: [2, "nzLabelWrap", "nzLabelWrap", booleanAttribute]
      },
      exportAs: ["nzFormLabel"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 6,
      consts: [["nz-tooltip", "", 1, "ant-form-item-tooltip", 3, "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType", "nzTheme"]],
      template: function NzFormLabelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "label");
          ɵɵprojection(1);
          ɵɵtemplate(2, NzFormLabelComponent_Conditional_2_Template, 2, 2, "span", 0);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassProp("ant-form-item-no-colon", ctx.nzNoColon)("ant-form-item-required", ctx.nzRequired);
          ɵɵattribute("for", ctx.nzFor);
          ɵɵadvance(2);
          ɵɵconditional(ctx.nzTooltipTitle ? 2 : -1);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzTooltipDirective, NzIconModule, NzIconDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormLabelComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-label",
      exportAs: "nzFormLabel",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <label [attr.for]="nzFor" [class.ant-form-item-no-colon]="nzNoColon" [class.ant-form-item-required]="nzRequired">
      <ng-content></ng-content>
      @if (nzTooltipTitle) {
        <span class="ant-form-item-tooltip" nz-tooltip [nzTooltipTitle]="nzTooltipTitle">
          <ng-container *nzStringTemplateOutlet="tooltipIcon.type; let tooltipIconType">
            <span nz-icon [nzType]="tooltipIconType" [nzTheme]="tooltipIcon.theme"></span>
          </ng-container>
        </span>
      }
    </label>
  `,
      host: {
        class: "ant-form-item-label",
        "[class.ant-form-item-label-left]": `nzLabelAlign === 'left'`,
        "[class.ant-form-item-label-wrap]": `nzLabelWrap`
      },
      imports: [NzOutletModule, NzTooltipDirective, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    nzFor: [{
      type: Input
    }],
    nzRequired: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzNoColon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTooltipTitle: [{
      type: Input
    }],
    nzTooltipIcon: [{
      type: Input
    }],
    nzLabelAlign: [{
      type: Input
    }],
    nzLabelWrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzFormSplitComponent = class _NzFormSplitComponent {
  static {
    this.ɵfac = function NzFormSplitComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzFormSplitComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzFormSplitComponent,
      selectors: [["nz-form-split"]],
      hostAttrs: [1, "ant-form-split"],
      exportAs: ["nzFormSplit"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzFormSplitComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormSplitComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-split",
      exportAs: "nzFormSplit",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-form-split"
      },
      standalone: true
    }]
  }], null, null);
})();
var NzFormTextComponent = class _NzFormTextComponent {
  static {
    this.ɵfac = function NzFormTextComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzFormTextComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzFormTextComponent,
      selectors: [["nz-form-text"]],
      hostAttrs: [1, "ant-form-text"],
      exportAs: ["nzFormText"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzFormTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormTextComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-text",
      exportAs: "nzFormText",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-form-text"
      },
      standalone: true
    }]
  }], null, null);
})();
var NzFormModule = class _NzFormModule {
  static {
    this.ɵfac = function NzFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzFormModule,
      imports: [NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent],
      exports: [NzGridModule, NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzFormLabelComponent, NzFormControlComponent, NzGridModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormModule, [{
    type: NgModule,
    args: [{
      imports: [NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent],
      exports: [NzGridModule, NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent]
    }]
  }], null, null);
})();
export {
  DefaultTooltipIcon,
  NzFormControlComponent,
  NzFormDirective,
  NzFormItemComponent,
  NzFormLabelComponent,
  NzFormModule,
  NzFormSplitComponent,
  NzFormTextComponent
};
//# sourceMappingURL=ng-zorro-antd_form.js.map