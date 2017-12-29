package com.siliconic.eiass.appinfo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.siliconic.eiass.appinfo.model.User;

public interface UsersRepository extends JpaRepository<User, Integer> {
    List<User> findByName(String name);

}
