"use strict";(self["webpackChunkfang_shop"]=self["webpackChunkfang_shop"]||[]).push([[809],{5059:function(t,e,l){l.d(e,{Z:function(){return P}});var a=l(3396),o=l(9242),s=l(7139);const i={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},d={key:0,class:"page-item"},r=(0,a._)("span",{"aria-hidden":"true"},"«",-1),c=[r],p=["onClick"],u={key:1,class:"page-item"},m=(0,a._)("span",{"aria-hidden":"true"},"»",-1),g=[m];function h(t,e,l,r,m,h){return(0,a.wg)(),(0,a.iD)("nav",i,[(0,a._)("ul",n,[l.pages.has_pre?((0,a.wg)(),(0,a.iD)("li",d,[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,o.iM)((t=>h.updatePage(l.pages.current_page-1)),["prevent"]))},c)])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,s.C_)(["page-item",{active:t===l.pages.current_page}]),key:t},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,o.iM)((e=>h.updatePage(t)),["prevent"])},(0,s.zw)(t),9,p)],2)))),128)),l.pages.has_next?((0,a.wg)(),(0,a.iD)("li",u,[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,o.iM)((t=>h.updatePage(l.pages.current_page+1)),["prevent"]))},g)])):(0,a.kq)("",!0)])])}var _={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},b=l(89);const f=(0,b.Z)(_,[["render",h]]);var P=f},9809:function(t,e,l){l.r(e),l.d(e,{default:function(){return mt}});var a=l(3396),o=l(7139);const s={class:"text-end"},i={class:"table mt-4"},n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{width:"120"},"分類"),(0,a._)("th",null,"產品名稱"),(0,a._)("th",{width:"120"},"原價"),(0,a._)("th",{width:"120"},"售價"),(0,a._)("th",{width:"100"},"是否啟用"),(0,a._)("th",{width:"200"},"編輯")])],-1),d={class:"text-right"},r={class:"text-right"},c={key:0,class:"text-success"},p={key:1,class:"text-muted"},u={class:"btn-group"},m=["onClick"],g=["onClick"];function h(t,e,l,h,_,b){const f=(0,a.up)("LoadingComponent"),P=(0,a.up)("PaginationView"),y=(0,a.up)("ProductModal"),v=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(f,{active:_.isLoading},null,8,["active"]),(0,a._)("div",s,[(0,a._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>b.openModal(!0))}," 新增一個產品 ")]),(0,a._)("table",i,[n,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.products,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,o.zw)(e.category),1),(0,a._)("td",null,(0,o.zw)(e.title),1),(0,a._)("td",d,(0,o.zw)(t.$filters.currency(e.origin_price)),1),(0,a._)("td",r,(0,o.zw)(t.$filters.currency(e.price)),1),(0,a._)("td",null,[e.is_enabled?((0,a.wg)(),(0,a.iD)("span",c,"啟用")):((0,a.wg)(),(0,a.iD)("span",p,"未啟用"))]),(0,a._)("td",null,[(0,a._)("div",u,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>b.openModal(!1,e)},"編輯",8,m),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>b.openDelModal(e)},"刪除",8,g)])])])))),128))])]),(0,a.Wm)(P,{pages:_.pagination,onEmitPages:b.getProducts},null,8,["pages","onEmitPages"]),(0,a.Wm)(y,{ref:"productModal",product:_.tempProduct,onUpdateProduct:b.updateProduct},null,8,["product","onUpdateProduct"]),(0,a.Wm)(v,{ref:"delModal",item:_.delProduct,view:"delProduct",onDeleteProduct:b.deleteProduct},null,8,["item","onDeleteProduct"])],64)}var _=l(9242);const b={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},P={class:"modal-content border-0"},y=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"新增產品")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},w={class:"row"},k={class:"col-sm-4"},x={class:"mb-3"},M=(0,a._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),D={class:"mb-3"},U=(0,a._)("label",{for:"customFile",class:"form-label"},[(0,a.Uk)("或 上傳圖片 "),(0,a._)("i",{class:"fas fa-spinner fa-spin"})],-1),C=(0,a._)("img",{class:"img-fluid",alt:""},null,-1),$={key:0,class:"mt-5"},V=["onUpdate:modelValue"],L=(0,a._)("button",{type:"button",class:"btn btn-outline-danger"}," 移除 ",-1),Z=(0,a._)("div",null,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100"}," 新增圖片 ")],-1),F={class:"col-sm-8"},z={class:"mb-3"},H=(0,a._)("label",{for:"title",class:"form-label"},"標題",-1),N={class:"row gx-2"},W={class:"mb-3 col-md-6"},Y=(0,a._)("label",{for:"category",class:"form-label"},"分類",-1),j={class:"mb-3 col-md-6"},q=(0,a._)("label",{for:"price",class:"form-label"},"單位",-1),K={class:"row gx-2"},E={class:"mb-3 col-md-6"},I=(0,a._)("label",{for:"origin_price",class:"form-label"},"原價",-1),O={class:"mb-3 col-md-6"},S=(0,a._)("label",{for:"price",class:"form-label"},"售價",-1),A=(0,a._)("hr",null,null,-1),B={class:"mb-3"},G=(0,a._)("label",{for:"description",class:"form-label"},"產品描述",-1),J={class:"mb-3"},Q=(0,a._)("label",{for:"content",class:"form-label"},"說明內容",-1),R={class:"mb-3"},T={class:"form-check"},X=(0,a._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),tt={class:"modal-footer"},et=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function lt(t,e,l,o,s,i){return(0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("div",f,[(0,a._)("div",P,[y,(0,a._)("div",v,[(0,a._)("div",w,[(0,a._)("div",k,[(0,a._)("div",x,[M,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[_.nr,s.tempProduct.imageUrl]])]),(0,a._)("div",D,[U,(0,a._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>i.uploadFile&&i.uploadFile(...t))},null,544)]),C,s.tempProduct.images?((0,a.wg)(),(0,a.iD)("div",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.tempProduct.images,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-3 input-group",key:e},[(0,a.wy)((0,a._)("input",{type:"url",class:"form-control form-control",placeholder:"請輸入連結","onUpdate:modelValue":t=>s.tempProduct.images[e]=t},null,8,V),[[_.nr,s.tempProduct.images[e]]]),L])))),128)),Z])):(0,a.kq)("",!0)]),(0,a._)("div",F,[(0,a._)("div",z,[H,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[2]||(e[2]=t=>s.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[_.nr,s.tempProduct.title]])]),(0,a._)("div",N,[(0,a._)("div",W,[Y,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[_.nr,s.tempProduct.category]])]),(0,a._)("div",j,[q,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[_.nr,s.tempProduct.unit]])])]),(0,a._)("div",K,[(0,a._)("div",E,[I,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[_.nr,s.tempProduct.origin_price]])]),(0,a._)("div",O,[S,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[_.nr,s.tempProduct.price]])])]),A,(0,a._)("div",B,[G,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[_.nr,s.tempProduct.description]])]),(0,a._)("div",J,[Q,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[_.nr,s.tempProduct.content]])]),(0,a._)("div",R,[(0,a._)("div",T,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[9]||(e[9]=t=>s.tempProduct.is_enabled=t)},null,512),[[_.e8,s.tempProduct.is_enabled]]),X])])])])]),(0,a._)("div",tt,[et,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=e=>t.$emit("update-product",s.tempProduct))},"確認")])])])],512)}var at=l(1339),ot={props:{product:{type:Object,default(){return{}}}},data(){return{tempProduct:{}}},mixins:[at.Z],watch:{product(){this.tempProduct=this.product}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/yufang-api/admin/upload";this.$http.post(l,e).then((t=>{console.log(t.data),t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}}},st=l(89);const it=(0,st.Z)(ot,[["render",lt]]);var nt=it,dt=l(9091),rt=l(6216),ct=l(5059),pt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,delProduct:{},isLoading:!1}},components:{ProductModal:nt,DelModal:dt.Z,LoadingComponent:rt.Z,PaginationView:ct.Z},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/yufang-api/admin/products?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const l=this.$refs.productModal;l.showModal()},openDelModal(t){this.delProduct={...t};const e=this.$refs.delModal;e.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/yufang-api/admin/product",l="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/yufang-api/admin/product/${t.id}`,l="put");const a=this.$refs.productModal;this.isLoading=!0,this.$http[l](e,{data:this.tempProduct}).then((t=>{this.isLoading=!1,console.log(t),a.hideModal(),this.getProducts(),this.$httpMessageState(t,"更新")}))},deleteProduct(t){console.log("delete product");const e=`https://vue3-course-api.hexschool.io/api/yufang-api/admin/product/${t}`,l=this.$refs.delModal;this.isLoading=!0,this.$http.delete(e).then((t=>{this.isLoading=!1,l.hideModal(),this.getProducts()}))}},created(){this.getProducts()}};const ut=(0,st.Z)(pt,[["render",h]]);var mt=ut}}]);
//# sourceMappingURL=809.17e26d51.js.map