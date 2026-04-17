package com.example.medicine.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.medicine.entity.Medicine;
import com.example.medicine.service.MedicineService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin(origins = "http://localhost:3000")   // ✅ FIXED PORT
public class MedicineController {

    private final MedicineService service;

    public MedicineController(MedicineService service) {
        this.service = service;
    }

    // ✅ Add Medicine
    @PostMapping
    public Medicine addMedicine(@Valid @RequestBody Medicine medicine) {
        return service.saveMedicine(medicine);
    }

    // ✅ Get All Medicines
    @GetMapping
    public List<Medicine> getAllMedicines() {
        return service.getAllMedicines();
    }

    // ✅ Update Medicine
    @PutMapping("/{id}")
    public Medicine updateMedicine(@PathVariable Long id,
                                   @Valid @RequestBody Medicine medicine) {
        return service.updateMedicine(id, medicine);
    }

    // ✅ Delete Medicine
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMedicine(@PathVariable Long id) {
        service.deleteMedicine(id);
        return ResponseEntity.ok("Medicine deleted successfully");
    }
}
