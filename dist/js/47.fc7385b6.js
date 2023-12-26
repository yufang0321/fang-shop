"use strict";(self["webpackChunkfang_shop"]=self["webpackChunkfang_shop"]||[]).push([[47],{2047:function(t,o,r){r.r(o),r.d(o,{default:function(){return z}});var e=r(3396),i=r(7139),c=r(9242);const a={class:"container"},s={"aria-label":"breadcrumb"},n={class:"breadcrumb"},u={class:"breadcrumb-item"},l={class:"breadcrumb-item active","aria-current":"page"},d={class:"row justify-content-center"},p={class:"col-8"},h=["src"],b={class:"col-4"},g={key:0,class:"h5"},y={key:1,class:"h6"},_={key:2,class:"h5"},m=(0,e._)("hr",null,null,-1),v={class:"btn-toolbar justify-content-between",role:"toolbar","aria-label":"Toolbar with button groups"},w={class:"btn-group",role:"group","aria-label":"First group"};function f(t,o,r,f,k,q){const C=(0,e.up)("LoadingComponent"),z=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(C,{active:t.isLoading},null,8,["active"]),(0,e._)("div",a,[(0,e._)("nav",s,[(0,e._)("ol",n,[(0,e._)("li",u,[(0,e.Wm)(z,{to:"/user/cart"},{default:(0,e.w5)((()=>[(0,e.Uk)("購物車")])),_:1})]),(0,e._)("li",l,(0,i.zw)(k.product.title),1)])]),(0,e._)("div",d,[(0,e._)("article",p,[(0,e._)("h2",null,(0,i.zw)(k.product.title),1),(0,e._)("div",null,(0,i.zw)(k.product.content),1),(0,e._)("div",null,(0,i.zw)(k.product.description),1),(0,e._)("img",{src:k.product.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,h)]),(0,e._)("div",b,[k.product.price?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("div",g,(0,i.zw)(k.product.origin_price)+" 元",1)),k.product.price?((0,e.wg)(),(0,e.iD)("del",y,"原價 "+(0,i.zw)(k.product.origin_price)+" 元",1)):(0,e.kq)("",!0),k.product.price?((0,e.wg)(),(0,e.iD)("div",_,"現在只要 "+(0,i.zw)(k.product.price)+" 元",1)):(0,e.kq)("",!0),m,(0,e._)("div",v,[(0,e._)("div",w,[(0,e._)("button",{type:"button",min:"1",class:"btn btn-outline-secondary",onClick:o[0]||(o[0]=t=>q.deleteQty(k.product))},"-"),(0,e.wy)((0,e._)("input",{type:"number",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=t=>k.product.qty=t)},null,512),[[c.nr,k.product.qty]]),(0,e._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:o[2]||(o[2]=t=>q.addQty(k.product))},"+")])]),(0,e._)("button",{type:"button",class:"btn btn-outline-danger",onClick:o[3]||(o[3]=t=>q.addToCart(k.product))}," 加到購物車 ")])])])],64)}r(560);var k={data(){return{product:{},id:""}},methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/yufang-api/product/${this.id}`;this.isLoading=!0,this.$http.get(t).then((t=>{console.log(t.data),this.isLoading=!1,t.data.success&&(this.product={...t.data.product,qty:1})}))},addToCart(t){const o="https://vue3-course-api.hexschool.io/api/yufang-api/cart";console.log("product123:",t);const r={product_id:t.id,qty:t.qty};this.isLoading=!0,this.$http.post(o,{data:r}).then((t=>{this.isLoading=!1,this.$httpMessageState(t,"加入購物車"),this.$router.push("/user/cart")}))},addQty(t){t.qty+=1},deleteQty(t){t.qty>1&&(t.qty-=1)}},created(){this.id=this.$route.params.productId,this.getProduct()}},q=r(89);const C=(0,q.Z)(k,[["render",f]]);var z=C}}]);
//# sourceMappingURL=47.fc7385b6.js.map