import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  FocusMonitor
} from "./chunk-GDWEDULS.js";
import {
  NzFormStatusService
} from "./chunk-2AJM3INJ.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-USKKVBK6.js";
import {
  Directionality
} from "./chunk-SUDFK2ZR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injectable,
  Input,
  NgModule,
  NgZone,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
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
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-UFOVQTBA.js";
import {
  __toESM
} from "./chunk-NQ4HTGF6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-radio.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var _c0 = ["*"];
var _c1 = ["inputElement"];
var _c2 = ["nz-radio", ""];
var NzRadioService = class _NzRadioService {
  constructor() {
    this.selected$ = new import_rxjs.ReplaySubject(1);
    this.touched$ = new import_rxjs.Subject();
    this.disabled$ = new import_rxjs.ReplaySubject(1);
    this.name$ = new import_rxjs.ReplaySubject(1);
  }
  touch() {
    this.touched$.next();
  }
  select(value) {
    this.selected$.next(value);
  }
  setDisabled(value) {
    this.disabled$.next(value);
  }
  setName(value) {
    this.name$.next(value);
  }
  static {
    this.ɵfac = function NzRadioService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzRadioService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzRadioService,
      factory: _NzRadioService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioService, [{
    type: Injectable
  }], null, null);
})();
var NzRadioGroupComponent = class _NzRadioGroupComponent {
  constructor(cdr, nzRadioService, directionality) {
    this.cdr = cdr;
    this.nzRadioService = nzRadioService;
    this.directionality = directionality;
    this.value = null;
    this.destroy$ = new import_rxjs.Subject();
    this.isNzDisableFirstChange = true;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.nzDisabled = false;
    this.nzButtonStyle = "outline";
    this.nzSize = "default";
    this.nzName = null;
    this.dir = "ltr";
  }
  ngOnInit() {
    this.nzRadioService.selected$.pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe((value) => {
      if (this.value !== value) {
        this.value = value;
        this.onChange(this.value);
      }
    });
    this.nzRadioService.touched$.pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe(() => {
      Promise.resolve().then(() => this.onTouched());
    });
    this.directionality.change?.pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzDisabled,
      nzName
    } = changes;
    if (nzDisabled) {
      this.nzRadioService.setDisabled(this.nzDisabled);
    }
    if (nzName) {
      this.nzRadioService.setName(this.nzName);
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  writeValue(value) {
    this.value = value;
    this.nzRadioService.select(value);
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.isNzDisableFirstChange = false;
    this.nzRadioService.setDisabled(this.nzDisabled);
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function NzRadioGroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzRadioGroupComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzRadioService), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzRadioGroupComponent,
      selectors: [["nz-radio-group"]],
      hostAttrs: [1, "ant-radio-group"],
      hostVars: 8,
      hostBindings: function NzRadioGroupComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-radio-group-large", ctx.nzSize === "large")("ant-radio-group-small", ctx.nzSize === "small")("ant-radio-group-solid", ctx.nzButtonStyle === "solid")("ant-radio-group-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzButtonStyle: "nzButtonStyle",
        nzSize: "nzSize",
        nzName: "nzName"
      },
      exportAs: ["nzRadioGroup"],
      standalone: true,
      features: [ɵɵProvidersFeature([NzRadioService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NzRadioGroupComponent),
        multi: true
      }]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzRadioGroupComponent_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-radio-group",
      exportAs: "nzRadioGroup",
      preserveWhitespaces: false,
      template: ` <ng-content></ng-content> `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzRadioService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzRadioGroupComponent),
        multi: true
      }],
      host: {
        class: "ant-radio-group",
        "[class.ant-radio-group-large]": `nzSize === 'large'`,
        "[class.ant-radio-group-small]": `nzSize === 'small'`,
        "[class.ant-radio-group-solid]": `nzButtonStyle === 'solid'`,
        "[class.ant-radio-group-rtl]": `dir === 'rtl'`
      },
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzRadioService
  }, {
    type: Directionality
  }], {
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzButtonStyle: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzName: [{
      type: Input
    }]
  });
})();
var NzRadioComponent = class _NzRadioComponent {
  focus() {
    this.focusMonitor.focusVia(this.inputElement, "keyboard");
  }
  blur() {
    this.inputElement.nativeElement.blur();
  }
  constructor(ngZone, elementRef, cdr, focusMonitor) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.focusMonitor = focusMonitor;
    this.isNgModel = false;
    this.destroy$ = new import_rxjs.Subject();
    this.isNzDisableFirstChange = true;
    this.directionality = inject(Directionality);
    this.nzRadioService = inject(NzRadioService, {
      optional: true
    });
    this.nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    this.isChecked = false;
    this.name = null;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.nzValue = null;
    this.nzDisabled = false;
    this.nzAutoFocus = false;
    this.isRadioButton = false;
    this.dir = "ltr";
  }
  setDisabledState(disabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
    this.isNzDisableFirstChange = false;
    this.cdr.markForCheck();
  }
  writeValue(value) {
    this.isChecked = value;
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.isNgModel = true;
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  ngOnInit() {
    if (this.nzRadioService) {
      this.nzRadioService.name$.pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe((name) => {
        this.name = name;
        this.cdr.markForCheck();
      });
      this.nzRadioService.disabled$.pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe((disabled) => {
        this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
        this.isNzDisableFirstChange = false;
        this.cdr.markForCheck();
      });
      this.nzRadioService.selected$.pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe((value) => {
        const isChecked = this.isChecked;
        this.isChecked = this.nzValue === value;
        if (this.isNgModel && isChecked !== this.isChecked && // We're only intereted if `isChecked` has been changed to `false` value to emit `false` to the ascendant form,
        // since we already emit `true` within the `setupClickListener`.
        this.isChecked === false) {
          this.onChange(false);
        }
        this.cdr.markForCheck();
      });
    }
    this.focusMonitor.monitor(this.elementRef, true).pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
        if (this.nzRadioService) {
          this.nzRadioService.touch();
        }
      }
    });
    this.directionality.change.pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.setupClickListener();
  }
  ngAfterViewInit() {
    if (this.nzAutoFocus) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
  setupClickListener() {
    this.ngZone.runOutsideAngular(() => {
      (0, import_rxjs.fromEvent)(this.elementRef.nativeElement, "click").pipe((0, import_operators.takeUntil)(this.destroy$)).subscribe((event) => {
        event.stopPropagation();
        event.preventDefault();
        if (this.nzDisabled || this.isChecked) {
          return;
        }
        this.ngZone.run(() => {
          this.focus();
          this.nzRadioService?.select(this.nzValue);
          if (this.isNgModel) {
            this.isChecked = true;
            this.onChange(true);
          }
          this.cdr.markForCheck();
        });
      });
    });
  }
  static {
    this.ɵfac = function NzRadioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzRadioComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzRadioComponent,
      selectors: [["", "nz-radio", ""], ["", "nz-radio-button", ""]],
      viewQuery: function NzRadioComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c1, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        }
      },
      hostVars: 18,
      hostBindings: function NzRadioComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-radio-wrapper-in-form-item", !!ctx.nzFormStatusService)("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.nzDisabled && ctx.isRadioButton)("ant-radio-wrapper-rtl", !ctx.isRadioButton && ctx.dir === "rtl")("ant-radio-button-wrapper-rtl", ctx.isRadioButton && ctx.dir === "rtl");
        }
      },
      inputs: {
        nzValue: "nzValue",
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
        isRadioButton: [2, "nz-radio-button", "isRadioButton", booleanAttribute]
      },
      exportAs: ["nzRadio"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NzRadioComponent),
        multi: true
      }]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      attrs: _c2,
      ngContentSelectors: _c0,
      decls: 6,
      vars: 24,
      consts: [["inputElement", ""], ["type", "radio", 3, "disabled", "checked"]],
      template: function NzRadioComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "span");
          ɵɵelement(1, "input", 1, 0)(3, "span");
          ɵɵelementEnd();
          ɵɵelementStart(4, "span");
          ɵɵprojection(5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassProp("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.nzDisabled && ctx.isRadioButton);
          ɵɵadvance();
          ɵɵclassProp("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);
          ɵɵproperty("disabled", ctx.nzDisabled)("checked", ctx.isChecked);
          ɵɵattribute("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("name", ctx.name);
          ɵɵadvance(2);
          ɵɵclassProp("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioComponent, [{
    type: Component,
    args: [{
      selector: "[nz-radio],[nz-radio-button]",
      exportAs: "nzRadio",
      preserveWhitespaces: false,
      template: `
    <span
      [class.ant-radio]="!isRadioButton"
      [class.ant-radio-checked]="isChecked && !isRadioButton"
      [class.ant-radio-disabled]="nzDisabled && !isRadioButton"
      [class.ant-radio-button]="isRadioButton"
      [class.ant-radio-button-checked]="isChecked && isRadioButton"
      [class.ant-radio-button-disabled]="nzDisabled && isRadioButton"
    >
      <input
        #inputElement
        type="radio"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [class.ant-radio-input]="!isRadioButton"
        [class.ant-radio-button-input]="isRadioButton"
        [disabled]="nzDisabled"
        [checked]="isChecked"
        [attr.name]="name"
      />
      <span [class.ant-radio-inner]="!isRadioButton" [class.ant-radio-button-inner]="isRadioButton"></span>
    </span>
    <span><ng-content></ng-content></span>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzRadioComponent),
        multi: true
      }],
      host: {
        "[class.ant-radio-wrapper-in-form-item]": "!!nzFormStatusService",
        "[class.ant-radio-wrapper]": "!isRadioButton",
        "[class.ant-radio-button-wrapper]": "isRadioButton",
        "[class.ant-radio-wrapper-checked]": "isChecked && !isRadioButton",
        "[class.ant-radio-button-wrapper-checked]": "isChecked && isRadioButton",
        "[class.ant-radio-wrapper-disabled]": "nzDisabled && !isRadioButton",
        "[class.ant-radio-button-wrapper-disabled]": "nzDisabled && isRadioButton",
        "[class.ant-radio-wrapper-rtl]": `!isRadioButton && dir === 'rtl'`,
        "[class.ant-radio-button-wrapper-rtl]": `isRadioButton && dir === 'rtl'`
      },
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
  }], {
    inputElement: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    nzValue: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isRadioButton: [{
      type: Input,
      args: [{
        alias: "nz-radio-button",
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzRadioModule = class _NzRadioModule {
  static {
    this.ɵfac = function NzRadioModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzRadioModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzRadioModule,
      imports: [NzRadioComponent, NzRadioGroupComponent],
      exports: [NzRadioComponent, NzRadioGroupComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRadioModule, [{
    type: NgModule,
    args: [{
      imports: [NzRadioComponent, NzRadioGroupComponent],
      exports: [NzRadioComponent, NzRadioGroupComponent]
    }]
  }], null, null);
})();

export {
  NzRadioService,
  NzRadioGroupComponent,
  NzRadioComponent,
  NzRadioModule
};
//# sourceMappingURL=chunk-BJ6EFY3J.js.map
