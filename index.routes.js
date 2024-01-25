
import router from "./canavs.routes.js";
function initalize (app){
    app.use("/canvas",router)
}
export default initalize;