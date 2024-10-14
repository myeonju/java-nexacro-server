package com.example.demo.orderItems;

import java.io.Serializable;

import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class OrderItemsId implements Serializable{
	private Integer orderId;
	private Integer productId;
}
