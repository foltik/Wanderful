package com.example.smax.hackprinceton.util.api;

import org.json.JSONException;
import org.json.JSONObject;

public interface APICallback {
    void onComplete(JSONObject result) throws JSONException;
}