package com.siliconic.eiass.appinfo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siliconic.eiass.appinfo.model.User;
import com.siliconic.eiass.appinfo.repository.UsersRepository;

@Service("userservice")
public class UserServiceImpl implements UserService{
	@Autowired
	UsersRepository userrepository;
	public List findAll(){
		return userrepository.findAll();
	}
	

}
