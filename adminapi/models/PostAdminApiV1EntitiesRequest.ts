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

import type { CreateEntityCorporate } from './CreateEntityCorporate';
import {
    instanceOfCreateEntityCorporate,
    CreateEntityCorporateFromJSON,
    CreateEntityCorporateFromJSONTyped,
    CreateEntityCorporateToJSON,
} from './CreateEntityCorporate';
import type { CreateEntityIndividual } from './CreateEntityIndividual';
import {
    instanceOfCreateEntityIndividual,
    CreateEntityIndividualFromJSON,
    CreateEntityIndividualFromJSONTyped,
    CreateEntityIndividualToJSON,
} from './CreateEntityIndividual';

/**
 * @type PostAdminApiV1EntitiesRequest
 * 
 * @export
 */
export type PostAdminApiV1EntitiesRequest = CreateEntityCorporate | CreateEntityIndividual;

export function PostAdminApiV1EntitiesRequestFromJSON(json: any): PostAdminApiV1EntitiesRequest {
    return PostAdminApiV1EntitiesRequestFromJSONTyped(json, false);
}

export function PostAdminApiV1EntitiesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostAdminApiV1EntitiesRequest {
    if (json == null) {
        return json;
    }
    if (instanceOfCreateEntityCorporate(json)) {
        return CreateEntityCorporateFromJSONTyped(json, true);
    }
    if (instanceOfCreateEntityIndividual(json)) {
        return CreateEntityIndividualFromJSONTyped(json, true);
    }
}

export function PostAdminApiV1EntitiesRequestToJSON(value?: PostAdminApiV1EntitiesRequest | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfCreateEntityCorporate(value)) {
        return CreateEntityCorporateToJSON(value as CreateEntityCorporate);
    }
    if (instanceOfCreateEntityIndividual(value)) {
        return CreateEntityIndividualToJSON(value as CreateEntityIndividual);
    }

    return {};
}
