import { C6 } from "./I18nextProvider.js";
import { E6 } from "./IcuTrans.js";
import { h2 } from "./IcuTransWithoutContext.js";
import { i2 } from "./Trans.js";
import { o2 } from "./TransWithoutContext.js";
import { T6 } from "./Translation.js";
import { io } from "./context.js";
import { bc } from "./defaults.js";
import { hi } from "./i18nInstance.js";
import { Gd } from "./initReactI18next.js";
import { w2 } from "./useSSR.js";
import { rp } from "./useTranslation.js";
import { I6 } from "./withSSR.js";
import { k6 } from "./withTranslation.js";
var __wakaru_np_initialized = false;
export function np() {
if (__wakaru_np_initialized) return;
__wakaru_np_initialized = true;
i2(), o2(), E6(), h2(), rp(), k6(), T6(), C6(), I6(), w2(), Gd(), bc(), hi(), i2(), io();

}
