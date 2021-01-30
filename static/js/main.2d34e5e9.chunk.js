(this["webpackJsonprekrutacja-twoj-psycholog"]=this["webpackJsonprekrutacja-twoj-psycholog"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),s=n.n(i),c=n(7),r=n.n(c),l=(n(34),n(19)),o=n(20),d=n(25),h=n(24),p=(n(35),n(56)),j=n(13),u=(n(36),n(12)),b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isSideBarVisible:!1,isModalOpen:!1,selectedTherapistId:0,fullName:"",aboutMe:"",isEditSideBarOpen:!1,pageIndex:0,pagination:{pageCount:36,startIndex:0,endIndex:10}},e.handleInitialState=function(){e.setState({pagination:{pageCount:Math.ceil(e.props.therapists.length/10)}})},e.handleClick=function(t){e.setState({isSideBarVisible:!0,selectedTherapistId:t}),e.props.fetchTherapistDetails(t)},e.closeSideBar=function(){e.setState({isSideBarVisible:!1,isEditSideBarOpen:!1})},e.handleSwitchPage=function(t,n){e.setState({pagination:{pageCount:e.state.pagination.pageCount,startIndex:10*n,endIndex:10*n+10}})},e.handleOpenEditModal=function(){e.setState({isEditSideBarOpen:!0})},e.handleOpenRemoveModal=function(){e.setState({isModalOpen:!0,isSideBarVisible:!1})},e.handleCloseRemoveModal=function(){e.setState({isModalOpen:!1})},e.handleCloseEditModal=function(){e.setState({isEditSideBarOpen:!1})},e.handleRemoveTherapist=function(t){e.props.removeTherapist(t),j.b.warn("Dane terapeuty zosta\u0142y usuni\u0119te."),e.setState({isModalOpen:!1})},e.handleEditTherapist=function(t,n,a){e.props.editTherapist(t,n,a),j.b.success("Pomy\u015blnie zmieniono dane."),e.setState({isEditSideBarOpen:!1})},e.setUserFullName=function(t){e.setState({fullName:t})},e.setUserAboutMe=function(t){e.setState({aboutMe:t})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTherapists(),this.props.therapists&&this.handleInitialState()}},{key:"render",value:function(){var e=this,t=this.state,n=t.isSideBarVisible,i=t.pagination,s=t.selectedTherapistId,c=t.isEditSideBarOpen,r=t.aboutMe,l=t.fullName,o=this.props,d=o.therapists,h=o.therapistDetails;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j.a,{}),Object(a.jsxs)("header",{children:[Object(a.jsx)("svg",{width:"28",height:"28",className:"logo",viewBox:"0 0 27 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M7.89551 16H4.82324V3.67871H0.193359V0.595703H12.5146V3.67871H7.89551V16ZM17.4305 3.67871V9.84473H20.5135C20.936 9.84473 21.3335 9.76595 21.7059 9.6084C22.0783 9.44368 22.4041 9.22168 22.6834 8.94238C22.9627 8.66309 23.1811 8.33724 23.3387 7.96484C23.5034 7.58529 23.5857 7.18424 23.5857 6.76172C23.5857 6.33919 23.5034 5.94173 23.3387 5.56934C23.1811 5.18978 22.9627 4.86035 22.6834 4.58105C22.4041 4.30176 22.0783 4.08333 21.7059 3.92578C21.3335 3.76107 20.936 3.67871 20.5135 3.67871H17.4305ZM17.4305 16H14.3475V0.595703H20.5135C21.0792 0.595703 21.6235 0.670898 22.1463 0.821289C22.6691 0.964518 23.1561 1.1722 23.6072 1.44434C24.0656 1.70931 24.4809 2.03158 24.8533 2.41113C25.2329 2.78353 25.5551 3.19889 25.8201 3.65723C26.0923 4.11556 26.2999 4.60612 26.4432 5.12891C26.5936 5.65169 26.6687 6.19596 26.6687 6.76172C26.6687 7.60677 26.5076 8.40527 26.1854 9.15723C25.8631 9.90202 25.4227 10.5537 24.8641 11.1123C24.3055 11.6709 23.6502 12.1113 22.8982 12.4336C22.1535 12.7559 21.3585 12.917 20.5135 12.917H17.4305V16Z",fill:"#213C9A"})}),Object(a.jsx)("h1",{children:"Lista specjalist\xf3w"})]}),Object(a.jsxs)("div",{children:[n?Object(a.jsxs)("div",{className:"bcg",children:[" ",Object(a.jsxs)("div",{className:"sideBar",children:[Object(a.jsx)("span",{onClick:function(){return e.closeSideBar()},className:"x",children:Object(a.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M13.3 0.709987C13.1131 0.522734 12.8595 0.417501 12.595 0.417501C12.3305 0.417501 12.0768 0.522734 11.89 0.709987L6.99997 5.58999L2.10997 0.699987C1.92314 0.512734 1.66949 0.407501 1.40497 0.407501C1.14045 0.407501 0.886802 0.512734 0.699971 0.699987C0.309971 1.08999 0.309971 1.71999 0.699971 2.10999L5.58997 6.99999L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40999L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99999L13.3 2.10999C13.68 1.72999 13.68 1.08999 13.3 0.709987Z",fill:"#707A88"})})}),c?Object(a.jsxs)("div",{className:"editSideBarWrapper",children:[Object(a.jsx)("h1",{children:"Edytuj informacje o specjali\u015bcie"}),Object(a.jsx)("h3",{children:"Imi\u0119 i nazwisko"}),Object(a.jsx)("input",{type:"text",onChange:function(t){return e.setUserFullName(t.target.value)}}),Object(a.jsx)("h3",{children:"O mnie"}),Object(a.jsx)("textarea",{onChange:function(t){return e.setUserAboutMe(t.target.value)}}),Object(a.jsxs)("div",{className:"buttonsWrapper",children:[Object(a.jsx)("button",{className:"save",onClick:function(){return e.handleEditTherapist(l,r,s)},children:"Zapisz"}),Object(a.jsx)("button",{className:"cancel",onClick:function(){return e.handleCloseEditModal()},children:"Anuluj"})]})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"info",children:"Informacja o specjali\u015bcie"}),Object(a.jsx)("h3",{className:"name",children:"Imi\u0119 i nazwisko"}),h&&h.fullName&&""!==h.fullName?Object(a.jsx)("p",{children:h.fullName}):Object(a.jsx)("p",{children:"Brak danych"}),Object(a.jsx)("h3",{children:"Specjalizacje"}),h&&h.specializations&&0!==h.specializations.length?Object(a.jsx)("p",{children:h.specializations.join(", ")}):Object(a.jsx)("p",{children:"Brak danych"}),Object(a.jsx)("h3",{children:"Rodzaje terapii"}),h&&h.therapyTypes&&0!==h.therapyTypes.length?Object(a.jsx)("p",{children:h.therapyTypes.join(", ")}):Object(a.jsx)("p",{children:"Brak danych"}),Object(a.jsx)("h3",{children:"Certyfikaty"}),h&&h.certificates&&0!==h.certificates.length?h.certificates.map((function(e){return Object(a.jsx)("p",{children:Object(a.jsx)("li",{children:e.name})})})):Object(a.jsx)("p",{children:"Brak danych"}),Object(a.jsx)("h3",{children:"O mnie"}),h&&h.aboutMe&&""!==h.aboutMe?Object(a.jsx)("p",{className:"aboutMe",children:r||h.aboutMe}):Object(a.jsx)("p",{children:"Brak danych"}),Object(a.jsxs)("div",{className:"mainButtonsWrapper",children:[Object(a.jsx)("button",{className:"edit",onClick:function(){return e.handleOpenEditModal()},children:"Edytuj"}),Object(a.jsx)("button",{className:"remove",onClick:function(){return e.handleOpenRemoveModal()},children:"Usu\u0144"})]})]})]})]}):null,this.state.isModalOpen?Object(a.jsx)("div",{className:"removeModalBackground",children:Object(a.jsxs)("div",{className:"removeModal",children:[Object(a.jsx)("h1",{children:"Usun\u0105\u0107 specjalist\u0119?"}),Object(a.jsx)("p",{children:"Czy na pewno chcesz usun\u0105\u0107 tego specjalist\u0119? Tej akcji nie mo\u017cna cofn\u0105\u0107."}),Object(a.jsx)("button",{className:"cancel",onClick:function(){return e.handleCloseRemoveModal()},children:"Anuluj"}),Object(a.jsx)("button",{className:"remove",onClick:function(){return e.handleRemoveTherapist(s)},children:"Usu\u0144"})]})}):null,Object(a.jsxs)("div",{className:"listWrapper",children:[Object(a.jsxs)("div",{className:"specialistsWrapper",children:[Object(a.jsx)("h2",{children:"Specjalista"}),d&&null!==d?d.slice(this.state.pagination.startIndex,this.state.pagination.endIndex).map((function(t){return Object(a.jsxs)("div",{onClick:function(){return e.handleClick(t.therapistId)},className:"specialist",children:[Object(a.jsx)("img",{src:t.avatarUrl,alt:"avatar"}),Object(a.jsx)("li",{children:t.fullName})]})})):null]}),Object(a.jsxs)("div",{className:"specializationWrapper",children:[Object(a.jsx)("h2",{children:"Specjalizacje"}),d&&null!==d?d.slice(this.state.pagination.startIndex,this.state.pagination.endIndex).map((function(t){return Object(a.jsx)("ul",{onClick:function(){return e.handleClick(t.therapistId)},className:"speciallization",children:Object(a.jsxs)("li",{children:[" ",t.specializations.length<=3?null:Object(a.jsxs)("div",{className:"specInfo",children:[Object(a.jsx)("div",{className:"arrowSquare"}),t.specializations.join(", ")]}),t.specializations.length<=3?t.specializations.join(", "):t.specializations.splice(0,3).join(", ")+"..."]})})})):null]})]}),Object(a.jsx)("div",{className:"paginationWrapper",children:Object(a.jsx)(p.a,{count:i.pageCount,page:this.state.pageIndex,onChange:function(t,n){e.handleSwitchPage(t,n)},variant:"outlined",shape:"rounded"})})]})]})}}]),n}(i.Component),O=Object(u.b)((function(e){return{therapists:e.main.therapists,therapistDetails:e.main.therapistDetails}}),(function(e){return{fetchTherapists:function(){return e((function(e){fetch("https://twojpsycholog.pl/lb-proxy/api-market/open/therapists",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({citySeoName:"ONLINE"})}).then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_THERAPISTS",data:t.therapists})})).catch((function(e){console.error("Error:",e)}))}))},fetchTherapistDetails:function(t){return e(function(e){return function(t){fetch("https://twojpsycholog.pl/lb-proxy/api-market/open/therapists/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_THERAPIST_DETAILS",data:e})})).catch((function(e){console.error("Error:",e)}))}}(t))},removeTherapist:function(t){return e(function(e){return function(t){return t({type:"REMOVE_THERAPIST",data:e})}}(t))},editTherapist:function(t,n,a){return e(function(e,t,n){console.log(e,t,n);var a={fullName:e,aboutMe:t,id:n};return function(e){return e({type:"EDIT_THERAPIST",data:a})}}(t,n,a))}}}))(b);var f=function(){return Object(a.jsx)(O,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))},m=n(9),C=n(22),g=n(23),v=n(17),S=n(8),T={therapists:null,therapistDetails:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,n=e;switch(t.type){case"FETCH_THERAPISTS":n=Object(S.a)(Object(S.a)({},e),{},{therapists:t.data});break;case"FETCH_THERAPIST_DETAILS":n=Object(S.a)(Object(S.a)({},e),{},{therapistDetails:t.data});break;case"EDIT_THERAPIST":var a=t.data,i=a.fullName,s=a.aboutMe,c=a.id,r=e.therapists.findIndex((function(e){return e.therapistId===c})),l=Object(v.a)(e.therapists),o=e.therapists[r];o.aboutMe=s,o.fullName=i,l[r]=o,n=Object(S.a)(Object(S.a)({},e),{},{newList:l});break;case"REMOVE_THERAPIST":var d=e.therapists.findIndex((function(e){return e.therapistId===t.data}));function h(){if(-1!==d){var t=Object(v.a)(e.therapists);return t.splice(d,1),t}return e.newTherapistList}var p=h();n=Object(S.a)(Object(S.a)({},e),{},{therapists:p});break;default:return e}return n},N=Object(m.c)({main:E}),y=Object(g.createLogger)(),I=[C.a];I.push(y);var M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,k=Object(m.e)(N,M(m.a.apply(void 0,I)));r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(u.a,{store:k,children:Object(a.jsx)(f,{})})}),document.getElementById("root")),x()}},[[41,1,2]]]);
//# sourceMappingURL=main.2d34e5e9.chunk.js.map