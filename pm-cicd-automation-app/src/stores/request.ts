import { defineStore } from "pinia";
import type { RequestsUserWithInfoDto } from  "@/dto/dto/RequestsUserWithInfoDto";
import type { TableItem } from '@/dto/RequestTable/TableItem';
import { getRequests } from "@/api/services/request";
import { getParameter, getStatusNumber } from "@/stores/helperFunctions/tableFunctions";

export const useRequestStore = defineStore('request', {
    state: () =>({
        currentRequest : undefined as RequestsUserWithInfoDto | undefined,
        pagination: {pageSize: 2 as number, page: 0 as number, pageCount: 1},
        status: 1 as number,
        userId: 102, //fix when microsoft login is added and this should be called from another store as a getter
    }),
    getters: {
        getTableItems(state): Array<TableItem>{
            if(state.currentRequest == undefined){
                return [{
                    "id": "",
                    "clusterName": "",
                    "databaseName": "",
                    "for": "",
                    "date": ""
                }];
            }
            return state.currentRequest.requestDTOList.map((item) => {
                return {
                    "id": item.id.toString(),
                    "clusterName": getParameter(6, item.requestParameters),
                    "databaseName": getParameter(17, item.requestParameters),
                    "for": getParameter(2, item.requestParameters),
                    "date": item.startTs
                }
            });
        },
        getPagination(state)
        {
            return state.pagination;
        }
    },
    actions: {
        async getRequests(): RequestsUserWithInfoDto {
         this.currentRequest  =   await  getRequests(
                this.userId,
                this.status,
                this.pagination.page,
                this.pagination.pageSize,
            );
        },
        updateStatus(newStatus: number){
            this.status =  getStatusNumber(newStatus);
        }
    },
});
