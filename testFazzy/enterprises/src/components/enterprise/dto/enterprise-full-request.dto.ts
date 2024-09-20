import {CommonDto} from "../../common/dto/common.dto";

export interface EnterpriseFullRequestDto extends CommonDto {
    name: string;
    deleteDate?: Date;
}
