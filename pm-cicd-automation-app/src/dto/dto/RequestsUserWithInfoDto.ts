import type { RequestsWithParametersAndUpdatesDto } from '@/dto/dto/RequestsWithParametersAndUpdatesDto';
export interface RequestsUserWithInfoDto {
    requestDTOList: Array<RequestsWithParametersAndUpdatesDto>;
    totalRequest: Map<number, number>;
}
