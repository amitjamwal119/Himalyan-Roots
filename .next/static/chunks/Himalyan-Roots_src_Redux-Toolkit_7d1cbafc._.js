(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Himalyan-Roots/src/Redux-Toolkit/slices/rooms/roomSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getRoomBySlug",
    ()=>getRoomBySlug,
    "getRooms",
    ()=>getRooms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
;
// Initial State
const initialState = {
    rooms: [],
    selectedRoom: null,
    loading: false,
    error: null
};
const getRooms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("roomSlice/roomData", async (_, param)=>{
    let { rejectWithValue } = param;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(("TURBOPACK compile-time value", "http://localhost:5000"), "/rooms"));
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
const getRoomBySlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("roomSlice/roomSlugData", async (slug, param)=>{
    let { rejectWithValue } = param;
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(("TURBOPACK compile-time value", "http://localhost:5000"), "/rooms?slug=").concat(slug));
        return res.data[0]; // assuming API returns an array
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
// Create slice
const roomSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder//Cases for Whole Rooms
        .addCase(getRooms.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getRooms.fulfilled, (state, action)=>{
            state.loading = false;
            state.rooms = action.payload;
        }).addCase(getRooms.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Cases for perticular room
        .addCase(getRoomBySlug.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getRoomBySlug.fulfilled, (state, action)=>{
            state.loading = false;
            state.selectedRoom = action.payload;
        }).addCase(getRoomBySlug.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = roomSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Himalyan-Roots/src/Redux-Toolkit/slices/gallary/gallarySlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getGallary",
    ()=>getGallary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
;
// Initial State
const initialState = {
    gallary: [],
    loading: false,
    error: null
};
const getGallary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("gallarySlice/fetchGallary", async (_, param)=>{
    let { rejectWithValue } = param;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(("TURBOPACK compile-time value", "http://localhost:5000"), "/gallary"));
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
// Create slice
const gallarySlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "gallary",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getGallary.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getGallary.fulfilled, (state, action)=>{
            state.loading = false;
            state.gallary = action.payload;
        }).addCase(getGallary.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = gallarySlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Himalyan-Roots/src/Redux-Toolkit/slices/experiences/experiencesSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getExperiences",
    ()=>getExperiences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
;
// Initial State
const initialState = {
    experience: [],
    loading: false,
    error: null
};
const getExperiences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("experienceSlice/fetchExperience", async (_, param)=>{
    let { rejectWithValue } = param;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(("TURBOPACK compile-time value", "http://localhost:5000"), "/experiences"));
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
//Create Slice
const experienceSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "experience",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getExperiences.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getExperiences.fulfilled, (state, action)=>{
            state.loading = true;
            state.experience = action.payload;
        }).addCase(getExperiences.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = experienceSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Himalyan-Roots/src/Redux-Toolkit/store/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$rooms$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/src/Redux-Toolkit/slices/rooms/roomSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$gallary$2f$gallarySlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/src/Redux-Toolkit/slices/gallary/gallarySlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$experiences$2f$experiencesSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/src/Redux-Toolkit/slices/experiences/experiencesSlice.ts [app-client] (ecmascript)");
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        rooms: __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$rooms$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        gallary: __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$gallary$2f$gallarySlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        experiences: __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$experiences$2f$experiencesSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Himalyan-Roots/src/Redux-Toolkit/providers/ReduxProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/src/Redux-Toolkit/store/store.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ReduxProvider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/Himalyan-Roots/src/Redux-Toolkit/providers/ReduxProvider.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Himalyan-Roots_src_Redux-Toolkit_7d1cbafc._.js.map