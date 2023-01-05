import type { RequestParametersDto } from "@/dto/dto/RequestParametersDto";
import type { RequestUpdatesDto } from '@/dto/dto/RequestUpdatesDto';
export interface RequestsWithParametersAndUpdatesDto {
    id: number;
    artifact: number;
    scriptId: number;
    requestResult: number;
    kubeSecret: string;
    startTs: number;
    endTs: number;
    userId: number;
    requestParameters: Array<RequestParametersDto>;
    requestUpdates: Array<RequestUpdatesDto>;
}
