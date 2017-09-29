# Hello World "AngularJS SpringMVC" project for maven (and Eclipse!)$ <br />
https://github.com/gbshuler/angular-springmvc-helloworld-8-files$ <br />
$ <br />
This project could be used as an app-fuse/boot project for a webapp project using$ <br />
Java$ <br />
Spring MVC$ <br />
maven$ <br />
AngularJS (1.x)$ <br />
$ <br />
Here are the "8 files" (I bragged about)$ <br />
./pom.xml$ <br />
src/com/gbshuler/controllers/HelloWorldController.java$ <br />
src/com/gbshuler/webconfig/WebConfig.java$ <br />
WebContent/assets/js/hello.js$ <br />
WebContent/assets/jslibs/angular.min.js$ <br />
WebContent/META-INF/MANIFEST.MF$ <br />
WebContent/WEB-INF/views/static/hello.html$ <br />
WebContent/WEB-INF/web.xml$ <br />
$ <br />
This is all you need to build with maven.  Sure, you could use Spring Boot, or the official "cli quickstart" but those methods of "bootstrapping" create dozens of files that complicate just saying "hello".  $ <br />
$ <br />
These additional files are needed to jump into a project for Eclipse Dynamic Web Application (Eclipse Oxygen, Tomcat 8.0.x on Windows)$ <br />
.classpath$ <br />
.project$ <br />
.settings/org.eclipse.jdt.core.prefs$ <br />
.settings/org.eclipse.wst.common.component$ <br />
.settings/org.eclipse.wst.common.project.facet.core.xml$ <br />
.settings/org.eclipse.wst.validation.prefs$ <br />
 $ <br />
When you get the project deployed, the hello world URL is $ <br />
localhost:8080/angular-springmvc-helloworld-8-files/hello/1$ <br />
$ <br />
This makes a REST call into a Spring MVC controller and spouts a hello response to the view.$ <br />
(The context path "angular-springmvc-helloworld-8-files" is horendous.  $ <br />
// todo - replace "angular-springmvc-helloworld-8-files" with "HelloAngularJSSpringMVC" or something readable)$ <br />
   $ <br />
