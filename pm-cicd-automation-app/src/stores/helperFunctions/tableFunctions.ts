import type { RequestParametersDto } from "@/dto/dto/RequestParametersDto";
function getParameter(paramId: number, list: Array<RequestParametersDto> ): string{
    var x =  list.filter((param) => {
        if(param.parameterId == paramId){
            return param;
        }
    });
    if(x.length == 0){
        return "";
    }
    return x[0].parameterValue;
}
function getStatusNumber(statusName: string): number{
    switch(statusName){
        case "requested": return 1;
        case "denied": return 2;
        case "approved": return 3;
        case "needsModification": return 4;
        case "created": return 5;
        case "error": return 6;
        default: return 1;
    }
}

export {
    getParameter,
    getStatusNumber,
};
