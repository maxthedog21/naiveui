<template>
    <n-space vertical size="large">
        <p> {{ pagination  }}</p>
        <n-tabs type="line" @update:value="updateStatus">
            <n-tab v-for="name in tabNames" :key="name" :name="name"></n-tab>
                    </n-tabs>
    <n-data-table
        :columns="headers"
        :data="getData"
        :pagination="pagination"
    ></n-data-table>
    </n-space>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRequestStore } from "@/stores/request";
import { RequestsUserWithInfoDto } from  "@/dto/dto/RequestsUserWithInfoDto";
import { NButton, NSpace, NGrid, NDataTable, NTabs, NTab} from 'naive-ui';
import { TableItem } from "@/dto/RequestTable/TableItem";
export default defineComponent({
     name: "RequestDataTable",
     components: {
        NDataTable,
         NButton,
         NGrid,
         NSpace,
         NTabs,
         NTab
     },
    setup(){
        const store = useRequestStore()
        return { store };
        },
     async mounted(){
        await this.store.getRequests();
     },
     props: {
         tabNames: Array<string>,
         headers: Array<Map<string, string>>,
     },
     data(){
         return {}
     },
     methods: {
        async updateStatus(newStatus: number): void{
             this.store.updateStatus(newStatus);
             await this.store.getRequests();
         },
     },
     computed: {
         getData(): TableItem {
             return this.store.getTableItems;
         },
         pagination() {
            return this.store.getPagination;
         },
     },
 })
</script>
