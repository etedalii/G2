(self.webpackChunksurvey=self.webpackChunksurvey||[]).push([[6],{2006:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AdminModule:()=>U});var o=n(8583),r=n(665),i=n(5855),s=n(639),a=n(4551);let u=(()=>{class e{constructor(e,t){this.auth=e,this.router=t}logout(){this.auth.logout(),this.router.navigateByUrl("/")}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(a.e),s.Y36(i.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["ng-component"]],decls:9,vars:0,consts:[[1,"container-fluid"],[1,"row","mt-2"],[1,"col-2"],["routerLink","/admin/main/users","routerLinkActive","active",1,"btn","btn-outline-primary","col-12"],["routerLink","/admin/main/question","routerLinkActive","active",1,"btn","btn-outline-primary","col-12","mt-2"],[1,"col-9"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"button",3),s._uU(4," Show All Users "),s.qZA(),s.TgZ(5,"button",4),s._uU(6," Create a Survey "),s.qZA(),s.qZA(),s.TgZ(7,"div",5),s._UZ(8,"router-outlet"),s.qZA(),s.qZA(),s.qZA())},directives:[i.rH,i.Od,i.lC],encapsulation:2}),e})();var g=n(7453);function l(e,t){if(1&e&&(s.TgZ(0,"div",15),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij(" ",e.errorMessage," ")}}let d=(()=>{class e{constructor(e,t){this.router=e,this.auth=t}ngOnInit(){this.user=new g.n}authenticate(e){e.valid?this.auth.authenticate(this.user).subscribe(e=>{e.success?(this.auth.storeUserData(e.token,e.user),this.router.navigateByUrl("/home")):this.errorMessage="The username or password is wrong"}):this.errorMessage="Form Data invalid"}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(i.F0),s.Y36(a.e))},e.\u0275cmp=s.Xpm({type:e,selectors:[["ng-component"]],decls:23,vars:3,consts:[[1,"bg-info","p-2","text-center","text-white"],[1,"container"],[1,"row"],[1,"col-md-6","offset-md-3","col-lg-6","offset-lg-3","col-sm-8","offset-sm-1"],["class","bg-danger mt-5 p-2 text-center text-white",4,"ngIf"],["autocomplete","off",3,"ngSubmit"],["form","ngForm"],[1,"form-group","mt-2"],["for","username"],["type","text","name","username","placeholder","Enter Username","id","username","required","","autofocus","","autocomplete","off",1,"form-control","mt-2",3,"ngModel","ngModelChange"],["for","password"],["type","password","name","password","placeholder","Enter password","id","password","required","","autocomplete","off",1,"form-control","mt-2",3,"ngModel","ngModelChange"],[1,"form-group","text-center","mt-2"],["type","submit",1,"btn","btn-primary","m-1"],[1,"fas","fa-sign-in-alt"],[1,"bg-danger","mt-5","p-2","text-center","text-white"]],template:function(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",0),s.TgZ(1,"h3"),s._uU(2,"Survey Website"),s.qZA(),s.qZA(),s.TgZ(3,"main",1),s.TgZ(4,"div",2),s.TgZ(5,"div",3),s.YNc(6,l,2,1,"div",4),s.TgZ(7,"h1"),s._uU(8,"Please Login"),s.qZA(),s.TgZ(9,"form",5,6),s.NdJ("ngSubmit",function(){s.CHM(e);const n=s.MAs(10);return t.authenticate(n)}),s.TgZ(11,"fieldset",7),s.TgZ(12,"label",8),s._uU(13," Username:"),s.qZA(),s.TgZ(14,"input",9),s.NdJ("ngModelChange",function(e){return t.user.username=e}),s.qZA(),s.qZA(),s.TgZ(15,"fieldset",7),s.TgZ(16,"label",10),s._uU(17," Password:"),s.qZA(),s.TgZ(18,"input",11),s.NdJ("ngModelChange",function(e){return t.user.password=e}),s.qZA(),s.qZA(),s.TgZ(19,"fieldset",12),s.TgZ(20,"button",13),s._UZ(21,"i",14),s._uU(22," Log in "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}2&e&&(s.xp6(6),s.Q6J("ngIf",null!=t.errorMessage),s.xp6(8),s.Q6J("ngModel",t.user.username),s.xp6(4),s.Q6J("ngModel",t.user.password))},directives:[o.O5,r._Y,r.JL,r.F,r.Fj,r.Q7,r.JJ,r.On],encapsulation:2}),e})(),c=(()=>{class e{constructor(e,t){this.router=e,this.auth=t}canActivate(e,t){return this.auth.authenticated?(console.log("authenticated"),!0):(console.log("can not authenticate"),this.router.navigate(["/admin/auth"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(i.F0),s.LFG(a.e))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac}),e})();var m=n(2642);let p=(()=>{class e{constructor(e,t,n){this.repository=e,this.router=t,this.editing=!1,this.user=new g.n,this.editing="edit"===n.snapshot.params.mode,this.editing&&Object.assign(this.user,e.getUser(n.snapshot.params.id))}ngOnInit(){}save(e){this.repository.saveUser(this.user),this.router.navigateByUrl("/admin/main/users")}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(m.j),s.Y36(i.F0),s.Y36(i.gz))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-user-editor"]],decls:35,vars:17,consts:[[1,"bg-primary","p-2","text-white"],["novalidate","",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["type","text","name","name",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","lastname",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","username",1,"form-control",3,"ngModel","ngModelChange"],["type","password","name","password",1,"form-control",3,"ngModel","ngModelChange"],["type","email","name","email",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","mt-2"],["type","checkbox","name","userType",3,"ngModel","ngModelChange"],[1,"ms-2"],["type","submit",1,"btn","btn-primary","m-2"],["type","reset","routerLink","/admin/main/users",1,"btn","btn-secondary"],[1,"fas","fa-undo"]],template:function(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",0),s.TgZ(1,"h5"),s._uU(2),s.qZA(),s.qZA(),s.TgZ(3,"form",1,2),s.NdJ("ngSubmit",function(){s.CHM(e);const n=s.MAs(4);return t.save(n)}),s.TgZ(5,"div",3),s.TgZ(6,"label"),s._uU(7,"Name"),s.qZA(),s.TgZ(8,"input",4),s.NdJ("ngModelChange",function(e){return t.user.name=e}),s.qZA(),s.qZA(),s.TgZ(9,"div",3),s.TgZ(10,"label"),s._uU(11,"LastName"),s.qZA(),s.TgZ(12,"input",5),s.NdJ("ngModelChange",function(e){return t.user.lastname=e}),s.qZA(),s.qZA(),s.TgZ(13,"div",3),s.TgZ(14,"label"),s._uU(15,"Username"),s.qZA(),s.TgZ(16,"input",6),s.NdJ("ngModelChange",function(e){return t.user.username=e}),s.qZA(),s.qZA(),s.TgZ(17,"div",3),s.TgZ(18,"label"),s._uU(19,"Password"),s.qZA(),s.TgZ(20,"input",7),s.NdJ("ngModelChange",function(e){return t.user.password=e}),s.qZA(),s.qZA(),s.TgZ(21,"div",3),s.TgZ(22,"label"),s._uU(23,"Email"),s.qZA(),s.TgZ(24,"input",8),s.NdJ("ngModelChange",function(e){return t.user.email=e}),s.qZA(),s.qZA(),s.TgZ(25,"div",9),s.TgZ(26,"input",10),s.NdJ("ngModelChange",function(e){return t.user.userType=e}),s.qZA(),s.TgZ(27,"label",11),s._uU(28," Is Admin"),s.qZA(),s.qZA(),s.TgZ(29,"button",12),s._UZ(30,"i"),s._uU(31),s.qZA(),s.TgZ(32,"button",13),s._UZ(33,"i",14),s._uU(34," Cancel"),s.qZA(),s.qZA()}2&e&&(s.ekj("bg-warning",t.editing)("text-dark",t.editing),s.xp6(2),s.hij("",t.editing?"Edit":"Add"," User"),s.xp6(6),s.Q6J("ngModel",t.user.name),s.xp6(4),s.Q6J("ngModel",t.user.lastname),s.xp6(4),s.Q6J("ngModel",t.user.username),s.xp6(4),s.Q6J("ngModel",t.user.password),s.xp6(4),s.Q6J("ngModel",t.user.email),s.xp6(2),s.Q6J("ngModel",t.user.userType),s.xp6(3),s.ekj("btn-warning",t.editing),s.xp6(1),s.Tol(t.editing?"fas fa-save":"fas fa-plus-circle"),s.xp6(1),s.hij(" ",t.editing?"Save":"Add"," "))},directives:[r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,r.Wl,i.rH],encapsulation:2}),e})();function Z(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tr"),s.TgZ(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.qZA(),s.TgZ(5,"td"),s._uU(6),s.qZA(),s.TgZ(7,"td"),s._uU(8),s.qZA(),s.TgZ(9,"td"),s._uU(10),s.qZA(),s.TgZ(11,"td"),s.TgZ(12,"button",4),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().editUser(t._id)}),s._UZ(13,"i",5),s.qZA(),s.TgZ(14,"button",6),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().deleteUser(t._id)}),s._UZ(15,"i",7),s.qZA(),s.qZA(),s.qZA()}if(2&e){const e=t.$implicit;s.xp6(2),s.Oqu(e.name),s.xp6(2),s.Oqu(e.lastname),s.xp6(2),s.Oqu(e.username),s.xp6(2),s.Oqu(e.email),s.xp6(2),s.Oqu(!0===e.userType?"Admin User":"Standard User")}}let f=(()=>{class e{constructor(e,t){this.repository=e,this.router=t}ngOnInit(){}getUsers(){return this.repository.getUsers()}deleteUser(e){confirm("Are you sure?")&&void 0!==e?this.repository.deleteUser(e):this.router.navigateByUrl("/admin/main/users")}addUser(){this.router.navigateByUrl("/admin/main/users/add")}editUser(e){this.router.navigateByUrl(`/admin/main/users/edit/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(m.j),s.Y36(i.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["ng-component"]],decls:20,vars:1,consts:[[1,"table","table-sm","table-striped"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-plus-circle"],[1,"btn","btn-sm","btn-primary","m-1",3,"click"],[1,"fas","fa-pencil-alt"],[1,"btn","btn-sm","btn-danger","m-1",3,"click"],[1,"fas","fa-trash-alt"]],template:function(e,t){1&e&&(s.TgZ(0,"table",0),s.TgZ(1,"thead"),s.TgZ(2,"tr"),s.TgZ(3,"th"),s._uU(4,"Name"),s.qZA(),s.TgZ(5,"th"),s._uU(6,"Lastname"),s.qZA(),s.TgZ(7,"th"),s._uU(8,"Username"),s.qZA(),s.TgZ(9,"th"),s._uU(10,"Email"),s.qZA(),s.TgZ(11,"th"),s._uU(12,"UserType"),s.qZA(),s.TgZ(13,"th"),s._uU(14,"Operation"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(15,"tbody"),s.YNc(16,Z,16,5,"tr",1),s.qZA(),s.qZA(),s.TgZ(17,"button",2),s.NdJ("click",function(){return t.addUser()}),s._UZ(18,"i",3),s._uU(19," Add New User "),s.qZA()),2&e&&(s.xp6(16),s.Q6J("ngForOf",t.getUsers()))},directives:[o.sg],encapsulation:2}),e})();var h=n(1837),q=n(3822),A=n(391);let T=(()=>{class e{constructor(e,t,n){this.repository=e,this.router=t,this.editing=!1,this.question=new q.H,this.editing="edit"===n.snapshot.params.mode,this.editing&&Object.assign(this.question,e.getQuestion(n.snapshot.params.id))}ngOnInit(){}save(e){this.repository.saveQuestion(this.question),this.router.navigateByUrl("/admin/main/question")}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(A.Q),s.Y36(i.F0),s.Y36(i.gz))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-question-editor"]],decls:43,vars:19,consts:[[1,"bg-primary","p-2","text-white"],["novalidate","",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["type","text","name","title",1,"form-control",3,"ngModel","ngModelChange"],["type","checkbox","name","questionType",3,"ngModel","ngModelChange"],[1,"ms-2"],[1,"form-group","mt-2"],["type","checkbox","name","status",3,"ngModel","ngModelChange"],["type","date","name","publish",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","q1",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","q2",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","q3",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","q4",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","m-2"],["type","reset","routerLink","/admin/main/question",1,"btn","btn-secondary"],[1,"fas","fa-undo"]],template:function(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",0),s.TgZ(1,"h5"),s._uU(2),s.qZA(),s.qZA(),s.TgZ(3,"form",1,2),s.NdJ("ngSubmit",function(){s.CHM(e);const n=s.MAs(4);return t.save(n)}),s.TgZ(5,"div",3),s.TgZ(6,"label"),s._uU(7,"Title"),s.qZA(),s.TgZ(8,"input",4),s.NdJ("ngModelChange",function(e){return t.question.title=e}),s.qZA(),s.qZA(),s.TgZ(9,"div",3),s.TgZ(10,"input",5),s.NdJ("ngModelChange",function(e){return t.question.questionType=e}),s.qZA(),s.TgZ(11,"label",6),s._uU(12," Multiple Answer"),s.qZA(),s.qZA(),s.TgZ(13,"div",7),s.TgZ(14,"input",8),s.NdJ("ngModelChange",function(e){return t.question.status=e}),s.qZA(),s.TgZ(15,"label",6),s._uU(16," Is Enable"),s.qZA(),s.qZA(),s.TgZ(17,"div",3),s.TgZ(18,"label"),s._uU(19,"Publish Date"),s.qZA(),s.TgZ(20,"input",9),s.NdJ("ngModelChange",function(e){return t.question.publish=e}),s.qZA(),s.qZA(),s.TgZ(21,"div",3),s.TgZ(22,"label"),s._uU(23,"Answer 1 "),s.qZA(),s.TgZ(24,"input",10),s.NdJ("ngModelChange",function(e){return t.question.q1=e}),s.qZA(),s.qZA(),s.TgZ(25,"div",3),s.TgZ(26,"label"),s._uU(27,"Answer 2 "),s.qZA(),s.TgZ(28,"input",11),s.NdJ("ngModelChange",function(e){return t.question.q2=e}),s.qZA(),s.qZA(),s.TgZ(29,"div",3),s.TgZ(30,"label"),s._uU(31,"Answer 3 "),s.qZA(),s.TgZ(32,"input",12),s.NdJ("ngModelChange",function(e){return t.question.q3=e}),s.qZA(),s.qZA(),s.TgZ(33,"div",3),s.TgZ(34,"label"),s._uU(35,"Answer 4 "),s.qZA(),s.TgZ(36,"input",13),s.NdJ("ngModelChange",function(e){return t.question.q4=e}),s.qZA(),s.qZA(),s.TgZ(37,"button",14),s._UZ(38,"i"),s._uU(39),s.qZA(),s.TgZ(40,"button",15),s._UZ(41,"i",16),s._uU(42," Cancel"),s.qZA(),s.qZA()}2&e&&(s.ekj("bg-warning",t.editing)("text-dark",t.editing),s.xp6(2),s.hij("",t.editing?"Edit":"Add"," Question"),s.xp6(6),s.Q6J("ngModel",t.question.title),s.xp6(2),s.Q6J("ngModel",t.question.questionType),s.xp6(4),s.Q6J("ngModel",t.question.status),s.xp6(6),s.Q6J("ngModel",t.question.publish),s.xp6(4),s.Q6J("ngModel",t.question.q1),s.xp6(4),s.Q6J("ngModel",t.question.q2),s.xp6(4),s.Q6J("ngModel",t.question.q3),s.xp6(4),s.Q6J("ngModel",t.question.q4),s.xp6(1),s.ekj("btn-warning",t.editing),s.xp6(1),s.Tol(t.editing?"fas fa-save":"fas fa-plus-circle"),s.xp6(1),s.hij(" ",t.editing?"Save":"Add"," "))},directives:[r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,r.Wl,i.rH],encapsulation:2}),e})();function b(e,t){if(1&e&&(s.TgZ(0,"div",23),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij(" ",e.errorMessage," ")}}const M=i.Bz.forChild([{path:"auth",component:d},{path:"signup",component:(()=>{class e{constructor(e,t,n){this.router=e,this.auth=t,this.repository=n,this.user=new g.n}ngOnInit(){}signup(e){this.repository.signup(this.user),this.router.navigateByUrl("/admin/auth")}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(i.F0),s.Y36(a.e),s.Y36(m.j))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-signup"]],decls:38,vars:6,consts:[[1,"bg-info","p-2","text-center","text-white"],[1,"container"],[1,"row"],[1,"col-md-6","offset-md-3","col-lg-6","offset-lg-3","col-sm-8","offset-sm-1"],["class","bg-danger mt-5 p-2 text-center text-white",4,"ngIf"],["autocomplete","off",3,"ngSubmit"],["form","ngForm"],[1,"form-group","mt-2"],["for","name"],["type","text","name","name","placeholder","Given Name","id","name","required","","autofocus","","autocomplete","off",1,"form-control","mt-2",3,"ngModel","ngModelChange"],["for","lastname"],["type","text","name","lastname","placeholder","Lastname","id","lastname","required","","autocomplete","off",1,"form-control","mt-2",3,"ngModel","ngModelChange"],["for","username"],["type","text","name","username","placeholder","Enter Username","id","username","required","","autocomplete","off",1,"form-control","mt-2",3,"ngModel","ngModelChange"],["for","password"],["type","password","name","password","placeholder","Enter password","id","password","required","","autocomplete","off",1,"form-control","mt-2",3,"ngModel","ngModelChange"],["for","email"],["type","email","name","email","placeholder","Enter email","id","email","required","","autocomplete","off",1,"form-control","mt-2",3,"ngModel","ngModelChange"],[1,"form-group","text-center","mt-2"],["type","submit",1,"btn","btn-primary","m-1"],[1,"fas","fa-save"],["routerLink","/admin/auth",1,"btn","btn-secondary","m-1"],[1,"fas","fa-undo"],[1,"bg-danger","mt-5","p-2","text-center","text-white"]],template:function(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",0),s.TgZ(1,"h3"),s._uU(2,"Survey Website Registeration"),s.qZA(),s.qZA(),s.TgZ(3,"main",1),s.TgZ(4,"div",2),s.TgZ(5,"div",3),s.YNc(6,b,2,1,"div",4),s.TgZ(7,"h1"),s._uU(8,"Enter youu information to register"),s.qZA(),s.TgZ(9,"form",5,6),s.NdJ("ngSubmit",function(){s.CHM(e);const n=s.MAs(10);return t.signup(n)}),s.TgZ(11,"fieldset",7),s.TgZ(12,"label",8),s._uU(13," Given Name:"),s.qZA(),s.TgZ(14,"input",9),s.NdJ("ngModelChange",function(e){return t.user.name=e}),s.qZA(),s.qZA(),s.TgZ(15,"fieldset",7),s.TgZ(16,"label",10),s._uU(17," Lastname:"),s.qZA(),s.TgZ(18,"input",11),s.NdJ("ngModelChange",function(e){return t.user.lastname=e}),s.qZA(),s.qZA(),s.TgZ(19,"fieldset",7),s.TgZ(20,"label",12),s._uU(21," Username:"),s.qZA(),s.TgZ(22,"input",13),s.NdJ("ngModelChange",function(e){return t.user.username=e}),s.qZA(),s.qZA(),s.TgZ(23,"fieldset",7),s.TgZ(24,"label",14),s._uU(25," Password:"),s.qZA(),s.TgZ(26,"input",15),s.NdJ("ngModelChange",function(e){return t.user.password=e}),s.qZA(),s.qZA(),s.TgZ(27,"fieldset",7),s.TgZ(28,"label",16),s._uU(29," Email:"),s.qZA(),s.TgZ(30,"input",17),s.NdJ("ngModelChange",function(e){return t.user.email=e}),s.qZA(),s.qZA(),s.TgZ(31,"fieldset",18),s.TgZ(32,"button",19),s._UZ(33,"i",20),s._uU(34," Register "),s.qZA(),s.TgZ(35,"button",21),s.TgZ(36,"i",22),s._uU(37," Cancel"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}2&e&&(s.xp6(6),s.Q6J("ngIf",null!=t.errorMessage),s.xp6(8),s.Q6J("ngModel",t.user.name),s.xp6(4),s.Q6J("ngModel",t.user.lastname),s.xp6(4),s.Q6J("ngModel",t.user.username),s.xp6(4),s.Q6J("ngModel",t.user.password),s.xp6(4),s.Q6J("ngModel",t.user.email))},directives:[o.O5,r._Y,r.JL,r.F,r.Fj,r.Q7,r.JJ,r.On,i.rH],encapsulation:2}),e})(),data:{title:"Create an Account"}},{path:"main",component:u,canActivate:[c],children:[{path:"users/:mode/:id",component:p,data:{title:"Edit User"},canActivate:[c]},{path:"users/:mode",component:p,data:{title:"Add User"},canActivate:[c]},{path:"users",component:f,data:{title:"User List"},canActivate:[c]},{path:"question/:mode/:id",component:T,data:{title:"Edit Question"},canActivate:[c]},{path:"question/:mode",component:T,data:{title:"Add Question"},canActivate:[c]},{path:"question",component:h._,data:{title:"Question List"},canActivate:[c]},{path:"**",redirectTo:"home"}]},{path:"**",redirectTo:"auth"}]);let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[c],imports:[[o.ez,r.u5,M]]}),e})()}}]);
