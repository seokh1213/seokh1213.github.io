---
layout: ../../layouts/post.astro
title: 6. ComponentScan
tags: [ spring ]
published: true
---

### ComponentScan이 뭐야?

- @Bean은 객체이고, @Component는 클래스에 붙인다.
- ComponentScan은 @Component 어노테이션이 붙은 클래스를 파악하고 Bean으로 만들어준다.

#### ComponentScan을 쓴적이 없는데 어떻게 잘 동작되지?

그거슨 바로 @SpringBootApplication 어노테이션 안에 들어가 있다.  
![@SpringBootApplication.png](/posts/6-component-scan_spring-boot-application-png.png)

#### ComponentScan 어떻게 사용하는건데?

- 어떤 클래스를 뺴고 넣을지 정할 수 있다.
- 어느 패키지에서 부터 scan을 할지 지정할 수 있다.
  - 지정을 따로 안하게 되면 ComponentScan이 붙어 있는 클래스의 패키지 부터 시작이다.
  - SpringBootApplication이 보통 프로젝트 루트에 위치해서, 프로젝트 하위 패키지를 전부 scan한다.

---

### Component 종류

- @Component: 별다른 기능 없이 Bean으로 만들어준다.
- @Controller: 스프링 MVC 컨트롤러로 인식하고, 등록한다.
- @Repository: 스프링 데이터 접근 계층으로 인식하고, 데이터 계층 예외를 컨트롤 해준다.
- @Configuration: 설정 파일을 사용할 수 있게 해주고, Bean을 등록하게 해준다.
- @Service: @Component와 동일하게 별다른 기능 없이 Bean 으로 만들어준다. 차이점은 코드상에서 핵심 로직이라는 뜻을 의미한다. (개발자를 위한 이름)

#### 근데 어떻게 예는 Component로 인식이 되는걸까?

위에 나열된 4개 어노테이션안에(Component 제외) @Component라는게 포함되어있다.  
![@Repository](/posts/6-component-scan_repository.png)
