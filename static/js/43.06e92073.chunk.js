"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[43],{43:function(t,s,e){e.r(s),e.d(s,{default:function(){return q}});var n=e(8683),r=e(5671),i=e(3144),o=e(136),u=e(5716),a=e(2791),l="profileinfo_descriptionBlock__ZRMPu",c=e(158),d=e(885),p=e(184),f=function(t){var s=(0,a.useState)(!1),e=(0,d.Z)(s,2),n=e[0],r=e[1],i=(0,a.useState)(t.status),o=(0,d.Z)(i,2),u=o[0],l=o[1];(0,a.useEffect)((function(){l(t.status)}),[t.status]);return(0,p.jsxs)("div",{children:[!n&&(0,p.jsx)("div",{children:(0,p.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"Double click to add new post text"})}),n&&(0,p.jsx)("div",{children:(0,p.jsx)("input",{autoFocus:!0,onChange:function(t){l(t.currentTarget.value)},onBlur:function(){r(!1),t.updateStatus(u)},value:u})})]})};var h=function(t){return t.profile?(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("img",{src:t.profile.photos.large,alt:"large"}),(0,p.jsx)("div",{children:t.profile.fullName}),(0,p.jsx)("div",{children:t.profile.aboutMe}),(0,p.jsx)(f,{status:t.status,updateStatus:t.updateStatus})]})}):(0,p.jsx)(c.Z,{})},x=e(6070),j="myPosts_postsBlock__RhOud",m="myPosts_posts__OTqaL",v="post_item__y07+k",g="post_likes__L+Ct7";var k=function(t){return(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("img",{src:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png",alt:"avatar"}),t.message,(0,p.jsx)("div",{children:(0,p.jsxs)("span",{className:g,children:["likes ",t.likesCount]})})]})},P=e(6139),_=e(704),S=e(1557),Z=e(909),C=a.memo((function(t){var s=t.posts.map((function(t){return(0,p.jsx)(k,{message:t.text,likesCount:t.likesCount},t.id)}));return(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)("h3",{children:"My posts"}),(0,p.jsx)(D,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:m,children:s})})]})})),b=(0,Z.N)("textarea"),w=(0,S.D)(30),D=(0,_.Z)({form:"profileAddPostForm"})((function(t){return(0,p.jsx)("form",{onSubmit:t.handleSubmit,children:(0,p.jsxs)("div",{children:[(0,p.jsx)(P.Z,{component:b,name:"newPostText",placeholder:"Enter new post text",validate:[S.C,w]}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:"Add post"})})]})})})),N=C,y=e(364),A=(0,y.$j)((function(t){return{posts:t.profilePage.posts}}),{addPost:x.q2})(N);var I=function(t){return(0,p.jsxs)("div",{children:[(0,p.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,p.jsx)(A,{})]})},F=e(6871),M=e(7781),T=function(t){(0,o.Z)(e,t);var s=(0,u.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userID;t||(t=this.props.authorizedUserID)||F.Fg,this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,p.jsx)(I,(0,n.Z)({},this.props))}}]),e}(a.Component),q=(0,M.qC)((0,y.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserID:t.auth.userID,isAuth:t.auth.isAuth}}),{getProfile:x.Ai,getStatus:x.lR,updateStatus:x.Nf}))((function(t){var s=(0,F.bS)("/profile/:userID");return(0,p.jsx)(T,(0,n.Z)((0,n.Z)({},t),{},{match:s}))}))}}]);
//# sourceMappingURL=43.06e92073.chunk.js.map