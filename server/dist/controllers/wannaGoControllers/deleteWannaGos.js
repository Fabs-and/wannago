"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Internal dependencies
const wannaGoModel_1 = __importDefault(require("../../models/wannaGoModel"));
const deleteWannaGo = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = ctx.request.body;
        const deletedWannaGo = yield wannaGoModel_1.default.findByIdAndRemove(id);
        // tslint:disable-next-line:no-console
        console.log(`The WannaGo: ${deletedWannaGo} was deleted`);
        ctx.status = 201;
        ctx.body = deletedWannaGo;
    }
    catch (e) {
        // tslint:disable-next-line:no-console
        console.log(`Error in deleteWannaGO function from controllers: ${e}`);
    }
});
exports.default = deleteWannaGo;
//# sourceMappingURL=deleteWannaGos.js.map