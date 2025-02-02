---
layout: ../../layouts/post.astro
title: 3. ApplicationContext
createdAt: 1663394178835
updatedAt: 1664182018789
tags: [ spring ]
published: true
---

#### ApplicationContext는 스프링 컨테이너이다.

```java
ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);
```

`AnnotationConfigApplicationContext`를 사용하기 위해서는 `AppConfig` 클래스에 `@Configuration` 어노테이션이 붙어있어야한다.  
`AppConfig` 파일안에 있는 `@Bean` 붙은 메소드들을 Bean으로 생성하여 ApplicationContext에 저장되게 된다

- 스프링 컨테이너에는 스프링 빈 저장소가 있다.
  - 빈 저장소는 빈 이름, 빈 객체로 key-value 형식으로 저장되어있다.
  - `@Bean(name="name")` 빈 이름을 변경 할 수 있다.
  - 빈 이름이 같은 경우 설정에 따라 덮어 쒸워지거나, 기존께 무시될 수 있다.

#### 빈이 등록될때는 BeanDefinition도 등록이 된다.

BeanDefinition은 빈에 대한 메타 정보가 저장된다. 그중 Role이라는 정보는 애플리케이션에서 등록한 빈인지, 스프링 내부에서 사용하는 빈인지 구분이 가능하다.

```java
AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);

BeanDefinition beanDefinition = ac.getBeanDefinition("빈 이름");
if(beanDefinition.getRole() == BeanDefintion.ROLE_APPLICATION) {
  // 사용자 프로젝트에서 등록한 bean
} else if(beanDefinition.getRole() == BeanDefintion.ROLE_INFRASTRUCTURE) {
  // 스프링 내부에서 사용하는 빈
}
```

#### Bean 찾기

```java
// name 으로 찾기
applicationContext.getBean("name", Name.class);

// 타입으로 찾기
applicationContext.getBean(Name.class);
```

- 없는 빈을 찾는 경우 NoSuchBeanDefinitionException이 발생하게 된다.
- 빈의 타입이 중복으로 존재하는 경우 NoUniqueBeanDefinitionException이 발생한다.

##### type으로 여러개 찾기

```java
applicationContext.getBeansOfType(Repository.class);
```

##### type으로 조회시 상속 관계는 어떻게 될까?

- 최상위 부모로 검색시 해당 클래스를 상속한 모든 클래스가 조회된다. Object로 검색시 모든 객체가 나온다.
  - 상속한 자식의 자식 등등 다 해당된다.