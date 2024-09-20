import axios from "axios";
import {CommonDto} from "../../common/dto/common.dto";
import {EnterpriseFullRequestDto} from "../../enterprise/dto/enterprise-full-request.dto";
import {EmployeeFullRequestDto} from "../dto/employee-full-request.dto";
import {EmployeeFullResponseDto} from "../dto/employee-full-response.dto";

export class EmployeeAPI {
    restPath = 'http://localhost:8080/empl';

    client = axios.create({
        baseURL: this.restPath,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    });

    getAllEmployee = async (): Promise<EmployeeFullResponseDto[] | undefined> => {
        return await this.client.get(this.restPath).then((response) => {
            return response.data;
        });
        return undefined;
    }
    getAllEmployeeById = async (entId: EnterpriseFullRequestDto): Promise<EmployeeFullResponseDto[] | undefined> => {
        return await this.client.post(this.restPath + "/empId", entId).then((response) => {
            return response.data;
        });
        return undefined;
    }
    deleteEmployee = async (id: EmployeeFullRequestDto): Promise<EmployeeFullResponseDto | undefined> => {
        return await this.client.post(this.restPath + "/delete", id).then((response) => {
            return response.data;
        })
    }

    processingEnterprise = async (requestDto: EmployeeFullRequestDto):
        Promise<EmployeeFullResponseDto | undefined> => {
        if (requestDto.id) {

            return await this.client.post(this.restPath + "/update", requestDto)
                .then((response) => {
                    return response.data;
                })
        } else {
            return await this.client.post(this.restPath + "/add", requestDto)
                .then((response) => {
                    return response.data;
                });
        }
    }
}
