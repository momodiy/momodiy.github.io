(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c7dee6c"],{"02ab":function(e,t,a){},b900:function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c={class:"role-container"},l={class:"wrapper"},r={class:"content-box"},o=["onClick"],i={class:"role-tree-box"},d={key:0},s={style:{color:"#f50"}},u={key:1};function h(e,t,a,h,b,p){const O=Object(n["resolveComponent"])("a-table"),j=Object(n["resolveComponent"])("a-input-search"),m=Object(n["resolveComponent"])("a-tree"),f=Object(n["resolveComponent"])("a-modal");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(O,{bordered:"",dataSource:h.roleData,columns:h.columns,size:"small",pagination:h.pagination,loading:h.loading},{operation:Object(n["withCtx"])(({record:e})=>[Object(n["createElementVNode"])("a",{onClick:t=>h.handleAllotAuth(e)},"分配权限",8,o)]),_:1},8,["dataSource","columns","pagination","loading"])])]),Object(n["createVNode"])(f,{title:h.modalTitle,visible:h.visible,"onUpdate:visible":t[3]||(t[3]=e=>h.visible=e),"confirm-loading":h.confirmLoading,cancelText:"取消",okText:"保存",maskClosable:!1,onOk:h.handleOk,onCancel:h.handleCancel},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(j,{value:h.searchTreeValue,"onUpdate:value":t[0]||(t[0]=e=>h.searchTreeValue=e),style:{"margin-bottom":"8px"},placeholder:"搜索权限"},null,8,["value"]),Object(n["createVNode"])(m,{"tree-data":h.treeData,autoExpandParent:h.autoExpandParent,expandedKeys:h.expandedKeys,"onUpdate:expandedKeys":t[1]||(t[1]=e=>h.expandedKeys=e),checkedKeys:h.checkedKeys,"onUpdate:checkedKeys":t[2]||(t[2]=e=>h.checkedKeys=e),onExpand:h.handleTreeExpand,onCheck:h.handleTreeCheck,checkable:"",selectable:!1},{title:Object(n["withCtx"])(({title:e})=>[e.indexOf(h.searchTreeValue)>-1?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",d,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.substr(0,e.indexOf(h.searchTreeValue)))+" ",1),Object(n["createElementVNode"])("span",s,Object(n["toDisplayString"])(h.searchTreeValue),1),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.substr(e.indexOf(h.searchTreeValue)+h.searchTreeValue.length)),1)])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",u,Object(n["toDisplayString"])(e),1))]),_:1},8,["tree-data","autoExpandParent","expandedKeys","checkedKeys","onExpand","onCheck"])])]),_:1},8,["title","visible","confirm-loading","onOk","onCancel"])])}a("14d9");var b=a("cc5e"),p={name:"RolePermissionList",setup(){const e=Object(n["ref"])(!1),t=Object(n["ref"])(!1),a=Object(n["ref"])(!1),c=Object(n["ref"])(""),l=Object(n["ref"])(""),r=Object(n["ref"])(!0),o=Object(n["ref"])([]),i=Object(n["ref"])([]),d=Object(n["ref"])([]),s=Object(n["ref"])([]),u=Object(n["reactive"])({total:0,size:"middle",defaultPageSize:20,current:1,pageSize:20,showSizeChanger:!0,showQuickJumper:!0,pageSizeOptions:["10","20","30"],showTotal:e=>`共有 ${e} 条数据`,onShowSizeChange:(e,t)=>u.pageSize=t,onChange:(e,t)=>u.current=e}),h=Object(n["ref"])([{title:"序号",dataIndex:"serial",width:60,align:"center",customRender:({t:e,r:t,index:a})=>""+((u.current-1)*u.pageSize+parseInt(a)+1)},{title:"角色名",dataIndex:"name",width:120},{title:"角色key",dataIndex:"key",width:120},{title:"描述",dataIndex:"description"},{title:"操作",dataIndex:"operation",slots:{customRender:"operation"}}]),p=()=>{e.value=!0,Object(b["b"])().then(t=>{200===t.code&&setTimeout(()=>{s.value=t.data,u.total=t.data.length,e.value=!1},2e3)})},O=e=>{o.value=e,r.value=!1},j=(e,t)=>{e.value=e},m=e=>{t.value=!0,c.value="当前分配角色--"+e.name,d.value=v(e.routes),i.value=f(e.routes,[])},f=(e,t)=>{for(let a=0;a<e.length;a++){const n=e[a],{path:c}=n;t.push(c),n.children&&f(n.children,t)}return t},v=e=>{if(!Array.isArray(e)&&e.length<1)return;const t=[];return e.forEach(e=>{if(e.children&&e.children.length>0){const a=v(e.children);t.push({key:e.path,title:e.meta.title,children:a})}else t.push({key:e.path,title:e.meta.title})}),t},k=()=>{x()},g=()=>{x()},x=()=>{o.value=[],l.value="",t.value=!1,r.value=!1},y=(e,t)=>{let a;for(let n=0;n<t.length;n++){const c=t[n];c.children&&(c.children.some(t=>t.key===e)?a=c.key:y(e,c.children)&&(a=y(e,c.children)))}return a},C=(e,t)=>{for(let a=0;a<e.length;a++){const n=e[a],{key:c,title:l}=n;t.push({key:c,title:l}),n.children&&C(n.children,t)}return t};return Object(n["watch"])(l,e=>{if(!e)return void(o.value=[]);const t=C(d.value,[]),a=t.map(t=>t.title.indexOf(e)>-1?y(t.key,d.value):null).filter((e,t,a)=>e&&a.indexOf(e)===t);o.value=a,l.value=e,r.value=!0}),Object(n["onMounted"])(()=>{p()}),{roleData:s,columns:h,pagination:u,loading:e,visible:t,confirmLoading:a,modalTitle:c,treeData:d,searchTreeValue:l,expandedKeys:o,checkedKeys:i,autoExpandParent:r,handleTreeExpand:O,handleTreeCheck:j,handleOk:k,handleCancel:g,getRoleData:p,handleAllotAuth:m}}},O=(a("f4e7"),a("d959")),j=a.n(O);const m=j()(p,[["render",h],["__scopeId","data-v-465417c2"]]);t["default"]=m},cc5e:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var n=a("b775");function c(){return Object(n["a"])({url:"/jc-admin/roles",method:"get"})}function l(e){return Object(n["a"])({url:"/jc-admin/role/"+e,method:"delete"})}},f4e7:function(e,t,a){"use strict";a("02ab")}}]);