(()=>{"use strict";var e={640:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Deferred=void 0;var n=function(){function e(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.then=function(e,t){return this.promise.then(e,t)},e.prototype.catch=function(e){return this.promise.catch(e)},e.prototype.finally=function(e){throw new Error("NOT IMPLEMENTED")},e}();t.Deferred=n,Symbol.toStringTag},7956:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PNPDeleteAllButton=void 0;var i=n(1382),a=n(8976),c=n(6676),l=n(658),u=0,s=0;function d(){if(!document.querySelector("#DELETE_ALL_INITIATIVES_BUTTON_WRAPPER")){var e=document.createElement("e-ui-button");e.id="DELETE_ALL_INITIATIVES_BUTTON_WRAPPER",e.setAttribute("priority","danger"),e.classList.add("ui"),e.classList.add("ui-node"),e.innerHTML='\n        <button class="button-wrapper" id="DELETE_ALL_INITIATIVES_BUTTON">\n            <span id="DELETE_ALL_INITIATIVES_BUTTON_TEXT" class="button-text">Delete all</span>\n        </button>\n    ',document.querySelector(c.PNPHelpers.headerSelector).prepend(e),c.PNPHelpers.setButtonStatus(!1),p()}}function f(e){var t=document.querySelector("#DELETE_ALL_INITIATIVES_BUTTON_WRAPPER");if(t){t.classList.remove("disabled"),e||t.classList.add("disabled");var n=document.querySelector("#DELETE_ALL_INITIATIVES_BUTTON_WRAPPER");n&&(n.onclick=e?function(){!function(){r(this,void 0,void 0,(function(){var e,t,n,d=this;return o(this,(function(f){switch(f.label){case 0:return(e=a.PNPProject.getProjectData())?(c.PNPHelpers.setButtonStatus(!1),[4,l.PNPInitiative.getInitiativeList(e._id)]):(c.PNPHelpers.handleError("Could not find Project ID"),[2]);case 1:return t=f.sent(),s=0,u=t.length,prompt("You are about to delete ".concat(u," initiative").concat(u>1?"s":"",". Rewrite the amount to continue."))!=="".concat(u)?(alert("Canceling deletion"),c.PNPHelpers.setButtonStatus(!0),[2]):(p(),n=[],[4,(0,i.asyncForEach)(t,(function(t){return r(d,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,l.PNPInitiative.deleteInitiative(t._id,e._id)];case 1:return r=o.sent(),s++,p(),r?(r.success||n.push([t,null]),[2]):(n.push([t,null]),[2])}}))}))}))]);case 2:return f.sent(),n.forEach((function(e){c.PNPHelpers.handleError("".concat(e[0].name," (").concat(e[0]._id,") delete failed"),e[1])})),c.PNPHelpers.setButtonStatus(!0),u=0,p(),alert("Refresh the page to reload the list of initiatives"),[2]}}))}))}()}:null)}}function p(){var e=document.querySelector("#DELETE_ALL_INITIATIVES_BUTTON_TEXT");e&&(e.innerHTML="Delete all",u>0&&(e.innerHTML+=" ".concat(s," / ").concat(u)))}!function(e){e.create=d,e.setEnabled=f}(t.PNPDeleteAllButton||(t.PNPDeleteAllButton={}))},485:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PNPDownloadAllButton=void 0;var i=n(1382),a=n(8976),c=n(6676),l=n(658),u=0,s=0;function d(){if(!document.querySelector("#DOWNLOAD_ALL_INITIATIVES_BUTTON_WRAPPER")){var e=document.createElement("e-ui-button");e.id="DOWNLOAD_ALL_INITIATIVES_BUTTON_WRAPPER",e.classList.add("ui"),e.classList.add("ui-node"),e.innerHTML='\n        <button class="button-wrapper" id="DOWNLOAD_ALL_INITIATIVES_BUTTON">\n            <span id="DOWNLOAD_ALL_INITIATIVES_BUTTON_TEXT" class="button-text">Download all</span>\n        </button>\n    ',document.querySelector(c.PNPHelpers.headerSelector).prepend(e),c.PNPHelpers.setButtonStatus(!1),p()}}function f(e){var t=document.querySelector("#DOWNLOAD_ALL_INITIATIVES_BUTTON_WRAPPER");if(t){t.classList.remove("disabled"),e||t.classList.add("disabled");var n=document.querySelector("#DOWNLOAD_ALL_INITIATIVES_BUTTON_WRAPPER");n&&(n.onclick=e?function(){!function(){r(this,void 0,void 0,(function(){var e,t,n,d,f,I,h,_=this;return o(this,(function(T){switch(T.label){case 0:return(e=a.PNPProject.getProjectData())?(t="".concat(c.PNPHelpers.getMajorVersionString()),n="".concat(c.PNPHelpers.getMajorVersionString()," - ").concat(e.company_name," - Initiatives.zip"),c.PNPHelpers.setButtonStatus(!1),[4,l.PNPInitiative.getInitiativeList(e._id)]):(c.PNPHelpers.handleError("Could not find Project ID"),[2]);case 1:return d=T.sent(),s=0,u=d.length,p(),f=[],I=new JSZip,h=I.folder(t),[4,(0,i.asyncForEach)(d,(function(t){return r(_,void 0,void 0,(function(){var n,r,i,a;return o(this,(function(o){switch(o.label){case 0:return[4,l.PNPInitiative.getInitiative(t._id,e._id)];case 1:return n=o.sent(),s++,p(),n?n.errors?(f.push([t,n]),[2]):(r=t.name.replace(/\//g,"-").replace(/\\/g,"-"),i=JSON.stringify(n),a="".concat(r,".json"),h.file(a,i),[2]):(f.push([t,null]),[2])}}))}))}))];case 2:return T.sent(),f.forEach((function(e){c.PNPHelpers.handleError("".concat(e[0].name," (").concat(e[0]._id,") export failed"),e[1])})),c.PNPHelpers.setButtonStatus(!0),u=0,p(),[2,I.generateAsync({type:"blob"}).then((function(e){saveAs(e,n)}))]}}))}))}()}:null)}}function p(){var e=document.querySelector("#DOWNLOAD_ALL_INITIATIVES_BUTTON_TEXT");e&&(e.innerHTML="Download all",u>0&&(e.innerHTML+=" ".concat(s," / ").concat(u)))}!function(e){e.create=d,e.setEnabled=f}(t.PNPDownloadAllButton||(t.PNPDownloadAllButton={}))},4463:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PNPMassImportButton=void 0;var i=n(6676),a=n(1382),c=n(8976),l=n(658),u=0,s=0;function d(){if(!document.querySelector("#IMPORT_ALL_INITIATIVES_BUTTON_WRAPPER")){var e=document.createElement("e-ui-button");e.id="IMPORT_ALL_INITIATIVES_BUTTON_WRAPPER",e.setAttribute("priority","secondary"),e.classList.add("ui"),e.classList.add("ui-node"),e.innerHTML='\n        <button class="button-wrapper" id="IMPORT_ALL_INITIATIVES_BUTTON">\n            <span id="IMPORT_ALL_INITIATIVES_BUTTON_TEXT" class="button-text">Mass import</span>\n        </button>\n    ',document.querySelector(i.PNPHelpers.headerSelector).prepend(e),i.PNPHelpers.setButtonStatus(!1),p()}}function f(e){var t=document.querySelector("#IMPORT_ALL_INITIATIVES_BUTTON_WRAPPER");if(t){t.classList.remove("disabled"),e||t.classList.add("disabled");var n=document.querySelector("#IMPORT_ALL_INITIATIVES_BUTTON_WRAPPER");n&&(n.onclick=e?function(){I(!0)}:null)}}function p(){var e=document.querySelector("#IMPORT_ALL_INITIATIVES_BUTTON_TEXT");e&&(e.innerHTML="Mass import",u>0&&(e.innerHTML+=" ".concat(s," / ").concat(u)))}function I(e){if(e){!function(){if(document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL"))return;var e=document.createElement("div");e.id="IMPORT_ALL_INITIATIVES_MODAL",e.style.position="fixed",e.style.left="0",e.style.right="0",e.style.top="0",e.style.bottom="0",e.style.display="none",e.innerHTML='\n        <div\n            style="\n                display: flex;\n                align-items: flex-start;\n                position: absolute;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                z-index: 0;\n                background-color: rgba(28,23,51,.8);\n            "\n        >\n        </div>\n\n        <div\n            style="\n                top: 10%;\n                left: 50%;\n                width: 560px;\n                margin-left: -280px;\n                background-color: #fff;\n                border: 1px solid rgba(0,0,0,.3);\n                border-radius: 4px;\n                outline: 0;\n                box-shadow: 0 3px 7px rgba(0,0,0,.3);\n                background-clip: padding-box;\n                position: fixed;\n                overflow: visible;\n            "\n        >\n            <div\n                style="\n                    border-bottom: 1px solid rgba(201,207,231,.5);\n                    padding: 21px 25px 20px 30px;\n                "\n            >\n                <h3\n                    style="\n                        padding: 0;\n                        margin: 0;\n                    "\n                >Mass import initiatives</h3>\n            </div>\n\n            <div\n                style="\n                    padding: 15px 30px;\n                    overflow-y: visible;\n                    max-height: calc(100vh - 150px);\n                    position: relative;\n                "\n            >\n                <label\n                    id="IMPORT_ALL_INITIATIVES_MODAL_FILE_LABEL"\n                    style="\n                        text-align: center;\n                        background-color: #fafafd;\n                        border: 1px dashed #d8ddef;\n                        border-radius: 2px;\n                        padding: 10px 20px;\n                        box-sizing: border-box;\n                        display: block;\n                        position: relative;\n                    "\n                >\n                    <span\n                        style="\n                            display: block;\n                            font-weight: 700;\n                            font-size: 14px;\n                            color: #636696;\n                            margin: 20px;\n                        "\n                    >\n                        <span>Drag & drop (or click to open picker)</span>\n                        <br>\n                        <br>\n                        <i style="font-weight: 400">.zip or single/multiple .json files allowed</i>\n                        <br>\n                        <br>\n                        <span id="IMPORT_ALL_INITIATIVES_MODAL_FILE_INPUT_MESSAGE">No files selected</span>\n                    </span>\n                    <input\n                        style="\n                            position: absolute;\n                            left: 0;\n                            top: 0;\n                            right: 0;\n                            display: block;\n                            bottom: 0;\n                            width: 100%;\n                            height: 100%;\n                            opacity: 0;\n                            cursor: pointer;\n                        "\n                        type="file" multiple id="IMPORT_ALL_INITIATIVES_MODAL_FILE_INPUT">\n                </label>\n            </div>\n\n            <div\n                style="\n                    border-radius: 0 0 4px 4px;\n                    padding: 12px 30px;\n                    background: #f8f7fd;\n                    margin-bottom: 0;\n                    text-align: right;\n                "\n            >\n                <e-ui-button class="ui ui-node" id="IMPORT_ALL_INITIATIVES_MODAL_CANCEL_BUTTON">\n                    <button class="button-wrapper">\n                        <span class="button-text">Cancel</span>\n                    </button>\n                </e-ui-button>\n\n                <e-ui-button class="ui ui-node" priority="primary" id="IMPORT_ALL_INITIATIVES_MODAL_IMPORT_BUTTON">\n                    <button class="button-wrapper">\n                        <span class="button-text">Import</span>\n                    </button>\n                </e-ui-button>\n            </div>\n        </div>\n    ',document.body.appendChild(e),document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL_CANCEL_BUTTON").onclick=function(){return I(!1)};var t=document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL_FILE_INPUT");t.onchange=function(){var e=t.files&&t.files.length>0,n="No files selected";e&&(n=1===t.files.length?"".concat(t.files[0].name," selected"):"".concat(t.files.length," files selected")),document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL_FILE_INPUT_MESSAGE").innerHTML=n;var d=document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL_IMPORT_BUTTON");d.classList.remove("disabled"),e||d.classList.add("disabled"),d.onclick=e?function(){!function(e){r(this,void 0,void 0,(function(){function t(e){return r(this,void 0,void 0,(function(){var t,n,i,c,l=this;return o(this,(function(s){switch(s.label){case 0:return s.trys.push([0,3,,5]),[4,JSZip.loadAsync(e)];case 1:return t=s.sent(),n=Object.keys(t.files),[4,(0,a.asyncForEach)(n,(function(e){return r(l,void 0,void 0,(function(){var n,r,i;return o(this,(function(o){switch(o.label){case 0:return(n=t.files[e]).dir?[3,2]:(i=(r=f).push,[4,n.async("text")]);case 1:i.apply(r,[o.sent()]),u++,p(),o.label=2;case 2:return[2]}}))}))}))];case 2:return s.sent(),[3,5];case 3:return s.sent(),c=(i=f).push,[4,(0,a.readFileAsText)(e)];case 4:return c.apply(i,[s.sent()]),u++,p(),[3,5];case 5:return[2]}}))}))}function n(e){return r(this,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return[4,l.PNPInitiative.importInitiativeJson(e,d._id)];case 1:return t=n.sent(),[4,(0,a.sleep)(500)];case 2:return n.sent(),s++,p(),(null==t?void 0:t.errors)?(I.push(t.errors),[2]):[2]}}))}))}var d,f,I,h=this;return o(this,(function(l){switch(l.label){case 0:return(d=c.PNPProject.getProjectData())?(u=0,s=0,p(),i.PNPHelpers.setButtonStatus(!1),f=[],I=[],[4,(0,a.asyncForEach)(e,(function(e){return r(h,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,t(e)];case 1:return[2,n.sent()]}}))}))}))]):(i.PNPHelpers.handleError("Could not find Project ID"),[2]);case 1:return l.sent(),[4,(0,a.asyncForEach)(f,(function(e){return r(h,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,n(e)];case 1:return[2,t.sent()]}}))}))}))];case 2:return l.sent(),I.forEach((function(e){i.PNPHelpers.handleError("Import failed",e)})),u=0,p(),i.PNPHelpers.setButtonStatus(!0),alert("Refresh the page to reload the list of initiatives"),[2]}}))}))}(t.files),I(!1)}:null}}(),(n=document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL")).style.display="block";var t=document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL_FILE_INPUT");t.value="",t.onchange(null)}else{var n;(n=document.querySelector("#IMPORT_ALL_INITIATIVES_MODAL"))&&(n.style.display="none")}}!function(e){e.create=d,e.setEnabled=f}(t.PNPMassImportButton||(t.PNPMassImportButton={}))},5515:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(6676);setInterval((function(){r.PNPHelpers.isReadyToInitialize()&&r.PNPHelpers.initialize()}),500)},6676:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PNPHelpers=void 0;var i=n(485),a=n(7956),c=n(4463),l=0;!function(e){function t(e,t){return document.querySelector("#PLUG_AND_PLAY_INITIATIVES_SCRIPT_".concat(t))?Promise.resolve():new Promise((function(n){var r=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.src=e,o.id="PLUG_AND_PLAY_INITIATIVES_SCRIPT_".concat(t),o.onreadystatechange=function(){return n()},o.onload=function(){return n()},r.appendChild(o)}))}function n(e){i.PNPDownloadAllButton.setEnabled(e),a.PNPDeleteAllButton.setEnabled(e),c.PNPMassImportButton.setEnabled(e)}e.headerSelector="e-ui-page-header e-ui-layout e-ui-col:nth-child(2)",e.appendScript=t,e.handleError=function(e,t){if(!document.querySelector("#PLUG_AND_PLAY_INITIATIVES_ERROR_WRAPPER")){var n=document.createElement("div");n.id="PLUG_AND_PLAY_INITIATIVES_ERROR_WRAPPER",n.style.position="fixed",n.style.top="0",n.style.left="50%",n.style.transform="translateX(-50%)",document.body.appendChild(n)}var r=document.querySelector("#PLUG_AND_PLAY_INITIATIVES_ERROR_WRAPPER"),o=document.createElement("div");o.style.textAlign="center",o.style.marginTop="10px",o.style.background="#fab3c3",o.style.padding="10px 20px",o.style.borderRadius="4px",o.style.position="relative",l++,o.id="DOWNLOAD_ALL_INITIATIVES_ERROR_".concat(l),o.innerHTML+='<b style="color: rgba(242, 65, 101, 1); font-size: 100%;">Error '.concat(l,"</b>"),o.innerHTML+='<span style="display: block">'.concat(e,"</span>"),t&&(o.innerHTML+='<i style="display: block;font-size: 80%;">Details in Dev. console</i>'),o.innerHTML+='<b style="position: absolute; right: 0; top: 0; padding: 5px; display: block; cursor: pointer; opacity: 0.5;" onclick="\n    document.querySelector(\'#DOWNLOAD_ALL_INITIATIVES_ERROR_'.concat(l,"').remove()\n  \">X</b>"),r.appendChild(o),t&&console.error("Error ".concat(l),t)},e.getMajorVersionString=function(){var e=(window.globalFrontendConfig||{}).app_frontend_version||"";if(!e)return"unknown";var t=e.split(".");return t[0]+"."+t[1]},e.isReadyToInitialize=function(){return!!document.querySelector(e.headerSelector)&&location.pathname.endsWith("/initiatives")&&!document.querySelector("#DOWNLOAD_ALL_INITIATIVES_BUTTON_WRAPPER")},e.initialize=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return i.PNPDownloadAllButton.create(),a.PNPDeleteAllButton.create(),c.PNPMassImportButton.create(),[4,t("//cdnjs.cloudflare.com/ajax/libs/jszip/3.5.0/jszip.min.js","jszip")];case 1:return e.sent(),[4,t("//cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js","filesaver")];case 2:return e.sent(),n(!0),[2]}}))}))},e.setButtonStatus=n}(t.PNPHelpers||(t.PNPHelpers={}))},658:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PNPInitiative=void 0;var r=n(6676);!function(e){function t(e){return"/api/initiatives?company_id=".concat(e)}function n(e,t){return"/api/project/data-management/initiatives/".concat(e,"/export?company_id=").concat(t)}function o(e,t){return"/api/initiatives/".concat(e,"?company_id=").concat(t)}function i(e){return"/api/project/data-management/initiatives/import?company_id=".concat(e)}e.getInitiativeListUrl=t,e.getInitiativeExportUrl=n,e.getInitiativeDeleteUrl=o,e.getInitiativeImportUrl=i,e.getInitiativeList=function(e){return fetch(t(e),{credentials:"same-origin"}).then((function(e){return e.json()})).then((function(e){return e.data})).catch((function(e){return r.PNPHelpers.handleError("Could not download Initiative list",e),[]}))},e.getInitiative=function(e,t){return fetch(n(e,t),{credentials:"same-origin"}).then((function(e){return e.json()})).catch((function(t){return r.PNPHelpers.handleError("Could not download Initiative ".concat(e),t),null}))},e.deleteInitiative=function(e,t){return fetch(o(e,t),{credentials:"same-origin",method:"DELETE"}).then((function(e){return e.json()})).catch((function(t){return r.PNPHelpers.handleError("Could not delete Initiative ".concat(e),t),{success:!1}}))},e.importInitiativeJson=function(e,t){var n=new Blob([e],{type:"application/json"}),o=new File([n],"file.json"),a=new FormData;return a.append("files",o),fetch(i(t),{credentials:"same-origin",method:"POST",body:a}).then((function(e){return e.json()})).catch((function(e){return r.PNPHelpers.handleError("Could not import Initiative",e),null}))}}(t.PNPInitiative||(t.PNPInitiative={}))},8976:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PNPProject=void 0,function(e){function t(){var e=location.pathname.match(/\/p\/([^/]+)/);return e?e[1]:null}e.getProjectSlug=t,e.getProjectData=function(){var e=t();return e?(window.globalCompanies||[]).find((function(t){return t.slug===e})):null}}(t.PNPProject||(t.PNPProject={}))},1382:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.objectFilter=t.objectFromEntries=t.sleep=t.readFileAsText=t.asyncForEach=void 0;var a=n(640);function c(e){var t=new a.Deferred;return setTimeout((function(){t.resolve()}),e),t.promise}function l(e){return Object.assign.apply(Object,i([{}],Array.from(e,(function(e){var t,n=e[0],r=e[1];return(t={})[n]=r,t})),!1))}t.asyncForEach=function(e,t){return r(this,void 0,void 0,(function(){var n;return o(this,(function(r){switch(r.label){case 0:n=0,r.label=1;case 1:return n<e.length?[4,t(e[n],n,e)]:[3,4];case 2:r.sent(),r.label=3;case 3:return n++,[3,1];case 4:return[2]}}))}))},t.readFileAsText=function(e){var t=new a.Deferred,n=new FileReader;return n.onload=function(e){var n;t.resolve(null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.result)},n.readAsText(e),t.promise},t.sleep=c,t.default=function(e,t,n){return void 0===n&&(n={waitingInterval:5e3,maxTries:10}),function r(o){return e().then((function(e){if(t(e))return e;if(o<=n.maxTries)return c(n.waitingInterval).then((function(){return r(o+1)}));throw new Error("Retrying failed after ".concat(n.maxTries," tries."))}))}(1)},t.objectFromEntries=l,t.objectFilter=function(e,t){return l(Object.entries(e).filter(t))}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n(5515)})();
//# sourceMappingURL=exp_pnp.js.map