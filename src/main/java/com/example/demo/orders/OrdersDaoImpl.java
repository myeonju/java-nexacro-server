package com.example.demo.orders;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

@Repository
public class OrdersDaoImpl implements OrdersDao {
	 @PersistenceContext
	    private EntityManager entityManager;

	    @Override
	    public Integer callInsertOrderProcedure(Integer customerId) {
	        StoredProcedureQuery query = entityManager.createStoredProcedureQuery("insert_order");
	        query.registerStoredProcedureParameter("p_customer_id", Integer.class, javax.persistence.ParameterMode.IN);
	        query.registerStoredProcedureParameter("p_order_id", Integer.class, javax.persistence.ParameterMode.OUT);

	        query.setParameter("p_customer_id", customerId);

	        query.execute();

	        return (Integer) query.getOutputParameterValue("p_order_id");
	    }

		@Override
		public List<Orders> findAll() {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public List<Orders> findAll(Sort sort) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public List<Orders> findAllById(Iterable<Integer> ids) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public <S extends Orders> List<S> saveAll(Iterable<S> entities) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public void flush() {
			// TODO Auto-generated method stub
			
		}

		@Override
		public <S extends Orders> S saveAndFlush(S entity) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public void deleteInBatch(Iterable<Orders> entities) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void deleteAllInBatch() {
			// TODO Auto-generated method stub
			
		}

		@Override
		public Orders getOne(Integer id) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public <S extends Orders> List<S> findAll(Example<S> example) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public <S extends Orders> List<S> findAll(Example<S> example, Sort sort) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public Page<Orders> findAll(Pageable pageable) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public <S extends Orders> S save(S entity) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public Optional<Orders> findById(Integer id) {
			// TODO Auto-generated method stub
			return Optional.empty();
		}

		@Override
		public boolean existsById(Integer id) {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public long count() {
			// TODO Auto-generated method stub
			return 0;
		}

		@Override
		public void deleteById(Integer id) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void delete(Orders entity) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void deleteAll(Iterable<? extends Orders> entities) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void deleteAll() {
			// TODO Auto-generated method stub
			
		}

		@Override
		public <S extends Orders> Optional<S> findOne(Example<S> example) {
			// TODO Auto-generated method stub
			return Optional.empty();
		}

		@Override
		public <S extends Orders> Page<S> findAll(Example<S> example, Pageable pageable) {
			// TODO Auto-generated method stub
			return null;
		}

		@Override
		public <S extends Orders> long count(Example<S> example) {
			// TODO Auto-generated method stub
			return 0;
		}

		@Override
		public <S extends Orders> boolean exists(Example<S> example) {
			// TODO Auto-generated method stub
			return false;
		}
	    
	  
	}
