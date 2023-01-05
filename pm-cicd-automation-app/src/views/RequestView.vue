<template>
    <n-space vertical size="large">
        <n-grid cols="2">
            <n-gi>
                    <n-radio-group value="">
                <n-space vertical>
                        <n-radio-button label="review" value="review" > </n-radio-button>
                        <n-radio-button label="request" value="request" > </n-radio-button>
                </n-space>
                    </n-radio-group>
            </n-gi>
            <n-gi>
                <request-data-table
                    :tabNames="tabNames"
                    :headers="headers"
                ></request-data-table>
            </n-gi>
        </n-grid>
    </n-space>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import  RequestDataTable from '@/components/RequestTable.vue' ;
import { NButton, NSpace, NGrid, NGi, NDataTable, NTabs, NTab, NRadioButton, NRadio, NRadioGroup} from 'naive-ui';
import { useRequestStore } from "@/stores/request";

export default defineComponent({
     name: "RequestView",
     components: {
        "request-data-table": RequestDataTable,
         NSpace,
         NGrid,
         NGi,
         NRadio,
         NRadioGroup,
         NRadioButton
     },
     setup(){
        const store = useRequestStore()
        return { store };
     },
     mounted(){},
     data(){
         return {
             review: 0,
             request: 1,
             tabNames: [
                 "requested",
                 "denied",
                 "approved",
                 "needsModification",
                 "created",
                 "error"
             ] as Array<string>,
             headers: [
                 {
                     title: "ID",
                     key: "id"
                 },
                 {
                     title: "Cluster Name",
                     key: "clusterName"
                 },
                 {
                     title: "Database",
                     key: "databaseName"
                 },
                 {
                     title: "For",
                     key: "for"
                 },
                 {
                     title: "Date",
                     key: "date"
                 },
             ],
         };
     },
     computed(){
     },
     methods(){}
 });

</script>
