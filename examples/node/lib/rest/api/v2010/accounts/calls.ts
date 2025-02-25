/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Accounts
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from 'util';
import Page from '../../../../base/Page';
import V2010 from '../../V2010';
const deserialize = require('../../../../base/deserialize');
const serialize = require('../../../../base/serialize');
import { FeedbackSummaryListInstance } from './calls/feedbackSummary';


/**
 * Options to pass to create a CallInstance
 *
 * @property { string } requiredStringProperty 
 * @property { Array<string> } [testArrayOfStrings] 
 */
export interface CallListInstanceCreateOptions {
    requiredStringProperty: string;
    testArrayOfStrings?: Array<string>;
}


export interface CallListInstance {
    (accountSid: string, testInteger: number): CallContext;
    get(accountSid: string, testInteger: number): CallContext;

    feedback_summary: FeedbackSummaryListInstance;

    /**
     * Create a CallInstance
     *
     * @param { CallListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    create(params: CallListInstanceCreateOptions, callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>;
    create(params: any, callback?: any): Promise<CallInstance>
;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}


interface CallListInstanceImpl extends CallListInstance {}
class CallListInstanceImpl implements CallListInstance {
    _version?: V2010;
    _solution?: any;
    _uri?: string;

    _feedback_summary?: FeedbackSummaryListInstance;
}

export function CallListInstance(version: V2010, accountSid: string): CallListInstance {
    const instance = ((accountSid, testInteger) => instance.get(accountSid, testInteger)) as CallListInstanceImpl;

    instance.get = function get(accountSid, testInteger): CallContext {
        return new CallContextImpl(version, accountSid, testInteger);
    }

    instance._version = version;
    instance._solution = { accountSid };
    instance._uri = `/2010-04-01/Accounts/${accountSid}/Calls.json`;

    Object.defineProperty(instance, 'feedback_summary', {
        get: function feedback_summary() {
            if (!this._feedback_summary) {
                this._feedback_summary = FeedbackSummaryListInstance(this._version, this._solution.accountSid);
            }
            return this._feedback_summary;
        }
    });

    instance.create = function create(params: any, callback?: any): Promise<CallInstance> {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }

        if (params.requiredStringProperty === null || params.requiredStringProperty === undefined) {
            throw new Error('Required parameter "params.requiredStringProperty" missing.');
        }

        const data: any = {};

        data['RequiredStringProperty'] = params.requiredStringProperty;
        if (params.testArrayOfStrings !== undefined) data['TestArrayOfStrings'] = serialize.map(params.testArrayOfStrings, ((e) => e));

        const headers: any = {};
        headers['Content-Type'] = 'application/x-www-form-urlencoded'


        let operationVersion = version,
            operationPromise = operationVersion.create({ uri: this._uri, method: 'POST', params: data, headers });

        operationPromise = operationPromise.then(payload => new CallInstance(operationVersion, payload, this._solution.accountSid));

        if (typeof callback === 'function') {
            operationPromise = operationPromise
                .then(value => callback(null, value))
                .catch(error => callback(error));
        }

        return operationPromise;

    }

    instance.toJSON = function toJSON() {
        return this._solution;
    }

    instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
        return inspect(this.toJSON(), options);
    }

    return instance;
}


export interface CallContext {


    /**
     * Remove a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: CallInstance) => any): Promise<boolean>
;
    /**
     * Fetch a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    fetch(callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>
;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class CallContextImpl implements CallContext {
    protected _solution: any;
    protected _uri: string;


    constructor(protected _version: V2010, accountSid: string, testInteger: number) {
        this._solution = { accountSid, testInteger };
        this._uri = `/2010-04-01/Accounts/${accountSid}/Calls/${testInteger}.json`;
    }

    remove(callback?: any): Promise<boolean> {

        let operationVersion = this._version,
            operationPromise = operationVersion.remove({ uri: this._uri, method: 'DELETE' });


        if (typeof callback === 'function') {
            operationPromise = operationPromise
                .then(value => callback(null, value))
                .catch(error => callback(error));
        }

        return operationPromise;

    }

    fetch(callback?: any): Promise<CallInstance> {

        let operationVersion = this._version,
            operationPromise = operationVersion.fetch({ uri: this._uri, method: 'GET' });

        operationPromise = operationPromise.then(payload => new CallInstance(operationVersion, payload, this._solution.accountSid, this._solution.testInteger));

        if (typeof callback === 'function') {
            operationPromise = operationPromise
                .then(value => callback(null, value))
                .catch(error => callback(error));
        }

        return operationPromise;

    }

    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return this._solution;
    }

    [inspect.custom](_depth: any, options: InspectOptions) {
        return inspect(this.toJSON(), options);
    }
}


interface CallPayload extends CallResource, Page.TwilioResponsePayload {
}

interface CallResource {
    account_sid?: string | null;
    sid?: string | null;
    test_string?: string | null;
    test_integer?: number | null;
    test_object?: object | null;
    test_date_time?: string | null;
    test_number?: number | null;
    price_unit?: string | null;
    test_number_float?: number | null;
    test_enum?: object;
    test_array_of_integers?: Array<number>;
    test_array_of_array_of_integers?: Array<Array<number>>;
    test_array_of_objects?: Array<object> | null;
    test_array_of_enum?: Array<object> | null;
}

export class CallInstance {
    protected _solution: any;
    protected _context?: CallContext;

    constructor(protected _version: V2010, payload: CallPayload, accountSid: string, testInteger?: number) {
        this.accountSid = payload.account_sid;
        this.sid = payload.sid;
        this.testString = payload.test_string;
        this.testInteger = deserialize.integer(payload.test_integer);
        this.testObject = payload.test_object;
        this.testDateTime = deserialize.rfc2822DateTime(payload.test_date_time);
        this.testNumber = payload.test_number;
        this.priceUnit = payload.price_unit;
        this.testNumberFloat = payload.test_number_float;
        this.testEnum = payload.test_enum;
        this.testArrayOfIntegers = payload.test_array_of_integers;
        this.testArrayOfArrayOfIntegers = payload.test_array_of_array_of_integers;
        this.testArrayOfObjects = payload.test_array_of_objects;
        this.testArrayOfEnum = payload.test_array_of_enum;

        this._solution = { accountSid, testInteger: testInteger || this.testInteger };
    }

    accountSid?: string | null;
    sid?: string | null;
    testString?: string | null;
    testInteger?: number | null;
    testObject?: object | null;
    testDateTime?: string | null;
    testNumber?: number | null;
    priceUnit?: string | null;
    testNumberFloat?: number | null;
    testEnum?: object;
    testArrayOfIntegers?: Array<number>;
    testArrayOfArrayOfIntegers?: Array<Array<number>>;
    testArrayOfObjects?: Array<object> | null;
    /**
     * Permissions authorized to the app
     */
    testArrayOfEnum?: Array<object> | null;

    private get _proxy(): CallContext {
        this._context = this._context || new CallContextImpl(this._version, this._solution.accountSid, this._solution.testInteger);
        return this._context;
    }

    /**
     * Remove a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: CallInstance) => any): Promise<boolean>
 {
        return this._proxy.remove(callback);
    }

    /**
     * Fetch a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    fetch(callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>
 {
        return this._proxy.fetch(callback);
    }

    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid, 
            sid: this.sid, 
            testString: this.testString, 
            testInteger: this.testInteger, 
            testObject: this.testObject, 
            testDateTime: this.testDateTime, 
            testNumber: this.testNumber, 
            priceUnit: this.priceUnit, 
            testNumberFloat: this.testNumberFloat, 
            testEnum: this.testEnum, 
            testArrayOfIntegers: this.testArrayOfIntegers, 
            testArrayOfArrayOfIntegers: this.testArrayOfArrayOfIntegers, 
            testArrayOfObjects: this.testArrayOfObjects, 
            testArrayOfEnum: this.testArrayOfEnum
        }
    }

    [inspect.custom](_depth: any, options: InspectOptions) {
        return inspect(this.toJSON(), options);
    }
}

