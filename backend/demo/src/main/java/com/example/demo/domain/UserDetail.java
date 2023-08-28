package com.example.demo.domain;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_detail")
public class UserDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String email;
    private String username;
    private String password;
    private String gender;
    private String display_name;
    private Long buy_novel;

    public UserDetail() {
    }

    public UserDetail(Long id, String email, String username, String password, String gender, String display_name) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.gender = gender;
        this.display_name = display_name;
    }

    public UserDetail(Long id, String email, String username, String password, String gender, String display_name,
            Long buy_novel) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.gender = gender;
        this.display_name = display_name;
        this.buy_novel = buy_novel;
    }

    public Long getBuy_novel() {
        return buy_novel;
    }

    public void setBuy_novel(Long buy_novel) {
        this.buy_novel = buy_novel;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getGender() {
        return gender;
    }

    public String getDisplay_name() {
        return display_name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setDisplay_name(String display_name) {
        this.display_name = display_name;
    }

}