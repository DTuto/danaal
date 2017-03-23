package com.danaal.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class CalculadoraController {
	
	@RequestMapping(value = "/calculadora", method = RequestMethod.GET)
	public String calculadora (ModelMap model) {
		return "calculadora";
	}
}
