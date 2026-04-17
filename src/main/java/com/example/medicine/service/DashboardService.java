package com.example.medicine.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.medicine.entity.Medicine;
import com.example.medicine.repository.MedicineRepository;

@Service
public class DashboardService {

    private final MedicineRepository repository;

    public DashboardService(MedicineRepository repository) {
        this.repository = repository;
    }

    // Total medicines count
    public long getTotalMedicines() {
        return repository.count();
    }

    // Count medicines where quantity <= minimumStock
    public long getLowStockCount() {
        return repository.countLowStockMedicines();
    }

    // Sum of all quantities
    public long getTotalStockQuantity() {
        Long total = repository.getTotalStockQuantity();
        return total != null ? total : 0;
    }

    // List of low stock medicines
    public List<Medicine> getLowStockMedicines() {
        return repository.findAll()
                .stream()
                .filter(m -> m.getQuantity() <= m.getMinimumStock())
                .collect(Collectors.toList());
    }
}
