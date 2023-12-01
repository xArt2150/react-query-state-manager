"use strict";var T=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var A=(e,r)=>{for(var t in r)T(e,t,{get:r[t],enumerable:!0})},G=(e,r,t,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of h(r))!w.call(e,a)&&a!==t&&T(e,a,{get:()=>r[a],enumerable:!(o=R(r,a))||o.enumerable});return e};var I=e=>G(T({},"__esModule",{value:!0}),e);var W={};A(W,{useMutationManager:()=>B,useStateManager:()=>_});module.exports=I(W);var U=require("react-query");var f=require("react"),y=(e,r)=>{e.removeQueries(r)},Q=e=>{e.removeQueries()},d=e=>{let r=(0,f.useCallback)(o=>y(e,o),[y]),t=(0,f.useCallback)(()=>Q(e),[Q]);return{remove:r,removeAll:t}};var D=require("react"),v=(e,r,t)=>e.setQueryData(r,t),S=e=>({set:(0,D.useCallback)((t,o)=>v(e,t,o),[v])});var x=require("react"),C=(e,r)=>e.getQueryData(r),K=e=>({get:(0,x.useCallback)(t=>C(e,t),[C])});var m=require("react"),c=require("react-query");var g=require("react"),l=(e,r)=>e.invalidateQueries(r),k=e=>({invalidate:(0,g.useCallback)(t=>l(e,t),[l])});var E=(e,r,t,o)=>{let a=t||(0,c.useQueryClient)(),{data:i,isFetching:s,isFetched:p,isError:n,isSuccess:u,status:H,error:b}=(0,c.useQuery)(e,r,o),F=(0,m.useCallback)(()=>{y(a,e)},[y,t]),O=(0,m.useCallback)(()=>l(a,e),[l,t]);return{data:i,isFetching:s,isFetched:p,isError:n,isSuccess:u,status:H,error:b,cleanUp:F,invalidate:O}},V=e=>({use:(0,m.useCallback)((t,o,a)=>E(t,o,e,a),[E,e])});var _=()=>{let e=(0,U.useQueryClient)(),{remove:r,removeAll:t}=d(e),{set:o}=S(e),{get:a}=K(e),{invalidate:i}=k(e),{use:s}=V(e);return{__client__:e,get:a,set:o,invalidate:i,remove:r,removeAll:t,use:s}};var M=require("react"),P=require("react-query"),B=(e,r)=>{let{mutateAsync:t,isError:o,isSuccess:a,isLoading:i,status:s}=(0,P.useMutation)(n=>e(n)),p=(0,M.useCallback)(async n=>{try{r?.onBefore&&await r.onBefore(n);let u=await t(n);return r?.onSuccess&&await r.onSuccess(n,u),u}catch(u){throw r?.onError&&r.onError(u),u}finally{r?.onFinally&&r.onFinally()}},[r]);return{mutateAsync:t,routine:p,isError:o,isSuccess:a,isLoading:i,status:s}};
