import axios from "axios";
import {EnterpriseFullRequestDto} from "../dto/enterprise-full-request.dto";
import {EnterpriseFullResponseDto} from "../dto/enterprise-full-response.dto";

export class EnterpriseAPI {
    restPath = 'http://localhost:8080/ent';

    client = axios.create({
        baseURL: this.restPath,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    });

    getAllEnterprise = async (): Promise<EnterpriseFullResponseDto[] | undefined> => {
        return await this.client.get(this.restPath).then((response) => {
            return response.data;
        });
        return undefined;
    }

    deleteEnterprise = async (id: EnterpriseFullRequestDto): Promise<EnterpriseFullResponseDto | undefined> => {
        return await this.client.post(this.restPath + "/delete", id).then((response) => {
            return response.data;
        })
    }

    processingEnterprise = async (requestDto: EnterpriseFullRequestDto):
        Promise<EnterpriseFullResponseDto | undefined> => {
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
