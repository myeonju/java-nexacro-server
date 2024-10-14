package config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebAppConfig implements WebMvcConfigurer {
  /**
    * Servlet 관련
    */
  @Override
  public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
      configurer.enable();
      return;
  }
  
  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/_theme_/**").addResourceLocations("classpath:/static/np0819/_theme_/");
    registry.addResourceHandler("/Base/**").addResourceLocations("classpath:/static/np0819/Base/");
    registry.addResourceHandler("/nexacro14lib/**").addResourceLocations("classpath:/static/np0819/nexacro14lib/");
    registry.addResourceHandler("/*.json").addResourceLocations("classpath:/static/np0819/");
    registry.addResourceHandler("/*.html").addResourceLocations("classpath:/static/np0819/");
    registry.addResourceHandler("/*.js").addResourceLocations("classpath:/static/np0819/");
    registry.addResourceHandler("/np0819/**").addResourceLocations("classpath:/static/np0819/");
    registry.addResourceHandler("/base/**").addResourceLocations("classpath:/static/np0819/Base/");
  } 
  
  /**
    * View Resolver 경로 설정
    */
  @Override
  public void configureViewResolvers(ViewResolverRegistry registry) {
    registry.jsp("/WEB-INF/jsp/", ".jsp");
  }
}