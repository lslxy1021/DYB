# DYB
**斗鱼弹幕信息获取**
===================

Based on **java**，dynamically request **DOUYU's( a live web site )** barrage information.

Screenshots
-------------
![image](http://github.com/lslxy1021/DYB/raw/master/images/dmchart.png)

![image](http://github.com/lslxy1021/DYB/raw/master/images/dmtable.png)  
 

Environment
-------------

 - IDE : Intellij  IDEA 
 - JDK Version : 1.6 or later
 - Dynamic Chart : Highcharts JS v5.0.12
 - JQuery : 3.2.1
 - Bootstrap : 3.3.7
 - Java template engine : Thymeleaf 1.5.6
 - Database : MySQL Workbench Community (GPL)
 
Start
-------------
 - Run DanMuApplication.java
 - Enter url in the browser : localhost:8081/danmu.

**pom.xml**
-------------------

   

     <?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    	<modelVersion>4.0.0</modelVersion>
    
    	<groupId>com.example</groupId>
    	<artifactId>DanMu</artifactId>
    	<version>1.0-SNAPSHOT</version>
    	<packaging>jar</packaging>
    
    	<name>DanMu</name>
    	<description>This is a DanMu demo</description>
    
    	<parent>
    		<groupId>org.springframework.boot</groupId>
    		<artifactId>spring-boot-starter-parent</artifactId>
    		<version>1.5.6.RELEASE</version>
    	</parent>
    
    	<properties>
    		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    		<java.version>1.8</java.version>
    	</properties>
    
    	<dependencies>
    		<dependency>
    			<groupId>org.springframework.boot</groupId>
    			<artifactId>spring-boot-starter</artifactId>
    		</dependency>
    
    		<dependency>
    			<groupId>org.springframework.boot</groupId>
    			<artifactId>spring-boot-starter-web</artifactId>
    		</dependency>
    
    		<dependency>
    			<groupId>org.springframework.boot</groupId>
    			<artifactId>spring-boot-starter-test</artifactId>
    			<scope>test</scope>
    		</dependency>
    
    		<dependency>
    			<groupId>org.apache.commons</groupId>
    			<artifactId>commons-lang3</artifactId>
    			<version>3.3.2</version>
    		</dependency>
    
    		<dependency>
    			<groupId>log4j</groupId>
    			<artifactId>log4j</artifactId>
    			<version>1.2.14</version>
    		</dependency>
    
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-data-jpa</artifactId>
            </dependency>
    
            <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
            </dependency>
    
    		<dependency>
    			<groupId>org.springframework.boot</groupId>
    			<artifactId>spring-boot-starter-thymeleaf</artifactId>
    		</dependency>
    
    		<dependency>
    		<groupId>com.google.code.gson</groupId>
    		<artifactId>gson</artifactId>
    		<version>2.3.1</version>
    	    </dependency>
    	</dependencies>
    
    	<build>
    		<plugins>
    			<plugin>
    				<groupId>org.springframework.boot</groupId>
    				<artifactId>spring-boot-maven-plugin</artifactId>
    			</plugin>
    		</plugins>
    	</build>
    
    
    </project>

**application.yml**
-------------------

    server:
      port: 8081
    spring:
      thymeleaf:
        mode: HTML5
      datasource:
        driver-class-name: com.mysql.jdbc.Driver
        url: jdbc:mysql://127.0.0.1:3306/test?useSSL=false
        username: test001
        password: test001
      jpa:
        hibernate:
          ddl-auto: update
        show-sql: false
        
> **Note:**

> - To create this project,File->new->project->Spring Initializr.
> - You need to change roomId in StartFirst.java 
> - Create a database called "test" in MySQL before start the project.
> - Web page must be active, otherwise it will get incorrect results
> - You may need to delete "target" file to avoid possible error.
