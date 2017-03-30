package com.danaal.ws.services.restcontroller;

import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.danaal.ws.vo.Usuario;

@RestController
@RequestMapping("/services")
public class PruebaRestController {
	
	@RequestMapping(value = "/loginUsuario", method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public Usuario loginUsuario (@RequestBody Usuario usuario) {
		usuario.setUsuarioActivo(false);
		if("Tuto".equals(usuario.getNombre()) && "Tuto".equals(usuario.getPassword()))
			usuario.setUsuarioActivo(true);
		return usuario;
	}
	
	@RequestMapping(value = "/usuarioIdentificado", method = RequestMethod.GET)
	public Usuario usuarioIdentificado(@RequestParam(value="value") String value){
		Usuario usuario = null;
		if(!StringUtils.isEmpty(value)){
			usuario = new Usuario();
			usuario.setId(1);
			usuario.setIdentificacion(value);
			usuario.setNombre("David");
			usuario.setPassword("David");
			usuario.setUsuarioActivo(true);
		}
		return usuario;
	}
}
