(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(t,e,n){},135:function(t,e,n){},136:function(t,e,n){},137:function(t,e,n){"use strict";n.r(e);var c=n(0),M=n.n(c),a=n(12),r=n.n(a),j=(n(105),n(13)),i=n(197),N=n(196),s=n(57),u=n(82),O=Object(u.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:s.a.A400},background:{default:"#fff"}}}),o=n(19),T=n.n(o),D=n(31),z=n(11),I=n(8),x=n.n(I),L=n(14),l=n(185),g=n(176),y=n(179),b=n(181),A=n(200),d=n(180),p=n(139),w=n(182),m=n(184),f=n(183),k=M.a.createContext(null),E=n(3),h=function(){return Object(E.jsx)("div",{id:"oa_social_login"})},Y=n(83),S={getListItems:function(){var t=Object(L.a)(x.a.mark((function t(e){var n,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("/api/lists/".concat(e));case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),deleteList:function(){var t=Object(L.a)(x.a.mark((function t(e){var n,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.delete("/api/lists/".concat(e));case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),deleteItem:function(){var t=Object(L.a)(x.a.mark((function t(e,n){var c,M;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.delete("/api/lists/".concat(e,"/").concat(n));case 3:return c=t.sent,M=c.data,t.abrupt("return",M);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}(),getOwnerLists:function(){var t=Object(L.a)(x.a.mark((function t(e){var n,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("/api/lists/",{headers:{Authorization:"Bearer ".concat(e)}});case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),addItemToList:function(){var t=Object(L.a)(x.a.mark((function t(e,n){var c,M;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.put("/api/lists/".concat(e),Object(Y.a)({},n));case 3:return c=t.sent,M=c.data,t.abrupt("return",M);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}(),createItem:function(){var t=Object(L.a)(x.a.mark((function t(e){var n,c,M,a,r,j;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a.get("https://jordans-cors-anywhere.herokuapp.com/".concat(e));case 2:if(n=t.sent,c=n.data,!(a=c.match(/(?:dp|o|gp|-|product)\/(B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(?:X|[0-9]))/im))){t.next=11;break}return M=["amazon","https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=SL500&ASIN=".concat(a[1])],t.next=9,new Promise((function(t,e){var n=new Image;n.src=M[1],n.onerror=function(){M=["amazon","http://images.amazon.com/images/P/".concat(a[1],".01.SCLZZZZZZZ.jpg")],t()},n.onload=function(){console.log("goooooood"),t()}}));case 9:t.next=12;break;case 11:M=c.match(/<meta.*?og:image.*?content="(.*?)"/im);case 12:return M||(M=["No Image","data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NTUuODEyNSA1MTEuNjYwMTU2aC0zOTkuNjMyODEyYy0xMC40Njg3NSAwLTE4Ljk1MzEyNi04LjQ4NDM3NS0xOC45NTMxMjYtMTguOTUzMTI1di0zMDUuNTg5ODQzaDQzNy41NDI5Njl2MzA1LjU4OTg0M2MwIDEwLjQ2ODc1LTguNDg4MjgxIDE4Ljk1MzEyNS0xOC45NTcwMzEgMTguOTUzMTI1em0wIDAiIGZpbGw9IiNmZmM3M2IiLz48cGF0aCBkPSJtMzcuMjI2NTYyIDE4Ny4xMTcxODhoNDM3LjU0Mjk2OXY2My41ODk4NDNoLTQzNy41NDI5Njl6bTAgMCIgZmlsbD0iI2VmYjAyNSIvPjxwYXRoIGQ9Im01MTIgMTIwLjgyNDIxOXY3OC43ODEyNWMwIDguNDE0MDYyLTYuODI4MTI1IDE1LjIzMDQ2OS0xNS4yNDIxODggMTUuMjMwNDY5aC00ODEuNTI3MzQzYy04LjQxNDA2MyAwLTE1LjIzMDQ2OS02LjgxNjQwNy0xNS4yMzA0NjktMTUuMjMwNDY5di03OC43ODEyNWMwLTguNDE0MDYzIDYuODE2NDA2LTE1LjIzMDQ2OSAxNS4yMzA0NjktMTUuMjMwNDY5aDQ4MS41MjczNDNjOC40MTQwNjMgMCAxNS4yNDIxODggNi44MTY0MDYgMTUuMjQyMTg4IDE1LjIzMDQ2OXptMCAwIiBmaWxsPSIjZmZjNzNiIi8+PHBhdGggZD0ibTIzOC41OTM3NSAxNDEuODEyNWMtMy4zMjQyMTkgMy44NzEwOTQtNi41ODU5MzggNy43OTY4NzUtOS43Njk1MzEgMTEuNzY1NjI1LTExLjg2MzI4MSAxNC43NjE3MTktMjIuNzIyNjU3IDMwLjIzMDQ2OS0zMi41MzkwNjMgNDYuMjg1MTU2LTMuMDE5NTMxIDQuOTM3NS01LjkzMzU5NCA5LjkyNTc4MS04Ljc2MTcxOCAxNC45NzI2NTdoLTEwMy44Mzk4NDRjNi4wNjY0MDYtMTMuNzY1NjI2IDEyLjcxODc1LTI3LjI3NzM0NCAxOS45MjU3ODEtNDAuNDg0Mzc2IDEzLjA3MDMxMy0yMy45NjA5MzcgMjcuOTg0Mzc1LTQ2Ljk1MzEyNCA0NC42NDg0MzctNjguNzU3ODEyIDMuOTgwNDY5LTUuMjA3MDMxIDguMDU0Njg4LTEwLjM1MTU2MiAxMi4yMzA0NjktMTUuNDE3OTY5IDIuNS0zLjA1NDY4NyA1LjA0Mjk2OS02LjA2NjQwNiA3LjYyMTA5NC05LjA2NjQwNiA5LjQ3NjU2MyA4LjE2NDA2MyAxOC45NDUzMTMgMTYuMzIwMzEzIDI4LjQyNTc4MSAyNC40ODQzNzUgMS40Njg3NSAxLjI1NzgxMiAyLjkzNzUgMi41MzEyNSA0LjQwMjM0NCAzLjc5Mjk2OSAxMS4xODc1IDkuNjMyODEyIDIyLjM3NSAxOS4yNjE3MTkgMzMuNTU4NTk0IDI4LjkwNjI1IDEuMzcxMDk0IDEuMTY0MDYyIDIuNzMwNDY4IDIuMzQ3NjU2IDQuMDk3NjU2IDMuNTE5NTMxem0wIDAiIGZpbGw9IiNlZmIwMjUiLz48cGF0aCBkPSJtMzkzLjUyNzM0NCAyMTQuODM1OTM4aC0xMDMuODQ3NjU2Yy0yLjgxNjQwNy01LjA0Njg3Ni01Ljc0MjE4OC0xMC4wMzUxNTctOC43NjE3MTktMTQuOTcyNjU3LTkuODE2NDA3LTE2LjA1NDY4Ny0yMC42ODc1LTMxLjUyMzQzNy0zMi41MzkwNjMtNDYuMjg1MTU2LTMuMTk1MzEyLTMuOTY4NzUtNi40NTcwMzEtNy44OTQ1MzEtOS43ODUxNTYtMTEuNzY1NjI1IDEuMzcxMDk0LTEuMTcxODc1IDIuNzMwNDY5LTIuMzQ3NjU2IDQuMTAxNTYyLTMuNTE5NTMxIDExLjE5NTMxMy05LjY0NDUzMSAyMi4zODI4MTMtMTkuMjg1MTU3IDMzLjU2NjQwNy0yOC45MDYyNSAxLjQ2ODc1LTEuMjYxNzE5IDIuOTM3NS0yLjUzNTE1NyA0LjQwNjI1LTMuNzkyOTY5IDkuNDc2NTYyLTguMTY0MDYyIDE4Ljk1NzAzMS0xNi4zMjAzMTIgMjguNDI1NzgxLTI0LjQ4NDM3NSAyLjU3ODEyNSAyLjk5MjE4NyA1LjEyMTA5NCA2LjAxMTcxOSA3LjYyMTA5NCA5LjA1ODU5NCA0LjE4MzU5NCA1LjA3NDIxOSA4LjI2MTcxOCAxMC4yMTg3NSAxMi4yMzA0NjggMTUuNDI1NzgxIDE2LjY2NDA2MyAyMS44MDQ2ODggMzEuNTc4MTI2IDQ0Ljc5Njg3NSA0NC42NTYyNSA2OC43NTc4MTIgNy4yMDcwMzIgMTMuMjA3MDMyIDEzLjg1OTM3NiAyNi43MTg3NSAxOS45MjU3ODIgNDAuNDg0Mzc2em0wIDAiIGZpbGw9IiNlZmIwMjUiLz48ZyBmaWxsPSIjZmY0NDQwIj48cGF0aCBkPSJtMjU1Ljk5MjE4OCAxNDEuODIwMzEyYy0zLjMyODEyNiAzLjg2NzE4OC02LjU4OTg0NCA3Ljc5Mjk2OS05Ljc3MzQzOCAxMS43NjE3MTktMTEuODU5Mzc1IDE0Ljc2MTcxOS0yMi43MjI2NTYgMzAuMjMwNDY5LTMyLjUzOTA2MiA0Ni4yODkwNjMtMzEuMTY0MDYzIDUwLjk0MTQwNi01MS44NjMyODIgMTA3Ljg0NzY1Ni02MC41OTM3NSAxNjcuNDEwMTU2LTEzLjEyMTA5NC0xNy40MDIzNDQtMjUuMjMwNDY5LTM2LjIzMDQ2OS0zNi4xMjUtNTYuMzYzMjgxLTE5LjE2NDA2MyAxMi41LTM3Ljg5NDUzMiAyNi43OTY4NzUtNTUuOTI5Njg4IDQyLjg4MjgxMiA5LjI2MTcxOS02My4xNzk2ODcgMjkuNjY3OTY5LTEyMy45MDYyNSA1OS45NzY1NjItMTc5LjQ0NTMxMiAxNi4xODc1LTI5LjY3OTY4OCAzNS4yMTA5MzgtNTcuODc4OTA3IDU2Ljg3NS04NC4xNzU3ODEgMi41LTMuMDU0Njg4IDUuMDQyOTY5LTYuMDYyNSA3LjYyMTA5NC05LjA2NjQwNyAxMC45NDUzMTMgOS40MjU3ODEgMjEuODgyODEzIDE4Ljg1MTU2MyAzMi44MzIwMzIgMjguMjc3MzQ0IDExLjE4MzU5MyA5LjYzMjgxMyAyMi4zNzEwOTMgMTkuMjYxNzE5IDMzLjU1ODU5MyAyOC45MDYyNSAxLjM2NzE4OCAxLjE2NDA2MyAyLjcyNjU2MyAyLjM0NzY1NiA0LjA5NzY1NyAzLjUyMzQzN3ptMCAwIi8+PHBhdGggZD0ibTQ1MC45NjA5MzggMzUzLjgwMDc4MWMtMTguMDM1MTU3LTE2LjA4NTkzNy0zNi43NjU2MjYtMzAuMzgyODEyLTU1LjkyOTY4OC00Mi44ODI4MTItMTAuODk0NTMxIDIwLjEzMjgxMi0yMy4wMDM5MDYgMzguOTYwOTM3LTM2LjEyNSA1Ni4zNjMyODEtOC43MzA0NjktNTkuNTYyNS0yOS40MjU3ODEtMTE2LjQ2ODc1LTYwLjU5Mzc1LTE2Ny40MTAxNTYtOS44MTY0MDYtMTYuMDU4NTk0LTIwLjY4NzUtMzEuNTI3MzQ0LTMyLjUzOTA2Mi00Ni4yODkwNjMtMy4xOTUzMTMtMy45Njg3NS02LjQ1NzAzMi03Ljg5NDUzMS05Ljc4MTI1LTExLjc2MTcxOSAxLjM2NzE4Ny0xLjE3NTc4MSAyLjcyNjU2Mi0yLjM1MTU2MiA0LjA5NzY1Ni0zLjUyMzQzNyAxMS4xOTUzMTItOS42NDQ1MzEgMjIuMzgyODEyLTE5LjI4NTE1NiAzMy41NzAzMTItMjguOTA2MjUgMTAuOTQ1MzEzLTkuNDM3NSAyMS44OTQ1MzItMTguODUxNTYzIDMyLjgyODEyNS0yOC4yNzczNDQgMi41NzgxMjUgMi45OTIxODggNS4xMjEwOTQgNi4wMTE3MTkgNy42MjEwOTQgOS4wNTg1OTQgMjEuNjY3OTY5IDI2LjI5Njg3NSA0MC42OTE0MDYgNTQuNDk2MDk0IDU2Ljg4NjcxOSA4NC4xODM1OTQgMzAuMzAwNzgxIDU1LjUzOTA2MiA1MC43MDMxMjUgMTE2LjI2NTYyNSA1OS45NjQ4NDQgMTc5LjQ0NTMxMnptMCAwIi8+PHBhdGggZD0ibTIxNS4yMzQzNzUgMTQxLjgyMDMxMmg4MS41MjczNDR2NzMuMDE1NjI2aC04MS41MjczNDR6bTAgMCIvPjwvZz48cGF0aCBkPSJtMzkwLjk5NjA5NCAxNzQuMzU1NDY5LTkyLjY4MzU5NCAyNS41MTU2MjVjLTkuODE2NDA2LTE2LjA1ODU5NC0yMC42ODc1LTMxLjUyNzM0NC0zMi41MzkwNjItNDYuMjg5MDYzbC01LjY4MzU5NC0xNS4yODUxNTYtNC4wOTc2NTYtMTEuMDIzNDM3IDM3LjY2Nzk2OC0xNy44ODI4MTMgNDAuNDQ5MjE5LTE5LjIxODc1YzIxLjY2Nzk2OSAyNi4yOTY4NzUgNDAuNjkxNDA2IDU0LjQ5NjA5NCA1Ni44ODY3MTkgODQuMTgzNTk0em0wIDAiIGZpbGw9IiNlYTJmMmYiLz48cGF0aCBkPSJtMjU1Ljk5MjE4OCAxMjcuMjczNDM4LTQuMDk3NjU3IDExLjAyMzQzNy01LjY3NTc4MSAxNS4yODUxNTZjLTExLjg1OTM3NSAxNC43NjE3MTktMjIuNzIyNjU2IDMwLjIzMDQ2OS0zMi41MzkwNjIgNDYuMjg5MDYzbC05Mi42NzE4NzYtMjUuNTE1NjI1YzE2LjE4NzUtMjkuNjc5Njg4IDM1LjIxMDkzOC01Ny44Nzg5MDcgNTYuODc1LTg0LjE3NTc4MWw0MC40NTMxMjYgMTkuMjEwOTM3em0wIDAiIGZpbGw9IiNlYTJmMmYiLz48cGF0aCBkPSJtNDAzLjkxNDA2MiAzLjU0Mjk2OS0xNDcuOTE3OTY4IDcwLjI0NjA5MyAyOC40MTQwNjIgNzYuNDE3OTY5IDE1Ny44ODI4MTMtNDMuNDU3MDMxYzIwLjY0ODQzNy01LjY4MzU5NCAzMS45OTIxODctMjcuODQzNzUgMjQuNTI3MzQzLTQ3LjkxNzk2OWwtMTMuMDMxMjUtMzUuMDM5MDYyYy03LjQ2MDkzNy0yMC4wNzQyMTktMzAuNTI3MzQzLTI5LjQzNzUtNDkuODc1LTIwLjI1em0wIDAiIGZpbGw9IiNmZjQ0NDAiLz48cGF0aCBkPSJtMTA4LjA3ODEyNSAzLjU0Mjk2OSAxNDcuOTE3OTY5IDcwLjI0NjA5My0yOC40MTQwNjMgNzYuNDE3OTY5LTE1Ny44Nzg5MDYtNDMuNDU3MDMxYy0yMC42NDg0MzctNS42ODM1OTQtMzEuOTkyMTg3LTI3Ljg0Mzc1LTI0LjUyNzM0NC00Ny45MTc5NjlsMTMuMDI3MzQ0LTM1LjAzOTA2MmM3LjQ2NDg0NC0yMC4wNzQyMTkgMzAuNTI3MzQ0LTI5LjQzNzUgNDkuODc1LTIwLjI1em0wIDAiIGZpbGw9IiNmZjQ0NDAiLz48cGF0aCBkPSJtMjkxLjMxNjQwNiAxMDQuNWMtMi42ODc1IDAtNS4zMjQyMTgtMS4zMjgxMjUtNi44NzUtMy43NjE3MTktMi40MjU3ODEtMy43OTI5NjktMS4zMjAzMTItOC44MzIwMzEgMi40NzI2NTYtMTEuMjU3ODEyIDEuMTIxMDk0LS43MTQ4NDQgMjcuNzYxNzE5LTE3LjY2Nzk2OSA1OC4zNDc2NTctMzAuMDM5MDYzIDQ0LjA5Mzc1LTE3LjgzNTkzNyA3My41MzkwNjItMTYuODc4OTA2IDg3LjUwNzgxMiAyLjg0Mzc1IDIuNjA1NDY5IDMuNjc1NzgyIDEuNzM0Mzc1IDguNzY1NjI1LTEuOTQxNDA2IDExLjM2NzE4OC0zLjY3NTc4MSAyLjYwMTU2Mi04Ljc2MTcxOSAxLjczNDM3NS0xMS4zNjMyODEtMS45NDE0MDYtMTguOTM3NS0yNi43MzQzNzYtOTcuNjc1NzgyIDE0LjgzNTkzNy0xMjMuNzY1NjI1IDMxLjUwNzgxMi0xLjM1OTM3NS44NjcxODgtMi44Nzg5MDcgMS4yODEyNS00LjM4MjgxMyAxLjI4MTI1em0wIDAiIGZpbGw9IiNlYTJmMmYiLz48cGF0aCBkPSJtMjE5Ljg3MTA5NCAxMDQuNWMtMS41MDM5MDYgMC0zLjAyMzQzOC0uNDE0MDYyLTQuMzgyODEzLTEuMjgxMjUtMjYuMDg5ODQzLTE2LjY3MTg3NS0xMDQuODI4MTI1LTU4LjI0MjE4OC0xMjMuNzY1NjI1LTMxLjUwNzgxMi0yLjYwNTQ2OCAzLjY3NTc4MS03LjY5MTQwNiA0LjU0Mjk2OC0xMS4zNjcxODcgMS45NDE0MDYtMy42NzE4NzUtMi42MDU0NjktNC41NDI5NjktNy42OTE0MDYtMS45Mzc1LTExLjM2NzE4OCAxMy45Njg3NS0xOS43MjI2NTYgNDMuNDEwMTU2LTIwLjY3OTY4NyA4Ny41MDc4MTItMi44NDM3NSAzMC41ODU5MzggMTIuMzY3MTg4IDU3LjIyNjU2MyAyOS4zMjQyMTkgNTguMzQ3NjU3IDMwLjAzOTA2MyAzLjc5Mjk2OCAyLjQyNTc4MSA0Ljg5ODQzNyA3LjQ2NDg0MyAyLjQ3NjU2MiAxMS4yNTc4MTItMS41NTg1OTQgMi40MzM1OTQtNC4xOTE0MDYgMy43NjE3MTktNi44Nzg5MDYgMy43NjE3MTl6bTAgMCIgZmlsbD0iI2VhMmYyZiIvPjxwYXRoIGQ9Im0yNzkuMTkxNDA2IDQ3LjUyMzQzOGgtNDYuMzkwNjI1Yy0xMi42OTUzMTIgMC0yMi45ODgyODEgMTAuMjkyOTY4LTIyLjk4ODI4MSAyMi45OTIxODd2NjcuMzk0NTMxYzAgMTIuNjk5MjE5IDEwLjI5Mjk2OSAyMi45OTIxODggMjIuOTg4MjgxIDIyLjk5MjE4OGg0Ni4zOTA2MjVjMTIuNjk1MzEzIDAgMjIuOTg4MjgyLTEwLjI5Mjk2OSAyMi45ODgyODItMjIuOTkyMTg4di02Ny4zOTQ1MzFjMC0xMi42OTkyMTktMTAuMjkyOTY5LTIyLjk5MjE4Ny0yMi45ODgyODItMjIuOTkyMTg3em0wIDAiIGZpbGw9IiNlYTJmMmYiLz48cGF0aCBkPSJtMjE1LjIzNDM3NSAyMTQuODM1OTM4aDgxLjUyNzM0NHYyOTYuODI0MjE4aC04MS41MjczNDR6bTAgMCIgZmlsbD0iI2ZmNDQ0MCIvPjxwYXRoIGQ9Im0yMTUuMjM0Mzc1IDIxNC44MzU5MzhoODEuNTI3MzQ0djM1Ljg3MTA5M2gtODEuNTI3MzQ0em0wIDAiIGZpbGw9IiNlYTJmMmYiLz48L3N2Zz4="]),r=c.match(/<title.*?>(.*?)</im),j={link:e,imageLink:M[1],itemName:r[1]},t.abrupt("return",j);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),giftItem:function(){var t=Object(L.a)(x.a.mark((function t(e,n,c){var M,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.patch("/api/lists/".concat(n),{userId:e,itemId:c});case 3:return M=t.sent,a=M.data,t.abrupt("return",a);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n,c){return t.apply(this,arguments)}}()},U=function(){var t=Object(z.f)(),e=Object(z.g)(),n=Object(c.useContext)(k),M=Object(c.useState)(!1),a=Object(j.a)(M,2),r=a[0],i=a[1],N=Object(c.useState)([]),s=Object(j.a)(N,2),u=s[0],O=s[1],o=function(){var c=Object(L.a)(x.a.mark((function c(){var M,a;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,T.a.get("/api/user/".concat(e.token));case 3:M=c.sent,a=M.data,n.setUserId(a._id),n.setUserAvatar(a.image),n.setUserName(a.name),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),console.log(c.t0);case 13:return c.prev=13,t.push("/list/".concat(e.id)),c.finish(13);case 16:case"end":return c.stop()}}),c,null,[[0,10,13,16]])})));return function(){return c.apply(this,arguments)}}();Object(c.useEffect)((function(){(function(){var t=Object(L.a)(x.a.mark((function t(){var c,M;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i(!0),t.prev=1,!e.id){t.next=12;break}return t.next=5,T.a.get("/api/lists/".concat(e.id));case 5:c=t.sent,M=c.data,n.setListId(e.id),n.setListName(M.listName),n.setOwnerId(M.owner._id),n.setOwnerName(M.owner.name),n.setOwnerAvatar(M.owner.image);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(){return t.apply(this,arguments)}})()(),i(!1)}),[]),Object(c.useEffect)((function(){e.token&&o()}),[]);var D=function(){var t=Object(L.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i(!0),t.prev=1,!n.listId||!n.userId){t.next=7;break}return t.next=5,S.getListItems(n.listId);case 5:e=t.sent,O(e.listItems);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:return t.prev=12,i(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=Object(L.a)(x.a.mark((function t(e){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.giftItem(n.userId,n.listId,e);case 3:return t.sent,t.next=6,D();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.dir(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){D()}),[n.listId,n.userId]),Object(E.jsx)(E.Fragment,{children:r?Object(E.jsx)(l.a,{}):n.userId?Object(E.jsx)(g.a,{component:"nav",children:u.length?u.map((function(t){return Object(E.jsxs)(g.a,{children:[Object(E.jsxs)(y.a,{button:!0,alignItems:"flex-start",children:[Object(E.jsx)(d.a,{children:Object(E.jsx)(A.a,{alt:t.itemName,src:t.imageLink})}),Object(E.jsx)(b.a,{primary:t.itemName})]}),Object(E.jsx)(y.a,{children:Object(E.jsxs)(w.a,{"aria-label":"outlined primary button group",children:[Object(E.jsx)(p.a,{disabled:t.taker,onClick:function(){return I(t._id)},className:"btn",children:"Gift This"}),Object(E.jsx)(p.a,{component:f.a,target:"_blank",href:t.link,children:"Go Here"})]})}),Object(E.jsx)(m.a,{})]},t._id)})):""}):Object(E.jsx)(h,{})})},v=n(140),C=n(194),Q=n(198),G=n(186),Z=n(190),P=n(188),B=n(189),F=n(187),_=function(t){var e=Object(c.useContext)(k),n=Object(z.f)(),M=function(){var t=Object(L.a)(x.a.mark((function t(){var c,M;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.post("/api/owner/lists",{owner:e.ownerId,listName:u});case 3:c=t.sent,M=c.data,console.log(e),console.log(M._id),e.setListId(M._id),e.setListName(M.listName),n.push("/list"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),a=function(){return!Boolean(u.length)},r=t.open,i=t.onClose,N=Object(c.useState)("Wedding Gift List"),s=Object(j.a)(N,2),u=s[0],O=s[1],o=Object(c.useState)(a()),D=Object(j.a)(o,2),I=D[0],l=D[1];return Object(c.useEffect)((function(){return l(a())}),[u]),Object(E.jsxs)(G.a,{open:r,onClose:i,"aria-labelledby":"form-dialog-title",children:[Object(E.jsx)(F.a,{id:"form-dialog-title",children:"New Gift Registry List"}),Object(E.jsxs)(P.a,{children:[Object(E.jsx)(B.a,{children:"Create a new gift registry."}),Object(E.jsx)(Q.a,{autoFocus:!0,margin:"dense",id:"listName",label:"Name",type:"text",fullWidth:!0,required:!0,value:u,onChange:function(t){O(t.target.value)},error:I})]}),Object(E.jsxs)(Z.a,{children:[Object(E.jsx)(p.a,{onClick:i,color:"primary",children:"Cancel"}),Object(E.jsx)(p.a,{onClick:M,color:"primary",disabled:I,children:"Create"})]})]})},J=n(192),W=n(193),R=n(191),H=Object(R.a)((function(t){return{nav:{justifyContent:"space-between"}}})),X=function(t){var e=t.children,n=H(),M=Object(c.useContext)(k),a="gifter"===M.mode?"/login":"/";return Object(E.jsx)(J.a,{position:"static",children:Object(E.jsxs)(W.a,{className:n.nav,children:[Object(E.jsx)(p.a,{color:"inherit",component:D.b,to:a,onClick:function(){M.setMode("gifter"===M.mode?"owner":"owner"===M.mode&&"gifter")},children:"Switch Mode"}),e&&e,Object(E.jsxs)("span",{children:[Object(E.jsx)(A.a,{alt:M.ownerName,src:M.ownerAvatar}),"owner"===M.mode&&Object(E.jsx)(p.a,{color:"inherit",component:D.b,to:"/",onClick:function(){},className:n.navItem,children:"Sign Out"})]})]})})},V=function(){var t=Object(c.useState)(!1),e=Object(j.a)(t,2),n=e[0],M=e[1],a=Object(c.useState)([]),r=Object(j.a)(a,2),i=r[0],N=r[1],s=Object(c.useState)(!1),u=Object(j.a)(s,2),O=u[0],o=u[1],I=Object(c.useContext)(k),A=Object(z.g)(),d=Object(z.f)(),w=function(){var t=Object(L.a)(x.a.mark((function t(e){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.deleteList(e);case 3:n=t.sent,console.log(n),m(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(L.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.prev=1,t.next=4,S.getOwnerLists(I.ownerId);case 4:e=t.sent,N(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,o(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(L.a)(x.a.mark((function t(){var e,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("/api/user/".concat(A.token));case 3:e=t.sent,n=e.data,I.setOwnerId(n._id),I.setUserId(n._id),I.setOwnerAvatar(n.image),I.setUserAvatar(n.image),I.setOwnerName(n.name),I.setUserName(n.name),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0.data);case 16:return t.prev=16,d.push("/"),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){I.ownerId&&m()}),[I.ownerId]),Object(c.useEffect)((function(){if(A.page)return d.push("".concat(A.page,"?token=").concat(A.token));A.token&&f()}),[]),Object(E.jsxs)("div",{children:[Object(E.jsx)(X,{}),O?Object(E.jsx)(v.a,{open:O,children:Object(E.jsx)(l.a,{color:"inherit"})}):I.ownerId?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(g.a,{component:"nav",children:[i.length?i.map((function(t){return Object(E.jsxs)(y.a,{button:!0,component:D.b,to:"/list",onClick:function(){I.setListId(t._id),I.setListName(t.listName)},children:[Object(E.jsx)(b.a,{primary:t.listName}),Object(E.jsx)(C.a,{children:Object(E.jsx)(p.a,{variant:"contained",onClick:function(){return w(t._id)},children:"Delete"})})]},t._id)})):"",Object(E.jsx)(y.a,{button:!0,onClick:function(){M(!0)},children:Object(E.jsx)(b.a,{primary:"Create a New Gift List"})})]}),Object(E.jsx)(_,{open:n,onClose:function(){M(!1)}})]}):Object(E.jsx)(h,{})]})},q=n(199),K=n(195),$=(n(135),function(t){var e=t.src;return Object(E.jsx)("iframe",{src:e,title:e,target:"_parent",is:"x-frame-bypass"})}),tt=(n(136),function(){var t=Object(c.useContext)(k),e=Object(c.useRef)(null),n=Object(c.useState)("https://www.amazon.com/"),M=Object(j.a)(n,2),a=M[0],r=M[1],i=Object(c.useState)(a),N=Object(j.a)(i,2),s=N[0],u=N[1],O=Object(c.useState)([]),o=Object(j.a)(O,2),T=o[0],D=o[1],I=Object(c.useState)(!0),l=Object(j.a)(I,2),f=l[0],h=l[1],Y=Object(z.f)(),U=function(){return Y.push("/")},v=function(){var e=Object(L.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.deleteList(t.listId);case 3:n=e.sent,console.log(n),U(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(L.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,S.getListItems(t.listId);case 4:n=e.sent,D(n.listItems),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var n=Object(L.a)(x.a.mark((function n(){var c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),n.prev=1,n.next=4,S.createItem(e.current.firstElementChild.dataset.actualurl);case 4:return c=n.sent,n.next=7,S.addItemToList(t.listId,c);case 7:return n.sent,n.next=10,C();case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.dir(n.t0);case 15:return n.prev=15,h(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,12,15,18]])})));return function(){return n.apply(this,arguments)}}(),Z=function(){var e=Object(L.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.deleteItem(t.listId,n);case 3:return e.sent,e.next=6,C();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.dir(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){C()}),[]),Object(c.useEffect)((function(){return u(a)}),[a]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(X,{children:Object(E.jsxs)("div",{className:"nav-list-section",children:[Object(E.jsx)("div",{children:t.listName}),Object(E.jsx)("div",{children:Object(E.jsxs)(w.a,{"aria-label":"outlined primary button group",children:[Object(E.jsx)(p.a,{onClick:v,children:"Delete List"}),Object(E.jsx)(p.a,{onClick:U,children:"Switch List"})]})})]})}),Object(E.jsxs)(q.a,{className:"url-box",children:[Object(E.jsx)(Q.a,{id:"urlBar",label:"url",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",value:s,onChange:function(t){return u(t.target.value)}}),Object(E.jsx)(K.a,{"aria-label":"search",onClick:function(){return r(s)},children:Object(E.jsx)("i",{class:"fas fa-search"})})]}),Object(E.jsxs)("div",{className:"iframe-container",children:[Object(E.jsx)("div",{ref:e,children:Object(E.jsx)($,{src:a})}),Object(E.jsx)("div",{className:"iframe-add-nav-btn-wrap",children:Object(E.jsxs)("button",{className:"iframe-add-nav-btn",onClick:G,disabled:f,children:[Object(E.jsx)("i",{class:"fas fa-plus"}),"Add to List"]})}),Object(E.jsx)(g.a,{component:"nav",children:T.map((function(t){return Object(E.jsxs)(g.a,{children:[Object(E.jsxs)(y.a,{button:!0,alignItems:"flex-start",onClick:function(e){e.target.classList.contains("btn")||r(t.link)},children:[Object(E.jsx)(d.a,{children:Object(E.jsx)(A.a,{alt:t.itemName,src:t.imageLink})}),Object(E.jsx)(b.a,{primary:t.itemName})]},t._id),Object(E.jsx)(y.a,{children:Object(E.jsx)(p.a,{onClick:function(){return Z(t._id)},className:"btn",children:"Delete Item"})}),Object(E.jsx)(m.a,{})]})}))})]})]})}),et=function(){Object(c.useContext)(k);return Object(E.jsx)(D.a,{children:Object(E.jsxs)(z.c,{children:[Object(E.jsx)(z.a,{path:"/",exact:!0,children:Object(E.jsx)(V,{})}),Object(E.jsx)(z.a,{path:"/list",exact:!0,children:Object(E.jsx)(tt,{})}),Object(E.jsx)(z.a,{path:"/list/:id",exact:!0,children:Object(E.jsx)(U,{})})]})})};var nt=function(){var t=Object(c.useState)(),e=Object(j.a)(t,2),n=e[0],M=e[1],a=Object(c.useState)(),r=Object(j.a)(a,2),s=r[0],u=r[1],o=Object(c.useState)(),T=Object(j.a)(o,2),D=T[0],z=T[1],I=Object(c.useState)(),x=Object(j.a)(I,2),L=x[0],l=x[1],g=Object(c.useState)(),y=Object(j.a)(g,2),b=y[0],A=y[1],d=Object(c.useState)(),p=Object(j.a)(d,2),w=p[0],m=p[1],f=Object(c.useState)(),h=Object(j.a)(f,2),Y=h[0],S=h[1],U=Object(c.useState)(),v=Object(j.a)(U,2),C=v[0],Q=v[1],G=Object(c.useState)(),Z=Object(j.a)(G,2),P=Z[0],B=Z[1];return Object(E.jsx)(N.a,{theme:O,children:Object(E.jsxs)(k.Provider,{value:{listId:C,setListId:Q,listName:P,setListName:B,token:n,setToken:M,ownerId:s,setOwnerId:u,userId:D,setUserId:z,ownerName:L,setOwnerName:l,userName:b,setUserName:A,ownerAvatar:w,setOwnerAvatar:m,userAvatar:Y,setUserAvatar:S},children:[Object(E.jsx)(i.a,{}),Object(E.jsx)(et,{})]})})},ct=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,202)).then((function(e){var n=e.getCLS,c=e.getFID,M=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),M(t),a(t),r(t)}))};r.a.render(Object(E.jsx)(M.a.StrictMode,{children:Object(E.jsx)(nt,{})}),document.getElementById("root")),ct()}},[[137,1,2]]]);
//# sourceMappingURL=main.9123a1e2.chunk.js.map