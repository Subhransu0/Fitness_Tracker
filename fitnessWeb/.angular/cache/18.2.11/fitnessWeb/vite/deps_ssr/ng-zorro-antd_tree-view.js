import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  TREE_KEY_MANAGER,
  coerceObservable
} from "./chunk-GDWEDULS.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  DataSource,
  SelectionModel,
  isDataSource
} from "./chunk-GQEFCDP5.js";
import "./chunk-PBGGD2A6.js";
import {
  NzNoAnimationDirective
} from "./chunk-SM5VLUK2.js";
import "./chunk-34VJFVQH.js";
import "./chunk-HAAHYTLP.js";
import {
  NzDestroyService
} from "./chunk-R5T23Z73.js";
import "./chunk-PWEDAS6R.js";
import {
  treeCollapseMotion
} from "./chunk-TPULG5UW.js";
import "./chunk-J34RL3XF.js";
import "./chunk-TNS6N2NR.js";
import "./chunk-RK3DJFJA.js";
import "./chunk-OS3H7SGH.js";
import {
  Directionality
} from "./chunk-SUDFK2ZR.js";
import "./chunk-V4N2LXHM.js";
import "./chunk-WRKQCKFI.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  numberAttribute,
  require_cjs,
  require_operators,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
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
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-UFOVQTBA.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-NQ4HTGF6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tree-view.mjs
var import_rxjs2 = __toESM(require_cjs(), 1);
var import_operators2 = __toESM(require_operators(), 1);

// node_modules/@angular/cdk/fesm2022/tree.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var CDK_TREE_NODE_OUTLET_NODE = new InjectionToken("CDK_TREE_NODE_OUTLET_NODE");
var CdkTreeNodeOutlet = class _CdkTreeNodeOutlet {
  constructor(viewContainer, _node) {
    this.viewContainer = viewContainer;
    this._node = _node;
  }
  static {
    this.ɵfac = function CdkTreeNodeOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTreeNodeOutlet)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkTreeNodeOutlet,
      selectors: [["", "cdkTreeNodeOutlet", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TREE_NODE_OUTLET_NODE]
    }, {
      type: Optional
    }]
  }], null);
})();
var CdkTreeNodeOutletContext = class {
  constructor(data) {
    this.$implicit = data;
  }
};
var CdkTreeNodeDef = class _CdkTreeNodeDef {
  /** @docs-private */
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function CdkTreeNodeDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTreeNodeDef)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkTreeNodeDef,
      selectors: [["", "cdkTreeNodeDef", ""]],
      inputs: {
        when: [0, "cdkTreeNodeDefWhen", "when"]
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeDef, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeDef]",
      inputs: [{
        name: "when",
        alias: "cdkTreeNodeDefWhen"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
function getTreeNoValidDataSourceError() {
  return Error(`A valid data source must be provided.`);
}
function getTreeMultipleDefaultNodeDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTreeMissingMatchingNodeDefError() {
  return Error(`Could not find a matching node definition for the provided node data.`);
}
function getTreeControlMissingError() {
  return Error(`Could not find a tree control, levelAccessor, or childrenAccessor for the tree.`);
}
function getMultipleTreeControlsError() {
  return Error(`More than one of tree control, levelAccessor, or childrenAccessor were provided.`);
}
var CdkTree = class _CdkTree {
  /**
   * Provides a stream containing the latest data array to render. Influenced by the tree's
   * stream of view window (what dataNodes are currently on screen).
   * Data source can be an observable of data array, or a data array to render.
   */
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  constructor(_differs, _changeDetectorRef) {
    this._differs = _differs;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = inject(ElementRef);
    this._dir = inject(Directionality);
    this._onDestroy = new import_rxjs.Subject();
    this._levels = /* @__PURE__ */ new Map();
    this._parents = /* @__PURE__ */ new Map();
    this._ariaSets = /* @__PURE__ */ new Map();
    this.viewChange = new import_rxjs.BehaviorSubject({
      start: 0,
      end: Number.MAX_VALUE
    });
    this._flattenedNodes = new import_rxjs.BehaviorSubject([]);
    this._nodeType = new import_rxjs.BehaviorSubject(null);
    this._nodes = new import_rxjs.BehaviorSubject(/* @__PURE__ */ new Map());
    this._keyManagerNodes = new import_rxjs.BehaviorSubject([]);
    this._keyManagerFactory = inject(TREE_KEY_MANAGER);
    this._viewInit = false;
  }
  ngAfterContentInit() {
    this._initializeKeyManager();
  }
  ngAfterContentChecked() {
    this._updateDefaultNodeDefinition();
    this._subscribeToDataChanges();
  }
  ngOnDestroy() {
    this._nodeOutlet.viewContainer.clear();
    this.viewChange.complete();
    this._onDestroy.next();
    this._onDestroy.complete();
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
    this._keyManager?.destroy();
  }
  ngOnInit() {
    this._checkTreeControlUsage();
    this._initializeDataDiffer();
  }
  ngAfterViewInit() {
    this._viewInit = true;
  }
  _updateDefaultNodeDefinition() {
    const defaultNodeDefs = this._nodeDefs.filter((def) => !def.when);
    if (defaultNodeDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMultipleDefaultNodeDefsError();
    }
    this._defaultNodeDef = defaultNodeDefs[0];
  }
  /**
   * Sets the node type for the tree, if it hasn't been set yet.
   *
   * This will be called by the first node that's rendered in order for the tree
   * to determine what data transformations are required.
   */
  _setNodeTypeIfUnset(nodeType) {
    if (this._nodeType.value === null) {
      this._nodeType.next(nodeType);
    }
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the node outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
    if (!dataSource) {
      this._nodeOutlet.viewContainer.clear();
    }
    this._dataSource = dataSource;
    if (this._nodeDefs) {
      this._subscribeToDataChanges();
    }
  }
  _getExpansionModel() {
    if (!this.treeControl) {
      this._expansionModel ??= new SelectionModel(true);
      return this._expansionModel;
    }
    return this.treeControl.expansionModel;
  }
  /** Set up a subscription for the data provided by the data source. */
  _subscribeToDataChanges() {
    if (this._dataSubscription) {
      return;
    }
    let dataStream;
    if (isDataSource(this._dataSource)) {
      dataStream = this._dataSource.connect(this);
    } else if ((0, import_rxjs.isObservable)(this._dataSource)) {
      dataStream = this._dataSource;
    } else if (Array.isArray(this._dataSource)) {
      dataStream = (0, import_rxjs.of)(this._dataSource);
    }
    if (!dataStream) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        throw getTreeNoValidDataSourceError();
      }
      return;
    }
    this._dataSubscription = this._getRenderData(dataStream).pipe((0, import_operators.takeUntil)(this._onDestroy)).subscribe((renderingData) => {
      this._renderDataChanges(renderingData);
    });
  }
  /** Given an Observable containing a stream of the raw data, returns an Observable containing the RenderingData */
  _getRenderData(dataStream) {
    const expansionModel = this._getExpansionModel();
    return (0, import_rxjs.combineLatest)([
      dataStream,
      this._nodeType,
      // We don't use the expansion data directly, however we add it here to essentially
      // trigger data rendering when expansion changes occur.
      expansionModel.changed.pipe((0, import_operators.startWith)(null), (0, import_operators.tap)((expansionChanges) => {
        this._emitExpansionChanges(expansionChanges);
      }))
    ]).pipe((0, import_operators.switchMap)(([data, nodeType]) => {
      if (nodeType === null) {
        return (0, import_rxjs.of)({
          renderNodes: data,
          flattenedNodes: null,
          nodeType
        });
      }
      return this._computeRenderingData(data, nodeType).pipe((0, import_operators.map)((convertedData) => __spreadProps(__spreadValues({}, convertedData), {
        nodeType
      })));
    }));
  }
  _renderDataChanges(data) {
    if (data.nodeType === null) {
      this.renderNodeChanges(data.renderNodes);
      return;
    }
    this._updateCachedData(data.flattenedNodes);
    this.renderNodeChanges(data.renderNodes);
    this._updateKeyManagerItems(data.flattenedNodes);
  }
  _emitExpansionChanges(expansionChanges) {
    if (!expansionChanges) {
      return;
    }
    const nodes = this._nodes.value;
    for (const added of expansionChanges.added) {
      const node = nodes.get(added);
      node?._emitExpansionState(true);
    }
    for (const removed of expansionChanges.removed) {
      const node = nodes.get(removed);
      node?._emitExpansionState(false);
    }
  }
  _initializeKeyManager() {
    const items = (0, import_rxjs.combineLatest)([this._keyManagerNodes, this._nodes]).pipe((0, import_operators.map)(([keyManagerNodes, renderNodes]) => keyManagerNodes.reduce((items2, data) => {
      const node = renderNodes.get(this._getExpansionKey(data));
      if (node) {
        items2.push(node);
      }
      return items2;
    }, [])));
    const keyManagerOptions = {
      trackBy: (node) => this._getExpansionKey(node.data),
      skipPredicate: (node) => !!node.isDisabled,
      typeAheadDebounceInterval: true,
      horizontalOrientation: this._dir.value
    };
    this._keyManager = this._keyManagerFactory(items, keyManagerOptions);
  }
  _initializeDataDiffer() {
    const trackBy = this.trackBy ?? ((_index, item) => this._getExpansionKey(item));
    this._dataDiffer = this._differs.find([]).create(trackBy);
  }
  _checkTreeControlUsage() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      let numTreeControls = 0;
      if (this.treeControl) {
        numTreeControls++;
      }
      if (this.levelAccessor) {
        numTreeControls++;
      }
      if (this.childrenAccessor) {
        numTreeControls++;
      }
      if (!numTreeControls) {
        throw getTreeControlMissingError();
      } else if (numTreeControls > 1) {
        throw getMultipleTreeControlsError();
      }
    }
  }
  /** Check for changes made in the data and render each change (node added/removed/moved). */
  renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
    const changes = dataDiffer.diff(data);
    if (!changes && !this._viewInit) {
      return;
    }
    changes?.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      if (item.previousIndex == null) {
        this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
      } else if (currentIndex == null) {
        viewContainer.remove(adjustedPreviousIndex);
      } else {
        const view = viewContainer.get(adjustedPreviousIndex);
        viewContainer.move(view, currentIndex);
      }
    });
    changes?.forEachIdentityChange((record) => {
      const newData = record.item;
      if (record.currentIndex != void 0) {
        const view = viewContainer.get(record.currentIndex);
        view.context.$implicit = newData;
      }
    });
    if (parentData) {
      this._changeDetectorRef.markForCheck();
    } else {
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Finds the matching node definition that should be used for this node data. If there is only
   * one node definition, it is returned. Otherwise, find the node definition that has a when
   * predicate that returns true with the data. If none return true, return the default node
   * definition.
   */
  _getNodeDef(data, i) {
    if (this._nodeDefs.length === 1) {
      return this._nodeDefs.first;
    }
    const nodeDef = this._nodeDefs.find((def) => def.when && def.when(i, data)) || this._defaultNodeDef;
    if (!nodeDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMissingMatchingNodeDefError();
    }
    return nodeDef;
  }
  /**
   * Create the embedded view for the data node template and place it in the correct index location
   * within the data node view container.
   */
  insertNode(nodeData, index, viewContainer, parentData) {
    const levelAccessor = this._getLevelAccessor();
    const node = this._getNodeDef(nodeData, index);
    const key = this._getExpansionKey(nodeData);
    const context = new CdkTreeNodeOutletContext(nodeData);
    parentData ??= this._parents.get(key) ?? void 0;
    if (levelAccessor) {
      context.level = levelAccessor(nodeData);
    } else if (parentData !== void 0 && this._levels.has(this._getExpansionKey(parentData))) {
      context.level = this._levels.get(this._getExpansionKey(parentData)) + 1;
    } else {
      context.level = 0;
    }
    this._levels.set(key, context.level);
    const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
    container.createEmbeddedView(node.template, context, index);
    if (CdkTreeNode.mostRecentTreeNode) {
      CdkTreeNode.mostRecentTreeNode.data = nodeData;
    }
  }
  /** Whether the data node is expanded or collapsed. Returns true if it's expanded. */
  isExpanded(dataNode) {
    return !!(this.treeControl?.isExpanded(dataNode) || this._expansionModel?.isSelected(this._getExpansionKey(dataNode)));
  }
  /** If the data node is currently expanded, collapse it. Otherwise, expand it. */
  toggle(dataNode) {
    if (this.treeControl) {
      this.treeControl.toggle(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.toggle(this._getExpansionKey(dataNode));
    }
  }
  /** Expand the data node. If it is already expanded, does nothing. */
  expand(dataNode) {
    if (this.treeControl) {
      this.treeControl.expand(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.select(this._getExpansionKey(dataNode));
    }
  }
  /** Collapse the data node. If it is already collapsed, does nothing. */
  collapse(dataNode) {
    if (this.treeControl) {
      this.treeControl.collapse(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.deselect(this._getExpansionKey(dataNode));
    }
  }
  /**
   * If the data node is currently expanded, collapse it and all its descendants.
   * Otherwise, expand it and all its descendants.
   */
  toggleDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.toggleDescendants(dataNode);
    } else if (this._expansionModel) {
      if (this.isExpanded(dataNode)) {
        this.collapseDescendants(dataNode);
      } else {
        this.expandDescendants(dataNode);
      }
    }
  }
  /**
   * Expand the data node and all its descendants. If they are already expanded, does nothing.
   */
  expandDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.expandDescendants(dataNode);
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.select(this._getExpansionKey(dataNode));
      this._getDescendants(dataNode).pipe((0, import_operators.take)(1), (0, import_operators.takeUntil)(this._onDestroy)).subscribe((children) => {
        expansionModel.select(...children.map((child) => this._getExpansionKey(child)));
      });
    }
  }
  /** Collapse the data node and all its descendants. If it is already collapsed, does nothing. */
  collapseDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.collapseDescendants(dataNode);
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.deselect(this._getExpansionKey(dataNode));
      this._getDescendants(dataNode).pipe((0, import_operators.take)(1), (0, import_operators.takeUntil)(this._onDestroy)).subscribe((children) => {
        expansionModel.deselect(...children.map((child) => this._getExpansionKey(child)));
      });
    }
  }
  /** Expands all data nodes in the tree. */
  expandAll() {
    if (this.treeControl) {
      this.treeControl.expandAll();
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.select(...this._flattenedNodes.value.map((child) => this._getExpansionKey(child)));
    }
  }
  /** Collapse all data nodes in the tree. */
  collapseAll() {
    if (this.treeControl) {
      this.treeControl.collapseAll();
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.deselect(...this._flattenedNodes.value.map((child) => this._getExpansionKey(child)));
    }
  }
  /** Level accessor, used for compatibility between the old Tree and new Tree */
  _getLevelAccessor() {
    return this.treeControl?.getLevel?.bind(this.treeControl) ?? this.levelAccessor;
  }
  /** Children accessor, used for compatibility between the old Tree and new Tree */
  _getChildrenAccessor() {
    return this.treeControl?.getChildren?.bind(this.treeControl) ?? this.childrenAccessor;
  }
  /**
   * Gets the direct children of a node; used for compatibility between the old tree and the
   * new tree.
   */
  _getDirectChildren(dataNode) {
    const levelAccessor = this._getLevelAccessor();
    const expansionModel = this._expansionModel ?? this.treeControl?.expansionModel;
    if (!expansionModel) {
      return (0, import_rxjs.of)([]);
    }
    const key = this._getExpansionKey(dataNode);
    const isExpanded = expansionModel.changed.pipe((0, import_operators.switchMap)((changes) => {
      if (changes.added.includes(key)) {
        return (0, import_rxjs.of)(true);
      } else if (changes.removed.includes(key)) {
        return (0, import_rxjs.of)(false);
      }
      return import_rxjs.EMPTY;
    }), (0, import_operators.startWith)(this.isExpanded(dataNode)));
    if (levelAccessor) {
      return (0, import_rxjs.combineLatest)([isExpanded, this._flattenedNodes]).pipe((0, import_operators.map)(([expanded, flattenedNodes]) => {
        if (!expanded) {
          return [];
        }
        return this._findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, 1);
      }));
    }
    const childrenAccessor = this._getChildrenAccessor();
    if (childrenAccessor) {
      return coerceObservable(childrenAccessor(dataNode) ?? []);
    }
    throw getTreeControlMissingError();
  }
  /**
   * Given the list of flattened nodes, the level accessor, and the level range within
   * which to consider children, finds the children for a given node.
   *
   * For example, for direct children, `levelDelta` would be 1. For all descendants,
   * `levelDelta` would be Infinity.
   */
  _findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, levelDelta) {
    const key = this._getExpansionKey(dataNode);
    const startIndex = flattenedNodes.findIndex((node) => this._getExpansionKey(node) === key);
    const dataNodeLevel = levelAccessor(dataNode);
    const expectedLevel = dataNodeLevel + levelDelta;
    const results = [];
    for (let i = startIndex + 1; i < flattenedNodes.length; i++) {
      const currentLevel = levelAccessor(flattenedNodes[i]);
      if (currentLevel <= dataNodeLevel) {
        break;
      }
      if (currentLevel <= expectedLevel) {
        results.push(flattenedNodes[i]);
      }
    }
    return results;
  }
  /**
   * Adds the specified node component to the tree's internal registry.
   *
   * This primarily facilitates keyboard navigation.
   */
  _registerNode(node) {
    this._nodes.value.set(this._getExpansionKey(node.data), node);
    this._nodes.next(this._nodes.value);
  }
  /** Removes the specified node component from the tree's internal registry. */
  _unregisterNode(node) {
    this._nodes.value.delete(this._getExpansionKey(node.data));
    this._nodes.next(this._nodes.value);
  }
  /**
   * For the given node, determine the level where this node appears in the tree.
   *
   * This is intended to be used for `aria-level` but is 0-indexed.
   */
  _getLevel(node) {
    return this._levels.get(this._getExpansionKey(node));
  }
  /**
   * For the given node, determine the size of the parent's child set.
   *
   * This is intended to be used for `aria-setsize`.
   */
  _getSetSize(dataNode) {
    const set = this._getAriaSet(dataNode);
    return set.length;
  }
  /**
   * For the given node, determine the index (starting from 1) of the node in its parent's child set.
   *
   * This is intended to be used for `aria-posinset`.
   */
  _getPositionInSet(dataNode) {
    const set = this._getAriaSet(dataNode);
    const key = this._getExpansionKey(dataNode);
    return set.findIndex((node) => this._getExpansionKey(node) === key) + 1;
  }
  /** Given a CdkTreeNode, gets the node that renders that node's parent's data. */
  _getNodeParent(node) {
    const parent = this._parents.get(this._getExpansionKey(node.data));
    return parent && this._nodes.value.get(this._getExpansionKey(parent));
  }
  /** Given a CdkTreeNode, gets the nodes that renders that node's child data. */
  _getNodeChildren(node) {
    return this._getDirectChildren(node.data).pipe((0, import_operators.map)((children) => children.reduce((nodes, child) => {
      const value = this._nodes.value.get(this._getExpansionKey(child));
      if (value) {
        nodes.push(value);
      }
      return nodes;
    }, [])));
  }
  /** `keydown` event handler; this just passes the event to the `TreeKeyManager`. */
  _sendKeydownToKeyManager(event) {
    if (event.target === this._elementRef.nativeElement) {
      this._keyManager.onKeydown(event);
    } else {
      const nodes = this._nodes.getValue();
      for (const [, node] of nodes) {
        if (event.target === node._elementRef.nativeElement) {
          this._keyManager.onKeydown(event);
          break;
        }
      }
    }
  }
  /** Gets all nested descendants of a given node. */
  _getDescendants(dataNode) {
    if (this.treeControl) {
      return (0, import_rxjs.of)(this.treeControl.getDescendants(dataNode));
    }
    if (this.levelAccessor) {
      const results = this._findChildrenByLevel(this.levelAccessor, this._flattenedNodes.value, dataNode, Infinity);
      return (0, import_rxjs.of)(results);
    }
    if (this.childrenAccessor) {
      return this._getAllChildrenRecursively(dataNode).pipe((0, import_operators.reduce)((allChildren, nextChildren) => {
        allChildren.push(...nextChildren);
        return allChildren;
      }, []));
    }
    throw getTreeControlMissingError();
  }
  /**
   * Gets all children and sub-children of the provided node.
   *
   * This will emit multiple times, in the order that the children will appear
   * in the tree, and can be combined with a `reduce` operator.
   */
  _getAllChildrenRecursively(dataNode) {
    if (!this.childrenAccessor) {
      return (0, import_rxjs.of)([]);
    }
    return coerceObservable(this.childrenAccessor(dataNode)).pipe((0, import_operators.take)(1), (0, import_operators.switchMap)((children) => {
      for (const child of children) {
        this._parents.set(this._getExpansionKey(child), dataNode);
      }
      return (0, import_rxjs.of)(...children).pipe((0, import_operators.concatMap)((child) => (0, import_rxjs.concat)((0, import_rxjs.of)([child]), this._getAllChildrenRecursively(child))));
    }));
  }
  _getExpansionKey(dataNode) {
    return this.expansionKey?.(dataNode) ?? dataNode;
  }
  _getAriaSet(node) {
    const key = this._getExpansionKey(node);
    const parent = this._parents.get(key);
    const parentKey = parent ? this._getExpansionKey(parent) : null;
    const set = this._ariaSets.get(parentKey);
    return set ?? [node];
  }
  /**
   * Finds the parent for the given node. If this is a root node, this
   * returns null. If we're unable to determine the parent, for example,
   * if we don't have cached node data, this returns undefined.
   */
  _findParentForNode(node, index, cachedNodes) {
    if (!cachedNodes.length) {
      return null;
    }
    const currentLevel = this._levels.get(this._getExpansionKey(node)) ?? 0;
    for (let parentIndex = index - 1; parentIndex >= 0; parentIndex--) {
      const parentNode = cachedNodes[parentIndex];
      const parentLevel = this._levels.get(this._getExpansionKey(parentNode)) ?? 0;
      if (parentLevel < currentLevel) {
        return parentNode;
      }
    }
    return null;
  }
  /**
   * Given a set of root nodes and the current node level, flattens any nested
   * nodes into a single array.
   *
   * If any nodes are not expanded, then their children will not be added into the array.
   * This will still traverse all nested children in order to build up our internal data
   * models, but will not include them in the returned array.
   */
  _flattenNestedNodesWithExpansion(nodes, level = 0) {
    const childrenAccessor = this._getChildrenAccessor();
    if (!childrenAccessor) {
      return (0, import_rxjs.of)([...nodes]);
    }
    return (0, import_rxjs.of)(...nodes).pipe((0, import_operators.concatMap)((node) => {
      const parentKey = this._getExpansionKey(node);
      if (!this._parents.has(parentKey)) {
        this._parents.set(parentKey, null);
      }
      this._levels.set(parentKey, level);
      const children = coerceObservable(childrenAccessor(node));
      return (0, import_rxjs.concat)((0, import_rxjs.of)([node]), children.pipe((0, import_operators.take)(1), (0, import_operators.tap)((childNodes) => {
        this._ariaSets.set(parentKey, [...childNodes ?? []]);
        for (const child of childNodes ?? []) {
          const childKey = this._getExpansionKey(child);
          this._parents.set(childKey, node);
          this._levels.set(childKey, level + 1);
        }
      }), (0, import_operators.switchMap)((childNodes) => {
        if (!childNodes) {
          return (0, import_rxjs.of)([]);
        }
        return this._flattenNestedNodesWithExpansion(childNodes, level + 1).pipe((0, import_operators.map)((nestedNodes) => this.isExpanded(node) ? nestedNodes : []));
      })));
    }), (0, import_operators.reduce)((results, children) => {
      results.push(...children);
      return results;
    }, []));
  }
  /**
   * Converts children for certain tree configurations.
   *
   * This also computes parent, level, and group data.
   */
  _computeRenderingData(nodes, nodeType) {
    if (this.childrenAccessor && nodeType === "flat") {
      this._ariaSets.set(null, [...nodes]);
      return this._flattenNestedNodesWithExpansion(nodes).pipe((0, import_operators.map)((flattenedNodes) => ({
        renderNodes: flattenedNodes,
        flattenedNodes
      })));
    } else if (this.levelAccessor && nodeType === "nested") {
      const levelAccessor = this.levelAccessor;
      return (0, import_rxjs.of)(nodes.filter((node) => levelAccessor(node) === 0)).pipe((0, import_operators.map)((rootNodes) => ({
        renderNodes: rootNodes,
        flattenedNodes: nodes
      })), (0, import_operators.tap)(({
        flattenedNodes
      }) => {
        this._calculateParents(flattenedNodes);
      }));
    } else if (nodeType === "flat") {
      return (0, import_rxjs.of)({
        renderNodes: nodes,
        flattenedNodes: nodes
      }).pipe((0, import_operators.tap)(({
        flattenedNodes
      }) => {
        this._calculateParents(flattenedNodes);
      }));
    } else {
      this._ariaSets.set(null, [...nodes]);
      return this._flattenNestedNodesWithExpansion(nodes).pipe((0, import_operators.map)((flattenedNodes) => ({
        renderNodes: nodes,
        flattenedNodes
      })));
    }
  }
  _updateCachedData(flattenedNodes) {
    this._flattenedNodes.next(flattenedNodes);
  }
  _updateKeyManagerItems(flattenedNodes) {
    this._keyManagerNodes.next(flattenedNodes);
  }
  /** Traverse the flattened node data and compute parents, levels, and group data. */
  _calculateParents(flattenedNodes) {
    const levelAccessor = this._getLevelAccessor();
    if (!levelAccessor) {
      return;
    }
    this._parents.clear();
    this._ariaSets.clear();
    for (let index = 0; index < flattenedNodes.length; index++) {
      const dataNode = flattenedNodes[index];
      const key = this._getExpansionKey(dataNode);
      this._levels.set(key, levelAccessor(dataNode));
      const parent = this._findParentForNode(dataNode, index, flattenedNodes);
      this._parents.set(key, parent);
      const parentKey = parent ? this._getExpansionKey(parent) : null;
      const group = this._ariaSets.get(parentKey) ?? [];
      group.splice(index, 0, dataNode);
      this._ariaSets.set(parentKey, group);
    }
  }
  static {
    this.ɵfac = function CdkTree_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTree)(ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CdkTree,
      selectors: [["cdk-tree"]],
      contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, CdkTreeNodeDef, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nodeDefs = _t);
        }
      },
      viewQuery: function CdkTree_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(CdkTreeNodeOutlet, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nodeOutlet = _t.first);
        }
      },
      hostAttrs: ["role", "tree", 1, "cdk-tree"],
      hostBindings: function CdkTree_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function CdkTree_keydown_HostBindingHandler($event) {
            return ctx._sendKeydownToKeyManager($event);
          });
        }
      },
      inputs: {
        dataSource: "dataSource",
        treeControl: "treeControl",
        levelAccessor: "levelAccessor",
        childrenAccessor: "childrenAccessor",
        trackBy: "trackBy",
        expansionKey: "expansionKey"
      },
      exportAs: ["cdkTree"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["cdkTreeNodeOutlet", ""]],
      template: function CdkTree_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainer(0, 0);
        }
      },
      dependencies: [CdkTreeNodeOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTree, [{
    type: Component,
    args: [{
      selector: "cdk-tree",
      exportAs: "cdkTree",
      template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
      host: {
        "class": "cdk-tree",
        "role": "tree",
        "(keydown)": "_sendKeydownToKeyManager($event)"
      },
      encapsulation: ViewEncapsulation$1.None,
      // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
      // The view for `CdkTree` consists entirely of templates declared in other views. As they are
      // declared elsewhere, they are checked when their declaration points are checked.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkTreeNodeOutlet]
    }]
  }], () => [{
    type: IterableDiffers
  }, {
    type: ChangeDetectorRef
  }], {
    dataSource: [{
      type: Input
    }],
    treeControl: [{
      type: Input
    }],
    levelAccessor: [{
      type: Input
    }],
    childrenAccessor: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    expansionKey: [{
      type: Input
    }],
    _nodeOutlet: [{
      type: ViewChild,
      args: [CdkTreeNodeOutlet, {
        static: true
      }]
    }],
    _nodeDefs: [{
      type: ContentChildren,
      args: [CdkTreeNodeDef, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var CdkTreeNode = class _CdkTreeNode {
  /**
   * The role of the tree node.
   *
   * @deprecated This will be ignored; the tree will automatically determine the appropriate role
   * for tree node. This input will be removed in a future version.
   * @breaking-change 21.0.0
   */
  get role() {
    return "treeitem";
  }
  set role(_role) {
  }
  /**
   * Whether or not this node is expandable.
   *
   * If not using `FlatTreeControl`, or if `isExpandable` is not provided to
   * `NestedTreeControl`, this should be provided for correct node a11y.
   */
  get isExpandable() {
    return this._isExpandable();
  }
  set isExpandable(isExpandable) {
    this._inputIsExpandable = isExpandable;
    if (this.data && !this._isExpandable || !this._inputIsExpandable) {
      return;
    }
    if (this._inputIsExpanded) {
      this.expand();
    } else if (this._inputIsExpanded === false) {
      this.collapse();
    }
  }
  get isExpanded() {
    return this._tree.isExpanded(this._data);
  }
  set isExpanded(isExpanded) {
    this._inputIsExpanded = isExpanded;
    if (isExpanded) {
      this.expand();
    } else {
      this.collapse();
    }
  }
  getLabel() {
    return this.typeaheadLabel || this._elementRef.nativeElement.textContent?.trim() || "";
  }
  static {
    this.mostRecentTreeNode = null;
  }
  /** The tree node's data. */
  get data() {
    return this._data;
  }
  set data(value) {
    if (value !== this._data) {
      this._data = value;
      this._dataChanges.next();
    }
  }
  /* If leaf node, return true to not assign aria-expanded attribute */
  get isLeafNode() {
    if (this._tree.treeControl?.isExpandable !== void 0 && !this._tree.treeControl.isExpandable(this._data)) {
      return true;
    } else if (this._tree.treeControl?.isExpandable === void 0 && this._tree.treeControl?.getDescendants(this._data).length === 0) {
      return true;
    }
    return false;
  }
  get level() {
    return this._tree._getLevel(this._data) ?? this._parentNodeAriaLevel;
  }
  /** Determines if the tree node is expandable. */
  _isExpandable() {
    if (this._tree.treeControl) {
      if (this.isLeafNode) {
        return false;
      }
      return true;
    }
    return this._inputIsExpandable;
  }
  /**
   * Determines the value for `aria-expanded`.
   *
   * For non-expandable nodes, this is `null`.
   */
  _getAriaExpanded() {
    if (!this._isExpandable()) {
      return null;
    }
    return String(this.isExpanded);
  }
  /**
   * Determines the size of this node's parent's child set.
   *
   * This is intended to be used for `aria-setsize`.
   */
  _getSetSize() {
    return this._tree._getSetSize(this._data);
  }
  /**
   * Determines the index (starting from 1) of this node in its parent's child set.
   *
   * This is intended to be used for `aria-posinset`.
   */
  _getPositionInSet() {
    return this._tree._getPositionInSet(this._data);
  }
  constructor(_elementRef, _tree) {
    this._elementRef = _elementRef;
    this._tree = _tree;
    this._tabindex = -1;
    this.activation = new EventEmitter();
    this.expandedChange = new EventEmitter();
    this._destroyed = new import_rxjs.Subject();
    this._dataChanges = new import_rxjs.Subject();
    this._inputIsExpandable = false;
    this._inputIsExpanded = void 0;
    this._shouldFocus = true;
    this._changeDetectorRef = inject(ChangeDetectorRef);
    _CdkTreeNode.mostRecentTreeNode = this;
  }
  ngOnInit() {
    this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);
    this._tree._getExpansionModel().changed.pipe((0, import_operators.map)(() => this.isExpanded), (0, import_operators.distinctUntilChanged)()).subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
    this._tree._setNodeTypeIfUnset("flat");
    this._tree._registerNode(this);
  }
  ngOnDestroy() {
    if (_CdkTreeNode.mostRecentTreeNode === this) {
      _CdkTreeNode.mostRecentTreeNode = null;
    }
    this._dataChanges.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  getParent() {
    return this._tree._getNodeParent(this) ?? null;
  }
  getChildren() {
    return this._tree._getNodeChildren(this);
  }
  /** Focuses this data node. Implemented for TreeKeyManagerItem. */
  focus() {
    this._tabindex = 0;
    if (this._shouldFocus) {
      this._elementRef.nativeElement.focus();
    }
    this._changeDetectorRef.markForCheck();
  }
  /** Defocus this data node. */
  unfocus() {
    this._tabindex = -1;
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an activation event. Implemented for TreeKeyManagerItem. */
  activate() {
    if (this.isDisabled) {
      return;
    }
    this.activation.next(this._data);
  }
  /** Collapses this data node. Implemented for TreeKeyManagerItem. */
  collapse() {
    if (this.isExpandable) {
      this._tree.collapse(this._data);
    }
  }
  /** Expands this data node. Implemented for TreeKeyManagerItem. */
  expand() {
    if (this.isExpandable) {
      this._tree.expand(this._data);
    }
  }
  /** Makes the node focusable. Implemented for TreeKeyManagerItem. */
  makeFocusable() {
    this._tabindex = 0;
    this._changeDetectorRef.markForCheck();
  }
  _focusItem() {
    if (this.isDisabled) {
      return;
    }
    this._tree._keyManager.focusItem(this);
  }
  _setActiveItem() {
    if (this.isDisabled) {
      return;
    }
    this._shouldFocus = false;
    this._tree._keyManager.focusItem(this);
    this._shouldFocus = true;
  }
  _emitExpansionState(expanded) {
    this.expandedChange.emit(expanded);
  }
  static {
    this.ɵfac = function CdkTreeNode_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTreeNode)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CdkTree));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkTreeNode,
      selectors: [["cdk-tree-node"]],
      hostAttrs: ["role", "treeitem", 1, "cdk-tree-node"],
      hostVars: 5,
      hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function CdkTreeNode_click_HostBindingHandler() {
            return ctx._setActiveItem();
          })("focus", function CdkTreeNode_focus_HostBindingHandler() {
            return ctx._focusItem();
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("tabindex", ctx._tabindex);
          ɵɵattribute("aria-expanded", ctx._getAriaExpanded())("aria-level", ctx.level + 1)("aria-posinset", ctx._getPositionInSet())("aria-setsize", ctx._getSetSize());
        }
      },
      inputs: {
        role: "role",
        isExpandable: [2, "isExpandable", "isExpandable", booleanAttribute],
        isExpanded: "isExpanded",
        isDisabled: [2, "isDisabled", "isDisabled", booleanAttribute],
        typeaheadLabel: [0, "cdkTreeNodeTypeaheadLabel", "typeaheadLabel"]
      },
      outputs: {
        activation: "activation",
        expandedChange: "expandedChange"
      },
      exportAs: ["cdkTreeNode"],
      standalone: true,
      features: [ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-tree-node",
      exportAs: "cdkTreeNode",
      host: {
        "class": "cdk-tree-node",
        "[attr.aria-expanded]": "_getAriaExpanded()",
        "[attr.aria-level]": "level + 1",
        "[attr.aria-posinset]": "_getPositionInSet()",
        "[attr.aria-setsize]": "_getSetSize()",
        "[tabindex]": "_tabindex",
        "role": "treeitem",
        "(click)": "_setActiveItem()",
        "(focus)": "_focusItem()"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: CdkTree
  }], {
    role: [{
      type: Input
    }],
    isExpandable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isExpanded: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    typeaheadLabel: [{
      type: Input,
      args: ["cdkTreeNodeTypeaheadLabel"]
    }],
    activation: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }]
  });
})();
function getParentNodeAriaLevel(nodeElement) {
  let parent = nodeElement.parentElement;
  while (parent && !isNodeElement(parent)) {
    parent = parent.parentElement;
  }
  if (!parent) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw Error("Incorrect tree structure containing detached node.");
    } else {
      return -1;
    }
  } else if (parent.classList.contains("cdk-nested-tree-node")) {
    return numberAttribute(parent.getAttribute("aria-level"));
  } else {
    return 0;
  }
}
function isNodeElement(element) {
  const classList = element.classList;
  return !!(classList?.contains("cdk-nested-tree-node") || classList?.contains("cdk-tree"));
}
var CdkNestedTreeNode = class _CdkNestedTreeNode extends CdkTreeNode {
  constructor(elementRef, tree, _differs) {
    super(elementRef, tree);
    this._differs = _differs;
  }
  ngAfterContentInit() {
    this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
    this._tree._getDirectChildren(this.data).pipe((0, import_operators.takeUntil)(this._destroyed)).subscribe((result) => this.updateChildrenNodes(result));
    this.nodeOutlet.changes.pipe((0, import_operators.takeUntil)(this._destroyed)).subscribe(() => this.updateChildrenNodes());
  }
  // This is a workaround for https://github.com/angular/angular/issues/23091
  // In aot mode, the lifecycle hooks from parent class are not called.
  ngOnInit() {
    this._tree._setNodeTypeIfUnset("nested");
    super.ngOnInit();
  }
  ngOnDestroy() {
    this._clear();
    super.ngOnDestroy();
  }
  /** Add children dataNodes to the NodeOutlet */
  updateChildrenNodes(children) {
    const outlet = this._getNodeOutlet();
    if (children) {
      this._children = children;
    }
    if (outlet && this._children) {
      const viewContainer = outlet.viewContainer;
      this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
    } else {
      this._dataDiffer.diff([]);
    }
  }
  /** Clear the children dataNodes. */
  _clear() {
    const outlet = this._getNodeOutlet();
    if (outlet) {
      outlet.viewContainer.clear();
      this._dataDiffer.diff([]);
    }
  }
  /** Gets the outlet for the current node. */
  _getNodeOutlet() {
    const outlets = this.nodeOutlet;
    return outlets && outlets.find((outlet) => !outlet._node || outlet._node === this);
  }
  static {
    this.ɵfac = function CdkNestedTreeNode_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkNestedTreeNode)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CdkTree), ɵɵdirectiveInject(IterableDiffers));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkNestedTreeNode,
      selectors: [["cdk-nested-tree-node"]],
      contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, CdkTreeNodeOutlet, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeOutlet = _t);
        }
      },
      hostAttrs: [1, "cdk-nested-tree-node"],
      exportAs: ["cdkNestedTreeNode"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTreeNode,
        useExisting: _CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: _CdkNestedTreeNode
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNestedTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-nested-tree-node",
      exportAs: "cdkNestedTreeNode",
      providers: [{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: CdkNestedTreeNode
      }],
      host: {
        "class": "cdk-nested-tree-node"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: CdkTree
  }, {
    type: IterableDiffers
  }], {
    nodeOutlet: [{
      type: ContentChildren,
      args: [CdkTreeNodeOutlet, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var cssUnitPattern = /([A-Za-z%]+)$/;
var CdkTreeNodePadding = class _CdkTreeNodePadding {
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  /**
   * The indent for each level. Can be a number or a CSS string.
   * Default number 40px from material design menu sub-menu spec.
   */
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
  constructor(_treeNode, _tree, _element, _dir) {
    this._treeNode = _treeNode;
    this._tree = _tree;
    this._element = _element;
    this._dir = _dir;
    this._destroyed = new import_rxjs.Subject();
    this.indentUnits = "px";
    this._indent = 40;
    this._setPadding();
    if (_dir) {
      _dir.change.pipe((0, import_operators.takeUntil)(this._destroyed)).subscribe(() => this._setPadding(true));
    }
    _treeNode._dataChanges.subscribe(() => this._setPadding());
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
  _paddingIndent() {
    const nodeLevel = (this._treeNode.data && this._tree._getLevel(this._treeNode.data)) ?? null;
    const level = this._level == null ? nodeLevel : this._level;
    return typeof level === "number" ? `${level * this._indent}${this.indentUnits}` : null;
  }
  _setPadding(forceChange = false) {
    const padding = this._paddingIndent();
    if (padding !== this._currentPadding || forceChange) {
      const element = this._element.nativeElement;
      const paddingProp = this._dir && this._dir.value === "rtl" ? "paddingRight" : "paddingLeft";
      const resetProp = paddingProp === "paddingLeft" ? "paddingRight" : "paddingLeft";
      element.style[paddingProp] = padding || "";
      element.style[resetProp] = "";
      this._currentPadding = padding;
    }
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setLevelInput(value) {
    this._level = isNaN(value) ? null : value;
    this._setPadding();
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setIndentInput(indent) {
    let value = indent;
    let units = "px";
    if (typeof indent === "string") {
      const parts = indent.split(cssUnitPattern);
      value = parts[0];
      units = parts[1] || units;
    }
    this.indentUnits = units;
    this._indent = numberAttribute(value);
    this._setPadding();
  }
  static {
    this.ɵfac = function CdkTreeNodePadding_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTreeNodePadding)(ɵɵdirectiveInject(CdkTreeNode), ɵɵdirectiveInject(CdkTree), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkTreeNodePadding,
      selectors: [["", "cdkTreeNodePadding", ""]],
      inputs: {
        level: [2, "cdkTreeNodePadding", "level", numberAttribute],
        indent: [0, "cdkTreeNodePaddingIndent", "indent"]
      },
      standalone: true,
      features: [ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodePadding, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodePadding]",
      standalone: true
    }]
  }], () => [{
    type: CdkTreeNode
  }, {
    type: CdkTree
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    level: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["cdkTreeNodePaddingIndent"]
    }]
  });
})();
var CdkTreeNodeToggle = class _CdkTreeNodeToggle {
  constructor(_tree, _treeNode) {
    this._tree = _tree;
    this._treeNode = _treeNode;
    this.recursive = false;
  }
  // Toggle the expanded or collapsed state of this node.
  //
  // Focus this node with expanding or collapsing it. This ensures that the active node will always
  // be visible when expanding and collapsing.
  _toggle() {
    this.recursive ? this._tree.toggleDescendants(this._treeNode.data) : this._tree.toggle(this._treeNode.data);
    this._tree._keyManager.focusItem(this._treeNode);
  }
  static {
    this.ɵfac = function CdkTreeNodeToggle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTreeNodeToggle)(ɵɵdirectiveInject(CdkTree), ɵɵdirectiveInject(CdkTreeNode));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkTreeNodeToggle,
      selectors: [["", "cdkTreeNodeToggle", ""]],
      hostAttrs: ["tabindex", "-1"],
      hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
            ctx._toggle();
            return $event.stopPropagation();
          })("keydown.Enter", function CdkTreeNodeToggle_keydown_Enter_HostBindingHandler($event) {
            ctx._toggle();
            return $event.preventDefault();
          })("keydown.Space", function CdkTreeNodeToggle_keydown_Space_HostBindingHandler($event) {
            ctx._toggle();
            return $event.preventDefault();
          });
        }
      },
      inputs: {
        recursive: [2, "cdkTreeNodeToggleRecursive", "recursive", booleanAttribute]
      },
      standalone: true,
      features: [ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeToggle, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeToggle]",
      host: {
        "(click)": "_toggle(); $event.stopPropagation();",
        "(keydown.Enter)": "_toggle(); $event.preventDefault();",
        "(keydown.Space)": "_toggle(); $event.preventDefault();",
        "tabindex": "-1"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkTree
  }, {
    type: CdkTreeNode
  }], {
    recursive: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodeToggleRecursive",
        transform: booleanAttribute
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];
var CdkTreeModule = class _CdkTreeModule {
  static {
    this.ɵfac = function CdkTreeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTreeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdkTreeModule,
      imports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet],
      exports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeModule, [{
    type: NgModule,
    args: [{
      imports: EXPORTED_DECLARATIONS,
      exports: EXPORTED_DECLARATIONS
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tree-view.mjs
function NzTreeNodeIndentsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const isEnd_r1 = ctx.$implicit;
    ɵɵclassProp("ant-tree-indent-unit-end", !isEnd_r1);
  }
}
var _c0 = [[["nz-tree-node-toggle"], ["", "nz-tree-node-toggle", ""]], [["nz-tree-node-checkbox"]], [["nz-tree-node-option"]], "*"];
var _c1 = ["nz-tree-node-toggle, [nz-tree-node-toggle]", "nz-tree-node-checkbox", "nz-tree-node-option", "*"];
function NzTreeNodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-tree-node-indents", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("indents", ctx_r0.indents);
  }
}
function NzTreeNodeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-tree-node-toggle", 1);
    ɵɵelement(1, "span", 2);
    ɵɵelementEnd();
  }
}
var _c2 = ["*"];
function NzTreeVirtualScrollViewComponent_ng_container_2_ng_template_1_Template(rf, ctx) {
}
function NzTreeVirtualScrollViewComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeVirtualScrollViewComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("data", item_r1)("compareBy", ctx_r1.compareBy);
  }
}
var NzTreeNodeCheckboxComponent = class _NzTreeNodeCheckboxComponent {
  constructor(ngZone, ref, host, destroy$) {
    this.ngZone = ngZone;
    this.ref = ref;
    this.host = host;
    this.destroy$ = destroy$;
    this.nzClick = new EventEmitter();
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => (0, import_rxjs2.fromEvent)(this.host.nativeElement, "click").pipe((0, import_operators2.takeUntil)(this.destroy$)).subscribe((event) => {
      if (!this.nzDisabled && this.nzClick.observers.length) {
        this.ngZone.run(() => {
          this.nzClick.emit(event);
          this.ref.markForCheck();
        });
      }
    }));
  }
  static {
    this.ɵfac = function NzTreeNodeCheckboxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeNodeCheckboxComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzDestroyService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTreeNodeCheckboxComponent,
      selectors: [["nz-tree-node-checkbox", 3, "builtin", ""]],
      hostAttrs: [1, "ant-tree-checkbox"],
      hostVars: 6,
      hostBindings: function NzTreeNodeCheckboxComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-tree-checkbox-checked", ctx.nzChecked)("ant-tree-checkbox-indeterminate", ctx.nzIndeterminate)("ant-tree-checkbox-disabled", ctx.nzDisabled);
        }
      },
      inputs: {
        nzChecked: [2, "nzChecked", "nzChecked", booleanAttribute],
        nzIndeterminate: [2, "nzIndeterminate", "nzIndeterminate", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute]
      },
      outputs: {
        nzClick: "nzClick"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [[1, "ant-tree-checkbox-inner"]],
      template: function NzTreeNodeCheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "span", 0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeCheckboxComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-checkbox:not([builtin])",
      template: ` <span class="ant-tree-checkbox-inner"></span> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        class: "ant-tree-checkbox",
        "[class.ant-tree-checkbox-checked]": `nzChecked`,
        "[class.ant-tree-checkbox-indeterminate]": `nzIndeterminate`,
        "[class.ant-tree-checkbox-disabled]": `nzDisabled`
      },
      providers: [NzDestroyService],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NzDestroyService
  }], {
    nzChecked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzIndeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzClick: [{
      type: Output
    }]
  });
})();
var getParent = (nodes, node, getLevel) => {
  let index = nodes.indexOf(node);
  if (index < 0) {
    return null;
  }
  const level = getLevel(node);
  for (index--; index >= 0; index--) {
    const preLevel = getLevel(nodes[index]);
    if (preLevel + 1 === level) {
      return nodes[index];
    }
    if (preLevel + 1 < level) {
      return null;
    }
  }
  return null;
};
var getNextSibling = (nodes, node, getLevel, _index) => {
  let index = typeof _index !== "undefined" ? _index : nodes.indexOf(node);
  if (index < 0) {
    return null;
  }
  const level = getLevel(node);
  for (index++; index < nodes.length; index++) {
    const nextLevel = getLevel(nodes[index]);
    if (nextLevel < level) {
      return null;
    }
    if (nextLevel === level) {
      return nodes[index];
    }
  }
  return null;
};
var NzNodeBase = class extends CdkTreeNode {
};
var NzTreeView = class _NzTreeView extends CdkTree {
  get dataSource() {
    return super.dataSource;
  }
  set dataSource(dataSource) {
    super.dataSource = dataSource;
  }
  constructor(differs, changeDetectorRef, directionality) {
    super(differs, changeDetectorRef);
    this.differs = differs;
    this.changeDetectorRef = changeDetectorRef;
    this.directionality = directionality;
    this.destroy$ = new import_rxjs2.Subject();
    this.dir = "ltr";
    this._dataSourceChanged = new import_rxjs2.Subject();
    this.nzDirectoryTree = false;
    this.nzBlockNode = false;
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
  }
  ngOnInit() {
    super.ngOnInit();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe((0, import_operators2.takeUntil)(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.changeDetectorRef.detectChanges();
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  renderNodeChanges(data, dataDiffer, viewContainer, parentData) {
    super.renderNodeChanges(data, dataDiffer, viewContainer, parentData);
    this._dataSourceChanged.next();
  }
  static {
    this.ɵfac = function NzTreeView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeView)(ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTreeView,
      selectors: [["ng-component"]],
      inputs: {
        treeControl: [0, "nzTreeControl", "treeControl"],
        dataSource: [0, "nzDataSource", "dataSource"],
        nzDirectoryTree: [2, "nzDirectoryTree", "nzDirectoryTree", booleanAttribute],
        nzBlockNode: [2, "nzBlockNode", "nzBlockNode", booleanAttribute]
      },
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function NzTreeView_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeView, [{
    type: Component,
    args: [{
      template: "",
      standalone: true
    }]
  }], () => [{
    type: IterableDiffers
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    treeControl: [{
      type: Input,
      args: ["nzTreeControl"]
    }],
    dataSource: [{
      type: Input,
      args: ["nzDataSource"]
    }],
    nzDirectoryTree: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBlockNode: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function booleanArrayToString(arr) {
  return arr.map((i) => i ? 1 : 0).join("");
}
var BUILD_INDENTS_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? import_rxjs2.animationFrameScheduler : import_rxjs2.asapScheduler;
var NzTreeNodeIndentsComponent = class _NzTreeNodeIndentsComponent {
  constructor() {
    this.indents = [];
  }
  static {
    this.ɵfac = function NzTreeNodeIndentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeNodeIndentsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTreeNodeIndentsComponent,
      selectors: [["nz-tree-node-indents"]],
      hostAttrs: [1, "ant-tree-indent"],
      inputs: {
        indents: "indents"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 0,
      consts: [[1, "ant-tree-indent-unit", 3, "ant-tree-indent-unit-end"], [1, "ant-tree-indent-unit"]],
      template: function NzTreeNodeIndentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, NzTreeNodeIndentsComponent_For_1_Template, 1, 2, "span", 0, ɵɵrepeaterTrackByIdentity);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.indents);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeIndentsComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-indents",
      template: `
    @for (isEnd of indents; track isEnd) {
      <span class="ant-tree-indent-unit" [class.ant-tree-indent-unit-end]="!isEnd"></span>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-tree-indent"
      },
      standalone: true
    }]
  }], null, {
    indents: [{
      type: Input
    }]
  });
})();
var NzTreeNodeIndentLineDirective = class _NzTreeNodeIndentLineDirective {
  constructor(treeNode, tree, cdr) {
    this.treeNode = treeNode;
    this.tree = tree;
    this.cdr = cdr;
    this.isLast = "unset";
    this.isLeaf = false;
    this.preNodeRef = null;
    this.nextNodeRef = null;
    this.currentIndents = "";
    this.buildIndents();
    this.checkLast();
    this.changeSubscription = (0, import_rxjs2.merge)(this.treeNode._dataChanges, tree._dataSourceChanged).pipe((0, import_operators2.auditTime)(0, BUILD_INDENTS_SCHEDULER)).subscribe(() => {
      this.buildIndents();
      this.checkAdjacent();
      this.cdr.markForCheck();
    });
  }
  getIndents() {
    const indents = [];
    const nodes = this.tree.treeControl.dataNodes;
    const getLevel = this.tree.treeControl.getLevel;
    let parent = getParent(nodes, this.treeNode.data, getLevel);
    while (parent) {
      const parentNextSibling = getNextSibling(nodes, parent, getLevel);
      if (parentNextSibling) {
        indents.unshift(true);
      } else {
        indents.unshift(false);
      }
      parent = getParent(nodes, parent, getLevel);
    }
    return indents;
  }
  buildIndents() {
    if (this.treeNode.data) {
      const indents = this.getIndents();
      const diffString = booleanArrayToString(indents);
      if (diffString !== this.currentIndents) {
        this.treeNode.setIndents(this.getIndents());
        this.currentIndents = diffString;
      }
    }
  }
  /**
   * We need to add an class name for the last child node,
   * this result can also be affected when the adjacent nodes are changed.
   */
  checkAdjacent() {
    const nodes = this.tree.treeControl.dataNodes;
    const index = nodes.indexOf(this.treeNode.data);
    const preNode = nodes[index - 1] || null;
    const nextNode = nodes[index + 1] || null;
    if (this.nextNodeRef !== nextNode || this.preNodeRef !== preNode) {
      this.checkLast(index);
    }
    this.preNodeRef = preNode;
    this.nextNodeRef = nextNode;
  }
  checkLast(index) {
    const nodes = this.tree.treeControl.dataNodes;
    this.isLeaf = this.treeNode.isLeaf;
    this.isLast = !getNextSibling(nodes, this.treeNode.data, this.tree.treeControl.getLevel, index);
  }
  ngOnDestroy() {
    this.preNodeRef = null;
    this.nextNodeRef = null;
    this.changeSubscription.unsubscribe();
  }
  static {
    this.ɵfac = function NzTreeNodeIndentLineDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeNodeIndentLineDirective)(ɵɵdirectiveInject(NzNodeBase), ɵɵdirectiveInject(NzTreeView), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTreeNodeIndentLineDirective,
      selectors: [["nz-tree-node", "nzTreeNodeIndentLine", ""]],
      hostAttrs: [1, "ant-tree-show-line"],
      hostVars: 2,
      hostBindings: function NzTreeNodeIndentLineDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-tree-treenode-leaf-last", ctx.isLast && ctx.isLeaf);
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeIndentLineDirective, [{
    type: Directive,
    args: [{
      selector: "nz-tree-node[nzTreeNodeIndentLine]",
      host: {
        class: "ant-tree-show-line",
        "[class.ant-tree-treenode-leaf-last]": "isLast && isLeaf"
      },
      standalone: true
    }]
  }], () => [{
    type: NzNodeBase
  }, {
    type: NzTreeView
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var NzTreeNodeNoopToggleDirective = class _NzTreeNodeNoopToggleDirective {
  static {
    this.ɵfac = function NzTreeNodeNoopToggleDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeNodeNoopToggleDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTreeNodeNoopToggleDirective,
      selectors: [["nz-tree-node-toggle", "nzTreeNodeNoopToggle", ""], ["", "nzTreeNodeNoopToggle", ""]],
      hostAttrs: [1, "ant-tree-switcher", "ant-tree-switcher-noop"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeNoopToggleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-tree-node-toggle[nzTreeNodeNoopToggle], [nzTreeNodeNoopToggle]",
      host: {
        class: "ant-tree-switcher ant-tree-switcher-noop"
      },
      standalone: true
    }]
  }], null, null);
})();
var NzTreeNodeToggleDirective = class _NzTreeNodeToggleDirective extends CdkTreeNodeToggle {
  constructor() {
    super(...arguments);
    this.recursive = false;
  }
  get isExpanded() {
    return this._treeNode.isExpanded;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNzTreeNodeToggleDirective_BaseFactory;
      return function NzTreeNodeToggleDirective_Factory(__ngFactoryType__) {
        return (ɵNzTreeNodeToggleDirective_BaseFactory || (ɵNzTreeNodeToggleDirective_BaseFactory = ɵɵgetInheritedFactory(_NzTreeNodeToggleDirective)))(__ngFactoryType__ || _NzTreeNodeToggleDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTreeNodeToggleDirective,
      selectors: [["nz-tree-node-toggle", 3, "nzTreeNodeNoopToggle", ""], ["", "nzTreeNodeToggle", ""]],
      hostAttrs: [1, "ant-tree-switcher"],
      hostVars: 4,
      hostBindings: function NzTreeNodeToggleDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-tree-switcher_open", ctx.isExpanded)("ant-tree-switcher_close", !ctx.isExpanded);
        }
      },
      inputs: {
        recursive: [2, "nzTreeNodeToggleRecursive", "recursive", booleanAttribute]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTreeNodeToggle,
        useExisting: _NzTreeNodeToggleDirective
      }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeToggleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-tree-node-toggle:not([nzTreeNodeNoopToggle]), [nzTreeNodeToggle]",
      providers: [{
        provide: CdkTreeNodeToggle,
        useExisting: NzTreeNodeToggleDirective
      }],
      host: {
        class: "ant-tree-switcher",
        "[class.ant-tree-switcher_open]": "isExpanded",
        "[class.ant-tree-switcher_close]": "!isExpanded"
      },
      standalone: true
    }]
  }], null, {
    recursive: [{
      type: Input,
      args: [{
        alias: "nzTreeNodeToggleRecursive",
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzTreeNodeToggleRotateIconDirective = class _NzTreeNodeToggleRotateIconDirective {
  static {
    this.ɵfac = function NzTreeNodeToggleRotateIconDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeNodeToggleRotateIconDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTreeNodeToggleRotateIconDirective,
      selectors: [["", "nz-icon", "", "nzTreeNodeToggleRotateIcon", ""]],
      hostAttrs: [1, "ant-tree-switcher-icon"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeToggleRotateIconDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-icon][nzTreeNodeToggleRotateIcon]",
      host: {
        class: "ant-tree-switcher-icon"
      },
      standalone: true
    }]
  }], null, null);
})();
var NzTreeNodeToggleActiveIconDirective = class _NzTreeNodeToggleActiveIconDirective {
  static {
    this.ɵfac = function NzTreeNodeToggleActiveIconDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeNodeToggleActiveIconDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTreeNodeToggleActiveIconDirective,
      selectors: [["", "nz-icon", "", "nzTreeNodeToggleActiveIcon", ""]],
      hostAttrs: [1, "ant-tree-switcher-loading-icon"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeToggleActiveIconDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-icon][nzTreeNodeToggleActiveIcon]",
      host: {
        class: "ant-tree-switcher-loading-icon"
      },
      standalone: true
    }]
  }], null, null);
})();
var NzTreeNodeComponent = class _NzTreeNodeComponent extends NzNodeBase {
  constructor(elementRef, tree, renderer, cdr) {
    super(elementRef, tree);
    this.elementRef = elementRef;
    this.tree = tree;
    this.renderer = renderer;
    this.cdr = cdr;
    this.indents = [];
    this.disabled = false;
    this.selected = false;
    this.isLeaf = false;
    this._elementRef.nativeElement.classList.add("ant-tree-treenode");
  }
  ngOnInit() {
    this.isLeaf = !this.tree.treeControl.isExpandable(this.data);
  }
  disable() {
    this.disabled = true;
    this.updateDisabledClass();
  }
  enable() {
    this.disabled = false;
    this.updateDisabledClass();
  }
  select() {
    this.selected = true;
    this.updateSelectedClass();
  }
  deselect() {
    this.selected = false;
    this.updateSelectedClass();
  }
  setIndents(indents) {
    this.indents = indents;
    this.cdr.markForCheck();
  }
  updateSelectedClass() {
    if (this.selected) {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-tree-treenode-selected");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-tree-treenode-selected");
    }
  }
  updateDisabledClass() {
    if (this.disabled) {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-tree-treenode-disabled");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-tree-treenode-disabled");
    }
  }
  static {
    this.ɵfac = function NzTreeNodeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeNodeComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzTreeView), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTreeNodeComponent,
      selectors: [["nz-tree-node", 3, "builtin", ""]],
      hostVars: 4,
      hostBindings: function NzTreeNodeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-tree-treenode-switcher-open", ctx.isExpanded)("ant-tree-treenode-switcher-close", !ctx.isExpanded);
        }
      },
      exportAs: ["nzTreeNode"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTreeNode,
        useExisting: _NzTreeNodeComponent
      }, {
        provide: NzNodeBase,
        useExisting: _NzTreeNodeComponent
      }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 6,
      vars: 2,
      consts: [[3, "indents"], ["nzTreeNodeNoopToggle", "", 1, "nz-tree-leaf-line-icon"], [1, "ant-tree-switcher-leaf-line"]],
      template: function NzTreeNodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c0);
          ɵɵtemplate(0, NzTreeNodeComponent_Conditional_0_Template, 1, 1, "nz-tree-node-indents", 0);
          ɵɵprojection(1);
          ɵɵtemplate(2, NzTreeNodeComponent_Conditional_2_Template, 2, 0, "nz-tree-node-toggle", 1);
          ɵɵprojection(3, 1);
          ɵɵprojection(4, 2);
          ɵɵprojection(5, 3);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.indents.length ? 0 : -1);
          ɵɵadvance(2);
          ɵɵconditional(ctx.indents.length && ctx.isLeaf ? 2 : -1);
        }
      },
      dependencies: [NzTreeNodeIndentsComponent, NzTreeNodeNoopToggleDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node:not([builtin])",
      exportAs: "nzTreeNode",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkTreeNode,
        useExisting: NzTreeNodeComponent
      }, {
        provide: NzNodeBase,
        useExisting: NzTreeNodeComponent
      }],
      template: `
    @if (indents.length) {
      <nz-tree-node-indents [indents]="indents"></nz-tree-node-indents>
    }
    <ng-content select="nz-tree-node-toggle, [nz-tree-node-toggle]"></ng-content>
    @if (indents.length && isLeaf) {
      <nz-tree-node-toggle class="nz-tree-leaf-line-icon" nzTreeNodeNoopToggle>
        <span class="ant-tree-switcher-leaf-line"></span>
      </nz-tree-node-toggle>
    }
    <ng-content select="nz-tree-node-checkbox"></ng-content>
    <ng-content select="nz-tree-node-option"></ng-content>
    <ng-content></ng-content>
  `,
      host: {
        "[class.ant-tree-treenode-switcher-open]": "isExpanded",
        "[class.ant-tree-treenode-switcher-close]": "!isExpanded"
      },
      imports: [NzTreeNodeIndentsComponent, NzTreeNodeNoopToggleDirective],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NzTreeView
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var NzTreeNodeDefDirective = class _NzTreeNodeDefDirective extends CdkTreeNodeDef {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNzTreeNodeDefDirective_BaseFactory;
      return function NzTreeNodeDefDirective_Factory(__ngFactoryType__) {
        return (ɵNzTreeNodeDefDirective_BaseFactory || (ɵNzTreeNodeDefDirective_BaseFactory = ɵɵgetInheritedFactory(_NzTreeNodeDefDirective)))(__ngFactoryType__ || _NzTreeNodeDefDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTreeNodeDefDirective,
      selectors: [["", "nzTreeNodeDef", ""]],
      inputs: {
        when: [0, "nzTreeNodeDefWhen", "when"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTreeNodeDef,
        useExisting: _NzTreeNodeDefDirective
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeDefDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTreeNodeDef]",
      providers: [{
        provide: CdkTreeNodeDef,
        useExisting: NzTreeNodeDefDirective
      }],
      standalone: true
    }]
  }], null, {
    when: [{
      type: Input,
      args: ["nzTreeNodeDefWhen"]
    }]
  });
})();
var NzTreeVirtualScrollNodeOutletDirective = class _NzTreeVirtualScrollNodeOutletDirective {
  constructor(_viewContainerRef) {
    this._viewContainerRef = _viewContainerRef;
    this._viewRef = null;
  }
  ngOnChanges(changes) {
    const recreateView = this.shouldRecreateView(changes);
    if (recreateView) {
      const viewContainerRef = this._viewContainerRef;
      if (this._viewRef) {
        viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
      }
      this._viewRef = this.data ? viewContainerRef.createEmbeddedView(this.data.nodeDef.template, this.data.context) : null;
      if (CdkTreeNode.mostRecentTreeNode && this._viewRef) {
        CdkTreeNode.mostRecentTreeNode.data = this.data.data;
      }
    } else if (this._viewRef && this.data.context) {
      this.updateExistingContext(this.data.context);
    }
  }
  shouldRecreateView(changes) {
    const ctxChange = changes.data;
    return ctxChange && this.hasContextShapeChanged(ctxChange);
  }
  hasContextShapeChanged(ctxChange) {
    const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
    const currCtxKeys = Object.keys(ctxChange.currentValue || {});
    if (prevCtxKeys.length === currCtxKeys.length) {
      for (const propName of currCtxKeys) {
        if (prevCtxKeys.indexOf(propName) === -1) {
          return true;
        }
      }
      return this.innerCompareBy(ctxChange.previousValue?.data ?? null) !== this.innerCompareBy(ctxChange.currentValue?.data ?? null);
    }
    return true;
  }
  get innerCompareBy() {
    return (value) => {
      if (value === null) return value;
      if (this.compareBy) return this.compareBy(value);
      return value;
    };
  }
  updateExistingContext(ctx) {
    for (const propName of Object.keys(ctx)) {
      this._viewRef.context[propName] = this.data.context[propName];
    }
  }
  static {
    this.ɵfac = function NzTreeVirtualScrollNodeOutletDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeVirtualScrollNodeOutletDirective)(ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTreeVirtualScrollNodeOutletDirective,
      selectors: [["", "nzTreeVirtualScrollNodeOutlet", ""]],
      inputs: {
        data: "data",
        compareBy: "compareBy"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeVirtualScrollNodeOutletDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTreeVirtualScrollNodeOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], {
    data: [{
      type: Input
    }],
    compareBy: [{
      type: Input
    }]
  });
})();
var NzTreeNodeOptionComponent = class _NzTreeNodeOptionComponent {
  constructor(ngZone, host, destroy$, treeNode) {
    this.ngZone = ngZone;
    this.host = host;
    this.destroy$ = destroy$;
    this.treeNode = treeNode;
    this.nzSelected = false;
    this.nzDisabled = false;
    this.nzClick = new EventEmitter();
  }
  get isExpanded() {
    return this.treeNode.isExpanded;
  }
  ngOnChanges(changes) {
    const {
      nzDisabled,
      nzSelected
    } = changes;
    if (nzDisabled) {
      if (nzDisabled.currentValue) {
        this.treeNode.disable();
      } else {
        this.treeNode.enable();
      }
    }
    if (nzSelected) {
      if (nzSelected.currentValue) {
        this.treeNode.select();
      } else {
        this.treeNode.deselect();
      }
    }
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => (0, import_rxjs2.fromEvent)(this.host.nativeElement, "click").pipe((0, import_operators2.filter)(() => !this.nzDisabled && this.nzClick.observers.length > 0), (0, import_operators2.takeUntil)(this.destroy$)).subscribe((event) => {
      this.ngZone.run(() => this.nzClick.emit(event));
    }));
  }
  static {
    this.ɵfac = function NzTreeNodeOptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeNodeOptionComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(NzTreeNodeComponent));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTreeNodeOptionComponent,
      selectors: [["nz-tree-node-option"]],
      hostAttrs: [1, "ant-tree-node-content-wrapper"],
      hostVars: 4,
      hostBindings: function NzTreeNodeOptionComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-tree-node-content-wrapper-open", ctx.isExpanded)("ant-tree-node-selected", ctx.nzSelected);
        }
      },
      inputs: {
        nzSelected: [2, "nzSelected", "nzSelected", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute]
      },
      outputs: {
        nzClick: "nzClick"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c2,
      decls: 2,
      vars: 0,
      consts: [[1, "ant-tree-title"]],
      template: function NzTreeNodeOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "span", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeOptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-option",
      template: ` <span class="ant-tree-title"><ng-content></ng-content></span> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-tree-node-content-wrapper",
        "[class.ant-tree-node-content-wrapper-open]": "isExpanded",
        "[class.ant-tree-node-selected]": "nzSelected"
      },
      providers: [NzDestroyService],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: NzDestroyService
  }, {
    type: NzTreeNodeComponent
  }], {
    nzSelected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzClick: [{
      type: Output
    }]
  });
})();
var NzTreeNodeOutletDirective = class _NzTreeNodeOutletDirective {
  constructor(viewContainer) {
    this.viewContainer = viewContainer;
    this._node = inject(CDK_TREE_NODE_OUTLET_NODE, {
      optional: true
    });
  }
  static {
    this.ɵfac = function NzTreeNodeOutletDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeNodeOutletDirective)(ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTreeNodeOutletDirective,
      selectors: [["", "nzTreeNodeOutlet", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTreeNodeOutlet,
        useExisting: _NzTreeNodeOutletDirective
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeOutletDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTreeNodeOutlet]",
      providers: [{
        provide: CdkTreeNodeOutlet,
        useExisting: NzTreeNodeOutletDirective
      }],
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], null);
})();
var NzTreeNodePaddingDirective = class _NzTreeNodePaddingDirective extends CdkTreeNodePadding {
  constructor() {
    super(...arguments);
    this._indent = 24;
  }
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNzTreeNodePaddingDirective_BaseFactory;
      return function NzTreeNodePaddingDirective_Factory(__ngFactoryType__) {
        return (ɵNzTreeNodePaddingDirective_BaseFactory || (ɵNzTreeNodePaddingDirective_BaseFactory = ɵɵgetInheritedFactory(_NzTreeNodePaddingDirective)))(__ngFactoryType__ || _NzTreeNodePaddingDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTreeNodePaddingDirective,
      selectors: [["", "nzTreeNodePadding", ""]],
      inputs: {
        level: [2, "nzTreeNodePadding", "level", numberAttribute],
        indent: [0, "nzTreeNodePaddingIndent", "indent"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTreeNodePadding,
        useExisting: _NzTreeNodePaddingDirective
      }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodePaddingDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTreeNodePadding]",
      providers: [{
        provide: CdkTreeNodePadding,
        useExisting: NzTreeNodePaddingDirective
      }],
      standalone: true
    }]
  }], null, {
    level: [{
      type: Input,
      args: [{
        alias: "nzTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["nzTreeNodePaddingIndent"]
    }]
  });
})();
var NzTreeViewComponent = class _NzTreeViewComponent extends NzTreeView {
  constructor() {
    super(...arguments);
    this._afterViewInit = false;
  }
  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this._afterViewInit = true;
      this.changeDetectorRef.markForCheck();
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNzTreeViewComponent_BaseFactory;
      return function NzTreeViewComponent_Factory(__ngFactoryType__) {
        return (ɵNzTreeViewComponent_BaseFactory || (ɵNzTreeViewComponent_BaseFactory = ɵɵgetInheritedFactory(_NzTreeViewComponent)))(__ngFactoryType__ || _NzTreeViewComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTreeViewComponent,
      selectors: [["nz-tree-view"]],
      viewQuery: function NzTreeViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(NzTreeNodeOutletDirective, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeOutlet = _t.first);
        }
      },
      hostAttrs: [1, "ant-tree"],
      hostVars: 6,
      hostBindings: function NzTreeViewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-tree-block-node", ctx.nzDirectoryTree || ctx.nzBlockNode)("ant-tree-directory", ctx.nzDirectoryTree)("ant-tree-rtl", ctx.dir === "rtl");
        }
      },
      exportAs: ["nzTreeView"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTree,
        useExisting: _NzTreeViewComponent
      }, {
        provide: NzTreeView,
        useExisting: _NzTreeViewComponent
      }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [[1, "ant-tree-list-holder"], [1, "ant-tree-list-holder-inner"], ["nzTreeNodeOutlet", ""]],
      template: function NzTreeViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1);
          ɵɵelementContainer(2, 2);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("@.disabled", !ctx._afterViewInit || !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("@treeCollapseMotion", ctx._nodeOutlet.viewContainer.length);
        }
      },
      dependencies: [NzTreeNodeOutletDirective],
      encapsulation: 2,
      data: {
        animation: [treeCollapseMotion]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeViewComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-view",
      exportAs: "nzTreeView",
      template: `
    <div class="ant-tree-list-holder">
      <div
        [@.disabled]="!_afterViewInit || !!noAnimation?.nzNoAnimation"
        [@treeCollapseMotion]="_nodeOutlet.viewContainer.length"
        class="ant-tree-list-holder-inner"
      >
        <ng-container nzTreeNodeOutlet></ng-container>
      </div>
    </div>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkTree,
        useExisting: NzTreeViewComponent
      }, {
        provide: NzTreeView,
        useExisting: NzTreeViewComponent
      }],
      host: {
        class: "ant-tree",
        "[class.ant-tree-block-node]": "nzDirectoryTree || nzBlockNode",
        "[class.ant-tree-directory]": "nzDirectoryTree",
        "[class.ant-tree-rtl]": `dir === 'rtl'`
      },
      animations: [treeCollapseMotion],
      imports: [NzTreeNodeOutletDirective],
      standalone: true
    }]
  }], null, {
    nodeOutlet: [{
      type: ViewChild,
      args: [NzTreeNodeOutletDirective, {
        static: true
      }]
    }]
  });
})();
var DEFAULT_SIZE = 28;
var NzTreeVirtualScrollViewComponent = class _NzTreeVirtualScrollViewComponent extends NzTreeView {
  constructor() {
    super(...arguments);
    this.nzItemSize = DEFAULT_SIZE;
    this.nzMinBufferPx = DEFAULT_SIZE * 5;
    this.nzMaxBufferPx = DEFAULT_SIZE * 10;
    this.nodes = [];
    this.innerTrackBy = (i) => i;
  }
  ngOnChanges(changes) {
    if (changes.trackBy) {
      if (typeof changes.trackBy.currentValue === "function") {
        this.innerTrackBy = (index, n) => this.trackBy(index, n.data);
      } else {
        this.innerTrackBy = (i) => i;
      }
    }
  }
  get compareBy() {
    const baseTreeControl = this.treeControl;
    if (baseTreeControl.trackBy) {
      return baseTreeControl.trackBy;
    }
    return null;
  }
  renderNodeChanges(data) {
    this.nodes = new Array(...data).map((n, i) => this.createNode(n, i));
    this._dataSourceChanged.next();
    this.changeDetectorRef.markForCheck();
  }
  createNode(nodeData, index) {
    const node = this._getNodeDef(nodeData, index);
    const context = new CdkTreeNodeOutletContext(nodeData);
    if (this.treeControl.getLevel) {
      context.level = this.treeControl.getLevel(nodeData);
    } else {
      context.level = 0;
    }
    return {
      data: nodeData,
      context,
      nodeDef: node
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNzTreeVirtualScrollViewComponent_BaseFactory;
      return function NzTreeVirtualScrollViewComponent_Factory(__ngFactoryType__) {
        return (ɵNzTreeVirtualScrollViewComponent_BaseFactory || (ɵNzTreeVirtualScrollViewComponent_BaseFactory = ɵɵgetInheritedFactory(_NzTreeVirtualScrollViewComponent)))(__ngFactoryType__ || _NzTreeVirtualScrollViewComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTreeVirtualScrollViewComponent,
      selectors: [["nz-tree-virtual-scroll-view"]],
      viewQuery: function NzTreeVirtualScrollViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(NzTreeNodeOutletDirective, 7);
          ɵɵviewQuery(CdkVirtualScrollViewport, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeOutlet = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.virtualScrollViewport = _t.first);
        }
      },
      hostAttrs: [1, "ant-tree"],
      hostVars: 6,
      hostBindings: function NzTreeVirtualScrollViewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-tree-block-node", ctx.nzDirectoryTree || ctx.nzBlockNode)("ant-tree-directory", ctx.nzDirectoryTree)("ant-tree-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzItemSize: "nzItemSize",
        nzMinBufferPx: "nzMinBufferPx",
        nzMaxBufferPx: "nzMaxBufferPx",
        trackBy: "trackBy"
      },
      exportAs: ["nzTreeVirtualScrollView"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: NzTreeView,
        useExisting: _NzTreeVirtualScrollViewComponent
      }, {
        provide: CdkTree,
        useExisting: _NzTreeVirtualScrollViewComponent
      }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 4,
      vars: 5,
      consts: [[1, "ant-tree-list"], [1, "ant-tree-list-holder", 3, "itemSize", "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], ["nzTreeNodeOutlet", ""], ["nzTreeVirtualScrollNodeOutlet", "", 3, "data", "compareBy"]],
      template: function NzTreeVirtualScrollViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "cdk-virtual-scroll-viewport", 1);
          ɵɵtemplate(2, NzTreeVirtualScrollViewComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
          ɵɵelementEnd()();
          ɵɵelementContainer(3, 3);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("itemSize", ctx.nzItemSize)("minBufferPx", ctx.nzMinBufferPx)("maxBufferPx", ctx.nzMaxBufferPx);
          ɵɵadvance();
          ɵɵproperty("cdkVirtualForOf", ctx.nodes)("cdkVirtualForTrackBy", ctx.innerTrackBy);
        }
      },
      dependencies: [NzTreeVirtualScrollNodeOutletDirective, CdkVirtualForOf, NzTreeNodeOutletDirective, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeVirtualScrollViewComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-virtual-scroll-view",
      exportAs: "nzTreeVirtualScrollView",
      template: `
    <div class="ant-tree-list">
      <cdk-virtual-scroll-viewport
        class="ant-tree-list-holder"
        [itemSize]="nzItemSize"
        [minBufferPx]="nzMinBufferPx"
        [maxBufferPx]="nzMaxBufferPx"
      >
        <ng-container *cdkVirtualFor="let item of nodes; let i = index; trackBy: innerTrackBy">
          <ng-template nzTreeVirtualScrollNodeOutlet [data]="item" [compareBy]="compareBy"></ng-template>
        </ng-container>
      </cdk-virtual-scroll-viewport>
    </div>
    <ng-container nzTreeNodeOutlet></ng-container>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NzTreeView,
        useExisting: NzTreeVirtualScrollViewComponent
      }, {
        provide: CdkTree,
        useExisting: NzTreeVirtualScrollViewComponent
      }],
      host: {
        class: "ant-tree",
        "[class.ant-tree-block-node]": "nzDirectoryTree || nzBlockNode",
        "[class.ant-tree-directory]": "nzDirectoryTree",
        "[class.ant-tree-rtl]": `dir === 'rtl'`
      },
      imports: [NzTreeVirtualScrollNodeOutletDirective, CdkVirtualForOf, NzTreeNodeOutletDirective, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll],
      standalone: true
    }]
  }], null, {
    nodeOutlet: [{
      type: ViewChild,
      args: [NzTreeNodeOutletDirective, {
        static: true
      }]
    }],
    virtualScrollViewport: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport, {
        static: true
      }]
    }],
    nzItemSize: [{
      type: Input
    }],
    nzMinBufferPx: [{
      type: Input
    }],
    nzMaxBufferPx: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }]
  });
})();
var treeWithControlComponents = [NzTreeView, NzTreeNodeOutletDirective, NzTreeViewComponent, NzTreeNodeDefDirective, NzTreeNodeComponent, NzTreeNodeToggleDirective, NzTreeNodePaddingDirective, NzTreeNodeToggleRotateIconDirective, NzTreeNodeToggleActiveIconDirective, NzTreeNodeOptionComponent, NzTreeNodeNoopToggleDirective, NzTreeNodeCheckboxComponent, NzTreeNodeIndentsComponent, NzTreeVirtualScrollViewComponent, NzTreeVirtualScrollNodeOutletDirective, NzTreeNodeIndentLineDirective];
var NzTreeViewModule = class _NzTreeViewModule {
  static {
    this.ɵfac = function NzTreeViewModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeViewModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzTreeViewModule,
      imports: [NzTreeView, NzTreeNodeOutletDirective, NzTreeViewComponent, NzTreeNodeDefDirective, NzTreeNodeComponent, NzTreeNodeToggleDirective, NzTreeNodePaddingDirective, NzTreeNodeToggleRotateIconDirective, NzTreeNodeToggleActiveIconDirective, NzTreeNodeOptionComponent, NzTreeNodeNoopToggleDirective, NzTreeNodeCheckboxComponent, NzTreeNodeIndentsComponent, NzTreeVirtualScrollViewComponent, NzTreeVirtualScrollNodeOutletDirective, NzTreeNodeIndentLineDirective],
      exports: [NzTreeView, NzTreeNodeOutletDirective, NzTreeViewComponent, NzTreeNodeDefDirective, NzTreeNodeComponent, NzTreeNodeToggleDirective, NzTreeNodePaddingDirective, NzTreeNodeToggleRotateIconDirective, NzTreeNodeToggleActiveIconDirective, NzTreeNodeOptionComponent, NzTreeNodeNoopToggleDirective, NzTreeNodeCheckboxComponent, NzTreeNodeIndentsComponent, NzTreeVirtualScrollViewComponent, NzTreeVirtualScrollNodeOutletDirective, NzTreeNodeIndentLineDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzTreeVirtualScrollViewComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeViewModule, [{
    type: NgModule,
    args: [{
      imports: [treeWithControlComponents],
      exports: [treeWithControlComponents]
    }]
  }], null, null);
})();
var NzTreeFlattener = class {
  constructor(transformFunction, getLevel, isExpandable, getChildren) {
    this.transformFunction = transformFunction;
    this.getLevel = getLevel;
    this.isExpandable = isExpandable;
    this.getChildren = getChildren;
  }
  flattenNode(node, level, resultNodes, parentMap) {
    const flatNode = this.transformFunction(node, level);
    resultNodes.push(flatNode);
    if (this.isExpandable(flatNode)) {
      const childrenNodes = this.getChildren(node);
      if (childrenNodes) {
        if (Array.isArray(childrenNodes)) {
          this.flattenChildren(childrenNodes, level, resultNodes, parentMap);
        } else {
          childrenNodes.pipe((0, import_operators2.take)(1)).subscribe((children) => {
            this.flattenChildren(children, level, resultNodes, parentMap);
          });
        }
      }
    }
    return resultNodes;
  }
  flattenChildren(children, level, resultNodes, parentMap) {
    children.forEach((child, index) => {
      const childParentMap = parentMap.slice();
      childParentMap.push(index !== children.length - 1);
      this.flattenNode(child, level + 1, resultNodes, childParentMap);
    });
  }
  /**
   * Flatten a list of node type T to flattened version of node F.
   * Please note that type T may be nested, and the length of `structuredData` may be different
   * from that of returned list `F[]`.
   */
  flattenNodes(structuredData) {
    const resultNodes = [];
    structuredData.forEach((node) => this.flattenNode(node, 0, resultNodes, []));
    return resultNodes;
  }
  /**
   * Expand flattened node with current expansion status.
   * The returned list may have different length.
   */
  expandFlattenedNodes(nodes, treeControl) {
    const results = [];
    const currentExpand = [];
    currentExpand[0] = true;
    nodes.forEach((node) => {
      let expand = true;
      for (let i = 0; i <= this.getLevel(node); i++) {
        expand = expand && currentExpand[i];
      }
      if (expand) {
        results.push(node);
      }
      if (this.isExpandable(node)) {
        currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
      }
    });
    return results;
  }
};
var NzTreeFlatDataSource = class extends DataSource {
  constructor(_treeControl, _treeFlattener, initialData = []) {
    super();
    this._treeControl = _treeControl;
    this._treeFlattener = _treeFlattener;
    this._flattenedData = new import_rxjs2.BehaviorSubject([]);
    this._expandedData = new import_rxjs2.BehaviorSubject([]);
    this._data = new import_rxjs2.BehaviorSubject(initialData);
    this.flatNodes();
  }
  setData(value) {
    this._data.next(value);
    this.flatNodes();
  }
  getData() {
    return this._data.getValue();
  }
  connect(collectionViewer) {
    const changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed.asObservable(), this._flattenedData.asObservable()];
    return (0, import_rxjs2.merge)(...changes).pipe((0, import_operators2.map)(() => {
      this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));
      return this._expandedData.value;
    }));
  }
  disconnect() {
  }
  flatNodes() {
    this._flattenedData.next(this._treeFlattener.flattenNodes(this.getData()));
    this._treeControl.dataNodes = this._flattenedData.value;
  }
};
export {
  NzTreeFlatDataSource,
  NzTreeFlattener,
  NzTreeNodeCheckboxComponent,
  NzTreeNodeComponent,
  NzTreeNodeDefDirective,
  NzTreeNodeIndentLineDirective,
  NzTreeNodeIndentsComponent,
  NzTreeNodeNoopToggleDirective,
  NzTreeNodeOptionComponent,
  NzTreeNodeOutletDirective,
  NzTreeNodePaddingDirective,
  NzTreeNodeToggleActiveIconDirective,
  NzTreeNodeToggleDirective,
  NzTreeNodeToggleRotateIconDirective,
  NzTreeView,
  NzTreeViewComponent,
  NzTreeViewModule,
  NzTreeVirtualScrollNodeOutletDirective,
  NzTreeVirtualScrollViewComponent,
  getNextSibling,
  getParent
};
//# sourceMappingURL=ng-zorro-antd_tree-view.js.map
