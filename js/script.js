// typing animation
var typed = new Typed(".typing",{
    strings:["","Data Analytics","Web Developer","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})







  window.watsonAssistantChatOptions = {
    integrationID: "110951a9-9da0-402b-bd40-3f1b93c4a6bf", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "ca343ecc-06d4-41d0-8f09-74fb76424ee6", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

