package com.makersacademy.acebook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping(value = "/")
	public String index() {
		return "index.html";
	}

	@RequestMapping(value = "/signup")
	public String signup() {
		return "signup.html";
	}

}
