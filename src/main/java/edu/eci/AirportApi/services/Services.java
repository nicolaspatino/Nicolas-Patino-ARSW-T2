/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.AirportApi.services;


import edu.eci.AirportApi.persistence.persistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 *
 * @author 2112712
 */
@Service
public class Services {
    @Autowired
    persistence persistent=null;
    public String enable(String name) throws Exception{
        return persistent.conectar(name);
    }
}
