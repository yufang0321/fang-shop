"use strict";(self["webpackChunkfang_shop"]=self["webpackChunkfang_shop"]||[]).push([[495],{5059:function(e,t,l){l.d(t,{Z:function(){return y}});var a=l(3396),r=l(9242),d=l(7139);const s={"aria-label":"Page navigation example"},i={class:"pagination justify-content-center"},n={key:0,class:"page-item"},o=(0,a._)("span",{"aria-hidden":"true"},"«",-1),u=[o],p=["onClick"],c={key:1,class:"page-item"},h=(0,a._)("span",{"aria-hidden":"true"},"»",-1),_=[h];function g(e,t,l,o,h,g){return(0,a.wg)(),(0,a.iD)("nav",s,[(0,a._)("ul",i,[l.pages.has_pre?((0,a.wg)(),(0,a.iD)("li",n,[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,r.iM)((e=>g.updatePage(l.pages.current_page-1)),["prevent"]))},u)])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(e=>((0,a.wg)(),(0,a.iD)("li",{class:(0,d.C_)(["page-item",{active:e===l.pages.current_page}]),key:e},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,r.iM)((t=>g.updatePage(e)),["prevent"])},(0,d.zw)(e),9,p)],2)))),128)),l.pages.has_next?((0,a.wg)(),(0,a.iD)("li",c,[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,r.iM)((e=>g.updatePage(l.pages.current_page+1)),["prevent"]))},_)])):(0,a.kq)("",!0)])])}var m={props:["pages"],methods:{updatePage(e){this.$emit("emit-pages",e)}}},w=l(89);const b=(0,w.Z)(m,[["render",g]]);var y=b},3495:function(e,t,l){l.r(t),l.d(t,{default:function(){return re}});var a=l(3396),r=l(7139);const d={class:"table mt-4"},s=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{width:"120"},"購買時間"),(0,a._)("th",{width:"120"},"Email"),(0,a._)("th",{width:"200"},"購買款項"),(0,a._)("th",{width:"120"},"應付金額"),(0,a._)("th",{width:"100"},"是否付款"),(0,a._)("th",{width:"200"},"編輯")])],-1),i={class:"list-unstyled"},n={class:"text-right"},o={key:0,class:"text-success"},u={key:1,class:"text-muted"},p={class:"btn-group"},c=["onClick"],h=["onClick"];function _(e,t,l,_,g,m){const w=(0,a.up)("LoadingComponent"),b=(0,a.up)("PaginationView"),y=(0,a.up)("OrderModal"),O=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(w,{active:g.isLoading},null,8,["active"]),(0,a._)("table",d,[s,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.orders,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,(0,r.zw)(e.$filters.date(t.create_at)),1),(0,a._)("td",null,(0,r.zw)(t.user.email),1),(0,a._)("td",null,[(0,a._)("ul",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.products,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},(0,r.zw)(e.product.title)+" 數量："+(0,r.zw)(e.qty)+" "+(0,r.zw)(e.product.unit),1)))),128))])]),(0,a._)("td",n,(0,r.zw)(t.total),1),(0,a._)("td",null,[t.is_paid?((0,a.wg)(),(0,a.iD)("span",o,"已付款")):((0,a.wg)(),(0,a.iD)("span",u,"未付款"))]),(0,a._)("td",null,[(0,a._)("div",p,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>m.openModal(t)},"檢視",8,c),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>m.openDelModal(t)},"刪除",8,h)])])])))),128))])]),(0,a.Wm)(b,{pages:g.pagination,onEmitPages:m.getOrders},null,8,["pages","onEmitPages"]),(0,a.Wm)(y,{ref:"orderModal",order:g.tempOrder,onUpdateOrder:m.updateOrder},null,8,["order","onUpdateOrder"]),(0,a.Wm)(O,{ref:"delModal",view:"delOrder",item:g.delProduct,onDeleteOrder:m.deleteOrder},null,8,["item","onDeleteOrder"])],64)}const g={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},m={class:"modal-dialog modal-xl",role:"document"},w={class:"modal-content border-0"},b=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"訂單細節")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},O={class:"row"},f={class:"col-md-4"},k=(0,a._)("h3",null,"用戶資料",-1),v={class:"table"},D={key:0},M=(0,a._)("th",{style:{width:"100px"}},"姓名",-1),x=(0,a._)("th",null,"Email",-1),z=(0,a._)("th",null,"電話",-1),$=(0,a._)("th",null,"地址",-1),P={class:"col-md-8"},C=(0,a._)("h3",null,"訂單細節",-1),L={class:"table"},Z=(0,a._)("th",{style:{width:"100px"}},"訂單編號",-1),q=(0,a._)("th",null,"下單時間",-1),H=(0,a._)("th",null,"付款時間",-1),Y={key:0},j={key:1},E=(0,a._)("th",null,"付款狀態",-1),K={key:0,class:"text-success"},W={key:1,class:"text-muted"},N=(0,a._)("th",null,"總金額",-1),U=(0,a._)("h3",null,"選購商品",-1),V={class:"table"},S=(0,a._)("thead",null,[(0,a._)("tr")],-1),A={class:"text-end"},B={class:"modal-footer"},F=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function G(e,t,l,d,s,i){return(0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",m,[(0,a._)("div",w,[b,(0,a._)("div",y,[(0,a._)("div",O,[(0,a._)("div",f,[k,(0,a._)("table",v,[s.tempOrder.user?((0,a.wg)(),(0,a.iD)("tbody",D,[(0,a._)("tr",null,[M,(0,a._)("td",null,(0,r.zw)(s.tempOrder.user.name),1)]),(0,a._)("tr",null,[x,(0,a._)("td",null,(0,r.zw)(s.tempOrder.user.email),1)]),(0,a._)("tr",null,[z,(0,a._)("td",null,(0,r.zw)(s.tempOrder.user.tel),1)]),(0,a._)("tr",null,[$,(0,a._)("td",null,(0,r.zw)(s.tempOrder.user.address),1)])])):(0,a.kq)("",!0)])]),(0,a._)("div",P,[C,(0,a._)("table",L,[(0,a._)("tbody",null,[(0,a._)("tr",null,[Z,(0,a._)("td",null,(0,r.zw)(s.tempOrder.id),1)]),(0,a._)("tr",null,[q,(0,a._)("td",null,(0,r.zw)(e.$filters.date(s.tempOrder.create_at)),1)]),(0,a._)("tr",null,[H,(0,a._)("td",null,[s.tempOrder.paid_date?((0,a.wg)(),(0,a.iD)("span",Y,(0,r.zw)(e.$filters.date(s.tempOrder.paid_date)),1)):((0,a.wg)(),(0,a.iD)("span",j,"時間不正確"))])]),(0,a._)("tr",null,[E,(0,a._)("td",null,[s.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("strong",K,"已付款")):((0,a.wg)(),(0,a.iD)("span",W,"尚未付款"))])]),(0,a._)("tr",null,[N,(0,a._)("td",null,(0,r.zw)(e.$filters.currency(s.tempOrder.total)),1)])])]),U,(0,a._)("table",V,[S,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.tempOrder.products,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("th",null,(0,r.zw)(t.product.title),1),(0,a._)("td",null,(0,r.zw)(t.qty)+" / "+(0,r.zw)(t.product.unit),1),(0,a._)("td",A,(0,r.zw)(e.$filters.currency(t.final_total)),1)])))),128))])])])])]),(0,a._)("div",B,[F,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=t=>e.$emit("update-order",s.tempOrder))},"確認")])])])],512)}var I=l(1339),J={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-order"],mixins:[I.Z],inject:["emitter"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},Q=l(89);const R=(0,Q.Z)(J,[["render",G]]);var T=R,X=l(9091),ee=l(6216),te=l(5059),le={data(){return{orders:[],pagination:{},tempOrder:{},isNew:!1,delProduct:{},isLoading:!1}},components:{OrderModal:T,DelModal:X.Z,LoadingComponent:ee.Z,PaginationView:te.Z},inject:["emitter"],methods:{getOrders(e=1){const t=`https://vue3-course-api.hexschool.io/api/yufang-api/admin/orders?page=${e}`;this.isLoading=!0,console.log(t),this.$http.get(t).then((e=>{this.isLoading=!1,console.log("orders:",e),e.data.success&&(this.orders=e.data.orders,this.pagination=e.data.pagination)}))},openModal(e){this.tempOrder={...e};const t=this.$refs.orderModal;t.showModal()},openDelModal(e){this.delProduct={...e};const t=this.$refs.delModal;t.showModal()},updateOrder(e){this.tempProduct=e;const t=`https://vue3-course-api.hexschool.io/api/yufang-api/admin/order/${e.id}`,l=this.$refs.orderModal;this.isLoading=!0,this.$http.put(t,{data:this.tempOrder}).then((e=>{this.isLoading=!1,console.log(e),l.hideModal(),this.getOrders(),this.$httpMessageState(e,"更新")}))},deleteOrder(e){const t=`https://vue3-course-api.hexschool.io/api/yufang-api/admin/order/${e}`,l=this.$refs.delModal;this.isLoading=!0,this.$http.delete(t).then((e=>{this.isLoading=!1,l.hideModal(),this.getOrders()}))}},created(){this.getOrders()}};const ae=(0,Q.Z)(le,[["render",_]]);var re=ae}}]);
//# sourceMappingURL=495.ec64b168.js.map