package com.example.demo.countries;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.demo.regions.Regions;

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
@Table(name = "COUNTRIES")
public class Countries {

	@Id
	@Column(name = "COUNTRY_ID")
	private String countryId;

	@Column(name = "COUNTRY_NAME")
	private String countryName;

	@ManyToOne
	@JoinColumn(name = "REGION_ID")
	private Regions regions;


}
