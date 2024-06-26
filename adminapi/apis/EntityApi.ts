/* tslint:disable */
/* eslint-disable */
/**
 * admin API
 * api for the needs of the admin backoffice
 *
 * The version of the OpenAPI document: 1.0
 * Contact: vincent.serpoul@triple-a.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Corporate,
  Entity,
  Individual,
  PostAdminApiV1EntitiesRequest,
  ProblemDetail,
} from '../models/index';
import {
    CorporateFromJSON,
    CorporateToJSON,
    EntityFromJSON,
    EntityToJSON,
    IndividualFromJSON,
    IndividualToJSON,
    PostAdminApiV1EntitiesRequestFromJSON,
    PostAdminApiV1EntitiesRequestToJSON,
    ProblemDetailFromJSON,
    ProblemDetailToJSON,
} from '../models/index';

export interface PostAdminApiV1EntitiesOperationRequest {
    postAdminApiV1EntitiesRequest?: PostAdminApiV1EntitiesRequest;
}

/**
 * 
 */
export class EntityApi extends runtime.BaseAPI {

    /**
     * get a list of entities
     * Your GET endpoint
     */
    async getAdminApiV1EntitiesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Entity>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/admin/api/v1/entities`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntityFromJSON));
    }

    /**
     * get a list of entities
     * Your GET endpoint
     */
    async getAdminApiV1Entities(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Entity>> {
        const response = await this.getAdminApiV1EntitiesRaw(initOverrides);
        return await response.value();
    }

    /**
     * create an entity
     * create an entity
     */
    async postAdminApiV1EntitiesRaw(requestParameters: PostAdminApiV1EntitiesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Corporate | Individual>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/admin/api/v1/entities`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostAdminApiV1EntitiesRequestToJSON(requestParameters['postAdminApiV1EntitiesRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Corporate | IndividualFromJSON(jsonValue));
    }

    /**
     * create an entity
     * create an entity
     */
    async postAdminApiV1Entities(requestParameters: PostAdminApiV1EntitiesOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Corporate | Individual> {
        const response = await this.postAdminApiV1EntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
