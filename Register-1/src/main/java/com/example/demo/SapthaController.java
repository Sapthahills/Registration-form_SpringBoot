package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SapthaController {

	@Autowired
	SapthaRepo repo;
	
	@RequestMapping("/")
	public String login() {
		
		return "index.jsp";
	}
	
	@RequestMapping("/register")
	public String home(Saptha saptha) {
		
		repo.save(saptha);
		return "index.jsp";
	}
}
