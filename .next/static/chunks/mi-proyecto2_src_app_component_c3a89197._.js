(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mi-proyecto2/src/app/component/PokemonItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PokemonItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mi-proyecto2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mi-proyecto2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PokemonItem(param) {
    let { name, hp, attack, defense, sprite } = param;
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setCount(count + 1),
        className: "border rounded p-10 m-6 bg-gray-400 hover:bg-gray-600 flex items-center w-80 space-y-1",
        children: [
            sprite && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: sprite,
                alt: name,
                className: "w-20 h-20 mr-4"
            }, void 0, false, {
                fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                lineNumber: 21,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-between flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-blue-200",
                                children: "Nombre:"
                            }, void 0, false, {
                                fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            " ",
                            name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                        lineNumber: 23,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-yellow-200",
                                children: " HP:"
                            }, void 0, false, {
                                fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            " ",
                            hp
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                        lineNumber: 24,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-red-200",
                                children: " Attack:"
                            }, void 0, false, {
                                fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            " ",
                            attack
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                        lineNumber: 25,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-green-200",
                                children: " Defense:"
                            }, void 0, false, {
                                fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            " ",
                            defense
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                        lineNumber: 26,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-white",
                                children: "Veces usado:"
                            }, void 0, false, {
                                fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            " ",
                            count
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                        lineNumber: 27,
                        columnNumber: 8
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mi-proyecto2/src/app/component/PokemonItem.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(PokemonItem, "oDgYfYHkD9Wkv4hrAPCkI/ev3YU=");
_c = PokemonItem;
var _c;
__turbopack_context__.k.register(_c, "PokemonItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mi-proyecto2/src/app/component/ListaPokemon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ListaPokemon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mi-proyecto2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mi-proyecto2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mi-proyecto2/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$src$2f$app$2f$component$2f$PokemonItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mi-proyecto2/src/app/component/PokemonItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ListaPokemon() {
    _s();
    const [pokemons, setPokemons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ListaPokemon.useEffect": ()=>{
            const fetchPokemons = {
                "ListaPokemon.useEffect.fetchPokemons": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://pokeapi.co/api/v2/pokemon?limit=20");
                        const basicPokemons = res.data.results;
                        const requests = basicPokemons.map({
                            "ListaPokemon.useEffect.fetchPokemons.requests": (p)=>__TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(p.url)
                        }["ListaPokemon.useEffect.fetchPokemons.requests"]);
                        const responses = await Promise.all(requests);
                        const data = responses.map({
                            "ListaPokemon.useEffect.fetchPokemons.data": (r)=>{
                                var _p_stats_find, _p_stats_find1, _p_stats_find2;
                                const p = r.data;
                                const hp = ((_p_stats_find = p.stats.find({
                                    "ListaPokemon.useEffect.fetchPokemons.data": (s)=>s.stat.name === "hp"
                                }["ListaPokemon.useEffect.fetchPokemons.data"])) === null || _p_stats_find === void 0 ? void 0 : _p_stats_find.base_stat) || 0;
                                const attack = ((_p_stats_find1 = p.stats.find({
                                    "ListaPokemon.useEffect.fetchPokemons.data": (s)=>s.stat.name === "attack"
                                }["ListaPokemon.useEffect.fetchPokemons.data"])) === null || _p_stats_find1 === void 0 ? void 0 : _p_stats_find1.base_stat) || 0;
                                const defense = ((_p_stats_find2 = p.stats.find({
                                    "ListaPokemon.useEffect.fetchPokemons.data": (s)=>s.stat.name === "defense"
                                }["ListaPokemon.useEffect.fetchPokemons.data"])) === null || _p_stats_find2 === void 0 ? void 0 : _p_stats_find2.base_stat) || 0;
                                const sprite = p.sprites.front_default;
                                return {
                                    name: p.name,
                                    hp,
                                    attack,
                                    defense,
                                    sprite
                                };
                            }
                        }["ListaPokemon.useEffect.fetchPokemons.data"]);
                        setPokemons(data);
                    } catch (error) {
                        console.error("Error fetching pokemones:", error);
                    }
                }
            }["ListaPokemon.useEffect.fetchPokemons"];
            fetchPokemons();
        }
    }["ListaPokemon.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: "Listado de Pokémons"
            }, void 0, false, {
                fileName: "[project]/mi-proyecto2/src/app/component/ListaPokemon.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap",
                children: pokemons.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mi$2d$proyecto2$2f$src$2f$app$2f$component$2f$PokemonItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: p.name,
                        hp: p.hp,
                        attack: p.attack,
                        defense: p.defense,
                        sprite: p.sprite
                    }, p.name, false, {
                        fileName: "[project]/mi-proyecto2/src/app/component/ListaPokemon.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/mi-proyecto2/src/app/component/ListaPokemon.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mi-proyecto2/src/app/component/ListaPokemon.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(ListaPokemon, "HTV26hiVYObM9ZdttYFfm0Hoy8g=");
_c = ListaPokemon;
var _c;
__turbopack_context__.k.register(_c, "ListaPokemon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mi-proyecto2_src_app_component_c3a89197._.js.map