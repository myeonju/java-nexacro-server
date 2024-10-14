package com.example.demo.orderItems;


import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.example.demo.orders.Orders;
import com.example.demo.product.Products;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
@Table(name = "ORDER_ITEMS")
public class OrderItems {
	
	@EmbeddedId
	private OrderItemsId id;

	@Column(name = "QUANTITY", nullable = false)
	private Integer quantity;

	@Column(name = "UNIT_PRICE", nullable = false)
	private Double unitPrice;

	@ManyToOne
	@MapsId("orderId")
	@JoinColumn(name = "ORDER_ID", nullable = false)
	private Orders order;

	@ManyToOne
	@MapsId("productId")
	@JoinColumn(name = "PRODUCT_ID", nullable = false)
	private Products product;
}
