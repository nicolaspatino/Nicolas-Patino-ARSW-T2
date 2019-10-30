/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.AirportApi.persistence.impl;

/**
 *
 * @author 2112712
 */


import edu.eci.AirportApi.persistence.persistence;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import kong.unirest.HttpResponse;
import kong.unirest.Unirest;

import org.springframework.stereotype.Service;


@Service
public class Servicess implements persistence{

    @Override
    public String conectar(String name) {
        HttpResponse<String> response = Unirest.get("https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text="+name)
	.header("x-rapidapi-host", "cometari-airportsfinder-v1.p.rapidapi.com")
	.header("x-rapidapi-key", "b57a9a474dmsh1022157a8bed3dep14b180jsnfb0c0fc6da42")
	.asString();
        System.out.println(response.getBody());
        if(response ==null){
            throw new UnsupportedOperationException("not found.");
        }
         return response.getBody();
    }
}
