package com.danaal.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class PrincipalController {
	
	@RequestMapping(value = "home", method = RequestMethod.GET)
	public String principal(ModelMap model){
		model.addAttribute("Mensaje","PRueba spring");
		return "inicio";
	}
}
