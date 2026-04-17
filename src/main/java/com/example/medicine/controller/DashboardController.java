package com.example.medicine.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.medicine.service.DashboardService;

@RestController
public class DashboardController {

    private final DashboardService service;

    public DashboardController(DashboardService service) {
        this.service = service;
    }

    @GetMapping("/api/dashboard")
    public Map<String, Object> getDashboard() {

        Map<String, Object> dashboard = new HashMap<>();

        dashboard.put("totalMedicines", service.getTotalMedicines());
        dashboard.put("lowStockCount", service.getLowStockCount());
        dashboard.put("totalStockQuantity", service.getTotalStockQuantity());
        dashboard.put("lowStockMedicines", service.getLowStockMedicines());

        return dashboard;
    }
}
