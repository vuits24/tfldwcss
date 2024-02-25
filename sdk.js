// Sắp xếp thứ tự: 1: base, 2: pseudo, 3: queryMedia: xs, md,... ( base, pseudo)
const DFCSS=[
    `*, ::before, ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: var(--un-default-border-color, #e5e7eb);
    }`,
    `::before, ::after {
        --un-content: '';
    }`,
    `html, :host {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        -moz-tab-size: 4;
        tab-size: 4;
        font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-feature-settings: normal;
        font-variation-settings: normal;
        -webkit-tap-highlight-color: transparent;
    }`,
    `body {
        margin: 0;
        line-height: inherit;
    }`,
    `hr {
        height: 0;
        color: inherit;
        border-top-width: 1px;
    }`,
    `abbr:where([title]) {
        text-decoration: underline dotted;
    }`,
    `h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
        font-weight: inherit;
    }`,
    `a {
        color: inherit;
        text-decoration: inherit;
    }`,
    `b, strong {
        font-weight: bolder;
    }`,
    `code, kbd, samp, pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-feature-settings: normal;
        font-variation-settings: normal;
        font-size: 1em;
    }`,
    `small {
        font-size: 80%;
    }`,
    `sub, sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }`,
    `sub {
        bottom: -0.25em;
    }`,
    `sup {
        top: -0.5em;
    }`,
    `table {
        text-indent: 0;
        border-color: inherit;
        border-collapse: collapse;
    }`,
    `button, input, optgroup, select, textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-variation-settings: inherit;
        font-size: 100%;
        font-weight: inherit;
        line-height: inherit;
        color: inherit;
        margin: 0;
        padding: 0;
    }`,
    `button, select {
        text-transform: none;
    }`,
    `button, [type='button'], [type='reset'], [type='submit'] {
        -webkit-appearance: button;
        background-color: transparent;
        background-image: none;
    }`,
    `:-moz-focusring {
        outline: auto;
    }`,
    `:-moz-ui-invalid {
        box-shadow: none;
    }`,
    `progress {
        vertical-align: baseline;
    }`,
    `::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
        height: auto;
    }`,
    `[type='search'] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }`,
    `::-webkit-search-decoration {
        -webkit-appearance: none;
    }`,
    `::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }`,
    `summary {
        display: list-item;
    }`,
    `blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
        margin: 0;
    }`,
    `fieldset {
        margin: 0;
        padding: 0;
    }`,
    `legend {
        padding: 0;
    }`,
    `ol, ul, menu {
        list-style: none;
        margin: 0;
        padding: 0;
    }`,
    `dialog {
        padding: 0;
    }`,
    `textarea {
        resize: vertical;
    }`,
    `input::placeholder, textarea::placeholder {
        opacity: 1;
        color: #9ca3af;
    }`,
    `button, [role="button"] {
        cursor: pointer;
    }`,
    `:disabled {
        cursor: default;
    }`,
    `img, svg, video, canvas, audio, iframe, embed, object {
        display: block;
        vertical-align: middle;
    }`,
    `img, video {
        max-width: 100%;
        height: auto;
    }`,
    `[hidden] {
        display: none;
    }`
    
    
    ];
    
    const OBJ_CSS = [
    
        {
            name: "Layout",
            pNames: {
                "ar": {
                    des:"Aspect Ratio",
                    names: "aspect-ratio",
                    default: "auto",
                    exts: { "a": "auto", "s": "1 / 1", "v": "16 / 9" },
                    fn: (v = "") => {
                        let regx = /^(?<v1>\d+)\/(?<v2>\d+)$/;
                        let rv1 = v.match(regx);
                        if (rv1) {
                            let { v1, v2 } = rv1.groups;
                            return `${v1} / ${v2}`;
                        }
                        return "";
                    }
                },
                "col": {
                    des:"Columns",
                    names: "columns",
                    default: "auto",
                    exts: { "a": "auto" }
                    
                },
    
                "bra": {
                    des:"Break After",
                    names: "break-after",
                    default: "auto",
                    exts: {
                        "a": "auto", "av": "avoid", "all": "all",
                        "avp": "avoid-page", "p": "page", "l": "left", "r": "right", "c": "column"
                    }
                },
                "brb": {
                    des:"Break Before",
                    names: "break-before", default: "auto", exts: {
                        "a": "auto", "av": "avoid", "all": "all",
                        "avp": "avoid-page", "p": "page", "l": "left", "r": "right", "c": "column"
                    }
                },
                "bri": { 
                    des:"Break Inside",
                    names: "break-inside", default: "auto", exts: { "a": "auto", "av": "avoid", "avp": "avoid-page", "avc": "avoid-column" } },
    
                "bdbr": { 
                    des:"Box Decoration Break",
                    names: "box-decoration-break", default: "clone", exts: { "c": "clone", "s": "slice" } },
                "bsi": { 
                    des:"Box Sizing",
                    names: "box-sizing", exts: { "bb": "border-box", "cb": "content-box" } },
    
                "d": {
                    des:"Display",
                    names: "display", default: "block", exts: {
                        "b": "block", "ib": "inline-block", "i": "inline", "f": "flex", "if": "inline-flex",
                        "t": "table", "it": "inline-table", "tcp": "table-caption", "tcell": "table-cell", "tcol": "table-column",
                        "tcolg": "table-column-group", "tfg": "table-footer-group", "thg": "table-header-group", "trg": "table-row-group",
                        "tr": "table-row", "fr": "flow-root", "g": "grid", "ig": "inline-grid", "c": "contents", "li": "list-item", "n": "none"
                    }
                },
                "fl": { 
                    des:"Float",
                    names: "float", default: "none", exts: { "is": "inline-start", "ie": "inline-end", "r": "right", "l": "left", "n": "none" } },
                "cl": { 
                    des:"Clear",
                    names: "clear", default: "both", exts: { "is": "inline-start", "ie": "inline-end", "r": "right", "l": "left", "b": "both", "n": "none" } },
                "iso": {
                    des:"Isolation",
                    names: "isolation", default: "auto", exts: { "i": "isolate", "a": "auto" } },
                "of": { 
                    des:"Object Fit",
                    names: "object-fit", default: "contain", exts: { "c": "contain", "cv": "cover", "f": "fill", "n": "none", "sd": "scale-down" } },
                "op": {
                    des:"Object Position",  
                    names: "object-position", default: "left", exts: {
                        "b": "bottom", "c": "center", "l": "left", "r": "right", "t": "top",
                        "lb": "left bottom", "lt": "left top", "rb": "right bottom", "rt": "right top"
                    }
                },
    
                "ov": { 
                    des:"Overflow",
                    names: "overflow", default: "auto", exts: { "a": "auto", "h": "hidden", "c": "clip", "v": "visible", "s": "scroll" } },
                "ovx": { 
                    des:"Overflow X",
                    names: "overflow-x", default: "auto", exts: { "a": "auto", "h": "hidden", "c": "clip", "v": "visible", "s": "scroll" } },
                "ovy": { 
                    des:"Overflow Y",
                    names: "overflow-y", default: "auto", exts: { "a": "auto", "h": "hidden", "c": "clip", "v": "visible", "s": "scroll" } },
                "ovb": { 
                    des:"Overflow Block",
                    names: "overscroll-behavior", default: "auto", exts: { "a": "auto", "c": "contain", "n": "none" } },
                "ovbx": { 
                    des:"Overscoll Behavior X",
                    names: "overscroll-behavior-x", default: "auto", exts: { "a": "auto", "c": "contain", "n": "none" } },
                "ovby": { 
                    des:"Overscoll Behavior Y",
                    names: "overscroll-behavior-y", default: "auto", exts: { "a": "auto", "c": "contain", "n": "none" } },
                "pos": { 
                    des:"Position",
                    names: "position", default: "static", exts: { "s": "static", "f": "fixed", "a": "absolute", "r": "relative", "st": "sticky" } },
                "i": {
                    des:"Inset",
                    names: "inset", default: "0px"},
                "t": { 
                    des:"Top",
                    names: "top", default: "0px"  },
                "r": { 
                   des:"Right",
                    names: "right" ,default: "0px" },
                "b": { 
                    des:"Bottom",
                    names: "bottom" ,default: "0px" },
                "l": { 
                    des:"Left",
                    names: "left" ,default: "0px" },
                "iis": { 
                    des:"Inset Inline Start",
                    names: "inset-inline-start" ,default: "0px" },
                "iie": { 
                    des:"Inset Inline End",
                    names: "inset-inline-end" ,default: "0px" },
                "v": { 
                    des:"Visibility",
                    names: "visibility", default:"visible", exts: { "v": "visible", "h": "hidden", "c": "collapse" } },
                "z": { 
                    des:"Z Index",
                    names: "z-index", default: "-1", exts: {} }
    
    
            }
        },
    
        {
            name: "Flexbox & Grid",
            pNames: {
                "fxb": { 
                    des:"Flex Basis",
                    names: "flex-basis", default: "0" },
                "fxd": { des:"Flex Direction", 
                names: "flex-direction", default:"row", exts: { "r": "row", "rr": "row-reverse", "c": "column", "cr": "column-reverse" } },
                "fxw": { 
                    des:"Flex Wrap",
                    names: "flex-wrap", default:"wrap", exts: { "w": "wrap", "wr": "wrap-reverse", "n": "nowrap" } },
                "fx": { 
                    des:"Flex",
                    names: "flex", default:"auto", exts: { "n": "none", "i": "0 1 auto", "a": "1 1 auto", "1": "1 1 0%" } },
                "fxg": {
                    des:"Flex Grow",
                    names: "flex-grow", default:"0", exts: { "0": 0, "1": 1 } },
                "fxs": { 
                    des:"Flex Shrink",
                    names: "flex-shrink", default:"0", exts: { "0": 0, "1": 1 } },
                "ord": { 
                    des:"Order",
                    names: "order", default:"0" },
                "gtc": {
                    des:"Grid Template Columns",
                    names: ["grid-template-columns"],
                    default: "repeat(12, minmax(0, 1fr))",
                    exts: { "n": "none", "s": "subgrid" },
                    fn: (v) => {
                        let regx = /gtc(?<rv1>\d+)$/;
                        let rv = v.match(regx);
                        if (rv) {
                            let { rv1 } = rv.groups;
                            if (rv1) {
                                return `repeat(${rv1}, minmax(0, 1fr))`;
                            }
                           
                        }
                        return "";
                    }
                   
                },
                "gc":{des:"Grid Column",
                    names:"grid-column", default:"auto", exts:{"a":"auto","f":"1 / -1"}, fn: (value) => {
                        return `span ${value} / span ${value}`;
                    }
                },
                "gcs":{des:"Grid Column Start",
                    names:"grid-column-start", default:"auto", exts:{"a":"auto"}
                },
                "gce":{des:"Grid Column End",
                    names:"grid-column-start", default:"auto", exts:{"a":"auto"}
                },
                "gtr":{des:"Grid Template Rows", names:"grid-template-rows", default:"repeat(12, minmax(0, 1fr))", exts:{"n":"none","s":"subgrid"},
                    fn:(v) => `repeat(${v}, minmax(0, 1fr))`},
                "gr":{des:"Grid Row", names:"grid-row", default:"auto", exts:{"a":"auto","f":"1 / -1"}, fn:(v) => `span ${v} / span ${v}`},
                "grs":{des:"Grid Row Start", names:"grid-row-start", default:"auto", exts:{"a":"auto"}},
                "gre":{des:"Grid Row End", names:"grid-row-end", default:"auto", exts:{"a":"auto"}},
                "gaf":{des:"Grid Auto Flow", names:"grid-auto-flow", default:"row", exts:{"r":"row", "c":"column","d":"dense","rd":"row dense", "cd":"column dense"}},
                "gac":{des:"Grid Auto Columns", names:"grid-auto-columns", default:"auto", exts:{"a":"auto","mic":"min-content", "mac":"max-content", "mm":"minmax(0, 1fr)"}},
                "gar":{des:"Grid Auto Rows", names:"grid-auto-rows", default:"auto", exts:{"a":"auto","mic":"min-content", "mac":"max-content", "mm":"minmax(0, 1fr)"}},
                "gap":{des:"Gap", names:"gap", default:"0px"},
                "cgap":{des:"Column Gap", names:"column-gap", default:"0px"},
                "rgap":{des:"Row Gap", names:"row-gap", default:"0px"},
                "jc":{des:"Justify Content",names:"justify-content", default:"normal", exts:{"n":"normal","fs":"flex-start",
                    "fe":"flex-end", "c":"center", "sp":"space-between", "sa":"space-around", "se":"space-evenly", "st":"stretch"}},
                "ji":{des:"Justify Items", names:"justify-items", default:"start", exts: {"s":"start", "e":"end","c":"center", "st":"stretch"}},
                "js":{des:"Justify Self", names:"justify-self", default:"auto", exts:{"a":"auto","s":"start", "e":"end","c":"center", "st":"stretch"}},
                "ac":{des:"Align Content", names:"align-content", default:"normal", exts:{"n":"normal","fs":"flex-start",
                    "fe":"flex-end", "c":"center","b":"baseline", "sp":"space-between", "sa":"space-around", "se":"space-evenly", "st":"stretch"}},
                "ai":{des:"Align Items", names:"align-items", default:"flex-start", exts:{"fs":"flex-start","fe":"flex-end", "c":"center", "b":"baseline", "st":"stretch"}},
                "as":{des:"Align Self", names:"align-self", default:"auto", exts:{"a":"auto", "fs":"flex-start", "fe":"flex-end",  "b":"baseline", "st":"stretch"}},
                "pc":{des:"Place Content", names:"place-content", default:"start", exts: {"s":"start", "e":"end","c":"center", "b":"baseline", "sp":"space-between", "sa":"space-around", "se":"space-evenly","st":"stretch"}},
                "pi":{des:"Place Items", names:"place-items", default:"start", exts:{"s":"start", "c":"center","e":"end","b":"baseline", "st":"stretch"}},
                "ps":{des:"Place Self", names:"place-self", default:"auto", exts:{"a":"auto","s":"start", "c":"center","e":"end", "st":"stretch"}}
    
    
            }
        },
        {
            name:"Spacing",
            pNames: {
                "p":{des:"Padding", name:"padding", fn:(v) => {
                   let vv = v.match(/(?<p>[x|y|s|e|t|r|b|l])?(?<v>.+)$/);
                   if(vv) {
                    let {p, v:value} = vv.groups;
                   
                     if(/--.+/g.test(value)) {
                            value = `var(${value})`;
                     }
                    if(p) {
                        if(p == "x") {
                            return `padding-left: ${value};padding-right: ${value};`
                        }
                        if(p == "y") {
                            return `padding-top: ${value};padding-bottom: ${value};`;
                        }
                        if(p == "s") {
                            return `padding-inline-start: ${value};`;
                        }
                        if(p == "e") {
                            return `padding-inline-end: ${value};`;
                        }
                        if(p == "t") {
                            return `padding-top: ${value};`;
                        }
                        if(p == "r") {
                            return `padding-right: ${value};`;
                        }
                        if(p == "b") {
                            return `padding-bottom: ${value};`;
                        }
                        if(p == "l") {
                            return `padding-left: ${value};`;
                        }
                    } else {
                        return `padding: ${value};`
                    }
                    return "";
                   }
                }},
                "pt":{des:"Padding Top", name:"padding-top", names:"padding-top", default:"auto", exts: {"a":"auto"}},
                "pr":{des:"Padding Right", names:"padding-right", default:"auto", exts: {"a":"auto"}},
                "pb":{des:"Padding Bottom", names:"padding-bottom", default:"auto", exts: {"a":"auto"}},
                "pl":{des:"Padding Left", names:"padding-left", default:"auto", exts: {"a":"auto"}},
                "px":{des:"Padding Left,Right ", names:["padding-left","padding-right"], default:"auto", exts: {"a":"auto"}},
                "py":{des:"Padding Top,Bottom ", names:["padding-top","padding-bottom"], default:"auto", exts: {"a":"auto"}},
                "m": {des:"Margin", name:"margin", fn: (v) => {
                    let vv = v.match(/(?<p>[x|y|s|e|t|r|b|l])?(?<v>.+)$/);
                    if(vv) {
                     let {p, v:value} = vv.groups;
                     if(/--.+/g.test(value)) {
                            value = `var(${value})`;
                     }
                     if(p) {
                         if(p == "x") {
                             return `margin-left: ${value};margin-right: ${value};`
                         }
                         if(p == "y") {
                             return `margin-top: ${value};margin-bottom: ${value};`;
                         }
                         if(p == "s") {
                             return `margin-inline-start: ${value};`;
                         }
                         if(p == "e") {
                             return `margin-inline-end: ${value};`;
                         }
                         if(p == "t") {
                             return `margin-top: ${value};`;
                         }
                         if(p == "r") {
                             return `margin-right: ${value};`;
                         }
                         if(p == "b") {
                             return `margin-bottom: ${value};`;
                         }
                         if(p == "l") {
                             return `margin-left: ${value};`;
                         }
                     } else {
                         return `margin: ${value};`
                     }
                     return "";
                    }
                }},
                "mt":{des:"Margin Top", names:"margin-top", default:"auto", exts: {"a":"auto"}},
                "mr":{des:"Margin Right", names:"margin-right", default:"auto", exts: {"a":"auto"}},
                "mb":{des:"Margin Bottom", names:"margin-bottom", default:"auto", exts: {"a":"auto"}},
                "ml":{des:"Margin Left", names:"margin-left", default:"auto", exts: {"a":"auto"}},
                "mx":{des:"Margin Left, Right", names:["margin-left", "margin-right"], default:"auto", exts: {"a":"auto"}},
                "my":{des:"Margin Top, Bottom", names:["margin-top", "margin-bottom"], default:"auto", exts: {"a":"auto"}},

    
            }
        },
        {name:"Sizing",
        pNames: {
            "w": {des:"Width",names:"width", default:"100%", exts: {"mic":"min-content", "mac":"max-content", "fc":"fit-content", "f": "100%"} },
            "miw":{des:"Min-Width", names:"min-width", default:"100%", exts: {"f":"100%","mic":"min-content", "mac":"max-content", "fc":"fit-content", "f": "100%"}},
            "maw":{des:"Max-Width", names:"max-width", default:"100%", exts: {"f":"100%","mic":"min-content", "mac":"max-content", "fc":"fit-content", "f": "100%"}},
            "h": {des:"Height",names:"height", default:"auto", exts: {"a":"auto", "mic":"min-content", "mac":"max-content", "fc":"fit-content", "f": "100%"} },
            "mih":{des:"Min-Height", names:"min-height", default:"auto", exts: {"a":"auto","f":"100%","mic":"min-content", "mac":"max-content", "fc":"fit-content", "f": "100%"}},
            "mah":{des:"Max-Height", names:"max-height", default:"auto", exts: {"a":"auto","n":"none","f":"100%","mic":"min-content", "mac":"max-content", "fc":"fit-content", "f": "100%"}},
            "wh":{des:"Size: width, height", names: ["width", "height"], default:"0px", exts: {"mic":"min-content", "mac":"max-content", "fc":"fit-content", "f": "100%"}},
            "mawh":{des:"Size: max-width, max-heigth", names: ["max-width", "max-height"], default:"0px", exts: {"mic":"min-content", "mac":"max-content", "fc":"fit-content", "f": "100%"}},
            "miwh":{des:"Size: min-width, min-heigth", names: ["min-width", "min-height"], default:"0px", exts: {"mic":"min-content", "mac":"max-content", "fc":"fit-content", "f": "100%"}},

    
        }},
        {name: "Typography",
        pNames: {
            "ff":{des:"Font Family",names:"font-family", default:"sans-serif", exts: {
                "a":"ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "s":"ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
                "m":"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
            }},
    
            "fsi":{des:"Font Size", names:"font-size", default:"1rem"},
            "fst":{des:"Font Style", names:"font-style", default:"italic", exts:{"n":"normal","i":"italic","o":"oblique"}},
            "fw":{des:"Font Weight", names:"font-weight", default:"100"},
            "fvn":{des:"Font Variant Numeric", names:"font-variant-numeric", default:"normal", 
                    exts:{"n":"normal","o":"ordinal","sz":"slashed-zero","ln":"lining-nums","on":"oldstyle-nums","pn":"proportional-nums",
                    "tn":"tabular-nums","df":"diagonal-fractions","sf":"stacked-fractions"}},
            "lts":{des:"Letter Spacing", names:"letter-spacing", default:"normal", exts:{"n":"normal"}},
            "lc":{des:"Line Clamp", names:"", fn:(v) => {
                if(v =="1") {
                    return `overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;`;
                }
                if(v =="2") {
                    return `overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;`;
                }
                if(v =="3") {
                    return `overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;`;
                }
                if(v =="4") {
                    return `overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 4;`;
                }
                if(v =="5") {
                    return `overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 5;`;
                }
                if(v =="6") {
                    return `overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 6`;
                }
                if(v =="n") {
                    return `overflow: visible;
                    display: block;
                    -webkit-box-orient: horizontal;
                    -webkit-line-clamp: none;`;
                }
            }},
            "lh":{des:"Line Height", names: "line-height", default:"1.5"},
            "lis": {des: "List Style", names: "list-style", default: "none", exts: {"n": "none", "d": "disc", "c": "circle", "s": "square"}},
            "lisi":{des:"List Style Image", names:"list-style-image", default:"none", exts:{"n":"none"}},
            "lisp":{des:"List Style Position", names:"list-style-position", default:"inside", exts:{"i":"inside", "o":"outside"}},
            "list":{des:"List Style Type", names:"list-style-type", default: "disc", exts:{"n":"none", "d":"disc","c":"circle","s":"square",
                    "dc":"decimal","dclz":"decimal-leading-zero","lr":"lower-roman","ur":"upper-roman"}},
            "ta":{des:"Text Align", names:"text-align", default:"left", exts:{"l":"left","c":"center","r":"right","j":"justify","s":"start","e":"end"}},
           
            "c": {
                des:"Text Color",
                names:["color"],
                default:"inherit",
                exts: {"i":"inherit","c":"currentColor", "t":"transparent"}
            },
            "tdl":{des:"Text Decoration", names:"text-decoration-line",default:"none", exts:{"n":"none","u":"underline","o":"overline","lt":"line-through"}},
            "tdc":{des:"Text Decoration Color", names:"text-decoration-color", default:"inherit", exts:{"i":"inherit", "c":"currentColor","t":"transparent"}},
            "tds":{des:"Text Decoration Style", names:"text-decoration-style", default:"solid", exts:{"s":"solid","db":"double","dt":"dotted","ds":"dashed","w":"wavy"}},
            "tdt":{des:"Text Decoration Thickness",names:"text-decoration-thickness", default:"auto", exts:{"a":"auto","f":"from-font"}},
            "tuo":{des:"Text Underline Offset", names:"text-underline-offset", default:"auto", exts:{"a":"auto"}},
            "tt":{des:"Text Transform",names:"text-transform", default:"none", exts:{"n":"none","c":"capitalize","l":"lowercase", "u":"uppercase"}},
            "tov":{des:"Text Overflow", names:"text-overflow", default:"ellipsis", exts:{"e":"ellipsis","c":"clip"}},
            "tw":{des:"Text Wrap", names:"text-wrap", default:"nowrap", exts:{"n":"nowrap", "w":"wrap","b":"balance","p":"pretty"}},
            "ti":{des:"Text Indent", names:"text-indent", default:"0px"},
            "va":{des:"Vertical Align",names:"vertical-align", default:"baseline", exts:{"b":"baseline","t":"top","m":"middle","b":"bottom",
                    "tt":"text-top","tb":"text-bottom","sb":"sub","sp":"super"}},
            "whs":{des:"Whitespace",names:"white-space",default:"normal",exts:{"n":"normal","nw":"nowrap","p":"pre", "pl":"pre-line","pw":"pre-wrap","bs":"break-spaces"}},
            "wob":{des:"Word Break", names:"word-break", default:"normal", exts:{"n":"normal","ka":"keep-all","ba":"break-all"}},
            "hyp":{des:"Hyphens", names:"hyphens", default:"none", exts:{"a":"auto","n":"none","m":"manual"}},
            "ct":{des:"Content", names:"content", default:"none", exts:{"oq":"open-quote","noq":"no-open-quote","cq":"close-quote","ncq":"no-close-quote", "n":"none","nm":"normal"}},
    
    
        }},
        {name: "Backgrounds",
        pNames: {
            "bgc": {des: "Background Color", names: "background-color", default: "transparent", exts: {"c":"currentColor","t": "transparent", "i": "inherit"}},
            "bgcl":{des:"Background Clip", names:"background-clip", default:"border-box", exts:{"bb":"border-box","pb":"padding-box","cb":"content-box","t":"text"}},
            "bgi": {des: "Background Image", names: "background-image", default: "none", exts: {"n": "none"}},
            "bgr": {des: "Background Repeat", names: "background-repeat", default: "repeat", exts: {"r": "repeat", "x": "repeat-x", "y": "repeat-y", "n": "no-repeat"}},
            "bga": {des: "Background Attachment", names: "background-attachment", default: "scroll", exts: {"s": "scroll", "f": "fixed", "l": "local"}},
            "bgp": {des: "Background Position", names: "background-position", default: "0% 0%", exts: {"lt": "left top", "ct": "center top", "rt": "right top", "lc": "left center", "cc": "center center", "rc": "right center", "lb": "left bottom", "cb": "center bottom", "rb": "right bottom"}},
            "bgs": {des: "Background Size", names: "background-size", default: "auto", exts: {"a": "auto", "c": "cover", "ct": "contain"}},
            "bgo":{des:"Background Origin", names:"background-origin", default:"padding-box", exts:{"bb":"border-box","pb":"padding-box","cb":"content-box"}},
    
        }},
        {name: "Borders",
        pNames: {
            "bd": {des: "Border", names: "border", default: "solid", exts: {"n": "none"}},
            "bdt": {des: "Border Top", names: "border-top", default: "solid", exts: {"n": "none"}},
            "bdr": {des: "Border Right", names: "border-right", default: "solid", exts: {"n": "none"}},
            "bdb": {des: "Border Bottom", names: "border-bottom", default: "solid", exts: {"n": "none"}},
            "bdl": {des: "Border Left", names: "border-left", default: "solid", exts: {"n": "none"}},
            "bdc": {des: "Border Color", names: "border-color", default: "transparent", exts: {"t": "transparent", "i": "inherit", "c":"currentColor"}},
            "bdw": {des: "Border Width", names: "border-width", default: "medium", exts: {"t": "thin", "m": "medium", "th": "thick"}},
           "bdwx": {des:"Border Width left right", fn:(v) => {
                  return `border-left-width: ${v};border-right-width: ${v};`;
           }},
           "bdwy": {des:"Border Width top bottom", fn:(v) => { 
                    return `border-top-width: ${v};border-bottom-width: ${v};`;
           }},
            "bdtw":{des:"Border Top  Width", names:"border-top-width", default:"medium", exts:{"t":"thin","m":"medium","th":"thick"}},
            "bdrw":{des:"Border Right Width", names:"border-right-width", default:"medium", exts:{"t":"thin","m":"medium","th":"thick"}},
            "bdbw":{des:"Border Bottom  Width", names:"border-bottom-width", default:"medium", exts:{"t":"thin","m":"medium","th":"thick"}},
            "bdlw":{des:"Border Left  Width", names:"border-left-width", default:"medium", exts:{"t":"thin","m":"medium","th":"thick"}},
            "bds": {des: "Border Style", names: "border-style", default: "none", exts: {"n": "none", "h": "hidden", "dt": "dotted", "ds": "dashed", "s": "solid", "db": "double", "g": "groove", "r": "ridge", "in": "inset", "out": "outset"}},
            "bdr": {des: "Border Radius", names: "border-radius", default: "0", exts: {"c": "50%"}},
            "olw": {des: "Outline Width", names: "outline-width", default: "medium", exts: {"t": "thin", "m": "medium", "th": "thick"}},
            "olc": {des: "Outline Color", names: "outline-color", default: "inherit", exts: {"i": "inherit", "c":"currentColor","t":"transparent"}},
            "ols": {des: "Outline Style", names: "outline-style", default: "none", exts: {"n": "none", "h": "hidden", "dt": "dotted", "ds": "dashed", "s": "solid", "db": "double", "g": "groove", "r": "ridge", "in": "inset", "out": "outset"}},
            "olo": {des: "Outline Offset", names: "outline-offset", default: "0px", exts: {}}
    
      
        }},
        {name: "Effects",
        pNames: {
            "bsh": {des: "Box Shadow", names: "box-shadow", default: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"},
            "bgb": {des: "Background Blend Mode", names: "background-blend-mode", default: "normal", exts: {"n": "normal", "m": "multiply", "s": "screen", "o": "overlay", "d": "darken", "l": "lighten", "c": "color-dodge", "i": "color-burn", "h": "hard-light", "s": "soft-light", "d": "difference", "e": "exclusion", "h": "hue", "s": "saturation", "c": "color", "l": "luminosity"}},
            "mbd": {des: "Mix Blend Mode Darken", names: "mix-blend-mode", default: "darken", exts: {"n": "normal", "m": "multiply", "s": "screen", "o": "overlay", "d": "darken", "l": "lighten", "c": "color-dodge", "i": "color-burn", "h": "hard-light", "s": "soft-light", "d": "difference", "e": "exclusion", "h": "hue", "s": "saturation", "c": "color", "l": "luminosity"}},
            "o": {des: "Opacity", names: "opacity", default: "1", exts: {"0": "0", "0.5": "0.5", "1": "1"}}
    
        }},
        {name: "Filters",
        pNames: {
            "flt": {des: "Filter", names: "filter", default: "none",
            exts: {"n": "none", },
            fn: (v) => {
                let vv = v.match(/(?<p>[b|bn|c|d|g|h|i|o|s|se])(?<v>.+)$/);
                if(vv) {
                    let {p, v} = vv.groups;
                    if(/--.+$/g.test(v)) {
                        v = `var(${v})`;
                    }
                    if(p == "b") {
                        return `blur(${v})`;
                    }
                    if(p == "bn") {
                        return `brightness(${v})`;
                    }
                    if(p == "c") {
                        return `contrast(${v})`;
                    }
                    if(p == "d") {
                        return `drop-shadow(${v})`;
                    }
                    if(p == "g") {
                        return `grayscale(${v})`;
                    }
                    if(p == "h") {
                        return `hue-rotate(${v})`;
                    }
                    if(p == "i") {
                        return `invert(${v})`;
                    }
                    if(p == "o") {
                        return `opacity(${v})`;
                    }
                    if(p == "s") {
                        return `saturate(${v})`;
                    }
                    if(p == "se") {
                        return `sepia(${v})`;
                    }
                }
                return "";
            }
        },
            "bdflt": {des: "Backdrop Filter", names: "backdrop-filter", default: "none", exts: {"n": "none"},
            fn: (v)=> {
                let vv = v.match(/(?<p>[b|bn|c|d|g|h|i|o|s|se])(?<v>.+)$/);
                if(vv) {
                    let {p, v} = vv.groups;
                    if(/--.+$/g.test(v)) {
                        v = `var(${v})`;
                    }
                    if(p == "b") {
                        return `blur(${v})`;
                    }
                    if(p == "bn") {
                        return `brightness(${v})`;
                    }
                    if(p == "c") {
                        return `contrast(${v})`;
                    }
                    if(p == "d") {
                        return `drop-shadow(${v})`;
                    }
                    if(p == "g") {
                        return `grayscale(${v})`;
                    }
                    if(p == "h") {
                        return `hue-rotate(${v})`;
                    }
                    if(p == "i") {
                        return `invert(${v})`;
                    }
                    if(p == "o") {
                        return `opacity(${v})`;
                    }
                    if(p == "s") {
                        return `saturate(${v})`;
                    }
                    if(p == "se") {
                        return `sepia(${v})`;
                    }
                }
                return "";
            }
        }
    
        }},
        {name: "Tables",
        pNames: {
            "bdcl": {des: "Border Collapse", names: "border-collapse", default: "separate", exts: {"s": "separate", "c": "collapse"}},
            "bdsp": {des: "Border Spacing", names: "border-spacing", default: "0px 0px",  exts: {"a": "auto"},
            fn:(v)=>{
                let vv = v.match(/(?<p>[x|y])(?<v>.+)$/);
                if(vv) {
                    let {p, v} = vv.groups;
                    if(p == "x") {
                        return `border-spacing: ${v} 0px;`;
                    }
                    if(p == "y") {
                        return `border-spacing: 0px ${v};`;
                    }
                }
                return "";
            }
        },
            "tl": {des: "Table Layout", names: "table-layout", default: "auto", exts: {"a": "auto", "f": "fixed"}},
            "cs": {des: "Caption Side", names: "caption-side", default: "top", exts: {"t": "top", "b": "bottom"}}
    
        }},
        {name: "Transitions & Animation",
        pNames: {
            "trsp": {des: "Transition Property", names: "transition-property", default: "all", exts: {"a": "all", "n": "none"}},
            "trsd": {des: "Transition Duration", names: "transition-duration", default: "0s", exts: {"a": "auto"}},
            "trstf": {des: "Transition Timing Function", names: "transition-timing-function", default: "ease", exts: {"e": "ease", "ei": "ease-in", "eo": "ease-out", "eio": "ease-in-out", "l": "linear", "s": "step-start", "e": "step-end"}},
            "trsdl": {des: "Transition Delay", names: "transition-delay", default: "0s", exts: {"a": "auto"}}
    
        }},
        {name: "Transforms",
        pNames: {
            "trf": {des: "Transform", names: "transform", default: "none", exts: {"n": "none"},
            fn:(v)=>{
                let vv = v.match(/(?<p>r|tx|ty|t|sx|sy|skx|sky|s)(?<v>.+)$/);
                if(vv) {
                    let {p, v} = vv.groups;
                    if(p == "r") {
                        return `rotate(${v})`;
                    }
                    if(p == "tx") {
                        return `translateX(${v})`;
                    }
                    if(p == "ty") {
                        return `translateY(${v})`;
                    }
                    if(p == "t") {
                        return `translate(${v})`;
                    }
                    if(p == "s") {
                        return `scale(${v})`;
                    }
                    if(p == "sx") {
                        return `scaleX(${v})`;
                    }
                    if(p == "sy") {
                        return `scaleY(${v})`;
                    }
                    if(p == "skx") {
                        return `skewX(${v})`;
                    }
                    if(p == "sky") {
                        return `skewY(${v})`;
                    }
                   
                  
                }
                return "";
            }
        },
            "trfo": {des: "Transform Origin", names: "transform-origin", default: "50% 50%", exts: {"c": "center", "t": "top", "b": "bottom", "l": "left", "r": "right","tr":"top right", "br":"bottom right", "bl":"bottom left", "tl":"top left"}},
    
        }},
        {name: "Interactivity",
        pNames: {
            "acc": {des: "Accent Color", names: "accent-color", default: "auto", exts: {"a": "auto", "i":"inherit","c":"currentColor", "t":"transparent"}},
            "ap": {des: "Appearance", names: "appearance", default: "auto", exts: {"a": "auto", "n": "none"}},
            "cur": {des: "Cursor", names: "cursor", default: "auto", exts: {"a": "auto", "d": "default", "n": "none", "p": "pointer", "t": "text","w":"wait","m":"move","h":"help","c":"crosshair","alias":"alias","cm":"context-menu","pr":"progress","all":"all-scroll","col":"col-resize","row":"row-resize","not":"not-allowed","vt":"vertical-text","ht":"horizontal-text","nw":"nw-resize","ne":"ne-resize","se":"se-resize","sw":"sw-resize","nesw":"nesw-resize","nwse":"nwse-resize","zi":"zoom-in","zo":"zoom-out"}},
            "cc": {des: "Caret Color", names: "caret-color", default: "auto", exts: {"a": "auto", "i":"inherit","c":"currentColor", "t":"transparent"}},
            "pe": {des: "Pointer Events", names: "pointer-events", default: "auto", exts: {"a": "auto", "n": "none"}},
            "rsz": {des: "Resize", names: "resize", default: "none", exts: {"n": "none", "b": "both", "h": "horizontal", "v": "vertical"}},
            "sb": {des: "Scroll Behavior", names: "scroll-behavior", default: "auto", exts: {"a": "auto", "s": "smooth"}},
            "sm": {des: "Scroll Margin", names: "scroll-margin", default: "0", exts: {"a": "auto"}},
            "sml": {des: "Scroll Margin Left", names: "scroll-margin-left", default: "0", exts: {"a": "auto"}},
            "smr": {des: "Scroll Margin Right", names: "scroll-margin-right", default: "0", exts: {"a": "auto"}},
            "smt": {des: "Scroll Margin Top", names: "scroll-margin-top", default: "0", exts: {"a": "auto"}},
            "smb": {des: "Scroll Margin Bottom", names: "scroll-margin-bottom", default: "0", exts: {"a": "auto"}},
            "sp": {des: "Scroll Padding", names: "scroll-padding", default: "auto", exts: {"a": "auto"}},
            "spl": {des: "Scroll Padding Left", names: "scroll-padding-left", default: "auto", exts: {"a": "auto"}},
            "spr": {des: "Scroll Padding Right", names: "scroll-padding-right", default: "auto", exts: {"a": "auto"}},
            "spt": {des: "Scroll Padding Top", names: "scroll-padding-top", default: "auto", exts: {"a": "auto"}},
            "spb": {des: "Scroll Padding Bottom", names: "scroll-padding-bottom", default: "auto", exts: {"a": "auto"}},
            "spis": {des: "Scroll Padding Inline Start", names: "scroll-padding-inline-start", default: "auto", exts: {"a": "auto"}},
            "spie": {des: "Scroll Padding Inline End", names: "scroll-padding-inline-end", default: "auto", exts: {"a": "auto"}},
            "ssa": {des: "Scroll Snap Align", names: "scroll-snap-align", default: "none", exts: {"n": "none", "s": "start", "e": "end", "c": "center"}},
            "sss": {des: "Scroll Snap Stop", names: "scroll-snap-stop", default: "normal", exts: {"n": "normal", "a": "always"}},
            "sst": {des: "Scroll Snap Type", names: "scroll-snap-type", default: "none", exts: {"n": "none", "m": "mandatory", "p": "proximity"}},
            "toa": {des: "Touch Action", names: "touch-action", default: "auto", exts: {"a": "auto", "n": "none", "p": "pan-x", "py": "pan-y", "pm": "pan-x pan-y", "pi": "pinch-zoom"}},
            "us": {des: "User Select", names: "user-select", default: "auto", exts: {"a": "auto", "n": "none", "t": "text", "all": "all", "c": "contain"}},
            "wc": {des: "Will Change", names: "will-change", default: "auto", exts: {"a": "auto", "sp": "scroll-position", "c": "contents", "t": "transform"}}
    
        }},
        {name: "SVG",
        pNames: {
            "fill": {des: "Fill", names: "fill", default: "none", exts: {"n": "none", "i":"inherit","c":"currentColor", "t":"transparent"}},
            "str": {des: "Stroke", names: "stroke", default: "none", exts: {"n": "none","i":"inherit","c":"currentColor", "t":"transparent"}},
            "strw": {des: "Stroke Width", names: "stroke-width", default: "1", exts: {"0":"0"}}
    
        }}
    
    ];
    
    class CssObj {
         CSS_REGEX1=/^(?<p>[a-z]+)(?<v>(([A-Z0-9\{])|--).*)$/;
        constructor(obj){
            this.name = obj.name;
            this.pNames= obj.pNames || {};
           
        }
        checkMatch(value='') {
            value = value || '';
            let vv = value.match(this.CSS_REGEX1);
            if(vv) {
                let {p}= vv.groups;
                return Object.hasOwn(this.pNames, p);
            }
            return false;
            
        }
        getClass(value='') {
            value = value || '';
            console.log(1, value);
            let vv = value.match(this.CSS_REGEX1);
            if(!vv) {
                return "";
            }
            let {p:pn, v:vCss} = vv.groups;
          
           
           let c = this.pNames[pn];
            if(!c) {
                return [];
            }
           let names =[];
           let vIp = "";
           if (vCss) {
                if (vCss.endsWith("!")) {
                    vCss = vCss.substr(0, vCss.length -1);
                    vIp = "!important";
                }
           }
           if(pn.length == value.length && c.cssText) { 
            return [c.cssText];
            }

           if(c.names && typeof c.names  =="string") {
            names =[c.names]
            }

            if(c.names && Array.isArray(c.names)) {
                names = c.names;
            }
        
           if(pn.length == value.length && c.default) {
            let vProperty = names.map(m => `${m}:${c.default}${vIp}`);
            return vProperty;
            }
    
            if(vCss) {
                
                if(names.length == 0 && typeof c.fn == 'function') {
                    let pv1 = vCss.toLowerCase();
                    let d= c.fn(pv1);
                    if(d) {
                        return [d];
                    }
                }
                let regex1 = /^\{(?<v>.+)\}$/;
                let regex2 = /^(?<v>--[a-z0-9-]+)$/;
                
                let pValueRegex = vCss.match(regex1);
                if (pValueRegex) {
                    let {v: pValue} =  pValueRegex.groups;
                    pValue = pValue.toLowerCase();
                    pValue = pValue.replace(/_/g, (t) => " ");
                    let vProperty =  names.map(m => `${m}:${pValue}${vIp}`).filter(f => CSS.supports(f));
                    if(vProperty.length == names.length) {
                        return vProperty;
                    }
                    return vProperty;
                }
                pValueRegex = vCss.match(regex2);
                if (pValueRegex) {
                    let {v: pValue} =  pValueRegex.groups;
                    let vProperty = names.map(m => `${m}:var(${pValue})${vIp}`);
                    return vProperty;
                }
                
                let pv1 = vCss.toLowerCase();
               
                let v1 = c.exts && Object.keys(c.exts).length > 0? c.exts[pv1]: '';
                if(v1) {
                    
                    let vProperty = names.map(m => `${m}:${v1}${vIp}`);
                    return vProperty;
                } else {
                    let vProperty = names.map(m => `${m}:${pv1}${vIp}`).filter(f => CSS.supports(f));
                    if(vProperty.length == names.length) {
                        return vProperty;
                    }
                }
    
                if (typeof c.fn =='function') {
                   
                    let d= c.fn(pv1);
                    if(d) {
                        let vProperty = names.map(m =>`${m}:${d}${vIp}`).filter(f => CSS.supports(f));
                        if(vProperty.length == names.length) {
                            return vProperty;
                        }
                    }
                }
    
                
            }
    
           
          
           return [];
           
    
        }
    
    }
    
    
    class ClassDocument{
        /* CssObj */
        lstObj;
        lsStyleCss=[];
        cssStyleSheets = {
            "default": [new CSSStyleSheet() ,new CSSStyleSheet() ],
            "xs": [
                new CSSStyleSheet({ media: "screen and (max-width: 575px)" }),
                new CSSStyleSheet({ media: "screen and (max-width: 575px)" })],
            "sm": [
                new CSSStyleSheet({ media: "screen and (min-width: 576px)" }),
                new CSSStyleSheet({ media: "screen and (min-width: 576px)" })
            ],
            "md": [
                new CSSStyleSheet({ media: "screen and (min-width: 768px)" }),
                new CSSStyleSheet({ media: "screen and (min-width: 768px)" })],
            "lg": [
                new CSSStyleSheet({ media: "screen and (min-width: 992px)" }),
                new CSSStyleSheet({ media: "screen and (min-width: 992px)" })
                ],
            "xl": [
                new CSSStyleSheet({ media: "screen and (min-width: 1200px)" }),
                new CSSStyleSheet({ media: "screen and (min-width: 1200px)" })
                ],
            "2xl": [
                new CSSStyleSheet({ media: "screen and (min-width: 1400px)" }),
                new CSSStyleSheet({ media: "screen and (min-width: 1400px)" })]
        }
        cssStyleSheetDefault;
       
        constructor(objs){
            this.cssStyleSheetDefault= new CSSStyleSheet();
            this.lstObj = [];
            (objs || OBJ_CSS).forEach(f => {
                let ff = new CssObj(f);
                this.lstObj.push(ff);
            });
            if(typeof DFCSS =='object' && Array.isArray(DFCSS)) {
                this.cssStyleSheetDefault.replace(DFCSS.join("\n")).then(t => {});
            }
           
        }
        
     
        getClass(v="") {
           
           let vClass = this.lstObj.find(f => f.checkMatch(v));
           if( vClass) {
    
           return  vClass.getClass(v).join(";");
           }
           return "";
        }
        getAllClassFromString(str) {
            var pattern = /class="([^"]+)"/g;
            var classes = [];
            [...str.matchAll(pattern)].
                forEach(
                    match => classes = classes.concat( (match[1].split(" ")) )
                );
    
            return [...new Set(classes)];
        }
        getAllClassFromDom(dom) {
            let t =[].concat(...[...dom.querySelectorAll('[class]')].map(elt => [...elt.classList]));
            return [...new Set(t)];
        }
        createCss(cssStr) {
             // md:bg-#2345:hover_li
             let vv = cssStr || "";
    
             let vmatch = vv.match(/((?<m>(xs|sm|md|lg|xl|2xl))\:)?(?<v>.+$)/);
             if(vmatch) {
                  let {m: vMedia, v:vValue=""} = vmatch.groups;
                  let ext = "";
                  var fnSplit = (charStr, has=true) => {
                    let indexV = vValue.indexOf(charStr);
                    if(has) {
                        indexV +=1;
                    }
                    ext = vValue.substr(indexV);
                    vValue = vValue.substr(0,vValue.length - ext.length);
                  }
                  if(vValue.indexOf("}") > -1) {
                    fnSplit("}");
                  } else if(vValue.indexOf(":") > -1) {
                    fnSplit(":",false);
                  } else if(vValue.indexOf("_") > -1) {
                    fnSplit("_",false);
                  }else if(vValue.indexOf(">") > -1) {
                    fnSplit(">", false);
                  }else if(vValue.indexOf("+") > -1) {
                    fnSplit("+", false);
                  }else if(vValue.indexOf("~") > -1) {
                    fnSplit("~", false);
                  }else if(vValue.indexOf("*") > -1) {
                    fnSplit("*", false);
                  }
    
                  let v = this.getClass(vValue);
                  if(!v) {
                    return null;
                  }
                  let vName = CSS.escape(cssStr);
                  let vSubName =ext? ext.replace(/([\^\|\~\*\$]\=|_|\+|\~|\*|\>)/g, (t)=> {
                    if(t == '_') {
                        return " ";
                    }
                    if(["~", "+", "*", ">"].includes(t)) {
                        return ` ${t} `;
                    }
                    return t;
                    
                }): "";
                return {type: vMedia? vMedia: 'default', ext: vSubName? true: false, css: `.${vName}${vSubName} {${v}}`, selectorText: `.${vName}${vSubName}` };
             }
             return null;
        }
        buildCSSFromArray(css=[]){
            let lscss = css.map(m =>  {
                let v = this.createCss(m);
               return v;
              }).filter(f =>f);
              return lscss;
        }
        buildCssFromDom(dom) {
            let css = this.getAllClassFromDom(dom);
           return this.buildCSSFromArray(css);
        }
        buildCssFromStr(str) {
            let css = this.getAllClassFromString(str);
            return this.buildCSSFromArray(css);
        }
        createStyleCss(){
            let lsdata = this.buildCssFromDom(document) || [];
           
            Object.keys(this.cssStyleSheets).forEach(f => {
                let vLsCss1 =lsdata.filter(f1 => f1.type == f && f1.ext == false);
                let vLsCss2 =lsdata.filter(f1 => f1.type == f && f1.ext == true); 
           let vcss1 =  vLsCss1.map(m => m.css).join("\n");
            let vcss2 =vLsCss2.map(m => m.css).join("\n");
            if(vcss1) {
               /*
                let rules = [...this.cssStyleSheets[f][0]];
               let vcssAdd = vLsCss1.filter(f => rules.indexOf(i => i.selectorText != f.selectorText));
               vcssAdd.forEach(f => {
    
                this.cssStyleSheets[f][0].insertRule(f.css);
               }) */
                
             this.cssStyleSheets[f][0].replace(vcss1).then(t => {}); 
            }
           if(vcss2) {
            /*  
            let rules = [...this.cssStyleSheets[f][1]];
               let vcssAdd = vLsCss1.filter(f => rules.indexOf(i => i.selectorText != f.selectorText));
               vcssAdd.forEach(f => {
                this.cssStyleSheets[f][1].insertRule(f.css);
               })
               */
            this.cssStyleSheets[f][1].replace(vcss2).then(t => {}); 
           }
            
    
           });
          
        }
        eventBuildCssDom(){
            let timer;
            return (timeout) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    this.createStyleCss();
                }, timeout || 0);
            };
        }
        loadEventDom(){
            var fnload = () => {
                document.adoptedStyleSheets = [ this.cssStyleSheetDefault, ...Object.values(this.cssStyleSheets)].flat();
                let fnInit = this.eventBuildCssDom();
                fnInit(0);
                new MutationObserver(async (d) => {
                    fnInit(300);
                    //document.documentElement
                }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"], childList: true, subtree: true });
                
            }
            if (document.readyState =='complete') {
                fnload();
            } else {
                window.addEventListener("DOMContentLoaded", () => { fnload();});       
            }
           
        }
        setVarCss(varName, varValue) {
            document.documentElement.style.setProperty(varName, varValue);
        }
        
       
    }
    
    
    window.__code = new ClassDocument();
    window.__code.loadEventDom();