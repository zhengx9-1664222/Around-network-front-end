(this["webpackJsonparound-web"]=this["webpackJsonparound-web"]||[]).push([[0],{217:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},235:function(e,t,a){e.exports=a.p+"static/media/blue-marker.13cf803d.svg"},242:function(e,t,a){e.exports=a(530)},247:function(e,t,a){},529:function(e,t,a){},530:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(9),s=a.n(r),i=(a(247),a(16)),l=a(17),c=a(19),u=a(18),m=a(20),d=a(217),p=a.n(d),g=a(10),h=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),n.a.createElement("span",{className:"App-title"},"Around"),this.props.isLoggedIn?n.a.createElement("a",{className:"logout",onClick:this.props.handleLogout},n.a.createElement(g.a,{type:"logout"})," ","Logout"):null)}}]),t}(n.a.Component),f=a(545),b=a(541),v=a(542),E=a(46),y=a(533),O="https://around-75015.appspot.com/api/v1",w="TOKEN_KEY",L={enableHighAccuracy:!0,maximumAge:3e5,timeout:27e3},j="video",S="unknown",k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={confirmDirty:!1,autoCompleteResult:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||(console.log("Received values of form: ",t),fetch("".concat(O,"/signup"),{method:"POST",body:JSON.stringify({username:t.username,password:t.password})}).then((function(e){if(e.ok)return e.text();throw new Error(e.statusText)})).then((function(e){console.log(e),f.a.success("Registration succeed!"),a.props.history.push("/login")})).catch((function(e){console.error(e),f.a.error("Registration failed.")})))}))},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,o){var n=a.props.form;t&&t!==n.getFieldValue("password")?o("Two passwords that you enter is inconsistent!"):o()},a.validateToNextPassword=function(e,t,o){var n=a.props.form;t&&a.state.confirmDirty&&n.validateFields(["confirm"],{force:!0}),o()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement(b.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit,className:"register"}),n.a.createElement(b.a.Item,{label:"Username"},e("username",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(v.a,null))),n.a.createElement(b.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(n.a.createElement(v.a.Password,null))),n.a.createElement(b.a.Item,{label:"Confirm Password",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(n.a.createElement(v.a.Password,{onBlur:this.handleConfirmBlur}))),n.a.createElement(b.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},n.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Register"),n.a.createElement("p",null,"I already have an account, go back to ",n.a.createElement(y.a,{to:"/login"},"login"))))}}]),t}(n.a.Component),P=b.a.create({name:"register"})(k),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||(console.log("Received values of form: ",t),fetch("".concat(O,"/login"),{method:"POST",body:JSON.stringify({username:t.username,password:t.password})}).then((function(e){if(e.ok)return e.text();throw new Error(e.stateText)})).then((function(e){console.log(e),a.props.handleLoginSucceed(e),f.a.success("Login succeed!")})).catch((function(e){console.error(e),f.a.error("Login failed.")})))}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement(b.a,{onSubmit:this.handleSubmit,className:"login-form"},n.a.createElement(b.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(v.a,{prefix:n.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),n.a.createElement(b.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(v.a,{prefix:n.a.createElement(g.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),n.a.createElement(b.a.Item,null,n.a.createElement(E.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",n.a.createElement(y.a,{to:"/register"},"register now!")))}}]),t}(n.a.Component),I=b.a.create({name:"normal_login"})(C),N=a(540),T=a(534),F=a(535),x=a(536),A=a(544),M=a(238),B=a(228),D=a.n(B),G=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.images.map((function(e){return Object(M.a)({},e,{customOverlay:n.a.createElement("div",{style:W},n.a.createElement("div",null,"".concat(e.user,": ").concat(e.caption)))})}));return n.a.createElement("div",{style:R},n.a.createElement(D.a,{backdropClosesModal:!0,images:e,enableImageSelection:!1}))}}]),t}(o.Component),R={display:"block",minHeight:"1px",width:"100%",border:"1px solid #ddd",overflow:"auto"},W={backgroundColor:"rgba(0, 0, 0, 0.8)",maxHeight:"240px",overflow:"hidden",position:"absolute",bottom:"0",width:"100%",color:"white",padding:"2px",fontSize:"90%"},q=a(543),z=a(539),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},a.beforeUpload=function(){return!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement(b.a,{labelCol:{span:6},wrapperCol:{span:14}},n.a.createElement(b.a.Item,{label:"Message"},e("message",{rules:[{required:!0,message:"Please input message."}]})(n.a.createElement(v.a,null))),n.a.createElement(b.a.Item,{label:"Image/Video"},n.a.createElement("div",{className:"dropbox"},e("image",{valuePropName:"fileList",getValueFromEvent:this.normFile,rules:[{required:!0,message:"Please select an image."}]})(n.a.createElement(z.a.Dragger,{name:"files",beforeUpload:this.beforeUpload},n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(g.a,{type:"inbox"})),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),n.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload."))))))}}]),t}(n.a.Component),U=b.a.create()(J),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={visible:!1,confirmLoading:!1},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(){a.form.validateFields((function(e,t){if(console.log(t),!e){var o=localStorage.getItem(w),n=JSON.parse(localStorage.getItem("POS_KEY")),r=n.lat,s=n.lon,i=new FormData;i.set("lat",r+.02*Math.random()*2-.02),i.set("lon",s+.02*Math.random()*2-.02),i.set("message",t.message),i.set("image",t.image[0].originFileObj),a.setState({confirmLoading:!0}),fetch("".concat(O,"/post"),{method:"POST",headers:{Authorization:"".concat("Bearer"," ").concat(o)},body:i}).then((function(e){if(e.ok)return a.props.loadPostsByTopic();throw new Error("Failed to create post.")})).then((function(){a.setState({visible:!1,confirmLoading:!1}),a.form.resetFields(),f.a.success("Post created successfully!")})).catch((function(e){console.error(e),f.a.error("Failed to create post."),a.setState({confirmLoading:!1})}))}}))},a.handleCancel=function(){console.log("Clicked cancel button"),a.setState({visible:!1})},a.getFormRef=function(e){a.form=e},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.visible,a=e.confirmLoading;return n.a.createElement("div",null,n.a.createElement(E.a,{type:"primary",onClick:this.showModal},"Create New Post"),n.a.createElement(q.a,{title:"Create New Post",visible:t,onOk:this.handleOk,okText:"Create",confirmLoading:a,onCancel:this.handleCancel},n.a.createElement(U,{ref:this.getFormRef})))}}]),t}(n.a.Component),H=a(55),K=a(235),_=a.n(K),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={isOpen:!1},a.handleToggle=function(){a.setState((function(e){return{isOpen:!e.isOpen}}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.post,t=e.user,a=e.message,o=e.url,r=e.location,s=e.type,i=r.lat,l=r.lon,c="image"===s,u=c?void 0:{url:_.a,scaledSize:new window.google.maps.Size(26,41)};return n.a.createElement(H.Marker,{position:{lat:i,lng:l},onMouseOver:c?this.handleToggle:void 0,onMouseOut:c?this.handleToggle:void 0,onClick:c?void 0:this.handleToggle,icon:u},this.state.isOpen?n.a.createElement(H.InfoWindow,null,n.a.createElement("div",null,c?n.a.createElement("img",{src:o,alt:a,className:"around-marker-image"}):n.a.createElement("video",{src:o,controls:!0,className:"around-marker-video"}),n.a.createElement("p",null,"".concat(t,": ").concat(a)))):null)}}]),t}(n.a.Component),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).reloadMarker=function(){var e=a.getCenter(),t=a.getRadius();a.props.loadPostsByTopic(e,t)},a.getMapRef=function(e){a.map=e,window.map=e},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getCenter",value:function(){var e=this.map.getCenter();return{lat:e.lat(),lon:e.lng()}}},{key:"getRadius",value:function(){var e=this.map.getCenter(),t=this.map.getBounds();if(e&&t){var a=t.getNorthEast(),o=new window.google.maps.LatLng(e.lat(),a.lng());return.001*window.google.maps.geometry.spherical.computeDistanceBetween(e,o)}}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("POS_KEY")),t=e.lat,a=e.lon;return n.a.createElement(H.GoogleMap,{ref:this.getMapRef,defaultZoom:11,defaultCenter:{lat:t,lng:a},onDragEnd:this.reloadMarker,onZoomChanged:this.reloadMarker},this.props.posts.map((function(e){return n.a.createElement(Y,{post:e,key:e.url})})))}}]),t}(n.a.Component),X=Object(H.withScriptjs)(Object(H.withGoogleMap)(Z)),$=N.a.TabPane,Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={isLoadingGeoLocation:!1,isLoadingPosts:!1,error:"",posts:[],topic:"around"},a.onSuccessLoadGeoLocation=function(e){console.log(e);var t=e.coords,o=t.latitude,n=t.longitude;localStorage.setItem("POS_KEY",JSON.stringify({lat:o,lon:n})),a.setState({isLoadingGeoLocation:!1,error:""}),a.loadNearbyPosts()},a.onFailedLoadGeoLocation=function(){a.setState({isLoadingGeoLocation:!1,error:"Failed to load geo location."})},a.loadNearbyPosts=function(e,t){var o=e||JSON.parse(localStorage.getItem("POS_KEY")),n=o.lat,r=o.lon,s=t||20,i=localStorage.getItem(w);return a.setState({isLoadingPosts:!0,error:""}),fetch("".concat(O,"/search?lat=").concat(n,"&lon=").concat(r,"&range=").concat(s),{method:"GET",headers:{Authorization:"".concat("Bearer"," ").concat(i)}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to load posts.")})).then((function(e){console.log(e),a.setState({posts:e||[],isLoadingPosts:!1})})).catch((function(e){console.error(e),a.setState({isLoadingPosts:!1,error:e.message})}))},a.handleTopicChange=function(e){var t=e.target.value;a.setState({topic:t}),"around"===t?a.loadNearbyPosts():a.loadFacesAroundTheWolrd()},a.loadFacesAroundTheWolrd=function(){var e=localStorage.getItem(w);return a.setState({isLoadingPosts:!0,error:""}),fetch("".concat(O,"/cluster?term=face"),{method:"GET",headers:{Authorization:"".concat("Bearer"," ").concat(e)}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to load posts")})).then((function(e){console.log(e),a.setState({posts:e||[],isLoadingPosts:!1})})).catch((function(e){console.error(e),a.setState({isLoadingPosts:!1,error:e.message})}))},a.loadPostsByTopic=function(e,t){return"around"===a.state.topic?a.loadNearbyPosts(e,t):a.loadFacesAroundTheWolrd()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){"geolocation"in navigator?(this.setState({isLoadingGeoLocation:!0,error:""}),navigator.geolocation.getCurrentPosition(this.onSuccessLoadGeoLocation,this.onFailedLoadGeoLocation,L)):this.setState({error:"Geolocation is not supported."})}},{key:"renderImagePosts",value:function(){var e=this.state.posts.filter((function(e){return"image"===e.type})).map((function(e){return{user:e.user,src:e.url,thumbnail:e.url,caption:e.message,thumbnailWidth:400,thumbnailHeight:300}}));return n.a.createElement(G,{images:e})}},{key:"renderVideoPosts",value:function(){var e=this.state.posts;return n.a.createElement(T.a,{gutter:30},e.filter((function(e){return[j,S].includes(e.type)})).map((function(e){return n.a.createElement(F.a,{span:6,key:e.url},n.a.createElement("video",{src:e.url,controls:!0,className:"video-block"}),n.a.createElement("p",null,e.user,": ",e.message))})))}},{key:"renderPosts",value:function(e){var t=this.state,a=t.error,o=t.isLoadingGeoLocation,r=t.isLoadingPosts,s=t.posts;return a||(o?n.a.createElement(x.a,{tip:"Loading geo location..."}):r?n.a.createElement(x.a,{tip:"Loading posts..."}):s.length>0?"image"===e?this.renderImagePosts():this.renderVideoPosts():"No nearby posts")}},{key:"render",value:function(){var e=n.a.createElement(V,{loadPostsByTopic:this.loadPostsByTopic});return n.a.createElement("div",null,n.a.createElement(A.a.Group,{onChange:this.handleTopicChange,value:this.state.topic},n.a.createElement(A.a,{value:"around"},"Posts Around Me"),n.a.createElement(A.a,{value:"face"},"Faces Around The World")),n.a.createElement(N.a,{tabBarExtraContent:e,className:"main-tabs"},n.a.createElement($,{tab:"Image Posts",key:"1"},this.renderPosts("image")),n.a.createElement($,{tab:"Video Posts",key:"2"},this.renderPosts(j)),n.a.createElement($,{tab:"Map",key:"3"},n.a.createElement(X,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyD3CEh9DXuyjozqptVB5LA-dN7MxWWkr9s&v=3.exp&libraries=geometry,drawing,places",loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{height:"600px"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}}),posts:this.state.posts,loadPostsByTopic:this.loadPostsByTopic}))))}}]),t}(n.a.Component),ee=a(547),te=a(537),ae=a(538),oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getLogin=function(){return a.props.isLoggedIn?n.a.createElement(ee.a,{to:"/home"}):n.a.createElement(I,{handleLoginSucceed:a.props.handleLoginSucceed})},a.getHome=function(){return a.props.isLoggedIn?n.a.createElement(Q,null):n.a.createElement(ee.a,{to:"/login"})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"main"},n.a.createElement(te.a,null,n.a.createElement(ae.a,{exact:!0,path:"/",render:this.getLogin}),n.a.createElement(ae.a,{path:"/login",render:this.getLogin}),n.a.createElement(ae.a,{path:"/register",component:P}),n.a.createElement(ae.a,{path:"/home",render:this.getHome}),n.a.createElement(ae.a,{render:this.getLogin})))}}]),t}(n.a.Component),ne=(a(529),function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={isLoggedIn:Boolean(localStorage.getItem(w))},a.handleLoginSucceed=function(e){localStorage.setItem(w,e),a.setState({isLoggedIn:!0})},a.handleLogout=function(){localStorage.removeItem(w),a.setState({isLoggedIn:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,{handleLogout:this.handleLogout,isLoggedIn:this.state.isLoggedIn}),n.a.createElement(oe,{handleLoginSucceed:this.handleLoginSucceed,isLoggedIn:this.state.isLoggedIn}))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(546);s.a.render(n.a.createElement(re.a,null,n.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[242,1,2]]]);
//# sourceMappingURL=main.ff57c3b1.chunk.js.map