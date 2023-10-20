<script>
    const supplierDropdown = document.getElementById('supplier');
    const purchaseOrderDropdown = document.getElementById('purchase_order');

    // Replace with actual supplier data from your CSV file
    const suppliers = ["Supplier A", "Supplier B", "Supplier C"];

    // Replace with actual purchase order data from your CSV file
    const purchaseOrders = {
        "Supplier A": ["PO1 - Description 1", "PO2 - Description 2"],
        "Supplier B": ["PO3 - Description 3", "PO4 - Description 4"],
        "Supplier C": ["PO5 - Description 5", "PO6 - Description 6"],
    };

    // Populate the supplier dropdown
    suppliers.forEach(supplier => {
        const option = document.createElement('option');
        option.value = supplier;
        option.textContent = supplier;
        supplierDropdown.appendChild(option);
    });

    // Update the purchase order dropdown when a supplier is selected
    supplierDropdown.addEventListener('change', () => {
        const selectedSupplier = supplierDropdown.value;
        purchaseOrderDropdown.innerHTML = ''; // Clear existing options

        purchaseOrders[selectedSupplier].forEach(po => {
            const option = document.createElement('option');
            option.value = po.split(' - ')[0]; // Extract PO number
            option.textContent = po;
            purchaseOrderDropdown.appendChild(option);
        });
    });
</script>
