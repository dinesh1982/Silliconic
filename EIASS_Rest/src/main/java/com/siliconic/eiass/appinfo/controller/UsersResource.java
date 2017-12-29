package com.siliconic.eiass.appinfo.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.siliconic.eiass.appinfo.model.User;
import com.siliconic.eiass.appinfo.repository.UsersRepository;
import com.siliconic.eiass.appinfo.service.UserService;

@RestController
@RequestMapping("/rest/users")
public class UsersResource {
protected static Logger logger=Logger.getLogger(UsersResource.class);

    @Autowired
    UsersRepository usersRepository;
    @Autowired
    UserService userservice;
 
    
    
    @GetMapping("/all")
    public List<User> getAll() {
    	logger.info("Testing Logger Configuration");
      //  return usersRepository.findAll();
        return userservice.findAll();
    }

    @GetMapping("/{name}")
    public List<User> getUser(@PathVariable("name") final String name) {
        return usersRepository.findByName(name);

    }

    @GetMapping("/id/{id}")
    public User getId(@PathVariable("id") final Integer id) {
        return usersRepository.findOne(id);
    }

    @GetMapping("/update/{id}/{name}")
    public User update(@PathVariable("id") final Integer id, @PathVariable("name")
                         final String name) {


    	User users = getId(id);
        users.setName(name);

        return usersRepository.save(users);
    }
}
