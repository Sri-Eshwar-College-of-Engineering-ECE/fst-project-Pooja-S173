package com.example.medicine.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.medicine.entity.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {

    @Query("SELECT COUNT(m) FROM Medicine m WHERE m.quantity <= m.minimumStock")
    long countLowStockMedicines();

    @Query("SELECT SUM(m.quantity) FROM Medicine m")
    Long getTotalStockQuantity();
    
        List<Medicine> findByNameContainingIgnoreCase(String name);

}
