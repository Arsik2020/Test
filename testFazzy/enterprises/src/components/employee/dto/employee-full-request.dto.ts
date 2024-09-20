import {CommonDto} from "../../common/dto/common.dto";
import {EnterpriseFullResponseDto} from "../../enterprise/dto/enterprise-full-response.dto";

export interface EmployeeFullRequestDto extends CommonDto {
    name: string;
    surname: string;
    lastname: string;
    post: string;
    enterpriceId: EnterpriseFullResponseDto;
    deleteDate?: Date;
}