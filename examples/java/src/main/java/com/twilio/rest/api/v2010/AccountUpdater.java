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

package com.twilio.rest.api.v2010;

import com.twilio.base.Updater;
import com.twilio.converter.Promoter;
import com.twilio.exception.ApiConnectionException;
import com.twilio.converter.PrefixedCollapsibleMap;
import com.twilio.converter.Converter;
import com.twilio.exception.ApiException;
import com.twilio.exception.RestException;
import com.twilio.http.HttpMethod;
import com.twilio.http.Request;
import com.twilio.http.Response;
import com.twilio.http.TwilioRestClient;
import com.twilio.rest.Domains;
import java.time.format.DateTimeFormatter;
import com.twilio.converter.DateConverter;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.time.ZonedDateTime;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import lombok.ToString;


/*
    * Twilio - Accounts
    *
    * This is the public Twilio REST API.
    *
    * API version: 1.11.0
    * Contact: support@twilio.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.


public class AccountUpdater extends Updater<Account>{
    private Account.Status status;
    private String sid;
    private String pauseBehavior;

    public AccountUpdater(final Account.Status status){
        this.status = status;
    }
    public AccountUpdater(final String sid, final Account.Status status){
        this.sid = sid;
        this.status = status;
    }

    public AccountUpdater setStatus(final Account.Status status){
        this.status = status;
        return this;
    }
    public AccountUpdater setPauseBehavior(final String pauseBehavior){
        this.pauseBehavior = pauseBehavior;
        return this;
    }

    @Override
    public Account update(final TwilioRestClient client){
        String path = "/2010-04-01/Accounts/{Sid}.json";

        this.sid = this.sid == null ? client.getAccountSid() : this.sid;
        path = path.replace("{"+"Sid"+"}", this.sid.toString());
        path = path.replace("{"+"Status"+"}", this.status.toString());

        Request request = new Request(
            HttpMethod.POST,
            Domains.API.toString(),
            path
        );
        addPostParams(request);
        Response response = client.request(request);
        if (response == null) {
            throw new ApiConnectionException("Account update failed: Unable to connect to server");
        } else if (!TwilioRestClient.SUCCESS.test(response.getStatusCode())) {
            RestException restException = RestException.fromJson(response.getStream(), client.getObjectMapper());
            if (restException == null) {
                throw new ApiException("Server Error, no content");
            }
            throw new ApiException(restException);
        }

        return Account.fromJson(response.getStream(), client.getObjectMapper());
    }
    private void addPostParams(final Request request) {
        if (pauseBehavior != null) {
            request.addPostParam("PauseBehavior", pauseBehavior);
    
        }
        if (status != null) {
            request.addPostParam("Status", status.toString());
    
        }
    }
}
