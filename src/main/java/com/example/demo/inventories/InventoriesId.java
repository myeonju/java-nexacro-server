package com.example.demo.inventories;

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
public class InventoriesId implements Serializable {

    private Integer productId;
    private String warehouseId;
    
   
}
