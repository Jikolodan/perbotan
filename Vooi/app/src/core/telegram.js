function a3_0x35b4(_0x4305a8,_0x534d8f){const _0x55ed06=a3_0x55ed();return a3_0x35b4=function(_0x35b4a8,_0x528cfa){_0x35b4a8=_0x35b4a8-0x67;let _0x1735c2=_0x55ed06[_0x35b4a8];return _0x1735c2;},a3_0x35b4(_0x4305a8,_0x534d8f);}const a3_0x124bf5=a3_0x35b4;(function(_0x439552,_0x5d081a){const _0x4c0d7d=a3_0x35b4,_0x5387e=_0x439552();while(!![]){try{const _0x29e90e=-parseInt(_0x4c0d7d(0x92))/0x1*(-parseInt(_0x4c0d7d(0xa7))/0x2)+-parseInt(_0x4c0d7d(0x8b))/0x3*(-parseInt(_0x4c0d7d(0xb1))/0x4)+parseInt(_0x4c0d7d(0x7a))/0x5+-parseInt(_0x4c0d7d(0xa9))/0x6+-parseInt(_0x4c0d7d(0x8c))/0x7+-parseInt(_0x4c0d7d(0xa2))/0x8+-parseInt(_0x4c0d7d(0x6a))/0x9*(-parseInt(_0x4c0d7d(0x9b))/0xa);if(_0x29e90e===_0x5d081a)break;else _0x5387e['push'](_0x5387e['shift']());}catch(_0x364c7a){_0x5387e['push'](_0x5387e['shift']());}}}(a3_0x55ed,0x8010a));import a3_0x31a0fc from'input';import{Helper}from'../utils/helper.js';function a3_0x55ed(){const _0xf10be=['queryCreation','peer','delay','invoke','save','\x0a\x20\x0aYou\x20already\x20have\x20Account,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Account\x20:','queryModificaiton','3138978wFKmym','1741131TvuuYX','Invalid\x20input,\x20Please\x20try\x20again','\x0a\x20\x0aPlease\x20Select\x20Query\x20Account\x20for\x20modification:','stringify','useSession','client','208297XfYTPA','includes','length','\x20|\x20Sleep\x20','Invalid\x20Input','<empty>','RequestWebView','VooiAppBot','getSession','20bLEaEO','Session\x20','indexOf','sessions-','\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a','Please\x20configure\x20your\x20TELEGRAM_APP_ID\x20and\x20TELEGRAM_APP_HASH\x20first','error','5473608zhxtxe','filter','session','agent','Enter\x20your\x20Telegram\x20Password?','4ASdeHh','messages','4426698gTINdh','accounts','warn','accountName','storeSession','TELEGRAM_APP_ID','exit','getEntity','4VelENL','You\x20don\x27t\x20have\x20any\x20Accounts,\x20please\x20create\x20first','log','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','Welcome\x20to\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x20\x0aYour\x20Session\x20List:\x0a','\x0a\x20\x0aPlease\x20Enter\x20New\x20Query\x20','getTelegramQuery','\x20-\x20Created,\x20Please\x20Restart\x20The\x20Bot\x20Again','\x20|\x20FloodWait\x20','resetAccounts','1451889ugGHRm','bot','accountType','onBoarding','Old\x20Query\x20:\x20','info','TELEGRAM_APP_HASH','sessionCreation','Query\x20','Your\x20Account\x20List\x20:\x0a\x20\x0a','query-','text','initWebView','url','Your\x20Query\x20Account\x20List\x20:\x0a\x20\x0a','Please\x20Enter\x20Telegram\x20Query\x20:\x20','2048545wwiRHS','saveQueryFile','query','proxy','destroy','disconnect','serverAddress','start','\x20-\x20Webview\x20Connected','/query.txt'];a3_0x55ed=function(){return _0xf10be;};return a3_0x55ed();}import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import a3_0x247220 from'../utils/logger.js';import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';import{HttpsProxyAgent}from'https-proxy-agent';export class Telegram{['storeSession'];constructor(){const _0x405045=a3_0x35b4;this[_0x405045(0xac)]=_0x405045(0xaa),this['url']='https://app.tg.vooi.io/',this[_0x405045(0x6b)]=_0x405045(0x99);}async['init'](){const _0x8704dd=a3_0x35b4;try{await this[_0x8704dd(0x6d)]();}catch(_0x302ee9){console[_0x8704dd(0xb3)](_0x302ee9),a3_0x247220[_0x8704dd(0xa1)](''+JSON[_0x8704dd(0x8f)](_0x302ee9));throw _0x302ee9;}}async[a3_0x124bf5(0x6d)](){const _0x1144c5=a3_0x124bf5;try{let _0x34e870=_0x1144c5(0xb5);const _0x5f3e76=Helper['getSession'](_0x1144c5(0xaa));if(_0x5f3e76[_0x1144c5(0x94)]==0x0)_0x34e870+=_0x1144c5(0x97);else for(const _0x2b8c17 of _0x5f3e76){_0x34e870+='-\x20'+_0x2b8c17+'\x0a';}_0x34e870+=_0x1144c5(0x9f),_0x34e870+='\x0a\x20\x0a1.\x20Create\x20Account\x20\x0a2.\x20Reset\x20Account\x20\x0a3.\x20Start\x20Bot\x0a4.\x20Query\x20modification\x0a\x20\x0aInput\x20your\x20choice\x20:';const _0x7f42b3=await a3_0x31a0fc[_0x1144c5(0x75)](_0x34e870);if(_0x7f42b3==0x1)await this[_0x1144c5(0x6c)]();else{if(_0x7f42b3==0x2)Helper[_0x1144c5(0x69)](),await Helper[_0x1144c5(0x86)](0xbb8),await this['onBoarding']();else{if(_0x7f42b3==0x3)Helper['getSession'](this[_0x1144c5(0xac)])?.[_0x1144c5(0x94)]==0x0&&(console['info'](_0x1144c5(0xb2)),await this[_0x1144c5(0x6d)]());else _0x7f42b3==0x4?await this[_0x1144c5(0x8a)]():(console[_0x1144c5(0xa1)](_0x1144c5(0x8d)),await this[_0x1144c5(0x6d)]());}}}catch(_0x3e87ca){throw _0x3e87ca;}}async[a3_0x124bf5(0x8a)](){const _0x22909e=a3_0x124bf5;try{const _0x1a6c7d=Helper['getSession'](_0x22909e(0xaa)),_0x27f512=_0x1a6c7d[_0x22909e(0xa3)](_0x19000c=>_0x19000c[_0x22909e(0x93)](_0x22909e(0x7c)));let _0x7a180b=_0x22909e(0x78);for(const _0x34ffa4 of _0x27f512){_0x7a180b+=_0x1a6c7d[_0x22909e(0x9d)](_0x34ffa4)+0x1+'.\x20'+_0x34ffa4+'\x0a';}_0x27f512[_0x22909e(0x94)]==0x0?(console[_0x22909e(0xb3)]('You\x20dont\x20have\x20any\x20Query\x20Account.'),await this[_0x22909e(0x6d)]()):_0x7a180b+=_0x22909e(0x8e);const _0x1bc8b0=await a3_0x31a0fc[_0x22909e(0x75)](_0x7a180b);if(_0x27f512[_0x1bc8b0-0x1]!=undefined){const _0x44937e=_0x27f512[_0x1bc8b0-0x1];this[_0x22909e(0xac)]='accounts/'+_0x44937e;const _0x564257=_0x22909e(0x6e)+Helper['readQueryFile'](this['accountName']+_0x22909e(0x83))+_0x22909e(0xb6),_0x229f36=await a3_0x31a0fc[_0x22909e(0x75)](_0x564257);await Helper[_0x22909e(0x7b)](this[_0x22909e(0xac)],_0x229f36),await Helper[_0x22909e(0x86)](0xbb8),await this['onBoarding']();}else console['error'](_0x22909e(0x8d)),await this[_0x22909e(0x8a)]();}catch(_0x24ca49){throw _0x24ca49;}}async[a3_0x124bf5(0x71)](){const _0x1d3739=a3_0x124bf5;try{if(Config[_0x1d3739(0xae)]==undefined||Config[_0x1d3739(0x70)]==undefined)throw new Error(_0x1d3739(0xa0));const _0x18e149=Helper[_0x1d3739(0x9a)](_0x1d3739(0xaa));let _0x8910af=_0x1d3739(0x73);for(const _0x48673f of _0x18e149){_0x8910af+=_0x18e149['indexOf'](_0x48673f)+0x1+'.\x20'+_0x48673f+'\x0a';}_0x18e149['length']==0x0?_0x8910af+=_0x1d3739(0xb4):_0x8910af+='\x0a\x20\x0aYou\x20already\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:';const _0x4673f7=await a3_0x31a0fc['text'](_0x8910af);this[_0x1d3739(0xac)]=Helper['createDir'](_0x1d3739(0x9e)+_0x4673f7),await this[_0x1d3739(0x90)](this[_0x1d3739(0xac)]),await this[_0x1d3739(0x7f)](),a3_0x247220[_0x1d3739(0x6f)]('Session\x20'+this['accountName']+'\x20-\x20Created'),console['log'](_0x1d3739(0x9c)+_0x4673f7+_0x1d3739(0x67)),this['storeSession'][_0x1d3739(0x88)](),await Helper[_0x1d3739(0x86)](0xbb8),process[_0x1d3739(0xaf)]();}catch(_0xd57f51){throw _0xd57f51;}}async[a3_0x124bf5(0x84)](){const _0x5c08c4=a3_0x124bf5;try{const _0x2c20c9=Helper[_0x5c08c4(0x9a)](_0x5c08c4(0xaa));let _0x212d3e='Your\x20Account\x20List\x20:\x0a\x20\x0a';for(const _0x18f360 of _0x2c20c9){_0x212d3e+=_0x2c20c9[_0x5c08c4(0x9d)](_0x18f360)+0x1+'.\x20'+_0x18f360+'\x0a';}_0x2c20c9[_0x5c08c4(0x94)]==0x0?_0x212d3e+='<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Account\x20Name\x20:':_0x212d3e+=_0x5c08c4(0x89);const _0x38bf69=await a3_0x31a0fc[_0x5c08c4(0x75)](_0x212d3e);this['accountName']=Helper['createDir'](_0x5c08c4(0x74)+_0x38bf69);let _0x2e9ba1=_0x5c08c4(0x79);const _0x5f50a1=await a3_0x31a0fc[_0x5c08c4(0x75)](_0x2e9ba1);await Helper[_0x5c08c4(0x7b)](this[_0x5c08c4(0xac)],_0x5f50a1),a3_0x247220['info'](_0x5c08c4(0x72)+this[_0x5c08c4(0xac)]+'\x20-\x20Created'),console[_0x5c08c4(0xb3)](_0x5c08c4(0x72)+_0x38bf69+'\x20-\x20Created,\x20Please\x20Restart\x20The\x20Bot\x20Again'),await Helper[_0x5c08c4(0x86)](0xbb8),process[_0x5c08c4(0xaf)]();}catch(_0x29dd7a){throw _0x29dd7a;}}async[a3_0x124bf5(0x6c)](){const _0x5d9b72=a3_0x124bf5;try{const _0x5c2a45=Helper[_0x5d9b72(0x9a)](_0x5d9b72(0xaa));let _0x2bd5f8=_0x5d9b72(0x73);if(_0x5c2a45[_0x5d9b72(0x94)]>0x0)for(const _0x8dc9bb of _0x5c2a45){_0x2bd5f8+=_0x5c2a45[_0x5d9b72(0x9d)](_0x8dc9bb)+0x1+'.\x20'+_0x8dc9bb+'\x0a';}else _0x2bd5f8+='<empty>\x0a';_0x2bd5f8+='\x0a\x20\x0aAvailable\x20Account\x20Type:\x20\x0a1.\x20Session\x20\x0a2.\x20Query\x0a\x20\x0aPlease\x20Entery\x20Your\x20Choice\x20:\x20';const _0x358812=await a3_0x31a0fc['text'](_0x2bd5f8);if(_0x358812==0x1)await this[_0x5d9b72(0x71)]();else _0x358812==0x2?await this[_0x5d9b72(0x84)]():(console[_0x5d9b72(0xb3)](_0x5d9b72(0x96)),await this[_0x5d9b72(0x6c)]());}catch(_0x24f314){throw _0x24f314;}}async['useSession'](_0x3ac871,_0x362f1f){const _0x2feed6=a3_0x124bf5;try{this[_0x2feed6(0x7d)]=_0x362f1f;const _0x300109={'connectionRetries':0x5};this['proxy']&&(_0x300109[_0x2feed6(0xa5)]=new HttpsProxyAgent(this['proxy'])),this[_0x2feed6(0xad)]=new StoreSession(_0x3ac871),this[_0x2feed6(0x91)]=new TelegramClient(this[_0x2feed6(0xad)],Config[_0x2feed6(0xae)],Config[_0x2feed6(0x70)],_0x300109),this[_0x2feed6(0xad)]['save'](),await this[_0x2feed6(0x91)][_0x2feed6(0x81)]({'phoneNumber':async()=>await a3_0x31a0fc[_0x2feed6(0x75)]('Enter\x20your\x20Telegram\x20Phone\x20Number\x20?'),'password':async()=>await a3_0x31a0fc['text'](_0x2feed6(0xa6)),'phoneCode':async()=>await a3_0x31a0fc[_0x2feed6(0x75)]('Enter\x20your\x20Telegram\x20Verification\x20Code\x20?'),'onError':_0x430aea=>{console['log'](_0x430aea['message']);}});}catch(_0x5f4ab2){throw _0x5f4ab2;}}async['resolvePeer'](){const _0x1785c9=a3_0x124bf5;try{a3_0x247220[_0x1785c9(0x6f)](_0x1785c9(0x9c)+this[_0x1785c9(0xa4)]+'\x20-\x20Resolving\x20Peer');while(this[_0x1785c9(0x85)]==undefined){try{this['peer']=await this['client'][_0x1785c9(0xb0)](this[_0x1785c9(0x6b)]);break;}catch(_0x5b0695){if(_0x5b0695 instanceof FloodWaitError){const _0x1f5fa2=_0x5b0695['seconds'];a3_0x247220[_0x1785c9(0xab)](this[_0x1785c9(0x91)][_0x1785c9(0xa4)][_0x1785c9(0x80)]+_0x1785c9(0x68)+_0x5b0695),a3_0x247220[_0x1785c9(0x6f)](this[_0x1785c9(0x91)][_0x1785c9(0xa4)][_0x1785c9(0x80)]+_0x1785c9(0x95)+_0x1f5fa2+'s'),await Helper[_0x1785c9(0x86)]((_0x1f5fa2+0x3)*0x3e8);}else throw _0x5b0695;}}}catch(_0x362440){throw _0x362440;}}async['disconnect'](){const _0x15cc2f=a3_0x124bf5;await this[_0x15cc2f(0x91)][_0x15cc2f(0x7f)](),await this[_0x15cc2f(0x91)][_0x15cc2f(0x7e)](),this[_0x15cc2f(0x85)]=undefined,this[_0x15cc2f(0xac)]=undefined;}async[a3_0x124bf5(0x76)](){const _0x469553=a3_0x124bf5;try{const _0x3379f7=await this[_0x469553(0x91)][_0x469553(0x87)](new Api[(_0x469553(0xa8))][(_0x469553(0x98))]({'peer':this[_0x469553(0x85)],'bot':this[_0x469553(0x85)],'fromBotMenu':!![],'url':this['url'],'platform':'android'}));a3_0x247220[_0x469553(0x6f)](_0x469553(0x9c)+this[_0x469553(0xa4)]+_0x469553(0x82));const _0x275104=_0x3379f7[_0x469553(0x77)];return Helper[_0x469553(0xb7)](_0x275104,0x3);}catch(_0x4aeef){throw _0x4aeef;}}}