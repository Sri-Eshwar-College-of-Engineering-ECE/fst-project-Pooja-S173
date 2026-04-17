package com.example.medicine.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.medicine.entity.Medicine;
import com.example.medicine.repository.MedicineRepository;

@Service
public class MedicineService {

    private final MedicineRepository repository;

    public MedicineService(MedicineRepository repository) {
        this.repository = repository;
    }

    // ✅ Save Medicine
    public Medicine saveMedicine(Medicine medicine) {
        return repository.save(medicine);
    }

    // ✅ Get All Medicines
    public List<Medicine> getAllMedicines() {
        return repository.findAll();
    }

    // ✅ Search Medicine by Name
    public List<Medicine> searchByName(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }

    // ✅ Update Medicine
    public Medicine updateMedicine(Long id, Medicine updatedMedicine) {

        Medicine medicine = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Medicine not found with id: " + id));

        medicine.setName(updatedMedicine.getName());
        medicine.setDosage(updatedMedicine.getDosage());
        medicine.setQuantity(updatedMedicine.getQuantity());
        medicine.setMinimumStock(updatedMedicine.getMinimumStock());

        return repository.save(medicine);
    }

    // ✅ Delete Medicine
    public void deleteMedicine(Long id) {
    if (!repository.existsById(id)) {
        throw new RuntimeException("Medicine not found with id: " + id);
    }
    repository.deleteById(id);
}

}
