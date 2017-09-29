# Hello World "AngularJS SpringMVC" project for maven (and Eclipse!)
https://github.com/gbshuler/angular-springmvc-helloworld-8-files

This project could be used as an app-fuse/boot project for a webapp project using
Java
Spring MVC
maven
AngularJS (1.x)

Here are the "8 files" (I bragged about)
./pom.xml
src/com/gbshuler/controllers/HelloWorldController.java
src/com/gbshuler/webconfig/WebConfig.java
WebContent/assets/js/hello.js
WebContent/assets/jslibs/angular.min.js
WebContent/META-INF/MANIFEST.MF
WebContent/WEB-INF/views/static/hello.html
WebContent/WEB-INF/web.xml

This is all you need to build with maven.  Sure, you could use Spring Boot, or the official "cli quickstart" but those methods of "bootstrapping" create dozens of files that complicate just saying "hello".  

These additional files are needed to jump into a project for Eclipse Dynamic Web Application (Eclipse Oxygen, Tomcat 8.0.x on Windows)
.classpath
.project
.settings/org.eclipse.jdt.core.prefs
.settings/org.eclipse.wst.common.component
.settings/org.eclipse.wst.common.project.facet.core.xml
.settings/org.eclipse.wst.validation.prefs
 
When you get the project deployed, the hello world URL is 
localhost:8080/angular-springmvc-helloworld-8-files/hello/1

This makes a REST call into a Spring MVC controller and spouts a hello response to the view.
(The context path "angular-springmvc-helloworld-8-files" is horendous.  
// todo - replace "angular-springmvc-helloworld-8-files" with "HelloAngularJSSpringMVC" or something readable)
   
