import { Fragment, jsx } from "../../mcp_sandbox_policy_exports.js";
import { init_jsx_runtime } from "./jsx-runtime.js";
var System, User, Assistant, Tool, Conversation, builtinComponents;
export { Assistant, Conversation, System, Tool, User, builtinComponents };
var __wakaru_init_components_initialized = false;
export function init_components() {
if (__wakaru_init_components_initialized) return;
__wakaru_init_components_initialized = true;
"use strict";
init_jsx_runtime();
System = (props)=>{
    return jsx("System", props);
};
User = (props)=>{
    return jsx("User", props);
};
Assistant = (props)=>{
    return jsx("Assistant", props);
};
Tool = (props)=>{
    return jsx("Tool", props);
};
Conversation = (props)=>{
    return jsx(Fragment, props);
};
builtinComponents = {
    System,
    User,
    Assistant,
    Tool,
    Conversation,
    Fragment
};

}
