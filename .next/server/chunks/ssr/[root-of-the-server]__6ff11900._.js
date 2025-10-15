module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Himalyan-Roots/src/Redux-Toolkit/slices/rooms/roomSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getRoomBySlug",
    ()=>getRoomBySlug,
    "getRooms",
    ()=>getRooms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
;
// Initial State
const initialState = {
    rooms: [],
    selectedRoom: null,
    loading: false,
    error: null
};
const getRooms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("roomSlice/roomData", async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000")}/rooms`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
const getRoomBySlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("roomSlice/roomSlugData", async (slug, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000")}/rooms?slug=${slug}`);
        return res.data[0]; // assuming API returns an array
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
// Create slice
const roomSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/Himalyan-Roots/src/Redux-Toolkit/slices/gallary/gallarySlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getGallary",
    ()=>getGallary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
;
// Initial State
const initialState = {
    gallary: [],
    loading: false,
    error: null
};
const getGallary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("gallarySlice/fetchGallary", async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000")}/gallary`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
// Create slice
const gallarySlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/Himalyan-Roots/src/Redux-Toolkit/slices/experiences/experiencesSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getExperiences",
    ()=>getExperiences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
;
// Initial State
const initialState = {
    experience: [],
    loading: false,
    error: null
};
const getExperiences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("experienceSlice/fetchExperience", async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${("TURBOPACK compile-time value", "http://localhost:5000")}/experiences`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
//Create Slice
const experienceSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/Himalyan-Roots/src/Redux-Toolkit/store/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$rooms$2f$roomSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/src/Redux-Toolkit/slices/rooms/roomSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$gallary$2f$gallarySlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/src/Redux-Toolkit/slices/gallary/gallarySlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$experiences$2f$experiencesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/src/Redux-Toolkit/slices/experiences/experiencesSlice.ts [app-ssr] (ecmascript)");
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        rooms: __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$rooms$2f$roomSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        gallary: __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$gallary$2f$gallarySlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        experiences: __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$slices$2f$experiences$2f$experiencesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
}),
"[project]/Himalyan-Roots/src/Redux-Toolkit/providers/ReduxProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Himalyan-Roots/src/Redux-Toolkit/store/store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$Himalyan$2d$Roots$2f$src$2f$Redux$2d$Toolkit$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/Himalyan-Roots/src/Redux-Toolkit/providers/ReduxProvider.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6ff11900._.js.map