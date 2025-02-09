---
layout: ../../layouts/post.astro
title: 2. 스프링 IoC, DI, Container
tags: [ spring ]
published: true
---

```text:3줄 요약
- IoC 기존 절차지향과 다르게 부품을 받아서 사용
- DI 부품을 주는 행위. 주는 방법은 생성자, reflection, setter
- IoC 컨테이너, DI 컨테이너. 객체 생성시 디펜던시를 넣어주는 객체.
```

### IoC 제어의 역전

- 기존 프로그램은 클라이언트(사용하는 쪽 코드)에서 구현 객체가 필요한 경우 스스로 생성하고 사용했다.

```java
DiscountPolicy discountPolicy = new FixDiscountPolicy();
```

- IoC는 외부에서 어떤 객체를 사용할지 정한다.
  (보통 생성자 또는 reflection, setter 등 으로 주입, DI) 사용하는쪽에서 어떤 부품을 사용할지 정한다.

```java
// 구현
public class App {
  private final DiscountPolicy discountPolicy; // DiscountPolicy는 인터페이스

  public Service(Discount discountPolicy) {
    this.discountPolicy = discountPolicy;
  }
}
---
// 사용하는 곳

new Service(new FixDiscountPolicy()); // 사용하는곳에서 어떤 부품을 넣을지 정함.
new Service(new DiscountPolicy()); // 사용하는곳에서 어떤 부품을 넣을지 정함.
```

### DI - 디펜던시 인젝션?

- 위에서 말한것처럼 사용하는 실제 부품을 넣어주는 행위를 말한다.
- 의존성 주입 방법은 여러가지인데, **생성자**, reflection(@AutoWired, @Resource등), setter등이 있다.
  - 이중 가장 권장되는 방법은 생성자를 통해 주입 받는 방식이다. 이유는 생성시마다 다르게 변경할 수 있고, setter 처럼 중간에 변경되는 일이 없어서 좋다.
  - reflection 방법은 테스트 및 값을 넣기가 어려워진다.

### IoC 컨테이너, DI 컨테이너

스프링은 알아서 인터페이스 구현체를 집어 넣어준다. 이런 일도 결국 누군가(클래스)는 해야한다. 그 놈의 이름이바로 컨테이너다!

- Proxy 패턴으로 모든 객체들은 컨테이너로 감싸져 있어서 최초 생성시 의존관계를 넣어준다.
- 어샘블러, 오브젝트 팩토리 등으로도 불린다.
- 스프링 말고도 여러 프레임워크에서 제공 해준다.