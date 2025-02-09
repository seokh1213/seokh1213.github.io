---
layout: ../../layouts/post.astro
title: 4. BeanFactory
tags: [ spring ]
published: true
---

#### BeanFactory (interface) -> ApplicationContext (interface) -> AnnotationConfigApplicationContext

ApplicationContext는 BeanFactory를 상속 받고 있었다.

- 스프링 컨테이너의 최상위 인터페이스다.
- 빈을 관리하고 조회하는 역할을 담당한다.
  - getBean()을 제공한다.

##### 그러면 ApplicationContext랑 차이가 뭐야?

- ApplicationContext는 EnvrionmentCapable, MessageSource, ApplicationEventPublisher, ResourceLoader 등등 여러 인터페이스를 상속 받고
  있다.
  - MessageSource: 국제화 기능
  - EnvironmentCapable: 로컬, 개발, 운영 등 구분해서 처리
  - ApplicaitonEventPublisher: 이벤트 발행, 구독
  - ResourceLoader: 파일, 클래스패스, 외부 리소스 편리하게 조회
