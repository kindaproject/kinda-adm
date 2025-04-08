import{z as e,K as d,I as m,r as c,a2 as o,a6 as x,a3 as h,a4 as l}from"./index-76c9c8ca.js";const p=({className:t})=>e.jsxs("div",{className:`card ${t}`,children:[e.jsxs("div",{className:"card-header align-items-center border-0 mt-4",children:[e.jsxs("h3",{className:"card-title align-items-start flex-column",children:[e.jsx("span",{className:"fw-bold mb-2 text-gray-900",children:"Activities"}),e.jsx("span",{className:"text-muted fw-semibold fs-7",children:"890,344 Sales"})]}),e.jsxs("div",{className:"card-toolbar",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end",children:e.jsx(d,{iconName:"category",className:"fs-2"})}),e.jsx(m,{})]})]}),e.jsx("div",{className:"card-body pt-5",children:e.jsxs("div",{className:"timeline-label",children:[e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"08:42"}),e.jsx("div",{className:"timeline-badge",children:e.jsx("i",{className:"fa fa-genderless text-warning fs-1"})}),e.jsx("div",{className:"fw-mormal timeline-content text-muted ps-3",children:"Outlines keep you honest. And keep structure"})]}),e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"10:00"}),e.jsx("div",{className:"timeline-badge",children:e.jsx("i",{className:"fa fa-genderless text-success fs-1"})}),e.jsx("div",{className:"timeline-content d-flex",children:e.jsx("span",{className:"fw-bold text-gray-800 ps-3",children:"AEOL meeting"})})]}),e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"14:37"}),e.jsx("div",{className:"timeline-badge",children:e.jsx("i",{className:"fa fa-genderless text-danger fs-1"})}),e.jsxs("div",{className:"timeline-content fw-bold text-gray-800 ps-3",children:["Make deposit",e.jsx("a",{href:"#",className:"text-primary",children:"USD 700"}),". to ESL"]})]}),e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"16:50"}),e.jsx("div",{className:"timeline-badge",children:e.jsx("i",{className:"fa fa-genderless text-primary fs-1"})}),e.jsx("div",{className:"timeline-content fw-mormal text-muted ps-3",children:"Indulging in poorly driving and keep structure keep great"})]}),e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"21:03"}),e.jsx("div",{className:"timeline-badge",children:e.jsx("i",{className:"fa fa-genderless text-danger fs-1"})}),e.jsxs("div",{className:"timeline-content fw-semibold text-gray-800 ps-3",children:["New order placed",e.jsx("a",{href:"#",className:"text-primary",children:"#XF-2356"}),"."]})]}),e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"16:50"}),e.jsx("div",{className:"timeline-badge",children:e.jsx("i",{className:"fa fa-genderless text-primary fs-1"})}),e.jsx("div",{className:"timeline-content fw-mormal text-muted ps-3",children:"Indulging in poorly driving and keep structure keep great"})]}),e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"21:03"}),e.jsx("div",{className:"timeline-badge",children:e.jsx("i",{className:"fa fa-genderless text-danger fs-1"})}),e.jsxs("div",{className:"timeline-content fw-semibold text-gray-800 ps-3",children:["New order placed",e.jsx("a",{href:"#",className:"text-primary",children:"#XF-2356"}),"."]})]}),e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"10:30"}),e.jsx("div",{className:"timeline-badge",children:e.jsx("i",{className:"fa fa-genderless text-success fs-1"})}),e.jsx("div",{className:"timeline-content fw-mormal text-muted ps-3",children:"Finance KPI Mobile app launch preparion meeting"})]})]})})]}),g=({className:t})=>{const s=c.useRef(null),{mode:r}=o();c.useEffect(()=>{const a=n();return()=>{a&&a.destroy()}},[s,r]);const n=()=>{if(!s.current)return;const a=parseInt(x(s.current,"height")),i=new h(s.current,f(a));return i&&i.render(),i};return e.jsxs("div",{className:`card ${t}`,children:[e.jsxs("div",{className:"card-header border-0 pt-5",children:[e.jsxs("h3",{className:"card-title align-items-start flex-column",children:[e.jsx("span",{className:"card-label fw-bold fs-3 mb-1",children:"Recent Statistics"}),e.jsx("span",{className:"text-muted fw-semibold fs-7",children:"More than 400 new members"})]}),e.jsxs("div",{className:"card-toolbar",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end",children:e.jsx(d,{iconName:"category",className:"fs-2"})}),e.jsx(m,{})]})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{ref:s,id:"kt_charts_widget_1_chart",style:{height:"350px"}})})]})};function f(t){const s=l("--bs-gray-500"),r=l("--bs-gray-200"),n=l("--bs-primary"),a=l("--bs-gray-300");return{series:[{name:"Net Profit",data:[44,55,57,56,61,58]},{name:"Revenue",data:[76,85,101,98,87,105]}],chart:{fontFamily:"inherit",type:"bar",height:t,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"30%",borderRadius:5}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:s,fontSize:"12px"}}},yaxis:{labels:{style:{colors:s,fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(i){return"$"+i+" thousands"}}},colors:[n,a],grid:{borderColor:r,strokeDashArray:4,yaxis:{lines:{show:!0}}}}}export{g as C,p as L};
